import type { Metadata } from "next"
import Link from "next/link"
import { faqJsonLd, DISAMBIGUATION } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "What is Vesper? AI Front Desk for WhatsApp & Instagram" },
  description:
    "Vesper is an AI front desk that answers customer messages on WhatsApp, Instagram and Messenger and books appointments 24/7. How it works, who uses it, and what it costs.",
  alternates: { canonical: "/what-is-vesper" },
}

const SECTIONS = [
  {
    question: "How Vesper works",
    answer:
      "Vesper reads each customer message, works out what the customer wants, and answers from the services, prices and policies the business has approved. When a customer asks for a time, Vesper checks the business's real calendar, offers open slots, and confirms the booking only after the slot is saved. If a customer asks for a person, Vesper alerts the business's staff and hands the conversation over.",
  },
  {
    question: "Who uses Vesper",
    answer:
      "Vesper is built for appointment-driven service businesses in Nepal, such as salons, clinics, hotels and guesthouses, and garages. It understands English, Nepali and Romanized Nepali. Vesper is built in Kathmandu.",
  },
  {
    question: "What Vesper connects to",
    answer:
      "Vesper connects to WhatsApp through the official WhatsApp Business Cloud API, Instagram Direct Messages, Facebook Messenger, a website chat widget, and Google Calendar. Customers can pay booking deposits through eSewa and Khalti.",
  },
  {
    question: "How much Vesper costs",
    answer:
      "Vesper costs Rs. 4,999 per month for Starter, Rs. 11,999 per month for Pro and Rs. 19,999 per month for Business, with a 14-day free trial on every plan.",
  },
  {
    question: "Is Vesper (vesper.codes) the same as other products named Vesper?",
    answer: DISAMBIGUATION,
  },
]

const QA = [
  {
    question: "What is Vesper?",
    answer:
      "Vesper is an AI front desk that answers customer messages on WhatsApp, Instagram and Messenger and books appointments 24/7.",
  },
  { question: "How does Vesper work?", answer: SECTIONS[0].answer },
  { question: "Who uses Vesper?", answer: SECTIONS[1].answer },
  { question: "What does Vesper connect to?", answer: SECTIONS[2].answer },
  { question: "How much does Vesper cost?", answer: SECTIONS[3].answer },
  { question: SECTIONS[4].question, answer: SECTIONS[4].answer },
]

export default function WhatIsVesperPage() {
  return (
    <main className="w-full pt-32 pb-24 px-4 sm:px-6 bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(QA)) }}
      />
      <div className="mx-auto max-w-[840px]">
        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-6">What is Vesper?</h1>
        <p className="text-lead text-ink/80 mb-12">
          Vesper is an AI front desk that answers customer messages on WhatsApp, Instagram and Messenger and books
          appointments 24/7.
        </p>
        <div className="space-y-10 text-[15px] text-ink/80 leading-relaxed">
          {SECTIONS.map((s) => (
            <section key={s.question}>
              <h2 className="text-xl font-bold text-ink mb-2">{s.question}</h2>
              <p>{s.answer}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-[15px] text-muted">
          See <Link href="/pricing" className="font-semibold text-ink underline">pricing</Link>,{" "}
          <Link href="/features" className="font-semibold text-ink underline">features</Link> and the{" "}
          <Link href="/faq" className="font-semibold text-ink underline">FAQ</Link>.
        </p>
      </div>
    </main>
  )
}
