"use client"
import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollProgress, BookDemoModal } from "@/components/interactive-utils"

/* ── Navbar ── */
export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [time, setTime] = React.useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [demoModalOpen, setDemoModalOpen] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 28))

  React.useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }))
    tick()
    const id = setInterval(tick, 10_000)
    return () => clearInterval(id)
  }, [])

  const navLinks = [
    { label: "Demo", href: "/#demo" },
    { label: "Features", href: "/#features" },
    { label: "Integrations", href: "/#integrations" },
    { label: "Team", href: "/team" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ]

  return (
    <>
      <ScrollProgress />
      <BookDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-ui",
          isScrolled
            ? "h-[50px] bg-[hsl(40_25%_95%/0.88)] backdrop-blur-md border-b border-line shadow-xs"
            : "h-[50px] bg-[hsl(40_25%_95%/0.75)] backdrop-blur-md border-b border-line/60"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-4 sm:px-6">
          {/* Left: brand + nav */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-[15px] font-black text-ink tracking-tight hover:opacity-80 transition-opacity flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded-md bg-ink text-white flex items-center justify-center text-[11px] font-extrabold">
                V
              </span>
              <span>vesper</span>
            </Link>

            <div className="hidden md:flex items-center gap-5">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-medium text-muted hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right: status + CTA */}
          <div className="flex items-center gap-3.5">
            {/* Battery & Time Indicator */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/5 text-muted text-[11.5px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Kathmandu</span>
              <span className="tabular-nums font-semibold text-ink">{time}</span>
            </div>

            {/* CTA Book Demo */}
            <button
              type="button"
              onClick={() => setDemoModalOpen(true)}
              className="flex items-center gap-1.5 bg-ink text-white text-[13px] font-semibold px-4 py-1.5 rounded-full hover:bg-ink/85 transition-all shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Book a Demo</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="md:hidden w-8 h-8 rounded-full bg-soft-canvas flex items-center justify-center text-ink border border-line"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-canvas border-b border-line px-6 py-6 shadow-frame flex flex-col gap-4"
            >
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[15px] font-semibold text-ink hover:text-signal-blue py-1.5 border-b border-line/40 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted/60" />
                </Link>
              ))}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDemoModalOpen(true)
                  }}
                  className="w-full py-3 rounded-xl bg-ink text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Book a 1-on-1 walkthrough</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
