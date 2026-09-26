import { MessageSquare, Calendar, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Omnichannel Front Desk",
      desc: "Connect WhatsApp Business, Instagram Direct Messages, Facebook Messenger, and your website widget into a single intelligent inbox.",
      highlight: "WhatsApp · Instagram · Messenger",
    },
    {
      icon: Calendar,
      title: "Real Availability Engine",
      desc: "Connects directly with your booking system or calendar. Never overbooks, double-books, or proposes unavailable time slots.",
      highlight: "Zero double-bookings",
    },
    {
      icon: Zap,
      title: "Instant 24/7 Midnight Responses",
      desc: "Captures high-value leads and answers inquiries while you sleep, ensuring customers don't go to competitors when you're closed.",
      highlight: "< 2 second latency",
    },
    {
      icon: Shield,
      title: "Grounded Knowledge Base",
      desc: "Answers based strictly on your verified prices, staff list, policies, and catalog. Hallucination-free and reliable.",
      highlight: "100% verified data",
    },
  ]

  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-soft-canvas">
      <div className="mx-auto max-w-[1100px]">
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-4">Core Features</p>
          <h1 className="text-h1 text-ink mb-6">Engineered for service businesses.</h1>
          <p className="text-lead text-muted">
            Vesper handles the repetitive messaging, scheduling, and reservation flow so your team can focus on serving your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feat) => (
            <div key={feat.title} className="bg-white rounded-2xl p-8 border border-line shadow-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-signal-blue flex items-center justify-center mb-6">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-bold text-ink mb-2">{feat.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed mb-6">{feat.desc}</p>
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-line text-[12px] font-semibold text-signal-blue">
                <CheckCircle2 className="w-4 h-4" />
                <span>{feat.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/#demo"
            className="inline-flex items-center gap-2 bg-ink text-canvas text-[14px] font-semibold px-6 py-3 rounded-full hover:bg-ink/80 transition-colors"
          >
            <span>See the live interactive demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
