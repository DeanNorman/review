# Tech Stack Template for Company Websites

Use this prompt when creating new company websites to maintain consistency across all projects.

---

## Project Setup Prompt

```
I need to create a new website with the following tech stack and architecture. Please follow these specifications exactly to maintain consistency with my other company sites.

## Core Technologies

### Framework & Runtime
- **Next.js 16.1.1+** (App Router with Server-Side Rendering)
- **React 19.2.3+**
- **TypeScript 5.9.3+** (strict mode enabled)
- **Node.js** with ES Modules (`"type": "module"` in package.json)

### Styling & UI
- **Tailwind CSS 3.4.19+** with custom configuration
- **Tailwind CSS Animate** plugin for animations
- **CSS Variables** for theming (HSL color system)
- **Lucide React** for icons
- **Class Variance Authority (CVA)** for component variants
- **clsx + tailwind-merge** for className utilities

### UI Components
- **Radix UI** primitives:
  - @radix-ui/react-label
  - @radix-ui/react-toast
- **Embla Carousel React** for carousels
- Custom components in shadcn/ui style

### Validation & Type Safety
- **Zod 4.2.1+** for runtime validation (especially API routes)
- Strict TypeScript configuration
- Shared types in `src/types/index.ts` 

## Project Structure

```
project-root/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── error.tsx          # Error boundary
│   │   ├── loading.tsx        # Loading state
│   │   └── api/               # API routes
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer, PageLayout)
│   │   └── ui/                # Reusable UI components (shadcn style)
│   ├── lib/
│   │   ├── constants.ts       # Site config, routes, nav items
│   │   ├── seo.ts             # SEO metadata helper
│   │   └── utils.ts           # Utility functions (cn, etc.)
│   ├── types/
│   │   └── index.ts           # Shared TypeScript interfaces
│   └── styles/
│       └── globals.css        # Global styles with CSS variables
├── public/
│   ├── robots.txt             # SEO: sitemap reference, crawl-delay
│   └── og-image.jpg           # 1200x630px Open Graph image
├── .vscode/
│   └── settings.json          # VSCode config
├── .prettierrc                # Code formatting rules
├── .prettierignore            # Exclude build artifacts
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Configuration Files

### package.json
```json
{
  "type": "module",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-toast": "^1.2.15",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.6.0",
    "lucide-react": "^0.562.0",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^4.2.1"
  },
  "devDependencies": {
    "@types/node": "^25.0.3",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "autoprefixer": "^10.4.23",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "typescript": "^5.9.3"
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./"],
      "@/components/*": ["src/components/*", "components/*"],
      "@/lib/*": ["src/lib/*", "lib/*"],
      "@/styles/*": ["src/styles/*", "styles/*"],
      "@/data/*": ["src/data/*", "data/*"],
      "@/hooks/*": ["src/hooks/*", "hooks/*"],
      "@/types/*": ["src/types/*", "types/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### .prettierrc
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### .vscode/settings.json
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "files.exclude": {
    "**/.next": true,
    "**/node_modules": true
  },
  "search.exclude": {
    "**/.next": true,
    "**/node_modules": true,
    "**/package-lock.json": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "css.lint.unknownAtRules": "ignore"
}
```

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius)",
        DEFAULT: "var(--radius)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

## Required Core Files

### src/lib/constants.ts
```typescript
export const SITE_CONFIG = {
  name: "Company Name",
  url: "https://example.com",
  description: "Company description",
  company: "Company (Pty) Ltd",
} as const;

export const ROUTES = {
  home: "/",
  // Add other routes
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: ROUTES.home },
  // Add other nav items
];
```

### src/lib/seo.ts
```typescript
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export function pageMetadata({
  title,
  description,
  path = "",
  image = "/og-image.jpg",
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_ZA", // Adjust for region
      type: "website",
      images: [
        {
          url: `${SITE_CONFIG.url}${image}`,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_CONFIG.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_CONFIG.url}${image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
```

