"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { WinChrome, ScrollReveal } from "@/components/shared"
import { useInteractiveTilt } from "@/hooks"
import { CalendarCheck, Languages, PhoneCall, Zap, ArrowRight } from "lucide-react"
import { WorldMap } from "@/components/ui/world-map"
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip"

const STEPS = [
  {
    num: "01",
    name: "Arrival",
    summary: "Customer sends a message across WhatsApp, Instagram, or Messenger at any hour.",
    detail: "Messages stream in through official Meta Cloud webhooks with sub-100ms response times. No unread notifications sitting till morning.",
    proof: "Webhook: Meta Cloud API · Latency: 42ms · Inbound: Received",
  },
  {
    num: "02",
    name: "Context",
    summary: "Vesper understands who is asking and what they need.",
    detail: "Identifies returning guests, preferred staff (e.g. 'with Anita if possible'), party size, and resolves relative dates like 'bholi 3 baje' or 'this Saturday morning'.",
    proof: "NLU Parse: 99.4% confidence · Intent: haircut_beard · Context: Returning Guest",
  },
  {
    num: "03",
    name: "Knowledge",
    summary: "Consults your approved business rules, pricing, and service durations.",
    detail: "Vesper only speaks from your verified business setup. It knows a haircut takes 45 minutes, a facial takes 60, and your shop closes on Mondays.",
    proof: "Policy Engine: Verified · Duration: 50m · Price: Verified · Buffer: 15m",
  },
  {
    num: "04",
    name: "Real execution",
    summary: "Queries your live calendar. Zero hallucinations.",
    detail: "The AI never guesses availability. It performs a real-time read against your Google Calendar or Outlook database, factoring in staff rosters and 15-minute cleaning buffers.",
    proof: "Calendar Read: 200 OK · Latency: 0.8s · Slot: Sunday 15:00 Locked",
  },
  {
    num: "05",
    name: "Confirmed response",
    summary: "The slot is atomically locked and confirmed.",
    detail: "An instant WhatsApp confirmation is sent with directions, a calendar invite link, and an alert is delivered straight to the business owner's phone.",
    proof: "Transaction: Committed · WhatsApp: Sent · Owner Alert: Delivered",
  },
]

const PILLARS: { num: string; icon: React.ReactNode; title: string; desc: string }[] = [
  {
    num: "01",
    icon: <CalendarCheck className="w-6 h-6" strokeWidth={1.5} />,
    title: "Calendar is truth",
    desc: "Vesper never invents an available hour. If you block out 2:00 PM on your personal Google Calendar, Vesper knows immediately.",
  },
  {
    num: "02",
    icon: <Languages className="w-6 h-6" strokeWidth={1.5} />,
    title: "Code-switching fluency",
    desc: "Effortlessly handles natural everyday conversations in English, Nepali, and Romanized slang without confusing times or names.",
  },
  {
    num: "03",
    icon: <PhoneCall className="w-6 h-6" strokeWidth={1.5} />,
    title: "Always human-accessible",
    desc: "Reply directly from your phone at any time. Vesper senses your response and quietly steps aside for that conversation.",
  },
]

