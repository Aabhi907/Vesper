"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageSquare,
  Clock,
  Sparkles,
  GitBranch,
  Lock,
  Layers,
  Smartphone,
  ChevronRight,
  UserCheck,
  AlertTriangle,
} from "lucide-react"

/* ══════════════════════════════════════════════════
   Stage Data for Interactive Architecture Pipeline
══════════════════════════════════════════════════ */
const PIPELINE_STAGES = [
  {
    step: "01",
    title: "Omnichannel Ingestion",
    short: "Ingestion",
    icon: MessageSquare,
    badge: "Official Meta Webhooks",
    desc: "Customer messages arrive via WhatsApp Cloud API, Instagram DM Graph API, or Web Chat with cryptographic HMAC SHA-256 verification.",
    technical: [
      "Zero unverified endpoints — strict signature checks",
      "Immediate 200 OK webhook acknowledgement (<80ms)",
      "Distributed deduplication queue (idempotency key per message)",
    ],
    sample: {
      channel: "WhatsApp Business API",
      payload: '{"from": "+9779801234567", "text": "Hajur bholi 3 baje slot khali cha? Hair styling garnu parne"}',
    },
  },
  {
    step: "02",
    title: "Bilingual NLP & Intent Extraction",
    short: "Intent NLP",
    icon: Cpu,
    badge: "Zero-Shot Entity Resolution",
    desc: "Our dual-engine model parses mixed Romanized Nepali and English, extracting service requirements, preferred times, party size, and staff preferences.",
    technical: [
      "Custom entity extraction for local dialect & slang",
      "Strict JSON schema generation with type assertions",
      "Temporal parser resolving relative dates ('bholi', 'next Friday at 4')",
    ],
    sample: {
      intent: "CHECK_AVAILABILITY_AND_BOOK",
      entities: '{"service": "hair_styling", "datetime": "tomorrow 15:00", "duration_min": 45, "language": "ne-NP"}',
    },
  },
  {
    step: "03",
    title: "Deterministic Availability Engine",
    short: "Calendar Logic",
    icon: Calendar,
    badge: "100% Deterministic (No Hallucinations)",
    desc: "The AI NEVER guesses available slots. Read-only queries execute against Google Calendar or Outlook APIs, evaluating real rosters, buffers, and holidays.",
    technical: [
      "ACID read against real-time busy/free ranges",
      "Automatic 15-minute sanitation buffer calculation",
      "Staff availability roster cross-referencing",
    ],
    sample: {
      calendar_check: "Google Calendar FreeBusy Query",
      status: "SLOT_FREE",
      target_slot: "2026-09-27T15:00:00+05:45 (Confirmed 100% available)",
    },
  },
  {
    step: "04",
    title: "Two-Phase Transactional Booking",
    short: "Database Lock",
    icon: Database,
    badge: "Zero Double-Booking Guarantee",
    desc: "Locks the calendar appointment atomically. If two customers request the same 3:00 PM slot simultaneously, atomic database locks prevent collisions.",
    technical: [
      "Atomic write transaction with collision rollback",
      "Customer contact record updated with booking history",
      "Unique booking reference ID and audit log generated",
    ],
    sample: {
      action: "INSERT_APPOINTMENT",
      record: '{"booking_id": "VSP-88219", "client": "+9779801234567", "slot": "15:00", "staff": "Anita K."}',
    },
  },
  {
    step: "05",
    title: "Verified Dispatch & Reminders",
    short: "Dispatch",
    icon: CheckCircle2,
    badge: "Instant Confirmation",
    desc: "Sends verified WhatsApp/Instagram confirmation with calendar invite links, location directions, and pushes an instant alert to the business owner.",
    technical: [
      "Meta-approved interactive WhatsApp template message",
      "Push notification to owner's Vesper companion app",
      "Automated WhatsApp reminder scheduled 2 hours before appointment",
    ],
    sample: {
      dispatch: "WhatsApp Template #booking_confirmed",
      message: "✓ Booked! Hair styling tomorrow at 3:00 PM with Anita. See you at Glam Studio!",
    },
  },
]

