import type { NavLink } from "../types"

export const HEADER_NAV_LINKS: NavLink[] = [
  { label: "demo", href: "/#demo" },
  { label: "features", href: "/#features" },
  { label: "pricing", href: "/#pricing" },
  { label: "product", href: "/product" },
  { label: "trust", href: "/trust" },
]

export const FOOTER_PRODUCT_LINKS: NavLink[] = [
  { label: "Interactive Demo", href: "/#demo" },
  { label: "Core Features", href: "/#features" },
  { label: "Integrations Beam", href: "/#integrations" },
  { label: "Pricing & Plans", href: "/#pricing" },
  { label: "Architecture", href: "/product" },
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
