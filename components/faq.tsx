"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "what is vesper?",
    answer:
      "an ai front desk for your business. it answers calls and messages across whatsapp, instagram, and web. checks live calendar availability in real-time, takes bookings, and alerts your team if someone asks for a human.",
  },
  {
    question: "is my data private?",
    answer:
      "yes, 100%. your customer conversations, phone numbers, and booking data are encrypted at rest and in transit. we never use your proprietary client records to train public models.",
  },
  {
    question: "is vesper watching my screen all the time?",
    answer:
      "no. vesper only connects to your authorized business channels (whatsapp business api, instagram, or calendar). it never records your screen or accesses your private device.",
  },
  {
    question: "what can vesper actually do?",
    answer:
      "answer customer inquiries instantly 24/7, check calendar slots, book appointments, collect client phone numbers and notes, send automated reminders, and hand off tough inquiries directly to your staff on whatsapp.",
  },
  {
    question: "what's the difference between simple auto-reply and vesper?",
    answer:
      "auto-replies send dumb canned text. vesper understands intent, reads your real calendar in real-time, negotiates mutually available times with customers, and locks in appointments without human intervention.",
  },
  {
    question: "which apps does it work with?",
    answer:
      "whatsapp business cloud api, instagram dms, facebook messenger, google calendar, and custom web chat widgets. we also support direct qr deposits via fonepay, esewa, and khalti.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 bg-[#FBFBFA] border-t border-[#EAEAE7]" id="faq">
      <div className="mx-auto max-w-[720px] relative">
        {/* Top FAQ Pill */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-[#D5D5D0] bg-white text-[11px] text-[#737373] font-medium tracking-wide uppercase mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            FAQ
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#111111] mb-2.5 text-center">
            frequently asked questions
          </h2>

          <p className="text-[#666666] text-[14px] sm:text-[15.5px] text-center">
            what to know about vesper, privacy, and getting started.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-2.5 relative">
          {/* Floating Dwight Schrute "QUESTION!" Meme sticker on desktop */}
          <div className="hidden lg:block absolute -right-24 xl:-right-28 top-3 pointer-events-none select-none z-10">
            <motion.div
              initial={{ scale: 0.9, rotate: 0 }}
              animate={{ scale: 1, rotate: 6 }}
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg border border-black/10 overflow-hidden"
            >
              <img
                src="/dwight-question.jpg"
                alt="Dwight Schrute Question Meme"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={
                  isOpen
                    ? "bg-white rounded-xl border-2 border-[#3B82F6] transition-all duration-150 shadow-[0_2px_8px_rgba(59,130,246,0.08)] overflow-hidden"
                    : "bg-white rounded-xl border border-[#E5E5E2] hover:border-[#D0D0CB] transition-all duration-150 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                }
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left select-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={
                      isOpen
                        ? "text-[14.5px] sm:text-[15px] font-bold text-[#111111]"
                        : "text-[14.5px] sm:text-[15px] font-semibold text-[#111111]"
                    }
                  >
                    {faq.question}
                  </span>

                  <span
                    className={
                      isOpen
                        ? "text-[18px] font-normal text-[#111111] leading-none shrink-0"
                        : "text-[20px] font-light text-[#888888] leading-none shrink-0"
                    }
                  >
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-0 text-[13.5px] sm:text-[14px] text-[#666666] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
