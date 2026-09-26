import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <main className="w-full pt-32 pb-24 px-4 sm:px-6 bg-canvas min-h-screen">
      <div className="mx-auto max-w-[840px]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted hover:text-ink transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-5 h-5 text-signal-blue" />
          <span className="text-[12px] font-bold uppercase tracking-wider text-muted">
            Legal &amp; Compliance
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-[13px] text-muted mb-10">Last updated: September 26, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[15px] text-ink/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-2">1. Introduction</h2>
            <p>
              Vesper (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the personal data of our users and their end customers. This Privacy Policy describes how we collect, store, and process data when you use our AI front desk services across WhatsApp, Instagram, Messenger, and web widgets.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">2. Information We Process</h2>
            <p className="mb-2">We process information solely to provide automated booking and front-desk messaging:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted">
              <li><strong>Business Information:</strong> Service catalog, pricing, business hours, and calendar slot availability.</li>
              <li><strong>Customer Inquiries:</strong> Messages, dates, preferred time slots, and phone numbers sent by customers to book appointments.</li>
              <li><strong>Integrations:</strong> OAuth tokens for Google Calendar, Outlook, and Meta Business APIs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">3. Calendar &amp; Messaging Data Privacy</h2>
            <p>
              We access your calendar strictly to read availability and insert confirmed appointments. We do not sell customer data, train public foundation models on private customer conversations, or share business records with advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">4. Data Security &amp; Encryption</h2>
            <p>
              All customer messages and API credentials are encrypted in transit using TLS 1.3 and at rest with AES-256. API keys and OAuth tokens are stored in secure hardware-encrypted secret stores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">5. Contact</h2>
            <p>
              For data requests, deletion, or privacy inquiries, contact our founders directly at{" "}
              <a href="mailto:privacy@vesper.ai" className="font-semibold text-ink underline">
                privacy@vesper.ai
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
