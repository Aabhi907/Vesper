"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { WinChrome, ScrollReveal } from "@/components/shared"
import { ChevronDown } from "lucide-react"

const PRINCIPLES = [
  {
    num: "01",
    title: "Zero hallucination writes",
    desc: "Language models propose bookings; database code commits them. If 3:00 PM is taken or lacks buffer, Vesper cannot book it. There are no exceptions.",
  },
  {
    num: "02",
    title: "Official Meta infrastructure",
    desc: "We exclusively connect through official Meta Cloud APIs. We never use unauthorized browser-scraping tools or reverse-engineered sessions that risk WhatsApp account bans.",
  },
  {
    num: "03",
    title: "Private by design",
    desc: "Your customer chats, phone numbers, and reservation history are never used to train public AI models. Your customer data belongs exclusively to your business.",
  },
  {
    num: "04",
    title: "Always human-accessible",
    desc: "You can intervene at any moment. If you reply to a client from your phone, Vesper senses the human presence and immediately pauses automation for that conversation.",
  },
]

const FAQS = [
  {
    q: "Can Vesper accidentally double-book my calendar?",
    a: "No. Vesper uses deterministic calendar locks. The AI only understands what service and time the customer wants. Our backend directly checks Google Calendar or Outlook in real time. If that slot is occupied or lacks sufficient buffer, Vesper will never confirm it.",
  },
  {
    q: "Will our WhatsApp business number get blocked or banned?",
    a: "Never. Account bans happen when services use unofficial WhatsApp Web scrapers. Vesper is built entirely on the official Meta WhatsApp Business Cloud API. Your account remains fully compliant with Meta policies.",
  },
  {
    q: "Who owns our customer data and client lists?",
    a: "You do. 100%. We do not sell, broker, or train on your customer records. You can export or delete your customer data at any time.",
  },
  {
    q: "What happens if our shop's Wi-Fi or electricity goes down?",
    a: "Vesper runs on redundant cloud infrastructure with 99.98% uptime. It does not require a computer in your salon or clinic. Customer messages are answered and calendar slots are synced 24/7 regardless of local internet issues.",
  },
]

export default function TrustPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  return (
    <main className="w-full min-h-screen bg-canvas text-ink pt-28 sm:pt-36 pb-28 px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="mx-auto max-w-[860px]">
        {/* ── Top quiet eyebrow ── */}
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted">
              trust &middot; principles
            </span>
          </div>

          {/* ── Main Apple-style Headline ── */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-ink mb-6 leading-[1.05]">
            AI decides intent.<br />
            The database decides truth.
          </h1>

          <p className="text-[17px] sm:text-[20px] text-muted leading-relaxed font-normal max-w-[680px] mb-12 sm:mb-16">
            We do not rely on decorative certification seals. Security and reliability at Vesper come from strict engineering rules, tenant isolation, and transactional safety.
          </p>
        </ScrollReveal>

        {/* ── Apple-style Notes Memo Window ── */}
        <ScrollReveal delay={0.1} className="mb-24">
          <WinChrome title="notes &middot; the vesper thesis">
            <div className="bg-[#fdfbf7] dark:bg-[#131922] p-8 sm:p-14 font-sans text-ink/85">
              <div className="space-y-6 text-[15px] sm:text-[16px] leading-[1.75] font-normal">
                <p>
                  Most AI tools treat language models like employees. They give an LLM direct access to their database and hope it doesn&apos;t make a mistake.
                </p>
                <p>
                  We think that is deeply irresponsible. A language model is an extraordinary listener: it can understand typos, emotional tone, and mixed Nepali-English slang at 2:00 AM.
                </p>
                <p className="font-semibold text-ink">
                  But language models should never write to a calendar on their own.
                </p>
                <p>
                  At Vesper, the AI only outputs a suggested action. Our backend verifies that suggestion against your real calendar, calculates buffers, and commits the booking atomically. If the slot is taken, Vesper cannot book it.
                </p>
                <p className="text-muted">
                  That is the only way we would trust software with our own business reputation.
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[13px] text-muted">
                <span>The engineering team, Vesper</span>
                <span className="font-mono text-[11px]">Kathmandu &middot; 2026</span>
              </div>
            </div>
          </WinChrome>
        </ScrollReveal>

        {/* ── The 4 Principles Grid ── */}
        <ScrollReveal delay={0.15} className="mb-24">
          <div className="mb-8">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              Four non-negotiable rules.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINCIPLES.map((p) => (
              <div
                key={p.num}
                className="p-8 rounded-2xl bg-white dark:bg-card border border-line shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-signal-blue font-bold uppercase block mb-3">
                    Rule {p.num}
                  </span>
                  <h3 className="text-[19px] font-bold text-ink mb-2.5 tracking-tight">
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

        {/* ── Minimalist Clean FAQs ── */}
        <ScrollReveal delay={0.2} className="mb-24">
          <div className="mb-8">
            <span className="text-[12px] font-mono tracking-widest uppercase text-muted block mb-2">
              clarity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
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

        {/* ── Quiet Bottom Action ── */}
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
                className="inline-flex items-center gap-2 bg-ink text-canvas text-[13.5px] font-semibold px-6 py-3 rounded-full hover:bg-ink/85 transition-all shadow-xs"
              >
                <span>🌙</span>
                <span>book a demo</span>
              </Link>
              <Link
                href="/product"
                className="text-[13.5px] font-medium text-muted hover:text-ink px-4 py-3 transition-colors"
              >
                view architecture &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
