import type { NavLink } from "../types"

// the dashboard (separate app); set NEXT_PUBLIC_APP_URL in production
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:5173"
// unset = the "talk to us" button is hidden
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL
// dashboard isn't live yet: send "login" to a meeting instead of a dead subdomain.
// revert to `${APP_URL}/login` once app.vesper.codes is up
const LOGIN_HREF = CALENDLY_URL || "/#demo"

export const HEADER_NAV_LINKS: NavLink[] = [
  { label: "demo", href: "/#demo" },
  { label: "features", href: "/#features" },
  { label: "pricing", href: "/#pricing" },
  { label: "product", href: "/product" },
  { label: "trust", href: "/trust" },
  { label: "early access", href: LOGIN_HREF },
]

export const FOOTER_PRODUCT_LINKS: NavLink[] = [
  { label: "Interactive Demo", href: "/#demo" },
  { label: "Core Features", href: "/#features" },
  { label: "Integrations Beam", href: "/#integrations" },
  { label: "Pricing & Plans", href: "/#pricing" },
  { label: "Architecture", href: "/product" },
  { label: "Early Access", href: LOGIN_HREF },
]

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: "Team & Founders", href: "/team" },
  { label: "Industry Solutions", href: "/clinics" },
  { label: "Trust & Safety", href: "/trust" },
  { label: "Frequently Asked Questions", href: "/#faq" },
  { label: "Changelog", href: "/changelog" },
]

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/privacy" },
]