### src/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### src/app/layout.tsx (Template)
```typescript
import type { Metadata } from "next";
import "@/styles/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    // Add relevant keywords
  ],
  authors: [{ name: SITE_CONFIG.company }],
  creator: SITE_CONFIG.company,
  publisher: SITE_CONFIG.company,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA", // Adjust for region
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

### src/app/error.tsx
```typescript
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
        <p className="mb-6 text-muted-foreground">
          We apologize for the inconvenience. Please try again.
        </p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
```

### src/app/loading.tsx
```typescript
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}
```

### src/components/layout/PageLayout.tsx
```typescript
import { ReactNode } from "react";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
}
```

### public/robots.txt
```
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml

Crawl-delay: 1
```

## SEO Requirements

### Structured Data (JSON-LD)
Implement these schemas as appropriate:

1. **Organization Schema** (in layout.tsx)
   - Company identity, legal info
   - Contact details, founding date
   - Service areas
   - Social media profiles

2. **LocalBusiness Schema** (for local businesses)
   - Geographic coordinates
   - Service areas
   - Business hours
   - Contact information

3. **Service/Product Schemas** (on relevant pages)
   - Service catalog
   - Pricing (if applicable)
   - Provider linkage

### Metadata Checklist
- ✅ Canonical URLs on all pages
- ✅ Open Graph metadata (1200x630px images)
- ✅ Twitter Cards
- ✅ Proper locale setting
- ✅ Keywords array
- ✅ Author/creator/publisher info
- ✅ Format detection (phone/email/address)
- ✅ Robot directives
- ✅ Sitemap reference in robots.txt

## Development Workflow

### Code Style
- Format on save enabled
- ESLint auto-fix on save
- Prettier with Tailwind plugin
- 100 character line width
- 2 space indentation
- Semicolons required
- Double quotes for strings

### Component Patterns
- Server Components by default
- Client Components only when needed (`"use client"`)
- Shared types in `src/types/index.ts` 
- Reusable layout components
- shadcn/ui style components in `src/components/ui/` 

### API Routes
- Use Zod for validation
- Proper error handling
- Type-safe responses
- Return appropriate HTTP status codes

### Error Handling
- Error boundaries (`error.tsx`)
- Loading states (`loading.tsx`)
- User-friendly error messages
- Console logging for debugging

## Design System

### Colors
- Use HSL CSS variables
- Primary/secondary/accent colors
- Muted/destructive variants
- Consistent foreground colors
- Dark mode support via `darkMode: ["class"]` 

### Typography
- Heading font: Oswald (or customize)
- Body font: Inter (or customize)
- Consistent font scales

### Animations
- Tailwind CSS Animate plugin
- Custom keyframes: fade-in, slide-in-left, accordion
- Smooth transitions

### Spacing & Layout
- Container with max-width 1400px
- Consistent padding (2rem)
- Responsive breakpoints

## Important Notes

1. **Always use Server-Side Rendering** - This is a Next.js App Router SSR project
2. **Type safety is critical** - Use TypeScript strict mode, Zod for runtime validation
3. **SEO is a priority** - Implement all metadata, structured data, and canonical URLs
4. **Consistent styling** - Use Tailwind with the provided configuration
5. **Reusable components** - Follow shadcn/ui patterns
6. **Error handling** - Implement error boundaries and loading states
7. **Developer experience** - Use Prettier, ESLint, and VSCode settings provided

## Getting Started

1. Create Next.js project with TypeScript
2. Install all dependencies from package.json
3. Copy all configuration files exactly
4. Set up project structure as shown
5. Create core files (constants, seo, utils)
6. Implement layout with metadata
7. Add error and loading states
8. Build pages using pageMetadata helper
9. Add structured data schemas
10. Create og-image.jpg (1200x630px)
11. Test SEO with Google Rich Results Test

Please follow this stack exactly to maintain consistency across all company websites.
```

---

## Usage Instructions

When starting a new project, provide this entire prompt to your AI assistant along with:
1. Company name and URL
2. Business description
3. Target locale/region
4. Any specific color scheme preferences
5. List of pages needed

The AI will set up the project following the exact same patterns and technologies.
