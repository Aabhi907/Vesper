"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ShieldCheck,
  Lock,
  Database,
  Server,
  Zap,
  CheckCircle2,
  AlertTriangle,
  FileText,
  UserCheck,
  RefreshCw,
  ArrowRight,
  EyeOff,
  KeyRound,
  ChevronDown,
  Layers,
  Smartphone,
} from "lucide-react"

/* ══════════════════════════════════════════════════
   The 6 Core Trust Guarantees
══════════════════════════════════════════════════ */
const TRUST_GUARANTEES = [
  {
    number: "01",
    title: "Deterministic Calendar Enforcement",
    subtitle: "Zero Hallucination Writes",
    icon: Database,
    color: "text-signal-blue",
    bg: "bg-signal-blue/10",
    description:
      "Language models are generative; databases are transactional. The AI never has direct write permissions to your calendar. It can only emit a structured booking proposal that our deterministic backend strictly verifies against Google Calendar or Outlook before any confirmation is sent.",
    specs: [
      "ACID transactional validation on every appointment request",
      "Automatic mutex locking prevents simultaneous double-bookings",
      "If calendar verification fails, Vesper proposes the nearest open slots",
    ],
  },
  {
    number: "02",
    title: "Cryptographic Tenant Isolation",
    subtitle: "Absolute Data Partitioning",
    icon: Lock,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    description:
      "Every business operates within its own logically isolated data partition. Client contact information, booking logs, and customer chat histories are strictly segregated using scoped access tokens.",
    specs: [
      "AES-256 encryption at rest; TLS 1.3 encryption in transit",
      "Scoped OAuth 2.0 token management with zero persistent credential exposure",
      "Role-based access control (RBAC) across all staff and managerial accounts",
    ],
  },
  {
    number: "03",
    title: "Official Meta Cloud API Infrastructure",
    subtitle: "Zero WhatsApp Account Ban Risk",
    icon: Smartphone,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    description:
      "Unlike risky unofficial tools that scrape WhatsApp Web or reverse-engineer sessions (which leads to permanent Meta account bans), Vesper connects exclusively through official Meta Cloud APIs and verified Business Solution Provider channels.",
    specs: [
      "100% compliant with Meta Business Messaging Terms of Service",
      "Official WhatsApp template approval system for proactive notifications",
      "High-throughput webhook delivery with automatic retry exponential backoff",
    ],
  },
  {
    number: "04",
    title: "Zero Model Training on Your Data",
    subtitle: "Your Customer Conversations Stay Private",
    icon: EyeOff,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    description:
      "Your customer interactions and client reservation records are never used to train or fine-tune public AI models. We enforce strict enterprise zero-data-retention (ZDR) agreements with our model inference infrastructure.",
    specs: [
      "Zero-data-retention policy on inference calls",
      "No customer messages are ever stored in public AI training corpuses",
      "Complete compliance with standard international data sovereignty guidelines",
    ],
  },
  {
    number: "05",
    title: "Instant Human Takeover & Panic Failsafe",
    subtitle: "You Always Retain Complete Control",
    icon: UserCheck,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    description:
      "Vesper is designed to augment your front desk, not replace human judgment. If a guest asks for a manager, expresses negative sentiment, or has an exceptional requirement, Vesper pauses automation on that thread immediately.",
    specs: [
      "Instant WhatsApp & Push notification to the business owner",
      "Single-click 'Pause AI' toggle on any individual customer chat",
      "Smooth handover back to AI once your staff has resolved the inquiry",
    ],
  },
  {
    number: "06",
    title: "Immutable Audit Logs & Traceability",
    subtitle: "Every Action Fully Accountable",
    icon: FileText,
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    description:
      "Every automated interaction generates an immutable audit record. You can view the exact customer message, the timestamped calendar query, the slot verification payload, and the confirmation sent.",
    specs: [
      "Time-stamped audit logs with full raw payload visibility",
      "Full export capability (CSV/JSON) for tax, accounting, or record keeping",
      "Real-time diagnostic health monitoring with automatic error alerting",
    ],
  },
]

