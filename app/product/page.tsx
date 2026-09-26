"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { WinChrome, ScrollReveal } from "@/components/shared"
import { ArrowRight, Check, Sparkles, Globe } from "lucide-react"
import { WorldMap } from "@/components/ui/world-map"

const STEPS = [
  {
    num: "01",
    name: "Arrival",
    summary: "Customer sends a message across WhatsApp, Instagram, or Messenger at any hour.",
    detail: "Messages stream in through official Meta Cloud webhooks with sub-100ms response times. No unread notifications sitting till morning.",
  },
  {
    num: "02",
    name: "Context",
    summary: "Vesper understands who is asking and what they need.",
    detail: "Identifies returning guests, preferred staff (e.g. 'with Anita if possible'), party size, and resolves relative dates like 'bholi 3 baje' or 'this Saturday morning'.",
  },
  {
    num: "03",
    name: "Knowledge",
    summary: "Consults your approved business rules, pricing, and service durations.",
    detail: "Vesper only speaks from your verified business setup. It knows a haircut takes 45 minutes, a facial takes 60, and your shop closes on Mondays.",
  },
  {
    num: "04",
    name: "Real execution",
    summary: "Queries your live calendar. Zero hallucinations.",
    detail: "The AI never guesses availability. It performs a real-time read against your Google Calendar or Outlook database, factoring in staff rosters and 15-minute cleaning buffers.",
  },
  {
    num: "05",
    name: "Confirmed response",
    summary: "The slot is atomically locked and confirmed.",
    detail: "An instant WhatsApp confirmation is sent with directions, a calendar invite link, and an alert is delivered straight to the business owner's phone.",
  },
]

