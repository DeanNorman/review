export const SITE_CONFIG = {
  name: "ZamaTrack",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://zamatrack.co.za",
  description: "Solutions-driven technology provider specializing in innovative communication and workflow management tools. Worxit platform gives you complete control over your workflow processes.",
  company: "ZamaTrack (Pty) Ltd",
  tagline: "Solutions Your Way",
  phone: "+27 (0)861 987 987",
  email: "sales@zamatrack.co.za",
} as const;

export const OFFICE_LOCATIONS = [
  {
    city: "Durban",
    phone: "+27 (0)861 987 987",
    email: "sales@zamatrack.co.za",
    address: "16 Almil Centre, 47 Ashley Avenue, Glenashley, 4051 Durban North",
  },
  {
    city: "Johannesburg",
    phone: "+27 (0)861 987 987",
    email: "sales@zamatrack.co.za",
    address: "The Work Space, 1 Maxwell Dr, Sandton, Midrand, 2191",
  },
  {
    city: "Cape Town",
    phone: "+27 (0)861 987 987",
    email: "sales@zamatrack.co.za",
    address: "The Work Space, 1 Maxwell Dr, Sandton, Midrand, 2191",
  },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/Zamatrackofficial",
  twitter: "https://twitter.com/zamatrack1",
  linkedin: "https://www.linkedin.com/company/zamatrack-pty-ltd/?originalSubdomain=za",
  instagram: "https://www.instagram.com/zamatrack/?hl=en",
} as const;

export const ROUTES = {
  home: "/",
  solutions: "/solutions",
  contact: "/contact",
  caseStudy: "/case-study",
  support: "/support",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: ROUTES.home },
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Contact Us", href: ROUTES.contact },
];
