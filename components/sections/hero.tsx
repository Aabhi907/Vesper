"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { EmberGrainField } from "../ember-grain-field"
import { GoogleCalendarCard } from "../calendar-card"
import { WinChrome } from "@/components/shared"
import { TextThree } from "@/components/ui/text-three"

/* ══════════════════════════════════════════════════
   Interactive 3D Tilt Card for Hero Windows
══════════════════════════════════════════════════ */
export function HeroTiltCard({
  children,
  className = "",
  initialRotate = 0,
}: {
  children: React.ReactNode
  className?: string
  initialRotate?: number
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [hover, setHover] = React.useState(false)
  const [canTilt, setCanTilt] = React.useState(true)

  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)")
    setCanTilt(mq.matches)
    const handler = (e: MediaQueryListEvent) => setCanTilt(e.matches)
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateX = useSpring(useTransform(py, [-200, 200], [12, -12]), { damping: 25, stiffness: 140 })
  const rotateY = useSpring(useTransform(px, [-200, 200], [-12, 12]), { damping: 25, stiffness: 140 })
  const sheenX = useSpring(useTransform(px, [-200, 200], ["-120%", "220%"]), { damping: 20, stiffness: 100 })
  const glowX = useSpring(useTransform(px, [-200, 200], [-80, 80]), { damping: 20, stiffness: 100 })
  const glowY = useSpring(useTransform(py, [-200, 200], [-80, 80]), { damping: 20, stiffness: 100 })

  const track = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !canTilt) return
    const r = ref.current.getBoundingClientRect()
    px.set(e.clientX - (r.left + r.width / 2))
    py.set(e.clientY - (r.top + r.height / 2))
  }

  const leave = () => {
    setHover(false)
    px.set(0)
    py.set(0)
  }

  return (
    <div
      className={`relative ${className}`}
      style={canTilt ? { perspective: "1000px" } : undefined}
      onMouseMove={canTilt ? track : undefined}
      onMouseEnter={canTilt ? () => setHover(true) : undefined}
      onMouseLeave={canTilt ? leave : undefined}
    >
      <motion.div
        ref={ref}
        style={canTilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
        animate={{ y: hover ? -8 : 0, scale: hover ? 1.03 : 1, rotate: hover ? 0 : initialRotate }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="relative z-20 w-full h-full flex flex-col cursor-pointer"
      >
        {/* Cursor-tracking atmospheric glow */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{
              x: glowX,
              y: glowY,
              opacity: hover ? 0.4 : 0,
            }}
            className="pointer-events-none absolute -inset-20 z-0 rounded-full blur-[50px] bg-gradient-to-tr from-signal-blue/30 via-indigo-500/20 to-transparent transition-opacity duration-300"
          />
        )}

        {/* Specular glass sheen */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{ x: sheenX }}
            className="pointer-events-none absolute inset-0 size-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent z-30"
          />
        )}

        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