const PILLARS = [
  {
    title: "Calendar is truth",
    desc: "Vesper never invents an available hour. If you block out 2:00 PM on your personal Google Calendar, Vesper knows immediately.",
  },
  {
    title: "Code-switching fluency",
    desc: "Effortlessly handles natural everyday conversations in English, Nepali, and Romanized slang without confusing times or names.",
  },
  {
    title: "Always human-accessible",
    desc: "Reply directly from your phone at any time. Vesper senses your response and quietly steps aside for that conversation.",
  },
]

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

        {/* ── Minimalist Clean Interactive Pipeline ── */}
        <ScrollReveal delay={0.1} className="mb-24">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-soft-canvas border border-line flex flex-wrap gap-1 sm:gap-1.5 mb-8">
            {STEPS.map((s, i) => {
              const active = activeStep === i
              return (
                <button
                  key={s.num}
                  onClick={() => setActiveStep(i)}
                  className={`flex-1 min-w-[120px] py-3 px-3.5 rounded-xl text-left transition-all cursor-pointer ${
                    active
                      ? "bg-white dark:bg-card text-ink shadow-xs border border-line/60"
                      : "text-muted hover:text-ink hover:bg-white/40 dark:hover:bg-white/5"
                  }`}
                >
                  <p className="text-[10.5px] font-mono font-bold tracking-wider opacity-60 uppercase mb-0.5">
                    Step {s.num}
                  </p>
                  <p className="text-[13px] sm:text-[14px] font-semibold truncate leading-tight">
                    {s.name}
                  </p>
                </button>
              )
            })}
          </div>

          {/* Active Step Clean Window Display */}
          <WinChrome title={`pipeline &middot; step ${STEPS[activeStep].num}`}>
            <div className="bg-white dark:bg-card p-8 sm:p-12 min-h-[260px] flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-signal-blue font-bold">
                  Step {STEPS[activeStep].num} &middot; {STEPS[activeStep].name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-ink mt-2 mb-4 tracking-tight">
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

        {/* ── Apple-style "How it looks in practice" Window ── */}
        <ScrollReveal delay={0.15} className="mb-24">
          <div className="mb-8">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              the experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
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

              {/* Vesper Verification Pill */}
              <div className="flex justify-center my-3">
                <span className="text-[11px] font-mono text-muted/80 bg-soft-canvas border border-line px-3 py-1 rounded-full">
                  ⚡ Google Calendar checked in 0.8s &middot; Anita free at 3:00 PM
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

              {/* Vesper Finalized */}
              <div className="flex justify-end">
                <div className="bg-ink text-canvas p-4 rounded-2xl rounded-tr-sm max-w-[85%] sm:max-w-[70%] shadow-xs">
                  <p className="text-[12px] font-mono text-canvas/60 mb-1">Vesper &middot; 11:43 PM</p>
                  <p className="text-[14.5px] leading-relaxed font-normal">
                    ✓ All set! You are booked with Anita for Sunday at 3:00 PM. Calendar invite sent, see you then!
                  </p>
                </div>
              </div>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── Global Coordination & World Map (Foreign Client Ready) ── */}
        <ScrollReveal delay={0.18} className="mb-24">
          <div className="mb-8">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              global &middot; any timezone
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3">
              Awake for clients worldwide.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted max-w-[640px] leading-relaxed">
              When an international client or tourist in London, New York, or Sydney inquires during their afternoon, your local front desk is usually asleep. Vesper bridges every timezone with instant availability checks, multi-currency support, and live booking.
            </p>
          </div>

          <WinChrome title="vesper &middot; global live traffic">
            <div className="bg-[#fcfaf6] dark:bg-[#11161d] p-4 sm:p-8">
              <WorldMap
                dots={[
                  {
                    start: { lat: 40.7128, lng: -74.006, label: "New York" },
                    end: { lat: 27.7172, lng: 85.324, label: "Your Calendar" },
                  },
                  {
                    start: { lat: 51.5074, lng: -0.1278, label: "London" },
                    end: { lat: 27.7172, lng: 85.324, label: "Your Calendar" },
                  },
                  {
                    start: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                    end: { lat: 27.7172, lng: 85.324, label: "Your Calendar" },
                  },
                  {
                    start: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
                    end: { lat: 27.7172, lng: 85.324, label: "Your Calendar" },
                  },
                  {
                    start: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
                    end: { lat: 27.7172, lng: 85.324, label: "Your Calendar" },
                  },
                  {
                    start: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
                    end: { lat: 27.7172, lng: 85.324, label: "Your Calendar" },
                  },
                ]}
                lineColor="#3b82f6"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 mt-4 border-t border-line/60 text-left">
                <div>
                  <p className="text-[13.5px] font-bold text-ink">Automatic Timezone Sync</p>
                  <p className="text-[12.5px] text-muted leading-relaxed mt-1">
                    Recognizes international phone country codes (+1, +44, +971, +61) and schedules in your exact local time without confusion.
                  </p>
                </div>
                <div>
                  <p className="text-[13.5px] font-bold text-ink">Multi-Currency &amp; Tourist Ready</p>
                  <p className="text-[12.5px] text-muted leading-relaxed mt-1">
                    Quotes prices and packages in USD, EUR, GBP, or NPR effortlessly for international travelers, tour groups, and medical tourists.
                  </p>
                </div>
                <div>
                  <p className="text-[13.5px] font-bold text-ink">Zero Midnight Drop-off</p>
                  <p className="text-[12.5px] text-muted leading-relaxed mt-1">
                    Foreign travelers lock in their reservations before boarding their flights, instead of scrambling after landing at your shop.
                  </p>
                </div>
              </div>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── The Three Disciplines (Minimalist Grid) ── */}
        <ScrollReveal delay={0.2} className="mb-24">
          <div className="mb-8">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Three rules we refuse to break.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-signal-blue font-bold uppercase block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="text-[18px] font-bold text-ink mb-2 tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Quiet Apple-style CTA ── */}
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
                <span>🌙</span>
                <span>launch simulator</span>
              </Link>
              <Link
                href="/trust"
                className="text-[13.5px] font-medium text-muted hover:text-ink px-4 py-3 transition-colors"
              >
                read trust manifesto &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
