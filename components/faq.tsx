"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"

import { FAQS } from "@/models"

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 bg-[#FBFBFA] dark:bg-[hsl(var(--canvas))] border-t border-[#EAEAE7] dark:border-line transition-colors duration-200 overflow-hidden" id="faq">
      <div className="mx-auto max-w-[720px] relative">
        {/* Top FAQ Pill */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center px-3 py-0.5 rounded-full border border-[#D5D5D0] dark:border-line bg-white dark:bg-soft-canvas text-[11px] text-[#737373] dark:text-muted font-medium tracking-wide uppercase mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            FAQ
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#111111] dark:text-ink mb-2.5 text-center">
            frequently asked questions
          </h2>

          <p className="text-[#666666] dark:text-muted text-[14px] sm:text-[15.5px] text-center">
            what to know about vesper, privacy, and getting started.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-2.5 relative">
          {/* Floating Dwight Schrute "QUESTION!" Meme sticker on desktop */}
          <div className="hidden lg:block absolute -right-24 xl:-right-32 top-1 pointer-events-none select-none z-10">
            <motion.div
              initial={{ scale: 0.9, rotate: 0 }}
              animate={{ scale: 1, rotate: 6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="w-28 h-28 rounded-2xl shadow-xl border border-black/15 dark:border-white/15 overflow-hidden"
            >
              <img
                src="/dwight-question.jpg"
                alt="Dwight Schrute Question Meme"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className={
                  isOpen
                    ? "bg-white dark:bg-[hsl(var(--soft-canvas))] rounded-xl border-2 border-[#3B82F6] transition-all duration-150 shadow-[0_2px_8px_rgba(59,130,246,0.12)] overflow-hidden"
                    : "bg-white dark:bg-[hsl(var(--soft-canvas))] rounded-xl border border-[#E5E5E2] dark:border-line hover:border-[#D0D0CB] dark:hover:border-white/20 transition-all duration-150 cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
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
                        ? "text-[14.5px] sm:text-[15px] font-bold text-[#111111] dark:text-ink"
                        : "text-[14.5px] sm:text-[15px] font-semibold text-[#111111] dark:text-ink"
                    }
                  >
                    {faq.question}
                  </span>

                  <span
                    className={
                      isOpen
                        ? "text-[18px] font-normal text-[#111111] dark:text-ink leading-none shrink-0"
                        : "text-[20px] font-light text-[#888888] dark:text-muted leading-none shrink-0"
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
                      <div className="px-5 pb-5 pt-0 text-[13.5px] sm:text-[14px] text-[#666666] dark:text-muted leading-relaxed">
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