/* ══════════════════════════════════════════════════
   Hero Section (Initial Full-Viewport Screen)
══════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-hero-wash pt-14 pb-8 px-4 sm:px-6">
      {/* ── Dark mode Ember Grain Shader full backdrop ── */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block z-0" aria-hidden="true">
        <EmberGrainField
          background="#090703"
          glow={[152, 99, 0]}
          grain={0.28}
          className="h-full w-full"
        />
      </div>

      {/* ── Subtle architectural hairline dot grid (gives spatial depth & eliminates empty void) ── */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--ink)/0.07)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" aria-hidden="true" />

      {/* ── Floating decoration ── */}
      <div className="absolute right-[8%] top-[24%] text-[20px] float-2 select-none pointer-events-none hidden lg:block opacity-25">✦</div>
      <div className="absolute left-[8%] bottom-[20%] text-[18px] float-1 select-none pointer-events-none hidden lg:block opacity-25">✦</div>

      {/* ── Floating window: live chat (left) ── */}
      <div className="absolute left-[2%] 2xl:left-[6%] top-[22%] w-[220px] lg:w-[245px] hidden xl:block float-2 z-10">
        <HeroTiltCard initialRotate={-3}>
          <WinChrome title="whatsapp.mov">
            <div className="bg-[#ece5dd] dark:bg-[#0b141a] p-3.5 space-y-2.5">
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-[12px] text-black/80 dark:text-white px-3 py-2 rounded-xl rounded-tr-sm max-w-[85%] shadow-xs">Can I book tomorrow at 3pm?</div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#1f2c34] text-[12px] text-black/80 dark:text-white px-3 py-2 rounded-xl rounded-tl-sm max-w-[85%] shadow-xs">Yes! 3 PM is open. Booked ✓</div>
              </div>
            </div>
          </WinChrome>
        </HeroTiltCard>
      </div>

      {/* ── Floating window: Google Calendar (right) ── */}
      <div className="absolute right-[2%] 2xl:right-[5.5%] top-[19%] w-[245px] lg:w-[270px] hidden xl:block float-3 z-10">
        <HeroTiltCard initialRotate={4}>
          <div className="relative">
            <GoogleCalendarCard
              title="Dental Checkup"
              time="3:00 PM"
              statusText="Calendar updated"
            />
            {/* ── Sticky note: "your receptionist called, they quit 😂" ── */}
            <div className="absolute -bottom-8 -left-6 z-20 w-[175px] p-2.5 bg-[#fef08a] dark:bg-[#fde047] text-stone-900 rounded-xs shadow-[2px_6px_16px_rgba(0,0,0,0.18)] -rotate-6 border border-amber-300/80 select-none pointer-events-none">
              <div className="flex items-center justify-between mb-1 opacity-60">
                <span className="text-[12px] leading-none">📌</span>
                <span className="text-[8.5px] font-mono tracking-wider uppercase font-bold text-stone-800">URGENT</span>
              </div>
              <p className="text-[11px] font-semibold leading-tight tracking-tight text-stone-900 font-sans">
                &ldquo;your receptionist called, they quit 😂&rdquo;
              </p>
            </div>
          </div>
        </HeroTiltCard>
      </div>

      {/* ── Floating Messenger Multi-Channel Alert (Bottom Left) ── */}
      <div className="absolute left-[3%] 2xl:left-[6%] bottom-[14%] hidden xl:flex float-1 z-10">
        <HeroTiltCard initialRotate={-1}>
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 dark:bg-[#161d2a]/95 backdrop-blur-md border border-line shadow-sm text-ink select-none">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] bg-[#0084ff]/10 text-[#0084ff]">💬</div>
            <div className="text-left">
              <p className="text-[11.5px] font-bold leading-tight">QuickFix Garage Kathmandu</p>
              <p className="text-[9.5px] text-muted">Messenger booking synced 2 min ago</p>
            </div>
          </div>
        </HeroTiltCard>
      </div>

      {/* ── Central headline (always sharp & crisp) ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[960px] mx-auto my-auto px-4">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="flex flex-col items-center">
          {/* ── Pure Clean Glass Pill (Colorless, Transparent Frost) ── */}
          <div className="relative inline-flex items-center px-5 py-2 rounded-full bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl border border-white/80 dark:border-white/15 text-ink text-[12.5px] sm:text-[13.5px] font-medium tracking-tight mb-6 sm:mb-8 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.3)] select-none">
            <span>AI Booking Assistant · Any Service Business</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[112px] font-black text-ink mb-3.5 sm:mb-4 tracking-[-0.04em] leading-[0.95]">
            <TextThree text="Vesper" />
          </h1>


          {/* ── "sent at 2:47 AM" timestamp pill ── */}
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/75 dark:bg-white/[0.08] backdrop-blur-md border border-line shadow-xs text-ink text-[12px] sm:text-[13px] font-mono mb-6 sm:mb-7 -rotate-1 select-none pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold tracking-tight">sent at 2:47 AM</span>
            <span className="text-[10px] text-muted font-sans">· delivered</span>
          </div>

          <p className="text-[15px] sm:text-[18px] md:text-[20px] text-muted mb-8 sm:mb-10 max-w-[620px] mx-auto leading-relaxed font-normal">
            Answer messages, check real availability, and book appointments across WhatsApp, Instagram &amp; Messenger — for salons, hotels, garages, and any service business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full sm:w-auto">
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 bg-ink text-canvas text-[14px] sm:text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-ink/85 transition-all shadow-sm w-full sm:w-auto"
            >
              <span>🌙</span> book a demo
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 text-[14px] sm:text-[15px] font-medium text-muted hover:text-ink transition-colors px-5 py-3.5"
            >
              see how it works →
            </a>
          </div>

          <p className="mt-4 sm:mt-5 text-[12px] sm:text-[13px] text-muted/60 dark:text-muted/80">
            100% free to try · no card needed · works with your calendar
          </p>
        </motion.div>
      </div>

      {/* ── Scroll hint at bottom of hero ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-muted/50 hover:text-ink transition-colors cursor-pointer">
        <a href="#demo" className="flex flex-col items-center text-[11px] font-medium tracking-wide gap-0.5">
          <span>see live demo</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