/* ══════════════════════════════════════════════════
   Comparison Matrix Data
══════════════════════════════════════════════════ */
const COMPARISON_ROWS = [
  {
    feature: "Calendar Slot Accuracy",
    vesper: "100% Deterministic — Queries real Google/Outlook database slots",
    traditionalBot: "Guesses or hallucinates times; causes double-bookings",
    humanReception: "High accuracy, but unavailable after 8 PM or during peak rushes",
  },
  {
    feature: "24/7 Midnight Booking",
    vesper: "Instant reply in <2.5 seconds at 2:00 AM on WhatsApp & Instagram",
    traditionalBot: "Canned 'we will contact you tomorrow' autoreply",
    humanReception: "Zero replies until 10:00 AM next morning",
  },
  {
    feature: "Nepali & English Dialect",
    vesper: "Native Romanized Nepali + English code-switching ('bholi slot cha?')",
    traditionalBot: "Breaks or responds with 'Sorry, I don't understand'",
    humanReception: "Fluent, but limited by staff turnover & availability",
  },
  {
    feature: "Multi-Staff Roster Routing",
    vesper: "Automatically assigns requested stylist/doctor or next free staff",
    traditionalBot: "Requires human manual sorting",
    humanReception: "Manual check on paper or separate calendar app",
  },
  {
    feature: "Automated WhatsApp Reminders",
    vesper: "Automated 2-hour pre-visit ping (cuts no-shows by 78%)",
    traditionalBot: "Not supported or requires expensive Zapier hacks",
    humanReception: "Takes 2-3 hours of manual staff calling every morning",
  },
  {
    feature: "Human Handover Failsafe",
    vesper: "Instant alert to manager if complex/urgent question detected",
    traditionalBot: "Loops in frustrating bot dead-ends",
    humanReception: "Inherent (human handles everything)",
  },
]

