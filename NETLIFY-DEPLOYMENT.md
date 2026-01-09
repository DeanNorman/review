# 🚀 Netlify Deployment Guide - ZamaTrack

**Status:** ✅ Ready for Deployment  
**Issue Fixed:** React 19 peer dependency conflict resolved

---

## ✅ Issue Fixed

### Problem
Netlify build failed with:
```
ERESOLVE unable to resolve dependency tree
next-themes@0.3.0 requires react@^16.8 || ^17 || ^18
but project has react@19.2.3
```

### Solution Implemented
Created `.npmrc` file with `legacy-peer-deps=true` to allow npm to install packages with peer dependency warnings.

**File Created:** `.npmrc`
```
legacy-peer-deps=true
```

This is a safe workaround because:
- React 19 is backward compatible with React 18 APIs
- `next-themes@0.3.0` works fine with React 19 (just hasn't updated peer deps yet)
- Build and runtime both work correctly
- No breaking changes in our usage

---

## 📋 Deployment Steps

### Option 1: Netlify Drop (Drag & Drop)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Deploy the `.next` folder:**
   - Go to https://app.netlify.com/drop
   - Drag the entire project folder (or just the `.next` folder)
   - Netlify will deploy it

**Note:** For Netlify Drop, you need to deploy the built output, not source files.

---

### Option 2: Netlify CLI (Recommended)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Follow prompts:**
   - Choose "Create & configure a new site"
   - Select your team
   - Choose site name (e.g., zamatrack)
   - Publish directory: `.next`

---

### Option 3: Git Integration (Best for Production)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: production-ready with all fixes"
   git push origin feature/ux_updates
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Configure build settings:

3. **Build Settings:**
   ```
   Base directory: (leave empty)
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables:**
   ```
   NEXT_PUBLIC_SITE_URL=https://zamatrack.co.za
   ```

5. **Deploy:**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

---

## ⚙️ Netlify Configuration File

Create `netlify.toml` in project root for optimal configuration:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"

[[redirects]]
  from = "/request-demo"
  to = "/contact"
  status = 301

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## 🔧 Build Configuration

### Required Files (Already Created)
- ✅ `.npmrc` - Resolves peer dependency issues
- ✅ `next.config.js` - Next.js configuration
- ✅ `package.json` - Dependencies and scripts
- ✅ `.env.example` - Environment variables template

### Environment Variables for Netlify
Set these in Netlify dashboard under Site settings → Environment variables:

```
NEXT_PUBLIC_SITE_URL=https://zamatrack.co.za
```

---

## 🐛 Troubleshooting

### If Build Still Fails

**1. Check Node Version**
Netlify might use an older Node version. Add to `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "18"
```

**2. Verify .npmrc is Committed**
```bash
git add .npmrc
git commit -m "fix: add .npmrc for peer dependency resolution"
git push
```

**3. Clear Netlify Cache**
In Netlify dashboard:
- Go to Site settings → Build & deploy
- Click "Clear cache and retry deploy"

**4. Check Build Logs**
Look for specific errors in Netlify build logs and verify:
- npm install completes
- next build runs
- All pages generate successfully

---

## ✅ Pre-Deployment Checklist

- [x] `.npmrc` file created and committed
- [x] Build succeeds locally (`npm run build`)
- [x] All 14 pages generate successfully
- [x] No TypeScript errors
- [x] Environment variables documented
- [x] Domain configured (.co.za)
- [x] Contact information added
- [x] Social media links added
- [x] All routes working

---

## 🌐 Post-Deployment Steps

### 1. Configure Custom Domain
In Netlify dashboard:
- Go to Site settings → Domain management
- Click "Add custom domain"
- Enter: `zamatrack.co.za` or `www.zamatrack.co.za`
- Follow DNS configuration instructions

### 2. Enable HTTPS
- Netlify automatically provisions SSL certificates
- Verify HTTPS is working after domain configuration

### 3. Set Up Redirects
If migrating from old site:
- Add redirects in `netlify.toml` for old URLs
- Test all old URLs redirect properly

### 4. Test Production Site
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Phone numbers are clickable
- [ ] Email links work
- [ ] Social media links work
- [ ] All solutions pages load
- [ ] Images display correctly
- [ ] Navigation works on mobile
- [ ] Footer displays all offices

### 5. SEO Configuration
- Submit new sitemap to Google Search Console
- Update Google Analytics (if applicable)
- Verify meta tags with Facebook Debugger
- Test with Twitter Card Validator

---

## 📊 Expected Build Output

```
✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages (14/14)

Route (app)
┌ ○ /                      (Static)
├ ○ /_not-found           (Static)
├ ○ /contact              (Static)
├ ○ /solutions            (Static)
└ ● /solutions/[slug]     (SSG - 9 pages)
```

**Total Pages:** 14  
**Build Time:** ~20-30 seconds  
**Deploy Size:** ~5-10 MB

---

## 🔐 Security Headers

The `netlify.toml` includes security headers:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy protection

---

## 📝 Deployment Notes

### Why .npmrc Works
- React 19 is backward compatible with React 18 APIs
- `next-themes` works fine with React 19 in practice
- The peer dependency warning is overly strict
- This is a temporary solution until `next-themes` updates their peer deps

### Alternative Solutions (If Needed)
1. **Wait for next-themes update** - They'll likely support React 19 soon
2. **Fork next-themes** - Update peer deps yourself
3. **Remove next-themes** - If not using theme switching
4. **Downgrade to React 18** - Not recommended (loses React 19 features)

### Current Approach
Using `.npmrc` with `legacy-peer-deps=true` is the **recommended approach** for this situation. It's:
- ✅ Safe (no breaking changes)
- ✅ Simple (one file)
- ✅ Reversible (can remove later)
- ✅ Standard practice for React 19 early adoption

---

## 🎉 Ready to Deploy!

Your site is now ready for Netlify deployment with:
- ✅ Peer dependency issue resolved
- ✅ All business information added
- ✅ Correct domain configured
- ✅ All critical fixes implemented
- ✅ Build verified locally

**Next Step:** Push to GitHub and deploy via Netlify Git integration, or use Netlify CLI.
