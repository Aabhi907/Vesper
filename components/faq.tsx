"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How does Vesper prevent double-bookings?",
    answer:
      "Vesper connects directly to your Google Calendar or booking database via two-way synchronization. Before offering any slot to a customer on WhatsApp, Instagram, or Messenger, Vesper queries real-time availability in milliseconds. Once the customer confirms, the slot is instantly reserved and locked.",
  },
  {
    question: "Can I connect my existing WhatsApp Business number?",
    answer:
      "Yes. Vesper integrates seamlessly with official Meta WhatsApp Business Cloud APIs without changing your phone number. You keep your existing chats, business profile, and contacts while Vesper handles automated replies and booking flows.",
  },
  {
    question: "What happens if a customer asks a complex question?",
    answer:
      "Vesper answers strictly from your approved business knowledge base (services, pricing, policies, staff details). If a customer asks something unusual or requests a human, Vesper immediately alerts your staff and hands off the conversation with full context.",
  },
  {
    question: "Does Vesper work for my specific industry?",
    answer:
      "Vesper is built for all appointment and reservation businesses — salons, hotels, boutique resorts, auto workshops, dental clinics, spas, and personal trainers. You simply define your service durations, buffer times, and pricing.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Under 15 minutes. Connect your messaging channels, link your Google Calendar, and upload your service menu or FAQ document. Our onboarding team is also available to configure custom rules for your business.",
  },
  {
    question: "What payment methods do you support in Nepal?",
    answer:
      "For subscriptions, we support direct Fonepay QR, eSewa, Khalti, and bank transfers, as well as international cards. For your customers, Vesper can also share your QR code or payment link to collect booking deposits automatically.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 bg-canvas border-t border-line" id="faq">
      <div className="mx-auto max-w-[880px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-line text-muted text-[11px] font-bold tracking-wider uppercase mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-ink" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight mb-4 text-center">
            Frequently asked questions.
          </h2>

          <p className="text-[15px] sm:text-[17px] text-muted max-w-[520px] mx-auto leading-relaxed text-center">
            Everything you need to know about setting up Vesper, calendar synchronization, and automated messaging.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-line transition-all duration-200 shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors hover:bg-soft-canvas/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16.5px] font-bold text-ink leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7 rounded-full bg-soft-canvas flex items-center justify-center shrink-0 border border-line text-ink"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-[14px] sm:text-[15px] text-muted leading-relaxed border-t border-line/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 pt-8 border-t border-line/60">
          <p className="text-[14px] text-muted">
            Have a question that isn&apos;t answered here?{" "}
            <a
              href="mailto:support@vesper.ai"
              className="font-semibold text-ink underline underline-offset-4 hover:text-signal-blue transition-colors"
            >
              Email our founders directly
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
