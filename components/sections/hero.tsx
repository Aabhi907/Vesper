"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, useAnimate } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { EmberGrainField } from "../ember-grain-field"
import { GoogleCalendarCard } from "../calendar-card"
import { WinChrome } from "@/components/shared"

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
   Card Burst Explosion Configuration
   - Staggered initial scales (0.68 - 0.76)
   - Dynamic vector calculation towards hero center
   - Organic per-card offsets (±10 - 22px)
   - Radial outward burst with [0.16, 1, 0.3, 1] easing
 ══════════════════════════════════════════════════ */
interface BurstCardConfig {
  id: string
  pullFactor: number
  initialScale: number
  offsetX: number
  offsetY: number
  initialOpacity: number
  initialBlur: number
  delay: number
  duration: number
}

const BURST_CARDS: BurstCardConfig[] = [
  {
    id: "card-whatsapp",
    pullFactor: 0.72,
    initialScale: 0.72,
    offsetX: -18,
    offsetY: 14,
    initialOpacity: 0.35,
    initialBlur: 28,
    delay: 0.38,
    duration: 1.28,
  },
  {
    id: "card-calendar",
    pullFactor: 0.70,
    initialScale: 0.76,
    offsetX: 20,
    offsetY: -12,
    initialOpacity: 0.38,
    initialBlur: 28,
    delay: 0.40,
    duration: 1.28,
  },
  {
    id: "card-messenger",
    pullFactor: 0.74,
    initialScale: 0.68,
    offsetX: -14,
    offsetY: -16,
    initialOpacity: 0.32,
    initialBlur: 26,
    delay: 0.42,
    duration: 1.30,
  },
  {
    id: "card-instagram",
    pullFactor: 0.71,
    initialScale: 0.74,
    offsetX: 22,
    offsetY: 16,
    initialOpacity: 0.34,
    initialBlur: 28,
    delay: 0.44,
    duration: 1.28,
  },
  {
    id: "star-1",
    pullFactor: 0.65,
    initialScale: 0.5,
    offsetX: 10,
    offsetY: -10,
    initialOpacity: 0.15,
    initialBlur: 10,
    delay: 0.46,
    duration: 1.24,
  },
  {
    id: "star-2",
    pullFactor: 0.65,
    initialScale: 0.5,
    offsetX: -10,
    offsetY: 10,
    initialOpacity: 0.15,
    initialBlur: 10,
    delay: 0.48,
    duration: 1.24,
  },
]

/* ══════════════════════════════════════════════════
   Hero Section (Radial Card Explosion on Mount)
 ══════════════════════════════════════════════════ */
