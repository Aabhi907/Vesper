import type { FAQItem } from "../types"
import { DISAMBIGUATION } from "@/lib/site"

export const FAQS: FAQItem[] = [
  {
    question: "What is Vesper?",
    answer:
      "Vesper is an AI front desk for service businesses. It answers customer messages on WhatsApp, Instagram, Messenger and your website chat widget, checks your real calendar availability, books appointments, and alerts your team when a customer asks for a human.",
  },
  {
    question: "Is my data private?",
    answer:
      "Vesper sends data over encrypted HTTPS connections and stores it in a managed Postgres database (Supabase) that is encrypted at rest. Vesper does not use your customer conversations, phone numbers or booking records to train AI models.",
  },
  {
    question: "What can Vesper actually do?",
    answer:
      "Vesper answers customer questions 24/7 from your own services, prices and policies, checks open calendar slots, books, reschedules and cancels appointments, collects customer names and phone numbers, sends appointment reminders, and hands harder conversations to your staff.",
  },
  {
    question: "What's the difference between a simple auto-reply and Vesper?",
    answer:
      "Vesper understands what the customer is asking, checks your real calendar before offering a time, suggests other open slots when the requested one is taken, and confirms a booking only after the slot is saved. A simple auto-reply sends the same canned text to everyone.",
  },
  {
    question: "Which apps does Vesper work with?",
    answer:
      "Vesper works with the WhatsApp Business Cloud API, Instagram Direct Messages, Facebook Messenger, Google Calendar and a website chat widget. Customers can pay booking deposits through eSewa and Khalti.",
  },
  {
    question: "Is Vesper (vesper.codes) the same as other products named Vesper?",
    answer: DISAMBIGUATION,
  },
]
