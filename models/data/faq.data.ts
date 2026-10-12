import type { FAQItem } from "../types"
import { DISAMBIGUATION } from "@/lib/site"

// The first HOME_FAQ_COUNT entries also show on the homepage; /faq shows all of them.
export const HOME_FAQ_COUNT = 6

export const FAQS: FAQItem[] = [
  {
    question: "What is Vesper?",
    answer:
      "Vesper is an AI front desk for service businesses. It answers customer messages on WhatsApp, Instagram, Messenger and your website chat widget, checks your real calendar availability, books appointments, and alerts your team when a customer asks for a human.",
  },
  {
    question: "Can Vesper auto reply on WhatsApp?",
    answer:
      "Vesper auto-replies to WhatsApp Business messages within seconds, 24/7, through Meta's official WhatsApp Business Cloud API. It answers the customer's actual question and can book them, instead of sending a fixed away message.",
  },
  {
    question: "Does Vesper work in Nepali?",
    answer:
      "Vesper understands and replies in Nepali written in Devanagari, Romanized Nepali such as \"bholi 2 baje slot cha?\", English, and mixed Nepali-English. It answers in the language the customer is using.",
  },
  {
    question: "How much does Vesper cost in Nepal?",
    answer:
      "Vesper costs Rs. 4,999 per month for Starter, Rs. 11,999 per month for Pro and Rs. 19,999 per month for Business. Paying yearly lowers the monthly price.",
  },
  {
    question: "Is Vesper free?",
    answer:
      "Vesper is not free, but every plan starts with a 14-day free trial so you can test it with real customers before you pay.",
  },
  {
    question: "Does Vesper work at night?",
    answer:
      "Vesper answers messages 24 hours a day, including nights, weekends and holidays. It only offers booking times inside your opening hours.",
  },
  {
    question: "Can my staff take over the chat?",
    answer:
      "Vesper lets any staff member take over a conversation from the shared inbox. Vesper stays silent while staff reply, and resumes when they release the chat or two hours after the last staff reply.",
  },
  {
    question: "Does Vesper need my phone to be on?",
    answer:
      "Vesper does not need your phone to be on. It connects to WhatsApp, Instagram and Messenger through Meta's official APIs, so replies are sent from the cloud.",
  },
  {
    question: "Which businesses use Vesper?",
    answer:
      "Vesper is built for appointment-driven businesses in Nepal: salons and beauty parlours, clinics and dental practices, hotels and homestays, education consultancies, trekking agencies, restaurants and gyms.",
  },
  {
    question: "Is my customer data safe?",
    answer:
      "Vesper sends data over encrypted HTTPS connections and stores it in a managed Postgres database (Supabase) that is encrypted at rest, with each business's data kept separate at the database level. Vesper does not use your customer conversations, phone numbers or booking records to train AI models.",
  },
  {
    question: "Can Vesper take eSewa or Khalti payment?",
    answer:
      "Vesper can send customers an eSewa or Khalti link for a booking deposit, as a percentage you set per service, and tells the customer in the chat once the payment is verified.",
  },
  {
    question: "Can Vesper auto reply on Instagram?",
    answer:
      "Vesper replies to Instagram Direct Messages automatically, answering questions and booking appointments inside the DM. It does not reply to comments on posts.",
  },
  {
    question: "Does Vesper work with Facebook Messenger?",
    answer: "Vesper answers messages sent to your Facebook Page on Messenger, on the Pro and Business plans.",
  },
  {
    question: "Does Vesper work on TikTok?",
    answer:
      "Vesper's TikTok messaging is coming soon and is not live yet. Today Vesper works on WhatsApp, Instagram, Messenger and website chat.",
  },
  {
    question: "Does Vesper answer phone calls?",
    answer:
      "Vesper does not answer phone calls. It replies to written messages on WhatsApp, Instagram, Messenger and your website chat.",
  },
  {
    question: "Can I add Vesper to my website?",
    answer:
      "Vesper includes a website chat widget, so visitors can ask questions and book on your site the same way they would on WhatsApp.",
  },
  {
    question: "Can Vesper book appointments automatically?",
    answer:
      "Vesper books, reschedules and cancels appointments in the chat. It checks your real availability first and confirms a booking only after it has been saved.",
  },
  {
    question: "Does Vesper work with Google Calendar?",
    answer:
      "Vesper reads your Google Calendar busy times before offering slots and writes new bookings, changes and cancellations back to it.",
  },
  {
    question: "Can Vesper double-book a slot?",
    answer:
      "Vesper cannot double-book a staff member: the database refuses two overlapping bookings, so if two customers ask for the same time, the second is offered other open times.",
  },
  {
    question: "What happens when Vesper doesn't know the answer?",
    answer:
      "Vesper says it will check rather than guess, marks the conversation as needing a person in your inbox, and emails the owner an alert.",
  },
  {
    question: "What's the difference between a simple auto-reply and Vesper?",
    answer:
      "Vesper understands what the customer is asking, checks your real calendar before offering a time, suggests other open slots when the requested one is taken, and confirms a booking only after the slot is saved. A simple auto-reply sends the same canned text to everyone.",
  },
  {
    question: "Does Vesper send booking reminders?",
    answer:
      "Vesper sends booking confirmations and reminders by email, and by SMS on supported plans when the customer has opted in.",
  },
  {
    question: "Can customers book with a specific staff member?",
    answer:
      "Vesper books customers with the stylist, doctor, trainer or counsellor they ask for, using that person's own calendar.",
  },
  {
    question: "Does Vesper give medical advice?",
    answer:
      "Vesper does not give medical advice. For clinics it answers practical questions and books visits, and when a message describes an emergency it tells the patient to call or visit directly and alerts staff.",
  },
  {
    question: "Which apps does Vesper work with?",
    answer:
      "Vesper works with the WhatsApp Business Cloud API, Instagram Direct Messages, Facebook Messenger, Google Calendar and a website chat widget. Customers can pay booking deposits through eSewa and Khalti.",
  },
  {
    question: "Where is Vesper based?",
    answer:
      "Vesper is built in Kathmandu, Nepal, for businesses in Nepal. It uses Nepal time and prices in Nepali rupees.",
  },
  {
    question: "Is Vesper (vesper.codes) the same as other products named Vesper?",
    answer: DISAMBIGUATION,
  },
]
