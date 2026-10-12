import type { Metadata } from "next"
import Link from "next/link"
import { FAQS } from "@/models"
import { faqJsonLd } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Vesper FAQ – AI Auto-Reply & Booking Questions" },
  description:
    "Answers to common questions about Vesper: what it does, data privacy, the channels and apps it works with, and how it differs from auto-replies.",
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
          Vesper frequently asked questions
        </h1>
        <p className="text-lead text-muted mb-12">
          Vesper is an AI front desk for service businesses. These are the questions people ask most.
          New to Vesper? Start with <Link href="/what-is-vesper" className="font-semibold text-ink underline">What is Vesper?</Link>
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
