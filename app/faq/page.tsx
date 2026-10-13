import type { Metadata } from "next"
import Link from "next/link"
import { FAQS } from "@/models"
import { faqJsonLd } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Bolnivo FAQ – AI Auto-Reply & Booking Questions" },
  description:
    "Answers to the questions people ask about Bolnivo: Nepali support, WhatsApp auto reply, pricing in NPR, night-time replies, staff takeover, eSewa and Khalti, and data safety.",
  alternates: { canonical: "/faq" },
}

export default function FAQPage() {
  return (
    <main className="w-full pt-32 pb-24 px-4 sm:px-6 bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <div className="mx-auto max-w-[840px]">
        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">
          Bolnivo frequently asked questions
        </h1>
        <p className="text-lead text-muted mb-12">
          Bolnivo is an AI front desk for service businesses. These are the questions people ask most.
          New to Bolnivo? Start with <Link href="/what-is-vesper" className="font-semibold text-ink underline">What is Bolnivo?</Link>,
          see <Link href="/pricing" className="font-semibold text-ink underline">pricing</Link>, or read about{" "}
          <Link href="/whatsapp-auto-reply" className="font-semibold text-ink underline">WhatsApp auto reply</Link> and the{" "}
          <Link href="/nepali-chatbot" className="font-semibold text-ink underline">Nepali chatbot</Link>.
        </p>
        <div className="space-y-10 text-[15px] text-ink/80 leading-relaxed">
          {FAQS.map((faq) => (
            <section key={faq.question}>
              <h2 className="text-xl font-bold text-ink mb-2">{faq.question}</h2>
              <p>{faq.answer}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