export default function ProductPage() {
  const [activeStage, setActiveStage] = React.useState(0)

  return (
    <main className="w-full min-h-screen bg-canvas text-ink pt-28 pb-24 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* ── Breadcrumb / Tagline ── */}
        <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-signal-blue mb-4">
          <Link href="/" className="hover:underline opacity-80">Vesper</Link>
          <span>/</span>
          <span className="text-ink font-semibold">Product Architecture</span>
        </div>

        {/* ── Hero Header ── */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-ink tracking-tight leading-[1.02] mb-6">
            AI understands intent.<br />
            Deterministic systems <span className="text-signal-blue">execute truth.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed font-normal">
            Most booking bots fail because LLMs are generative — they hallucinate available hours and double-book clients. Vesper is an engineering pipeline: language models decode what your customer wants, but strict database code locks your real calendar.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8">
            <div className="flex items-center gap-2 text-[13px] font-medium text-ink bg-soft-canvas border border-line px-3.5 py-1.5 rounded-full">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>&lt; 2.2s Average Response Time</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium text-ink bg-soft-canvas border border-line px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>0% Double-Booking Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] font-medium text-ink bg-soft-canvas border border-line px-3.5 py-1.5 rounded-full">
              <Smartphone className="w-4 h-4 text-signal-blue" />
              <span>Official WhatsApp Cloud API</span>
            </div>
          </div>
        </div>

        {/* ── Interactive 5-Stage Architecture Pipeline ── */}
        <section className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-line">
            <div>
              <p className="text-[11px] font-mono tracking-widest text-signal-blue uppercase font-bold mb-1">
                The 5-Stage Execution Pipeline
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
                How every customer message becomes a confirmed booking
              </h2>
            </div>
            <p className="text-[12px] font-mono text-muted">
              Click any stage below to inspect the engineering flow
            </p>
          </div>

          {/* Pipeline Stage Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
            {PIPELINE_STAGES.map((s, idx) => {
              const Icon = s.icon
              const isSelected = activeStage === idx
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-[115px] ${
                    isSelected
                      ? "bg-white dark:bg-card border-signal-blue shadow-md ring-2 ring-signal-blue/20"
                      : "bg-soft-canvas/70 hover:bg-soft-canvas border-line text-muted hover:text-ink"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[11px] font-mono font-bold ${isSelected ? "text-signal-blue" : "opacity-60"}`}>
                      STAGE {s.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isSelected ? "text-signal-blue" : "opacity-50"}`} />
                  </div>
                  <div>
                    <p className={`text-[13px] font-bold leading-tight ${isSelected ? "text-ink" : "text-ink/80"}`}>
                      {s.short}
                    </p>
                    <p className="text-[11px] text-muted truncate mt-0.5">{s.badge}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Stage Detailed Inspector Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white dark:bg-card border border-line rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-signal-blue/10 text-signal-blue flex items-center justify-center text-[13px] font-mono font-bold">
                      {PIPELINE_STAGES[activeStage].step}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink">
                        {PIPELINE_STAGES[activeStage].title}
                      </h3>
                      <span className="inline-block text-[11px] font-mono uppercase tracking-wide text-signal-blue font-semibold">
                        {PIPELINE_STAGES[activeStage].badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-[15px] sm:text-[16px] text-ink/80 leading-relaxed font-normal">
                    {PIPELINE_STAGES[activeStage].desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-[11.5px] font-mono uppercase tracking-wider text-muted font-bold">
                      Technical Guarantees:
                    </p>
                    {PIPELINE_STAGES[activeStage].technical.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[13.5px] text-ink/90">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Payload / Terminal Preview */}
                <div className="lg:col-span-5 bg-[#0e131f] text-slate-200 rounded-xl p-5 border border-white/10 font-mono text-[12px] shadow-inner overflow-x-auto">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      Live Pipeline Inspector
                    </span>
                    <span>Stage {PIPELINE_STAGES[activeStage].step} Output</span>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(PIPELINE_STAGES[activeStage].sample).map(([k, v]) => (
                      <div key={k} className="space-y-1">
                        <p className="text-amber-400 text-[11px] uppercase tracking-wide font-semibold">// {k}</p>
                        <p className="text-emerald-300 break-words leading-relaxed">{v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-[10.5px] text-slate-400">
                    <span>Latency: 28ms</span>
                    <span>Status: 200 OK</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── Core Engineering Capabilities Grid ── */}
        <section className="mb-24">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-mono tracking-widest text-signal-blue uppercase font-bold mb-1">
              Built for Real Service Operations
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
              Everything required to run an autonomous front desk
            </h2>
            <p className="text-[15px] text-muted">
              Built specifically for appointment-driven businesses in Nepal & global markets: salons, boutique hotels, dental clinics, auto service centers, and consulting rooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-signal-blue/10 text-signal-blue flex items-center justify-center mb-5">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">Two-Way Live Calendar Sync</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">
                Connects directly to Google Calendar and Microsoft Outlook. If an owner blocks off a slot manually on their phone, Vesper immediately treats that hour as unavailable.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-5">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">Intelligent Buffer Management</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">
                Automatically pads 15 or 30-minute transition buffers between appointments for hair washing, room sanitization, or client intake so staff are never rushed.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-5">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">Multi-Staff Roster Routing</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">
                Routes appointments to the exact stylist, dentist, or mechanic requested by the customer. If no preference is given, it intelligently round-robins to the next free team member.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-5">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">Instant Human Handover</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">
                When a customer asks for a manager, reports an emergency, or has a custom request, Vesper pauses automation for that conversation and sends an instant WhatsApp alert to the owner.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">Unified Multi-Channel Inbox</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">
                Customer interactions across WhatsApp, Instagram DMs, and Facebook Messenger route into a single unified queue so you never lose track of a guest across channels.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-5">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-[17px] font-bold text-ink mb-2">Meta Cloud API Compliance</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">
                100% compliant with Meta Business Policies. Unlike unauthorized scrapers or web-automation hacks, your official business WhatsApp number will never get banned.
              </p>
            </div>
          </div>
        </section>

        {/* ── Comprehensive Comparison Table ── */}
        <section className="mb-24">
          <div className="mb-10 text-center max-w-xl mx-auto">
            <p className="text-[11px] font-mono tracking-widest text-signal-blue uppercase font-bold mb-1">
              Architectural Comparison
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              Why traditional chatbots fail at appointments
            </h2>
          </div>

          <div className="w-full overflow-x-auto rounded-2xl border border-line bg-white dark:bg-card shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-line bg-soft-canvas/50 text-[12px] font-mono uppercase tracking-wider text-muted">
                  <th className="py-4 px-6 font-bold text-ink">Capability</th>
                  <th className="py-4 px-6 font-bold text-signal-blue bg-signal-blue/5">Vesper AI Engine</th>
                  <th className="py-4 px-6 font-semibold">Generic AI Chatbot</th>
                  <th className="py-4 px-6 font-semibold">Human Receptionist</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[13px]">
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className="hover:bg-soft-canvas/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-ink whitespace-nowrap">{row.feature}</td>
                    <td className="py-4 px-6 font-semibold text-signal-blue bg-signal-blue/5 leading-relaxed">
                      {row.vesper}
                    </td>
                    <td className="py-4 px-6 text-muted leading-relaxed">{row.traditionalBot}</td>
                    <td className="py-4 px-6 text-muted leading-relaxed">{row.humanReception}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-ink text-canvas relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-signal-blue/20 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

          <span className="text-[12px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-3">
            DEPLOYABLE IN UNDER 15 MINUTES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-5 max-w-2xl leading-tight">
            Ready to stop losing bookings while your receptionist is asleep?
          </h2>
          <p className="text-canvas/70 max-w-xl text-[15px] sm:text-[17px] mb-8 leading-relaxed font-normal">
            Connect your WhatsApp Business number and Google Calendar today. Zero coding required. Test our interactive simulator right now.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#demo"
              className="flex items-center gap-2 bg-signal-blue text-white text-[14px] sm:text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-signal-blue-dark transition-all shadow-md"
            >
              <span>Explore Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trust"
              className="flex items-center gap-2 text-canvas/80 hover:text-white text-[14px] sm:text-[15px] font-medium px-6 py-3.5 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Read Security & Trust Specs</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
