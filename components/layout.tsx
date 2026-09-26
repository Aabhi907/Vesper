"use client"
import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollProgress } from "@/components/interactive-utils"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  HEADER_NAV_LINKS,
  FOOTER_PRODUCT_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/models"

/* ── Navbar ── */
export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [time, setTime]             = React.useState("")

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 32))

  React.useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }))
    tick()
    const id = setInterval(tick, 10_000)
    return () => clearInterval(id)
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
              vesper
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

          {/* Right: status + CTA */}
          <div className="flex items-center gap-3 sm:gap-3.5">
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
    </>
  )
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer className="w-full bg-[#111116] text-white py-16 px-6 mt-auto border-t border-white/10">
      <div className="mx-auto max-w-[1240px] flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-6 rounded-md bg-white text-ink flex items-center justify-center text-[12px] font-black">
              V
            </span>
            <p className="text-[18px] font-extrabold tracking-tight text-white">vesper</p>
          </div>

          <p className="text-[13.5px] text-white/60 leading-relaxed font-normal">
            The 24/7 AI front desk for service and reservation businesses. Instant calendar availability checks across WhatsApp, Instagram, Messenger, and web.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11.5px] text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational · 99.9% uptime</span>
          </div>
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
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
        <p>© 2026 Vesper Technologies Inc. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Meta Cloud API &amp; Google Calendar Verified Partner</span>
        </p>
      </div>
    </footer>
  )
}
