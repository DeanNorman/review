export const SITE_CONFIG = {
  name: "ZamaTrack",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zamatrack.com",
  description: "Advanced tracking and monitoring solutions for modern businesses. Real-time GPS tracking, asset management, visitor control, and comprehensive reporting for security and operations teams.",
  company: "ZamaTrack (Pty) Ltd",
} as const;

export const ROUTES = {
  home: "/",
  solutions: "/solutions",
  requestDemo: "/request-demo",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: ROUTES.home },
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Request Demo", href: ROUTES.requestDemo },
];