/* ══════════════════════════════════════════════════
   FAQ Questions & Answers on Trust
══════════════════════════════════════════════════ */
const TRUST_FAQS = [
  {
    q: "Can Vesper accidentally confirm an appointment when a slot is already booked?",
    a: "No. Vesper uses a deterministic two-phase commit architecture. The AI language model only extracts the customer's desired service and time. Our backend then directly executes a real-time FreeBusy query against your Google Calendar or Outlook database. If that slot is occupied or lacks sufficient buffer, Vesper will never confirm it — it will instead offer the client the closest available alternative slots.",
  },
  {
    q: "Will our business WhatsApp number get banned or blocked?",
    a: "Never. Account bans only happen when services use unauthorized 'WhatsApp Web scrapers' or modified APKs. Vesper is built 100% on the official Meta WhatsApp Business Cloud API. Your number remains fully verified, compliant, and approved by Meta.",
  },
  {
    q: "Who owns our customer data, phone numbers, and booking history?",
    a: "You do. 100%. Vesper does not sell, broker, or monetize your customer data. Your client list and chat history are your business's proprietary intellectual property. You can export or permanently delete your records at any time.",
  },
  {
    q: "What happens if our internet goes down or our staff is away?",
    a: "Because Vesper runs on cloud infrastructure with 99.98% uptime, your front desk remains fully awake even if your salon or clinic's local Wi-Fi drops. Customer messages on WhatsApp and Instagram are answered continuously, and calendar bookings sync directly to Google Cloud without requiring an in-shop computer.",
  },
  {
    q: "How does our team take over a conversation when a client needs personal attention?",
    a: "You can intervene at any moment. If your receptionist or owner sends a message directly to the customer via WhatsApp or your unified inbox, Vesper immediately detects human intervention and silences automated replies for that thread until you re-enable it.",
  },
  {
    q: "How does Vesper handle cancellations or rescheduling requests?",
    a: "When a customer asks to cancel or reschedule ('Can we move from 2 PM to 5 PM?'), Vesper checks your business cancellation policy, verifies the new slot on your calendar, deletes/updates the Google Calendar event atomically, and confirms the change to both the client and your staff.",
  },
]