function PillarCard({ num, icon, title, desc }: { num: string; icon: React.ReactNode; title: string; desc: string }) {
  const { ref, canTilt, hover, motionProps, eventHandlers } = useInteractiveTilt({
    tiltRange: 12,
    glowRange: 70,
    shadowRange: 18,
  })

  return (
    <div
      className="relative h-full"
      style={canTilt ? { perspective: "900px" } : undefined}
      onMouseMove={canTilt ? eventHandlers.onMouseMove : undefined}
      onMouseEnter={canTilt ? eventHandlers.onMouseEnter : undefined}
      onMouseLeave={canTilt ? eventHandlers.onMouseLeave : undefined}
    >
      <motion.div
        ref={ref}
        style={canTilt ? { rotateX: motionProps.rotateX, rotateY: motionProps.rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative z-20 h-full w-full"
      >
        {canTilt && (
          <motion.div
            aria-hidden
            style={{ x: motionProps.shadowX, y: motionProps.shadowY, opacity: hover ? 0.28 : 0.06 }}
            className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl bg-black/40 dark:bg-black/60 blur-[22px] transition-opacity duration-300"
          />
        )}

        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-line shadow-xs h-full min-h-[230px]">
          {canTilt && (
            <motion.div
              aria-hidden
              style={{ x: motionProps.glowX, y: motionProps.glowY, opacity: hover ? 0.38 : 0 }}
              className="pointer-events-none absolute -inset-20 z-0 rounded-full bg-gradient-to-tr from-signal-blue/20 to-indigo-400/15 blur-[50px] transition-opacity duration-500"
            />
          )}
          {canTilt && (
            <motion.div
              aria-hidden
              style={{ x: motionProps.sheenX }}
              className="pointer-events-none absolute inset-0 size-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-white/8 to-transparent z-10"
            />
          )}

          <div
            style={canTilt ? { transform: "translateZ(25px)", transformStyle: "preserve-3d" } : undefined}
            className="p-8 flex flex-col justify-between h-full relative z-10"
          >
            {/* Top: rule label + ghost numeral */}
            <div className="flex items-start justify-between">
              <span className="text-[11px] font-mono text-signal-blue font-bold tracking-[0.18em] uppercase">
                {num}
              </span>
              <span
                className="text-[72px] font-black leading-none select-none -mt-2 -mr-1"
                style={{ color: "hsl(var(--ink) / 0.04)", letterSpacing: "-0.04em" }}
              >
                {num}
              </span>
            </div>

            {/* Bottom: icon + title + desc */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-soft-canvas dark:bg-white/5 border border-line flex items-center justify-center mb-4 text-ink">
                {icon}
              </div>
              <h3 className="text-[18px] font-bold text-ink mb-2 tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed font-normal">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function WorldMapCard() {
  const { ref, canTilt, hover, motionProps, eventHandlers } = useInteractiveTilt({
    tiltRange: 8,
    glowRange: 80,
    shadowRange: 20,
  })

  return (
    <div
      className="relative flex flex-col"
      style={canTilt ? { perspective: "1200px" } : undefined}
      onMouseMove={canTilt ? eventHandlers.onMouseMove : undefined}
      onMouseEnter={canTilt ? eventHandlers.onMouseEnter : undefined}
      onMouseLeave={canTilt ? eventHandlers.onMouseLeave : undefined}
    >
      <motion.div
        ref={ref}
        style={canTilt ? { rotateX: motionProps.rotateX, rotateY: motionProps.rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative z-20 w-full"
      >
        {/* Soft shadow drifting opposite the pointer — outside WinChrome */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{ x: motionProps.shadowX, y: motionProps.shadowY, opacity: hover ? 0.30 : 0.07 }}
            className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-black/40 dark:bg-black/60 blur-[28px] transition-opacity duration-300"
          />
        )}

        {/* Hover glow — outside WinChrome so overflow:hidden doesn't clip it */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{ x: motionProps.glowX, y: motionProps.glowY, opacity: hover ? 0.35 : 0 }}
            className="pointer-events-none absolute -inset-24 z-0 rounded-full bg-gradient-to-tr from-signal-blue/20 to-indigo-400/15 blur-[60px] transition-opacity duration-500"
          />
        )}

        <WinChrome title="vesper &middot; global live traffic">
          {/* Sheen sweep — inside WinChrome, clipped nicely by overflow:hidden */}
          {canTilt && (
            <motion.div
              aria-hidden
              style={{ x: motionProps.sheenX }}
              className="pointer-events-none absolute inset-0 size-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent z-20"
            />
          )}

          <div
            style={canTilt ? { transform: "translateZ(20px)", transformStyle: "preserve-3d" } : undefined}
            className="bg-[#fcfaf6] dark:bg-[#11161d] p-4 sm:p-8 relative z-10"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-line/40 text-[11px] font-mono text-muted">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Global Inbound Routing
              </span>
              <span className="text-ink/75 dark:text-white/75 font-medium">USA &middot; UK &middot; Canada &middot; Australia &middot; Worldwide</span>
            </div>

            <WorldMap
              dots={[
                {
                  start: { lat: 51.5074, lng: -0.1278, label: "London" },
                  end: { lat: 40.7128, lng: -74.006, label: "New York (USA)" },
                },
                {
                  start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                  end: { lat: 37.7749, lng: -122.4194, label: "San Francisco (USA)" },
                },
                {
                  start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                  end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles (USA)" },
                },
                {
                  start: { lat: 40.7128, lng: -74.006, label: "New York" },
                  end: { lat: 51.5074, lng: -0.1278, label: "London (UK)" },
                },
                {
                  start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                  end: { lat: 51.5074, lng: -0.1278, label: "Europe Hub" },
                },
                {
                  start: { lat: 52.5200, lng: 13.4050, label: "Berlin" },
                  end: { lat: 27.7172, lng: 85.324, label: "Asia Hub" },
                },
              ]}
              lineColor="#2563eb"
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 mt-4 border-t border-line/40 text-left">
              <div>
                <p className="text-[13.5px] font-semibold text-ink">Your business in the US, Europe, or beyond.</p>
                <p className="text-[12.5px] text-muted leading-relaxed mt-1 font-normal">
                  Whether your salon, clinic, or service shop is based in New York, California, London, Sydney, or Kathmandu, Vesper syncs seamlessly to your local business timezone (EST, PST, GMT, AEST) with zero setup friction.
                </p>
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-ink">Clients book from any country code.</p>
                <p className="text-[12.5px] text-muted leading-relaxed mt-1 font-normal">
                  Seamlessly handles incoming numbers from the US (+1), UK (+44), Australia (+61), UAE (+971), and 50+ countries. Quotes accurately in USD ($), GBP (&pound;), EUR (&euro;), or your local currency.
                </p>
              </div>
              <div>
                <p className="text-[13.5px] font-semibold text-ink">Zero midnight drop-off, worldwide.</p>
                <p className="text-[12.5px] text-muted leading-relaxed mt-1 font-normal">
                  Whether it is a late-night local client texting at 2:00 AM in your home city or an international client booking from across the globe, slots are atomically locked in seconds while you sleep.
                </p>
              </div>
            </div>

            {/* Subtle Country Verification Pill Row */}
            <div className="mt-6 pt-4 border-t border-line/40 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-muted">
              <span>Verified coverage:</span>
              <span className="text-ink/80 dark:text-white/80">
                United States &middot; United Kingdom &middot; Canada &middot; Australia &middot; UAE &middot; Europe &middot; Global
              </span>
            </div>
          </div>
        </WinChrome>
      </motion.div>
    </div>
  )
}

export default function ProductPage() {
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <main className="w-full min-h-screen bg-canvas text-ink pt-28 sm:pt-36 pb-28 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="mx-auto max-w-[860px]">
        {/* ── Top quiet eyebrow & Header (Center Aligned) ── */}
        <ScrollReveal className="text-center flex flex-col items-center">
          <div className="mb-6">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted">
              product &middot; architecture
            </span>
          </div>

          {/* ── Main Apple-style Headline ── */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.05] text-center">
            AI understands.<br />
            Real systems act.
          </h1>

          <p className="text-[17px] sm:text-[20px] text-muted leading-relaxed font-normal max-w-[680px] mx-auto mb-12 sm:mb-16 text-center">
            Vesper is not a generic chatbot guessing answers. It is a quiet engineering pipeline: language models decode what your customer wants, but real database code checks and locks your actual calendar.
          </p>
        </ScrollReveal>

        {/* ── Minimalist Clean Interactive Pipeline (Apple Segmented Pill Dock) ── */}
        <ScrollReveal delay={0.1} className="mb-24">
          <TooltipProvider>
            <div className="p-1.5 sm:p-2 rounded-2xl bg-soft-canvas border border-line flex flex-wrap gap-1 sm:gap-1.5 mb-8 relative">
              {STEPS.map((s, i) => {
                const active = activeStep === i
                return (
                  <Tooltip key={s.num} content={s.summary} side="top" delay={0.3}>
                    <button
                      onClick={() => setActiveStep(i)}
                      className={`relative flex-1 min-w-[120px] py-3 px-3.5 rounded-xl text-left transition-colors cursor-pointer z-10 ${
                        active ? "text-ink" : "text-muted hover:text-ink"
                      }`}
                    >
                      {active && (
                        <motion.div
                          layoutId="activeStepIndicator"
                          className="absolute inset-0 bg-white dark:bg-card rounded-xl shadow-xs border border-line/60 -z-10"
                          transition={{ type: "spring", stiffness: 360, damping: 32 }}
                        />
                      )}
                      <p className="text-[10.5px] font-mono font-bold tracking-wider opacity-60 uppercase mb-0.5">
                        Step {s.num}
                      </p>
                      <p className="text-[13px] sm:text-[14px] font-semibold truncate leading-tight">
                        {s.name}
                      </p>
                    </button>
                  </Tooltip>
                )
              })}
            </div>
          </TooltipProvider>

          {/* Active Step Clean Window Display */}
          <WinChrome title={`pipeline &middot; step ${STEPS[activeStep].num}`}>
            <div className="bg-white dark:bg-card p-8 sm:p-12 min-h-[280px] flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-signal-blue font-bold">
                    Step {STEPS[activeStep].num} &middot; {STEPS[activeStep].name}
                  </span>
                  
                  {/* Micro Engineering Proof Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-mono text-muted/90 bg-soft-canvas border border-line/70 px-2.5 py-1 rounded-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{STEPS[activeStep].proof}</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-4 tracking-tight">
                  {STEPS[activeStep].summary}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-muted leading-relaxed font-normal max-w-[680px]">
                  {STEPS[activeStep].detail}
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-line/60 flex items-center justify-between text-[12.5px] text-muted">
                <span>Deterministic pipeline</span>
                <span>Zero hallucinations</span>
              </div>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── Apple-style "How it looks in practice" Window (Center-Aligned Header) ── */}
        <ScrollReveal delay={0.15} className="mb-24">
          <div className="mb-8 text-center flex flex-col items-center">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              the experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink text-center">
              Quiet, instant, and accurate.
            </h2>
          </div>

          <WinChrome title="whatsapp &middot; saturday 11:42 pm">
            <div className="bg-[#fcfaf6] dark:bg-[#11161d] p-6 sm:p-10 space-y-4 font-sans">
              {/* Guest Message */}
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#1a232e] border border-line/60 p-4 rounded-2xl rounded-tl-sm max-w-[85%] sm:max-w-[70%] shadow-xs">
                  <p className="text-[12px] font-mono text-muted mb-1">Customer &middot; 11:42 PM</p>
                  <p className="text-[14.5px] text-ink leading-relaxed">
                    Hey! Do you have any slots open tomorrow afternoon around 3 PM for haircut and beard trim?
                  </p>
                </div>
              </div>

              {/* Vesper Verification Pill (Zap icon, no emoji) */}
              <div className="flex justify-center my-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted/80 bg-soft-canvas border border-line px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3 text-signal-blue shrink-0" />
                  <span>Google Calendar checked in 0.8s &middot; Anita free at 3:00 PM</span>
                </span>
              </div>

              {/* Vesper Response */}
              <div className="flex justify-end">
                <div className="bg-ink text-canvas p-4 rounded-2xl rounded-tr-sm max-w-[85%] sm:max-w-[70%] shadow-xs">
                  <p className="text-[12px] font-mono text-canvas/60 mb-1">Vesper &middot; 11:42 PM</p>
                  <p className="text-[14.5px] leading-relaxed font-normal">
                    Yes! Anita is open tomorrow (Sunday) at 3:00 PM. That covers haircut and beard trim (approx 50 mins). Shall I lock this slot for you?
                  </p>
                </div>
              </div>

              {/* Guest Confirmation */}
              <div className="flex justify-start">
                <div className="bg-white dark:bg-[#1a232e] border border-line/60 p-4 rounded-2xl rounded-tl-sm max-w-[85%] sm:max-w-[70%] shadow-xs">
                  <p className="text-[12px] font-mono text-muted mb-1">Customer &middot; 11:43 PM</p>
                  <p className="text-[14.5px] text-ink leading-relaxed">
                    Yes please, book it!
                  </p>
                </div>
              </div>

              {/* Vesper Finalized (Clean typography, no checkmark emoji) */}
              <div className="flex justify-end">
                <div className="bg-ink text-canvas p-4 rounded-2xl rounded-tr-sm max-w-[85%] sm:max-w-[70%] shadow-xs">
                  <p className="text-[12px] font-mono text-canvas/60 mb-1">Vesper &middot; 11:43 PM</p>
                  <p className="text-[14.5px] leading-relaxed font-normal">
                    Confirmed: You are booked with Anita for Sunday at 3:00 PM. Calendar invite sent, see you then!
                  </p>
                </div>
              </div>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── Global Coordination & World Map (USA & Worldwide Deployment) ── */}
        <ScrollReveal delay={0.18} className="mb-24">
          <div className="mb-8 text-center flex flex-col items-center">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              global &middot; any country &middot; any timezone
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3 text-center">
              Built for businesses in the US and worldwide.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted max-w-[680px] leading-relaxed mx-auto text-center font-normal">
              Whether your business operates in the United States, Europe, Australia, or Asia, Vesper connects directly to your local calendar, supports your home currency, and talks to clients from any country around the clock.
            </p>
          </div>

          <WorldMapCard />
        </ScrollReveal>

        {/* ── The Three Disciplines ── */}
        <ScrollReveal delay={0.2} className="mb-24">
          <div className="mb-8 text-center">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Three rules we refuse to break.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p) => (
              <PillarCard key={p.num} num={p.num} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
        </ScrollReveal>

        {/* ── Quiet Apple-style CTA (Zero Emojis + Classic Apple Footnote) ── */}
        <ScrollReveal delay={0.25} className="pt-8 border-t border-line">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                See it in action.
              </h3>
              <p className="text-[14.5px] text-muted">
                Test our interactive WhatsApp and Instagram simulator right now.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 bg-ink text-canvas text-[13.5px] font-semibold px-6 py-3 rounded-full hover:bg-ink/85 transition-all shadow-xs"
              >
                <span>launch simulator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/trust"
                className="text-[13.5px] font-medium text-muted hover:text-ink px-4 py-3 transition-colors"
              >
                read trust manifesto &rarr;
              </Link>
            </div>
          </div>

          {/* Apple-style Dry Humorous Footnote */}
          <p className="mt-12 text-center text-[12px] font-mono text-muted/60 select-none">
            * No receptionists were replaced in the making of this software. They just got eight hours of uninterrupted sleep.
          </p>
        </ScrollReveal>
      </div>
    </main>
  )
}

