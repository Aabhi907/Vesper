import type { Metadata } from "next"
import Link from "next/link"
import { faqJsonLd, DISAMBIGUATION } from "@/lib/site"
import { FOUNDERS_LINE } from "@/models"

export const metadata: Metadata = {
  title: { absolute: "What is Bolnivo? AI assistants for websites and customer conversations" },
  description:
    "Bolnivo helps businesses add AI assistants to websites and customer channels. Learn how it answers questions and handles tasks such as booking appointments.",
  alternates: { canonical: "/what-is-vesper" },
}

const SECTIONS = [
  {
    question: "How Bolnivo works",
    answer:
      "Bolnivo reads customer messages, understands what they need, and answers from information the business has approved. Businesses can configure assistants for their website and customer channels to answer common questions and carry out supported tasks, such as checking real calendar availability and confirming a booking. If a customer needs a person, Bolnivo alerts staff and hands the conversation over.",
  },
  {
    question: "Who uses Bolnivo",
    answer:
      "Bolnivo is a platform for businesses that want to help customers across their website and messaging channels. It is built in Kathmandu, Nepal, and understands English, Nepali and Romanized Nepali. Booking is one supported workflow, alongside answering questions and handing conversations to staff.",
  },
  {
    question: "What Bolnivo connects to",
    answer:
      "Bolnivo connects to WhatsApp through the official WhatsApp Business Cloud API, Instagram Direct Messages, Facebook Messenger, a website chat widget, and Google Calendar. Customers can pay booking deposits through eSewa and Khalti. TikTok messaging is coming soon. Bolnivo does not answer phone calls.",
  },
  {
    question: "How much Bolnivo costs",
    answer:
      "Bolnivo costs Rs. 4,999 per month for Starter, Rs. 11,999 per month for Pro and Rs. 19,999 per month for Business, with a 14-day free trial on every plan.",
  },
  {
    question: "Who built Bolnivo?",
    answer: FOUNDERS_LINE,
  },
  {
    question: "Was Bolnivo previously called Vesper?",
    answer: DISAMBIGUATION,
  },
]

const QA = [
  {
    question: "What is Bolnivo?",
    answer:
      "Bolnivo is an AI assistant platform for business websites and customer channels. It answers questions from approved business information and can take actions such as checking availability and booking.",
  },
  { question: "How does Bolnivo work?", answer: SECTIONS[0].answer },
  { question: "Who uses Bolnivo?", answer: SECTIONS[1].answer },
  { question: "What does Bolnivo connect to?", answer: SECTIONS[2].answer },
  { question: "How much does Bolnivo cost?", answer: SECTIONS[3].answer },
  { question: "Who founded Bolnivo?", answer: SECTIONS[4].answer },
  { question: SECTIONS[5].question, answer: SECTIONS[5].answer },
]

export default function WhatIsBolnivoPage() {
  return (
    <main className="w-full pt-32 pb-24 px-4 sm:px-6 bg-canvas min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(QA)) }}
      />
      <div className="mx-auto max-w-[840px]">
        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-6">What is Bolnivo?</h1>
        <p className="text-lead text-ink/80 mb-12">
          Bolnivo helps businesses add AI assistants to websites and customer channels. Assistants answer questions using approved business information and can take actions such as checking availability and booking, 24/7.
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
          Meet the <Link href="/team" className="font-semibold text-ink underline">team</Link>. See <Link href="/pricing" className="font-semibold text-ink underline">pricing</Link>,{" "}
          <Link href="/features" className="font-semibold text-ink underline">features</Link> and the{" "}
          <Link href="/faq" className="font-semibold text-ink underline">FAQ</Link>.
        </p>
      </div>
    </main>
  )
}
