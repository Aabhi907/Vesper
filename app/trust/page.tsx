"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { WinChrome, ScrollReveal } from "@/components/shared"
import { useInteractiveTilt } from "@/hooks"
import { ChevronDown, ShieldCheck, Server, Lock, UserCheck, ArrowRight } from "lucide-react"

const PRINCIPLES: { num: string; icon: React.ReactNode; title: string; desc: string }[] = [
  {
    num: "01",
    icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
    title: "Zero hallucination writes",
    desc: "Language models propose bookings; database code commits them. If 3:00 PM is taken or lacks buffer, Vesper cannot book it. There are no exceptions.",
  },
  {
    num: "02",
    icon: <Server className="w-6 h-6" strokeWidth={1.5} />,
    title: "Official Meta infrastructure",
    desc: "We exclusively connect through official Meta Cloud APIs. We never use unauthorized browser-scraping tools or reverse-engineered sessions that risk WhatsApp account bans.",
  },
  {
    num: "03",
    icon: <Lock className="w-6 h-6" strokeWidth={1.5} />,
    title: "Private by design",
    desc: "Your customer chats, phone numbers, and reservation history are never used to train public AI models. Your customer data belongs exclusively to your business.",
  },
  {
    num: "04",
    icon: <UserCheck className="w-6 h-6" strokeWidth={1.5} />,
    title: "Always human-accessible",
    desc: "You can intervene at any moment. If you reply to a client from your phone, Vesper senses the human presence and immediately pauses automation for that conversation.",
  },
]

const FAQS = [
  {
    q: "Can Vesper accidentally double-book my calendar?",
    a: "No. A double booking at a busy salon or clinic is a human tragedy, so we treat it like one. Language models propose bookings; database transactions lock them. If 3:00 PM is taken or lacks buffer, Vesper cannot book it. There are no exceptions.",
  },
  {
    q: "Will our WhatsApp business number get blocked or banned?",
    a: "Never. Account bans happen when services run reverse-engineered WhatsApp Web scripts on an old laptop under someone's desk. Vesper connects strictly via official Meta Cloud APIs. Your account remains 100% compliant with Meta terms.",
  },
  {
    q: "Who owns our customer data and client lists?",
    a: "You do. 100%. We do not sell, broker, or train AI on your customer records. If you ever leave Vesper, you take your data with you.",
  },
  {
    q: "What happens if our shop's Wi-Fi or electricity goes down?",
    a: "Vesper lives in redundant cloud data centers, not on your salon's router. Your router can catch fire; your 2 AM appointments will still be safely booked.",
  },
]

