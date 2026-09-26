"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"

type TabKey = "codeswitch" | "nepali" | "english"

interface ChatTurn {
  guest: { text: string; lang: "Roman Nepali" | "English" }
  ai: { text: string; lang: "Roman Nepali" | "English" }
  note?: string
}

const CONVERSATIONS: Record<TabKey, {
  tabLabel: string
  subtitle: string
  turns: ChatTurn[]
}> = {
  codeswitch: {
    tabLabel: "⚡ Code-Switching (Mixed)",
    subtitle: "Customer starts in Roman Nepali, then switches to English. Vesper adapts automatically.",
    turns: [
      {
        guest: {
          text: "Dai bholi 2 baje haircut ko slot khali cha? Kati parcha?",
          lang: "Roman Nepali",
        },
        ai: {
          text: "Namaste! 🙏 Cha hajur, bholi 2:00 PM ma barber Sunil sanga slot khali cha. Haircut ko Rs. 400 parcha. Fix gardim?",
          lang: "Roman Nepali",
        },
        note: "Customer switches to English ⤷",
      },
      {
        guest: {
          text: "Yes please! Can I also add a hair wash and beard trim?",
          lang: "English",
        },
        ai: {
          text: "Done! Added beard trim & hair wash (+Rs. 450). Your appointment is booked for tomorrow at 2:00 PM with Sunil. Sending your calendar invite now! 📅",
          lang: "English",
        },
      },
    ],
  },
  nepali: {
    tabLabel: "🇳🇵 Pure Roman Nepali",
    subtitle: "Full conversation in local Roman Nepali with honorifics (dai, hajur, tapai).",
    turns: [
      {
        guest: {
          text: "Namaste, bholi ko lagi couple room cha? Balcony bhako. Halka discount milcha?",
          lang: "Roman Nepali",
        },
        ai: {
          text: "Namaste hajur! 🙏 Cha hai, bholi Mountain View Balcony room khali cha. Regular Rs. 4,000 ho tara direct booking ma Rs. 3,600 ma breakfast sahit huncha. Book gardim ta?",
          lang: "Roman Nepali",
        },
      },
      {
        guest: {
          text: "Huncha dai book gardinu, Fonepay bata tirchu ma.",
          lang: "Roman Nepali",
        },
        ai: {
          text: "Huss hajur, room reserve garisakyeu! 🏨 Fonepay QR tala pathaidye, payment pachi confirmation voucher auncha.",
          lang: "Roman Nepali",
        },
      },
    ],
  },
  english: {
    tabLabel: "🇬🇧 Pure English",
    subtitle: "For expats, tourists, and international guests texting in English.",
    turns: [
      {
        guest: {
          text: "Hi! Do you have a table for 4 this evening around 7:30 PM?",
          lang: "English",
        },
        ai: {
          text: "Good afternoon! 🍽️ Yes, we have a garden terrace table available at 7:30 PM. Would you like me to reserve it for you?",
          lang: "English",
        },
      },
      {
        guest: {
          text: "Yes please, under the name Sarah Jenkins.",
          lang: "English",
        },
        ai: {
          text: "Confirmed, Sarah! 🥂 Your table for 4 is reserved for tonight at 7:30 PM. See you soon!",
          lang: "English",
        },
      },
    ],
  },
}

/* Handdrawn Doodle Arrow */
function HanddrawnArrow({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 24" fill="none" className={className} stroke="currentColor">
      <path
        d="M3 14 C12 18, 24 16, 35 7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 6 L35 7 L32 14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BilingualEngineSection() {
  const [activeTab, setActiveTab] = React.useState<TabKey>("codeswitch")
  const current = CONVERSATIONS[activeTab]

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-canvas border-b border-line relative overflow-hidden" id="bilingual">
      <div className="mx-auto max-w-[720px]">
        {/* Minimal, Simple Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-canvas border border-line text-[11px] font-semibold text-muted uppercase tracking-wider mb-2.5">
            <span>🇳🇵</span>
            <span>Bilingual Intelligence</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink tracking-tight mb-2">
            Speaks Roman Nepali. Adapts to English.
          </h2>

          <p className="text-[13.5px] sm:text-[14.5px] text-muted max-w-[520px] mx-auto leading-relaxed">
            Whether your customers text <span className="font-semibold text-ink">&ldquo;Dai bholi slot cha?&rdquo;</span> or in English, Vesper understands the local dialect and books the calendar.
          </p>

          {/* Simple Tab Pills */}
          <div className="inline-flex items-center p-1 rounded-full bg-soft-canvas border border-line mt-5 gap-1">
            {(Object.keys(CONVERSATIONS) as TabKey[]).map((key) => {
              const isActive = activeTab === key
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                    isActive
                      ? "bg-ink text-white dark:bg-white dark:text-zinc-900 shadow-xs"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {CONVERSATIONS[key].tabLabel}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Handdrawn Chat Canvas Container ── */}
        <div className="relative rounded-2xl sm:rounded-3xl border-2 border-ink/80 dark:border-white/40 bg-white dark:bg-soft-canvas p-5 sm:p-7 shadow-[4px_5px_0px_0px_rgba(0,0,0,0.85)] dark:shadow-[4px_5px_0px_0px_rgba(255,255,255,0.25)] transition-all">
          {/* Top Bar with window dots */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-line text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
              <span className="font-mono text-[11px] text-muted ml-2">vesper-bilingual</span>
            </div>

            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-500/20">
              ● Live auto-adaptation
            </span>
          </div>

          {/* Conversation Exchange */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="space-y-4"
            >
              {current.turns.map((turn, idx) => (
                <React.Fragment key={idx}>
                  {/* Guest Message: Handdrawn styled right bubble */}
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-bold text-muted mb-1 px-1">
                      Guest ({turn.guest.lang})
                    </span>
                    <div className="relative max-w-[85%] sm:max-w-[78%] px-4 py-2.5 rounded-2xl rounded-tr-xs border-2 border-ink dark:border-white/50 bg-[hsl(40_12%_96%)] dark:bg-[#1a1b20] text-ink text-[13px] sm:text-[13.5px] leading-relaxed shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                      {turn.guest.text}
                    </div>
                  </div>

                  {/* Vesper AI Message: Handdrawn styled left bubble */}
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold text-ink mb-1 px-1 flex items-center gap-1">
                      <span>✨ Vesper AI ({turn.ai.lang})</span>
                    </span>
                    <div className="relative max-w-[88%] sm:max-w-[82%] px-4 py-2.5 rounded-2xl rounded-tl-xs border-2 border-ink dark:border-white/50 bg-white dark:bg-[#121316] text-ink text-[13px] sm:text-[13.5px] leading-relaxed shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
                      {turn.ai.text}
                    </div>
                  </div>

                  {/* Handdrawn Transition Note between messages */}
                  {turn.note && (
                    <div className="flex items-center justify-center gap-2 py-1 text-muted text-[11.5px] font-semibold italic">
                      <HanddrawnArrow className="w-5 h-4 text-ink dark:text-white" />
                      <span>{turn.note}</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Simple Bottom Footer note */}
          <div className="mt-5 pt-3.5 border-t border-line flex items-center justify-between text-[11.5px] text-muted">
            <span className="flex items-center gap-1">
              <span>✦</span>
              <span>Understands typos, slang &amp; Nepali honorifics</span>
            </span>
            <span className="hidden sm:inline font-medium text-ink">
              Direct calendar lock
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
