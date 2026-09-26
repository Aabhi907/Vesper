import type { FAQItem } from "../types"

export const FAQS: FAQItem[] = [
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