export default function TrustPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  return (
    <main className="w-full min-h-screen bg-canvas text-ink pt-28 pb-24 px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-[1240px]">
        {/* ── Breadcrumb / Header Tag ── */}
        <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-signal-blue mb-4">
          <Link href="/" className="hover:underline opacity-80">Vesper</Link>
          <span>/</span>
          <span className="text-ink font-semibold">Trust &amp; Reliability Center</span>
        </div>

        {/* ── Hero Section ── */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-ink tracking-tight leading-[1.02] mb-6">
            AI decides intent.<br />
            The database <span className="text-signal-blue">decides truth.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted leading-relaxed font-normal">
            We do not rely on decorative certification badges. Security and reliability at Vesper come from strict engineering principles: deterministic calendar verification, cryptographic multi-tenant isolation, and zero-hallucination transactional writes.
          </p>

          {/* ── Real-Time Operational Badges ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-8">
            <div className="p-3.5 rounded-xl bg-soft-canvas border border-line">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[12px] font-mono font-bold text-ink">99.98%</span>
              </div>
              <p className="text-[11px] text-muted">Core API Uptime</p>
            </div>

            <div className="p-3.5 rounded-xl bg-soft-canvas border border-line">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-signal-blue" />
                <span className="text-[12px] font-mono font-bold text-ink">Zero Training</span>
              </div>
              <p className="text-[11px] text-muted">Customer Data Private</p>
            </div>

            <div className="p-3.5 rounded-xl bg-soft-canvas border border-line">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-[12px] font-mono font-bold text-ink">AES-256</span>
              </div>
              <p className="text-[11px] text-muted">Encrypted Storage</p>
            </div>

            <div className="p-3.5 rounded-xl bg-soft-canvas border border-line">
              <div className="flex items-center gap-2 mb-1">
                <Smartphone className="w-3.5 h-3.5 text-indigo-500" />
                <span className="text-[12px] font-mono font-bold text-ink">Official API</span>
              </div>
              <p className="text-[11px] text-muted">Meta Tech Partner</p>
            </div>
          </div>
        </div>

        {/* ── The 6 Core Trust Guarantees Grid ── */}
        <section className="mb-24">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-mono tracking-widest text-signal-blue uppercase font-bold mb-1">
              Engineering Commitments
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-4">
              The 6 Architectural Guarantees
            </h2>
            <p className="text-[15px] text-muted">
              How we ensure Vesper operates flawlessly across tens of thousands of customer conversations without embarrassing mistakes or calendar collisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_GUARANTEES.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.number}
                  className="p-7 rounded-2xl bg-white dark:bg-card border border-line shadow-xs hover:border-black/20 dark:hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[12px] font-mono font-bold text-muted/60">{item.number}</span>
                    </div>

                    <h3 className="text-[17px] font-bold text-ink mb-1">{item.title}</h3>
                    <p className={`text-[12px] font-mono font-semibold uppercase tracking-wide mb-3 ${item.color}`}>
                      {item.subtitle}
                    </p>
                    <p className="text-[13.5px] text-muted leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-line/60">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-2 text-[12px] text-ink/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Security Architecture Pipeline Visualization ── */}
        <section className="mb-24 p-8 sm:p-12 rounded-3xl bg-soft-canvas/60 border border-line">
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] font-mono tracking-widest text-signal-blue uppercase font-bold mb-1">
              End-to-End Data Flow
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
              Isolated VPC &amp; Token Architecture
            </h2>
            <p className="text-[14px] text-muted">
              Customer requests move through cryptographic checkpoints before touching your calendar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-5 rounded-xl bg-white dark:bg-card border border-line shadow-xs">
              <span className="text-[10px] font-mono text-signal-blue font-bold uppercase">Step 01</span>
              <h4 className="text-[14px] font-bold text-ink mt-1 mb-2">Customer Channel</h4>
              <p className="text-[12px] text-muted leading-relaxed">
                Client texts via WhatsApp, Instagram, or Web. Enforced TLS 1.3 transport.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-card border border-line shadow-xs">
              <span className="text-[10px] font-mono text-signal-blue font-bold uppercase">Step 02</span>
              <h4 className="text-[14px] font-bold text-ink mt-1 mb-2">Signature Validation</h4>
              <p className="text-[12px] text-muted leading-relaxed">
                HMAC SHA-256 header validation checks webhook authenticity instantly.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-card border border-line shadow-xs">
              <span className="text-[10px] font-mono text-signal-blue font-bold uppercase">Step 03</span>
              <h4 className="text-[14px] font-bold text-ink mt-1 mb-2">Deterministic Engine</h4>
              <p className="text-[12px] text-muted leading-relaxed">
                AI extracts intent; PostgreSQL transaction locks the slot atomically.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-card border border-line shadow-xs">
              <span className="text-[10px] font-mono text-signal-blue font-bold uppercase">Step 04</span>
              <h4 className="text-[14px] font-bold text-ink mt-1 mb-2">Calendar Vault</h4>
              <p className="text-[12px] text-muted leading-relaxed">
                Scoped OAuth token writes event to Google/Outlook with immutable audit log.
              </p>
            </div>
          </div>
        </section>

        {/* ── Deep Trust & Safety FAQ ── */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-mono tracking-widest text-signal-blue uppercase font-bold mb-1">
              Common Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink">
              Trust &amp; Reliability FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {TRUST_FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-line bg-white dark:bg-card overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-soft-canvas/30 transition-colors"
                  >
                    <span className="text-[15px] sm:text-[16px] font-bold text-ink leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-180 text-signal-blue" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-line/40 text-[14px] text-ink/80 leading-relaxed font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Bottom Call To Action ── */}
        <section className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-ink text-canvas relative overflow-hidden text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 max-w-xl">
            Run your front desk on verified infrastructure.
          </h2>
          <p className="text-canvas/70 max-w-lg text-[14px] sm:text-[16px] mb-8 leading-relaxed font-normal">
            Zero risky scrapers, zero hallucinations, and 100% calendar fidelity. See how Vesper automates customer inquiries safely.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#demo"
              className="flex items-center gap-2 bg-signal-blue text-white text-[14px] sm:text-[15px] font-semibold px-8 py-3.5 rounded-full hover:bg-signal-blue-dark transition-all shadow-md"
            >
              <span>Test The Interactive Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/product"
              className="flex items-center gap-2 text-canvas/80 hover:text-white text-[14px] sm:text-[15px] font-medium px-6 py-3.5 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <span>Inspect Product Architecture</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
