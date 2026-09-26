"use client"
import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

/* ── macOS traffic-light dots ── */
function WinDots() {
  return (
    <span className="flex items-center gap-[6px]">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 flex-shrink-0" />
      <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 flex-shrink-0" />
      <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 flex-shrink-0" />
    </span>
  )
}

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
  )
}

/* ── Footer ── */
export function Footer() {
  return (
    <footer className="w-full bg-night-glow text-white py-16 px-6 mt-auto">
      <div className="mx-auto max-w-[1240px] flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <p className="text-[18px] font-bold tracking-tight text-white mb-3">vesper <span className="text-blue-soft">ai</span></p>
          <p className="text-[13px] text-white/50 leading-relaxed">
            The AI front desk for appointment and reservation businesses. Understands intent. Checks truth. Takes action.
          </p>
          <div className="flex gap-3 mt-5">
            {["twitter", "instagram", "linkedin"].map((s) => (
              <a key={s} href="#" className="text-[12px] text-white/40 hover:text-white/70 transition-colors capitalize">{s}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/30 mb-1">Product</h4>
            {[
              { label: "Live Demo", href: "/#demo" },
              { label: "Features", href: "/#features" },
              { label: "Pricing", href: "/#pricing" },
              { label: "Architecture", href: "/product" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-white/30 mb-1">Company</h4>
            {[
              { label: "About", href: "/team" },
              { label: "Solutions", href: "/clinics" },
              { label: "Team", href: "/team" },
              { label: "Trust & Safety", href: "/trust" },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="text-[13px] text-white/60 hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] mt-12 pt-8 border-t border-white/10">
        <p className="text-[12px] text-white/30">© 2026 Vesper · made with ♥ for modern service businesses</p>
      </div>
    </footer>
  )
}
