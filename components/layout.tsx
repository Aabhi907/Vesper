"use client"
import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ShieldCheck, Search, Linkedin, Instagram, Github, Facebook } from "lucide-react"
import { cn } from "@/lib/utils"
import { SOCIAL_LINKS } from "@/lib/site"
import { ScrollProgress } from "@/components/interactive-utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { CommandMenu } from "@/components/command-menu"
import { SecurityModal } from "@/components/security-modal"

import {
  HEADER_NAV_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_SOLUTIONS_LINKS,
  FOOTER_LEGAL_LINKS,
  CALENDLY_URL,
} from "@/models"

declare global {
  interface Window { Calendly?: { initPopupWidget(opts: { url: string }): void } }
}

// Calendly's own popup widget; script + css load on first click only
function openCalendly() {
  if (window.Calendly) return window.Calendly.initPopupWidget({ url: CALENDLY_URL! })
  const css = document.createElement("link")
  css.rel = "stylesheet"
  css.href = "https://assets.calendly.com/assets/external/widget.css"
  document.head.appendChild(css)
  const js = document.createElement("script")
  js.src = "https://assets.calendly.com/assets/external/widget.js"
  js.onload = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL! })
  js.onerror = () => window.open(CALENDLY_URL, "_blank", "noopener")
  document.head.appendChild(js)
}

/* ── Navbar ── */
export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [time, setTime]             = React.useState("")
  const [isCommandOpen, setIsCommandOpen]   = React.useState(false)
  const [isSecurityOpen, setIsSecurityOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 32))

  React.useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }))
    tick()
    const id = setInterval(tick, 10_000)
    return () => clearInterval(id)
  }, [])

  // Global ⌘K shortcut
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsCommandOpen((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-ui",
          isScrolled
            ? "h-[44px] bg-[hsl(0_0%_90%/0.85)] dark:bg-[hsl(224_25%_7%/0.85)] backdrop-blur-md border-b border-[hsl(0_0%_80%)] dark:border-line shadow-sm"
            : "h-[44px] bg-[hsl(0_0%_90%/0.75)] dark:bg-[hsl(224_25%_7%/0.75)] backdrop-blur-md border-b border-[hsl(0_0%_80%)] dark:border-line"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          {/* Left: brand + nav */}
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[13px] font-bold text-ink tracking-tight hover:opacity-80 transition-opacity">
              Bolnivo
            </Link>
            {HEADER_NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] text-ink/70 hover:text-ink transition-colors hidden md:block"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: status + ⌘K + CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* ⌘K Trigger Button (P2) */}
            <button
              onClick={() => setIsCommandOpen(true)}
              className="flex items-center justify-between gap-3 h-8 px-3.5 sm:px-4 min-w-[88px] sm:min-w-[104px] rounded-full text-[12px] font-medium text-muted hover:text-ink bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15 transition-all border border-black/5 dark:border-white/10 cursor-pointer shadow-2xs active:scale-[0.98]"
              title="Open Command Palette (⌘K)"
            >
              <Search className="w-3.5 h-3.5 text-muted/80 flex-shrink-0" />
              <span className="text-[12px] font-mono font-medium tracking-tight text-ink/90">⌘K</span>
            </button>

            {/* Dark Mode Toggle */}
            <ThemeToggle />

            {/* Battery */}
            <svg className="hidden md:block" width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="currentColor" className="text-muted" strokeWidth="1"/>
              <rect x="2" y="2" width="11" height="8" rx="1.5" fill="currentColor" className="text-muted"/>
              <path d="M20 4v4" stroke="currentColor" className="text-muted" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {/* Time */}
            <span className="hidden md:block text-[13px] text-ink/70 font-medium tabular-nums">{time}</span>
            {CALENDLY_URL && (
              <button
                onClick={openCalendly}
                className="hidden sm:flex items-center text-[13px] font-semibold text-ink px-4 py-1.5 rounded-full border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                talk to us
              </button>
            )}
            {/* CTA */}
            <Link
              href="/#demo"
              className="flex items-center gap-2 bg-ink text-canvas text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-ink/80 transition-colors shadow-xs"
            >
              <span className="text-[11px]">🌙</span>
              <span>book a demo</span>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Global Command Menu */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onOpenSecurity={() => setIsSecurityOpen(true)}
        onSelectScenario={(id) => {
          const el = document.getElementById("simulator") || document.getElementById("demo")
          el?.scrollIntoView({ behavior: "smooth" })
        }}
      />

      {/* Security Drawer */}
      <SecurityModal
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
      />
    </>
  )
}

/* ── Footer ── */
export function Footer() {
  const [isSecurityOpen, setIsSecurityOpen] = React.useState(false)

  return (
    <>
      <footer className="w-full bg-[#111116] text-white py-16 px-6 mt-auto border-t border-white/10">
        <div className="mx-auto max-w-[1240px] flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-md bg-white text-ink flex items-center justify-center text-[12px] font-black">
                B
              </span>
              <p className="text-[18px] font-extrabold tracking-tight text-white">Bolnivo</p>
            </div>

            <p className="text-[13.5px] text-white/60 leading-relaxed font-normal">
              AI assistants for websites and customer channels. Answer questions, support customer workflows, and connect conversations across WhatsApp, Instagram, Messenger, and web.
            </p>

            {/* Clickable Status Pill (P5) */}
            <button
              onClick={() => setIsSecurityOpen(true)}
              className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 text-[11.5px] text-white/80 transition-all cursor-pointer group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Security &amp; data handling</span>
              <span className="text-[10px] text-white/40 group-hover:text-emerald-300 font-mono transition-colors">↗</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div className="flex flex-col gap-2.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Product</h4>
              {FOOTER_PRODUCT_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Solutions</h4>
              {FOOTER_SOLUTIONS_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Company</h4>
              {FOOTER_COMPANY_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Legal &amp; Privacy</h4>
              {FOOTER_LEGAL_LINKS.map((l) => (
                <Link key={l.label} href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => setIsSecurityOpen(true)}
                className="text-[13px] text-left text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                Security Specs
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1240px] mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
          <p>© 2026 Bolnivo. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[
              { href: SOCIAL_LINKS.linkedin, label: "Bolnivo on LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
              { href: SOCIAL_LINKS.instagram, label: "Bolnivo on Instagram", icon: <Instagram className="w-4 h-4" /> },
              {
                href: SOCIAL_LINKS.x,
                label: "Bolnivo on X",
                icon: (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              { href: SOCIAL_LINKS.github, label: "Bolnivo on GitHub", icon: <Github className="w-4 h-4" /> },
              { href: SOCIAL_LINKS.facebook, label: "Bolnivo on Facebook", icon: <Facebook className="w-4 h-4" /> },
            ].map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="me noopener" aria-label={s.label} className="hover:text-white transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
          <button
            onClick={() => setIsSecurityOpen(true)}
            className="flex items-center gap-1.5 hover:text-white/80 transition-colors text-left cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Built on the official Meta Cloud API &amp; Google Calendar API · View Specs</span>
          </button>
        </div>
      </footer>

      {/* Security Modal from Footer trigger */}
      <SecurityModal
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
      />
    </>
  )
}
