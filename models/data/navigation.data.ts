import type { NavLink } from "../types"

// the dashboard (separate app); set NEXT_PUBLIC_APP_URL in production
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173"
// unset = the "talk to us" button is hidden
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL

export const HEADER_NAV_LINKS: NavLink[] = [
  { label: "demo", href: "/#demo" },
  { label: "features", href: "/#features" },
  { label: "pricing", href: "/#pricing" },
  { label: "product", href: "/product" },
  { label: "trust", href: "/trust" },
  { label: "login", href: `${APP_URL}/login` },
]

export const FOOTER_PRODUCT_LINKS: NavLink[] = [
  { label: "Interactive Demo", href: "/#demo" },
  { label: "Core Features", href: "/#features" },
  { label: "Integrations Beam", href: "/#integrations" },
  { label: "Pricing & Plans", href: "/#pricing" },
  { label: "Architecture", href: "/product" },
  { label: "Login", href: `${APP_URL}/login` },
]

export const FOOTER_SOLUTIONS_LINKS: NavLink[] = [
  { label: "WhatsApp Auto Reply", href: "/whatsapp-auto-reply" },
  { label: "Instagram DM Auto Reply", href: "/instagram-auto-reply" },
  { label: "Messenger Chatbot", href: "/messenger-auto-reply" },
  { label: "Nepali Chatbot", href: "/nepali-chatbot" },
  { label: "AI Receptionist Nepal", href: "/ai-receptionist-nepal" },
  { label: "Salons", href: "/use-cases/salons" },
  { label: "Clinics", href: "/use-cases/clinics" },
  { label: "Hotels & Homestays", href: "/use-cases/hotels" },
  { label: "Consultancies", href: "/use-cases/consultancies" },
  { label: "Trekking Agencies", href: "/use-cases/trekking" },
  { label: "Restaurants", href: "/use-cases/restaurants" },
  { label: "Gyms", href: "/use-cases/gyms" },
]

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: "What is Bolnivo?", href: "/what-is-vesper" },
  { label: "Team & Founders", href: "/team" },
  { label: "Trust & Safety", href: "/trust" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Changelog", href: "/changelog" },
]

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
]