function TiltCard({ num, icon, title, desc }: { num: string; icon: React.ReactNode; title: string; desc: string }) {
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
        {/* Depth shadow */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{ x: motionProps.shadowX, y: motionProps.shadowY, opacity: hover ? 0.32 : 0.07 }}
            className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl bg-black/40 dark:bg-black/60 blur-[22px] transition-opacity duration-300"
          />
        )}

        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-card border border-line shadow-xs h-full min-h-[250px]">
          {/* Pointer glow */}
          {canTilt && (
            <motion.div
              aria-hidden
              style={{ x: motionProps.glowX, y: motionProps.glowY, opacity: hover ? 0.4 : 0 }}
              className="pointer-events-none absolute -inset-20 z-0 rounded-full bg-gradient-to-tr from-signal-blue/20 to-purple-400/15 blur-[50px] transition-opacity duration-500"
            />
          )}

          {/* Sheen sweep */}
          {canTilt && (
            <motion.div
              aria-hidden
              style={{ x: motionProps.sheenX }}
              className="pointer-events-none absolute inset-0 size-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-white/8 to-transparent z-10"
            />
          )}

          <div
            style={canTilt ? { transform: "translateZ(25px)", transformStyle: "preserve-3d" } : undefined}
            className="p-8 sm:p-9 flex flex-col justify-between h-full relative z-10"
          >
            {/* Top row: big transparent number */}
            <div className="flex items-start justify-end -mt-2 -mr-1">
              <span
                className="text-[76px] font-black leading-none select-none"
                style={{ color: "hsl(var(--ink) / 0.05)", letterSpacing: "-0.04em" }}
              >
                {num}
              </span>
            </div>

            {/* Bottom: icon + title + description */}
            <div>
              <div className="w-10 h-10 rounded-xl bg-soft-canvas dark:bg-white/5 border border-line flex items-center justify-center mb-4 text-ink">
                {icon}
              </div>
              <h3 className="text-[19px] font-bold text-ink mb-2 tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-[13.5px] text-muted leading-relaxed font-normal">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function TrustPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  return (
    <main className="w-full min-h-screen bg-canvas text-ink pt-28 sm:pt-36 pb-28 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="mx-auto max-w-[860px]">
        {/* ── Top quiet eyebrow & Header (Center Aligned) ── */}
        <ScrollReveal className="text-center flex flex-col items-center">
          <div className="mb-6">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted">
              trust &middot; principles
            </span>
          </div>

          {/* ── Main Apple-style Headline ── */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.05] text-center">
            AI decides intent.<br />
            The database decides truth.
          </h1>

          <p className="text-[17px] sm:text-[20px] text-muted leading-relaxed font-normal max-w-[680px] mx-auto mb-12 sm:mb-16 text-center">
            We do not rely on decorative certification seals. Security and reliability at Vesper come from strict engineering rules, tenant isolation, and transactional safety.
          </p>
        </ScrollReveal>

        {/* ── Apple-style Notes Memo Window (with Sticky Note & Handwriting Polish) ── */}
        <ScrollReveal delay={0.1} className="mb-32 sm:mb-36">
          <WinChrome title="notes &middot; the vesper thesis">
            <div
              className="bg-[#fdfbf7] dark:bg-[#131922] p-8 sm:p-14 text-ink/85 relative overflow-hidden"
              style={{ fontFamily: "var(--font-handwriting), cursive" }}
            >
              {/* Faint ruled lines for the notebook feel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.06]"
                style={{
                  backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, hsl(var(--ink)) 31px, hsl(var(--ink)) 32px)",
                  backgroundPositionY: "12px",
                }}
              />

              {/* Pinned Yellow Sticky Note */}
              <div className="sm:absolute sm:top-8 sm:right-8 mb-6 sm:mb-0 z-20 max-w-[210px] bg-[#fef9c3] dark:bg-[#fef08a] text-[#713f12] p-3.5 sm:p-4 rounded-xs shadow-md border border-amber-300/80 rotate-[-2deg] select-none font-sans">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider block mb-1 text-amber-800/80">
                  Rule #1
                </span>
                <p className="text-[13px] sm:text-[13.5px] font-medium leading-snug">
                  If the calendar says no, Vesper says no. No exceptions.
                </p>
              </div>

              <div className="space-y-5 text-[20px] sm:text-[22px] leading-[1.7] font-normal relative z-10 sm:pr-48">
                <p>
                  Most AI tools treat language models like employees. They give an LLM direct access to their database and{" "}
                  <span className="line-through decoration-rose-500/80 decoration-[2.5px] opacity-75">
                    hope for the best
                  </span>{" "}
                  pray it doesn&apos;t double-book a Saturday.
                </p>
                <p>
                  We think that is deeply irresponsible. A language model is an extraordinary listener: it can understand typos, emotional tone, and mixed Nepali-English slang at 2:00 AM.
                </p>
                <p className="font-semibold text-ink text-[21px] sm:text-[23px]">
                  But language models should never write to a calendar on their own.
                </p>
                <p>
                  At Vesper, the AI only outputs a suggested action. Our backend verifies that suggestion against your real calendar, calculates buffers, and commits the booking atomically. If the slot is taken, Vesper cannot book it.
                </p>
                <p className="text-muted">
                  That is the only way we would trust software with our own business reputation.
                </p>
              </div>

              <div
                className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between relative z-10"
                style={{ fontFamily: "var(--font-handwriting), cursive" }}
              >
                <span className="text-[20px] text-ink font-bold">&mdash; The engineering team, Vesper</span>
                <span className="text-[16px] text-muted">Kathmandu &middot; 2026</span>
              </div>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── The 4 Principles Grid (Eyebrow dropped for pure confidence) ── */}
        <ScrollReveal delay={0.15} className="mb-32 sm:mb-36">
          <div className="mb-10 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink text-center">
              Four non-negotiable rules.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <TiltCard key={p.num} num={p.num} icon={p.icon} title={p.title} desc={p.desc} />
            ))}
          </div>
        </ScrollReveal>

        {/* ── Apple-style "Anti-BS" Comparison Matrix ── */}
        <ScrollReveal delay={0.18} className="mb-32 sm:mb-36">
          <div className="mb-8 text-center flex flex-col items-center">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              the contrast
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink text-center">
              Two completely different philosophies.
            </h2>
            <p className="text-[15px] sm:text-[16px] text-muted max-w-[620px] leading-relaxed mx-auto text-center font-normal mt-2">
              Most booking bots are thin wrappers around language models. Vesper is a hardened booking engine that happens to understand natural language.
            </p>
          </div>

          <WinChrome title="architecture &middot; comparison matrix">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[13.5px] sm:text-[14px]">
                <thead>
                  <tr className="border-b border-line bg-soft-canvas/50">
                    <th className="py-4 px-5 sm:px-8 font-mono text-[11px] uppercase tracking-wider text-muted font-bold w-1/4">
                      Capability
                    </th>
                    <th className="py-4 px-5 sm:px-8 font-semibold text-muted/70 w-[37.5%]">
                      Generic AI Chatbots
                    </th>
                    <th className="py-4 px-5 sm:px-8 font-bold text-signal-blue w-[37.5%]">
                      Vesper Architecture
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 bg-white dark:bg-card">
                  <tr>
                    <td className="py-4 px-5 sm:px-8 font-medium text-ink">Availability Check</td>
                    <td className="py-4 px-5 sm:px-8 text-muted">Guesses availability from chat memory &amp; prompts</td>
                    <td className="py-4 px-5 sm:px-8 text-ink font-medium">Locks Google Calendar via atomic API call</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 sm:px-8 font-medium text-ink">WhatsApp Connection</td>
                    <td className="py-4 px-5 sm:px-8 text-muted">Runs on unauthorized scrapers that risk phone bans</td>
                    <td className="py-4 px-5 sm:px-8 text-ink font-medium">Official Meta Cloud API &amp; verified webhook pipeline</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 sm:px-8 font-medium text-ink">Pricing &amp; Catalog</td>
                    <td className="py-4 px-5 sm:px-8 text-muted">Invents phantom services and discounts when flattered</td>
                    <td className="py-4 px-5 sm:px-8 text-ink font-medium">Strictly bound to your verified catalog rules</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-5 sm:px-8 font-medium text-ink">Customer Privacy</td>
                    <td className="py-4 px-5 sm:px-8 text-muted">Chats pooled to train public foundation models</td>
                    <td className="py-4 px-5 sm:px-8 text-ink font-medium">Isolated tenant data; zero public model training</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── Minimalist Clean FAQs (Eyebrow dropped for pure confidence) ── */}
        <ScrollReveal delay={0.2} className="mb-32 sm:mb-36">
          <div className="mb-10 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink text-center">
              Frequently asked questions.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-line bg-white dark:bg-card overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-soft-canvas/30 transition-colors"
                  >
                    <span className="text-[15px] sm:text-[16px] font-semibold text-ink leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180 text-signal-blue" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-line/40 text-[14px] text-muted leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </ScrollReveal>

        {/* ── Quiet Bottom Action (Button-in-Button Architecture + Classic Footnote) ── */}
        <ScrollReveal delay={0.25} className="pt-8 border-t border-line">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                Try Vesper today.
              </h3>
              <p className="text-[14.5px] text-muted">
                Experience how quiet, reliable front-desk automation feels.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/#demo"
                className="group inline-flex items-center gap-3 bg-ink text-canvas text-[13.5px] font-semibold pl-5 pr-2 py-1.5 rounded-full hover:bg-ink/85 transition-all shadow-xs active:scale-[0.98]"
              >
                <span>book a demo</span>
                <span className="w-7 h-7 rounded-full bg-canvas/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-canvas" />
                </span>
              </Link>
              <Link
                href="/product"
                className="text-[13.5px] font-medium text-muted hover:text-ink px-4 py-3 transition-colors"
              >
                view architecture &rarr;
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