export function Hero() {
  const [scope, animate] = useAnimate()
  const [, setIsSettled] = React.useState(false)

  React.useEffect(() => {
    // Respect user's motion preferences
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setIsSettled(true)
      const mainHeading = scope.current?.querySelector("#hero-main-heading") as HTMLElement | null
      if (mainHeading) {
        mainHeading.style.opacity = "1"
        mainHeading.style.transform = "none"
        mainHeading.style.filter = "none"
      }
      const subContent = scope.current?.querySelector("#hero-sub-content") as HTMLElement | null
      if (subContent) {
        subContent.style.opacity = "1"
        subContent.style.transform = "none"
        subContent.style.filter = "none"
      }
      const scrollHint = scope.current?.querySelector("#hero-scroll-hint") as HTMLElement | null
      if (scrollHint) {
        scrollHint.style.opacity = "1"
        scrollHint.style.transform = "none"
      }
      BURST_CARDS.forEach((cfg) => {
        const el = scope.current?.querySelector(`[data-burst-id="${cfg.id}"]`) as HTMLElement | null
        if (el) {
          el.style.opacity = "1"
          el.style.transform = "none"
          el.style.filter = "none"
        }
      })
      return
    }

    const container = scope.current
    if (!container) return

    // ── STEP 1: Main Heading ("Vesper" + glass pill) begins de-blurring at 180ms
    animate(
      "#hero-main-heading",
      {
        opacity: [0, 1],
        y: [18, 0],
        filter: ["blur(16px)", "blur(0px)"],
      },
      {
        duration: 0.85,
        delay: 0.18,
        ease: [0.16, 1, 0.3, 1],
      }
    )

    // ── STEP 2: Subtitle copy & CTA buttons follow right behind with a 120ms micro-gap (delay: 0.30s)
    animate(
      "#hero-sub-content",
      {
        opacity: [0, 1],
        y: [16, 0],
        filter: ["blur(14px)", "blur(0px)"],
      },
      {
        duration: 0.85,
        delay: 0.30,
        ease: [0.16, 1, 0.3, 1],
      }
    )

    // ── STEP 3: Cards arrive in sync alongside the text (gliding outward from 0.45s)
    const containerRect = container.getBoundingClientRect()
    const centerX = containerRect.left + containerRect.width / 2
    const centerY = containerRect.top + containerRect.height / 2

    BURST_CARDS.forEach((cfg) => {
      const cardEl = container.querySelector(`[data-burst-id="${cfg.id}"]`) as HTMLElement | null
      if (!cardEl) return
      const cardRect = cardEl.getBoundingClientRect()

      // Responsive check: if hidden on this viewport, skip animation
      if (cardRect.width === 0 || cardRect.height === 0) return

      const cardCenterX = cardRect.left + cardRect.width / 2
      const cardCenterY = cardRect.top + cardRect.height / 2
      const dx = centerX - cardCenterX
      const dy = centerY - cardCenterY

      // Organic inward cluster offset
      const startX = Math.round(dx * cfg.pullFactor + cfg.offsetX)
      const startY = Math.round(dy * cfg.pullFactor + cfg.offsetY)

      cardEl.style.willChange = "transform, opacity, filter"

      // Position initially near the center of the viewport (compressed, blurred)
      animate(
        cardEl,
        {
          x: startX,
          y: startY,
          scale: cfg.initialScale,
          opacity: 0,
          filter: `blur(${cfg.initialBlur}px)`,
        },
        { duration: 0 }
      )

      // Soft blurred cluster materializes gently near center
      animate(
        cardEl,
        {
          opacity: [0, cfg.initialOpacity],
        },
        {
          duration: 0.20,
          delay: 0.16,
          ease: "easeOut",
        }
      )

      // Slow, luxurious radial glide outward alongside the incoming text
      animate(
        cardEl,
        {
          x: [startX, 0],
          y: [startY, 0],
          scale: [cfg.initialScale, 1],
          opacity: [cfg.initialOpacity, 1],
          filter: [
            `blur(${cfg.initialBlur}px)`,
            `blur(${Math.round(cfg.initialBlur * 0.4)}px)`,
            "blur(0px)",
          ],
        },
        {
          duration: cfg.duration,
          delay: cfg.delay,
          ease: [0.16, 1, 0.3, 1],
        }
      )
    })

    // Subtly reveal bottom scroll hint as cards settle
    animate(
      "#hero-scroll-hint",
      { opacity: [0, 1], y: [8, 0] },
      { duration: 0.6, delay: 1.10, ease: "easeOut" }
    )

    // ── Complete settlement at 2000ms (transform: none, filter: blur(0), opacity: 1)
    const timer = setTimeout(() => {
      setIsSettled(true)
      BURST_CARDS.forEach((cfg) => {
        const cardEl = container.querySelector(`[data-burst-id="${cfg.id}"]`) as HTMLElement | null
        if (cardEl) {
          cardEl.style.willChange = "auto"
          cardEl.style.filter = "none"
          cardEl.style.transform = "none"
          cardEl.style.opacity = "1"
        }
      })
      const mainHeading = container.querySelector("#hero-main-heading") as HTMLElement | null
      if (mainHeading) {
        mainHeading.style.willChange = "auto"
        mainHeading.style.filter = "none"
        mainHeading.style.transform = "none"
        mainHeading.style.opacity = "1"
      }
      const subContent = container.querySelector("#hero-sub-content") as HTMLElement | null
      if (subContent) {
        subContent.style.willChange = "auto"
        subContent.style.filter = "none"
        subContent.style.transform = "none"
        subContent.style.opacity = "1"
      }
      const scrollHint = container.querySelector("#hero-scroll-hint") as HTMLElement | null
      if (scrollHint) {
        scrollHint.style.willChange = "auto"
        scrollHint.style.opacity = "1"
        scrollHint.style.transform = "none"
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [animate, scope])

  return (
    <section
      ref={scope}
      className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-hero-wash pt-16 sm:pt-20 pb-10 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      {/* ── Dark mode Ember Grain Shader full backdrop ── */}
      <div className="absolute inset-0 pointer-events-none hidden dark:block z-0" aria-hidden="true">
        <EmberGrainField
          background="#090703"
          glow={[152, 99, 0]}
          grain={0.28}
          className="h-full w-full"
        />
      </div>

      {/* ── Subtle architectural hairline dot grid ── */}
      <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--ink)/0.07)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-0" aria-hidden="true" />

      {/* ── Floating decorations (burst stars) ── */}
      <div
        data-burst-id="star-1"
        className="absolute right-[8%] top-[24%] text-[20px] select-none pointer-events-none hidden lg:block opacity-25"
        style={{ opacity: 0 }}
      >
        ✦
      </div>
      <div
        data-burst-id="star-2"
        className="absolute left-[8%] bottom-[20%] text-[18px] select-none pointer-events-none hidden lg:block opacity-25"
        style={{ opacity: 0 }}
      >
        ✦
      </div>

      {/* ── Card 1: Floating live chat window (Top-Left) ── */}
      <div
        data-burst-id="card-whatsapp"
        className="absolute left-[3.5%] lg:left-[5%] xl:left-[6.5%] 2xl:left-[9%] top-[20%] w-[220px] lg:w-[245px] hidden xl:block z-10"
        style={{ opacity: 0 }}
      >
        <HeroTiltCard initialRotate={-3}>
          <WinChrome title="whatsapp.mov">
            <div className="bg-[#ece5dd] dark:bg-[#0b141a] p-3.5 space-y-2.5">
              <div className="flex justify-end">
                <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-[12px] text-black/80 dark:text-white px-3 py-2 rounded-xl rounded-tr-sm max-w-[85%] shadow-xs">
                  Can I book tomorrow at 3pm?
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#1f2c34] text-[12px] text-black/80 dark:text-white px-3 py-2 rounded-xl rounded-tl-sm max-w-[85%] shadow-xs">
                  Yes! 3 PM is open. Booked ✓
                </div>
              </div>
            </div>
          </WinChrome>
        </HeroTiltCard>
      </div>

      {/* ── Card 2: Floating Google Calendar window + Sticky note (Top-Right) ── */}
      <div
        data-burst-id="card-calendar"
        className="absolute right-[3.5%] lg:right-[5%] xl:right-[6.5%] 2xl:right-[8.5%] top-[18%] w-[245px] lg:w-[270px] hidden xl:block z-10"
        style={{ opacity: 0 }}
      >
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

      {/* ── Card 3: Floating Messenger Multi-Channel Alert (Bottom-Left) ── */}
      <div
        data-burst-id="card-messenger"
        className="absolute left-[4%] lg:left-[5.5%] xl:left-[7.5%] 2xl:left-[10%] bottom-[14%] hidden xl:flex z-10"
        style={{ opacity: 0 }}
      >
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

      {/* ── Card 4: Floating Instagram DM Alert (Bottom-Right) ── */}
      <div
        data-burst-id="card-instagram"
        className="absolute right-[4%] lg:right-[5.5%] xl:right-[7.5%] 2xl:right-[10%] bottom-[14%] hidden xl:flex z-10"
        style={{ opacity: 0 }}
      >
        <HeroTiltCard initialRotate={2}>
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 dark:bg-[#161d2a]/95 backdrop-blur-md border border-line shadow-sm text-ink select-none">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] bg-[#c13584]/10 text-[#c13584]">📸</div>
            <div className="text-left">
              <p className="text-[11.5px] font-bold leading-tight">The Grand Inn · Instagram DM</p>
              <p className="text-[9.5px] text-muted">Deluxe Suite locked · 100% automated</p>
            </div>
          </div>
        </HeroTiltCard>
      </div>

      {/* ── Central headline (always sharp & crisp, elevated z-30) ── */}
      <div className="relative z-30 flex flex-col items-center text-center max-w-[960px] mx-auto my-auto px-6 sm:px-10 md:px-12 pointer-events-auto">
        {/* Step 1: Main heading (Vesper + glass pill) */}
        <div id="hero-main-heading" className="flex flex-col items-center" style={{ opacity: 0 }}>
          {/* ── Pure Clean Glass Pill (Colorless, Transparent Frost) ── */}
          <div className="relative inline-flex items-center px-5 py-2 rounded-full bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl border border-white/80 dark:border-white/15 text-ink text-[12.5px] sm:text-[13.5px] font-medium tracking-tight mb-6 sm:mb-8 shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.2),0_8px_24px_rgba(0,0,0,0.3)] select-none">
            <span>AI Booking Assistant · Any Service Business</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[112px] font-black text-ink mb-6 sm:mb-8 tracking-[-0.04em] leading-[0.95]">
            Vesper
          </h1>
        </div>

        {/* Step 2: Subtitle copy + CTA buttons + Footnote */}
        <div id="hero-sub-content" className="flex flex-col items-center" style={{ opacity: 0 }}>
          <p className="text-[15px] sm:text-[18px] md:text-[20px] text-muted mb-8 sm:mb-10 max-w-[620px] mx-auto leading-relaxed font-normal">
            Answer messages, check real availability, and book appointments across WhatsApp, Instagram &amp; Messenger for salons, hotels, garages, and any service business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full sm:w-auto">
            <a
              href="#demo"
              className="group inline-flex items-center justify-center gap-3 bg-ink text-canvas text-[14px] sm:text-[15px] font-semibold pl-6 pr-2.5 py-2 rounded-full hover:bg-ink/85 transition-all shadow-sm active:scale-[0.98] w-full sm:w-auto"
            >
              <span>book a demo</span>
              <span className="w-7 h-7 rounded-full bg-canvas/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5 text-canvas" />
              </span>
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
        </div>
      </div>

      {/* ── Scroll hint at bottom of hero ── */}
      <div
        id="hero-scroll-hint"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-muted/50 hover:text-ink transition-colors cursor-pointer z-30"
        style={{ opacity: 0 }}
      >
        <a href="#demo" className="flex flex-col items-center text-[11px] font-medium tracking-wide gap-0.5">
          <span>see live demo</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
