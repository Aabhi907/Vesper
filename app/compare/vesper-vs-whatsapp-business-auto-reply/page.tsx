import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/compare/vesper-vs-whatsapp-business-auto-reply",
  crumb: "WhatsApp away message vs Bolnivo",
  title: "WhatsApp Business Away Message vs Bolnivo",
  description:
    "WhatsApp Business away message vs Bolnivo: what the free WhatsApp Business app auto-reply does, what an AI front desk adds, and when each one is enough.",
  h1: "WhatsApp Business away message vs Bolnivo",
  intro:
    "Bolnivo answers each customer's actual question and books them, while a WhatsApp Business away message sends the same fixed text to everyone.",
  table: {
    heading: "Side-by-side comparison",
    columns: ["", "WhatsApp Business app auto-reply", "Bolnivo"],
    rows: [
      ["Cost", "Free with the WhatsApp Business app", "Rs. 4,999 to Rs. 19,999 per month, 14-day free trial"],
      ["What it sends", "A fixed greeting or away message you write", "A reply to what the customer actually asked"],
      ["Prices and services", "Only what you type into a quick reply or catalogue", "Answers from your service list, prices and policies"],
      ["Booking", "No booking", "Books, reschedules and cancels against real availability"],
      ["Calendar", "None", "Own booking calendar plus Google Calendar sync"],
      ["Languages", "Whatever you wrote in the fixed message", "Replies in English, Nepali or Romanized Nepali to match the customer"],
      ["Channels", "WhatsApp only", "WhatsApp, Instagram, Messenger and website chat"],
      ["Staff takeover", "You reply manually on the phone", "Shared inbox, AI pauses while staff reply"],
    ],
  },
  chats: [
    {
      heading: "The same message, two different replies",
      label: "WhatsApp Business away message compared with a Bolnivo reply",
      messages: [
        { from: "customer", text: "Hi, facial ko price kati ho? Bholi milcha?" },
        { from: "other", text: "WhatsApp away message: Thank you for your message. We are currently closed and will get back to you during business hours." },
        { from: "vesper", text: "Namaste! Facial Rs. 2,500 ho, karib 1 ghanta lagcha. Bholi 11 baje ra 3 baje khali cha. Kun time book garidiu?" },
      ],
    },
  ],
  sections: [
    {
      heading: "What the WhatsApp Business app auto-reply does well",
      paragraphs: [
        "The free WhatsApp Business app lets you set a greeting message for new customers, an away message outside the hours you choose, and quick replies your staff can insert with a shortcut. For a business that gets a few messages a day and can answer the rest by hand, that is often enough, and it costs nothing.",
      ],
    },
    {
      heading: "Where an away message stops",
      paragraphs: [
        "An away message cannot read the question. It says the same thing to someone asking a price, someone wanting to book tomorrow, and someone who wants to cancel. Each of them still has to wait for a person, and many will message another business that replies sooner.",
        "Bolnivo reads each message, answers from your own information, checks your calendar, and books the slot in the same conversation, at any hour.",
      ],
    },
    {
      heading: "When to switch from an away message to Bolnivo",
      bullets: [
        "You get the same price and availability questions many times a day",
        "Customers message at night and you lose them by morning",
        "You take bookings over WhatsApp and juggle them in a notebook or calendar",
        "You also get DMs on Instagram or Facebook and miss some of them",
      ],
    },
  ],
  steps: {
    heading: "How to move from WhatsApp Business auto-reply to Bolnivo",
    items: [
      "Write down the answers your quick replies give today; add them to Bolnivo as services, prices and FAQs.",
      "Set your opening hours in Bolnivo.",
      "Connect your WhatsApp Business number to Bolnivo through Meta's official sign-up flow.",
      "Turn off the away message so customers get Bolnivo's real answers instead.",
    ],
  },
  faq: [
    { question: "Is the WhatsApp Business away message free?", answer: "Yes. The greeting and away messages are free features of the WhatsApp Business app. Bolnivo is a paid service with a 14-day free trial." },
    { question: "Can Bolnivo replace my WhatsApp away message?", answer: "Bolnivo replaces it with real replies: it answers the customer's question and books them, at any hour." },
    { question: "Does Bolnivo need the WhatsApp Business app?", answer: "Bolnivo connects through Meta's official WhatsApp Business Cloud API, so it does not depend on the app running on your phone." },
    { question: "Can I still reply myself?", answer: "Bolnivo has a shared inbox where you or your staff can reply on WhatsApp, and Bolnivo stays quiet while you do." },
  ],
  sources: [{ label: "WhatsApp Business app features (WhatsApp)", href: "https://business.whatsapp.com/products/business-app" }],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
    { label: "Chatbot vs AI front desk", href: "/compare/chatbot-vs-ai-front-desk" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
