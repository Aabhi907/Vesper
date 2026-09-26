"use client"
import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollProgress } from "@/components/interactive-utils"

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
            ? "h-[44px] bg-[hsl(0_0%_90%/0.85)] backdrop-blur-md border-b border-[hsl(0_0%_80%)] shadow-sm"
            : "h-[44px] bg-[hsl(0_0%_90%/0.75)] backdrop-blur-md border-b border-[hsl(0_0%_80%)]"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4">
          {/* Left: brand + nav */}
          <nav className="flex items-center gap-5">
            <Link href="/" className="text-[13px] font-bold text-ink tracking-tight hover:opacity-80 transition-opacity">
              vesper
            </Link>
            {[
              { label: "demo", href: "/#demo" },
              { label: "features", href: "/#features" },
              { label: "pricing", href: "/#pricing" },
              { label: "product", href: "/product" },
              { label: "trust", href: "/trust" },
            ].map((item) => (
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
          <div className="flex items-center gap-4">
            {/* Battery */}
            <svg className="hidden md:block" width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden>
              <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" stroke="hsl(0,0%,55%)" strokeWidth="1"/>
              <rect x="2" y="2" width="11" height="8" rx="1.5" fill="hsl(0,0%,55%)"/>
              <path d="M20 4v4" stroke="hsl(0,0%,55%)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            {/* Time */}
            <span className="hidden md:block text-[13px] text-ink/70 font-medium tabular-nums">{time}</span>
            {/* CTA */}
            <Link
              href="/#demo"
              className="flex items-center gap-2 bg-ink text-canvas text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-ink/80 transition-colors"
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
            {[
              { label: "Interactive Demo", href: "/#demo" },
              { label: "Core Features", href: "/#features" },
              { label: "Integrations Beam", href: "/#integrations" },
              { label: "Pricing & Plans", href: "/#pricing" },
              { label: "Architecture", href: "/product" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Company</h4>
            {[
              { label: "Team & Founders", href: "/team" },
              { label: "Industry Solutions", href: "/clinics" },
              { label: "Trust & Safety", href: "/trust" },
              { label: "Frequently Asked Questions", href: "/#faq" },
              { label: "Changelog", href: "/changelog" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-1">Legal &amp; Privacy</h4>
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Service", href: "/terms" },
              { label: "Cookie Policy", href: "/privacy" },
            ].map((l) => (
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
