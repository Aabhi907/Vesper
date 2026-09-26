import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

export default function TermsPage() {
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
          <FileText className="w-5 h-5 text-signal-blue" />
          <span className="text-[12px] font-bold uppercase tracking-wider text-muted">
            Legal Terms
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-[13px] text-muted mb-10">Last updated: September 26, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-[15px] text-ink/80 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using Vesper, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">2. Service Description</h2>
            <p>
              Vesper provides autonomous front-desk messaging and appointment scheduling services for salons, hotels, auto repair shops, healthcare providers, and appointment-based businesses. We do not guarantee uninterrupted connectivity in the event of third-party platform downtime (e.g. Meta API or Google Calendar server disruptions).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">3. Subscription &amp; Cancellation</h2>
            <p>
              Paid plans are billed on a monthly or annual recurring basis in NPR (Nepali Rupees) or USD. You may cancel your subscription at any time with one click from your billing dashboard. Cancellations take effect at the conclusion of the current billing cycle.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">4. Acceptable Use</h2>
            <p>
              You agree not to use Vesper for spam, misleading marketing, or unlawful communications violating Meta Business policies or applicable telecommunications laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">5. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of Nepal. For questions regarding our terms, email{" "}
              <a href="mailto:legal@vesper.ai" className="font-semibold text-ink underline">
                legal@vesper.ai
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
