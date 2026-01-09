# ZamaTrack

Solutions-driven technology provider specializing in innovative communication and workflow management tools.

## Tech Stack

- **Next.js 16** with App Router (SSR)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI** primitives
- **Lucide** icons

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # React components
│   └── ui/        # Reusable UI components
├── lib/           # Utilities and constants
└── hooks/         # Custom React hooks
```

## Deployment

Configured for Netlify deployment. See `netlify.toml` for build settings.

```bash
# Build command
npm run build

# Publish directory
.next
```

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```
NEXT_PUBLIC_SITE_URL=https://zamatrack.co.za
```
