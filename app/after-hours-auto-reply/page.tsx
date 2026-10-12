import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/after-hours-auto-reply",
  crumb: "After-hours auto reply",
  title: "Vesper 24/7 Auto Reply After Business Hours",
  description:
    "Vesper replies to customer messages after business hours and at night, answers questions and books tomorrow's slots, so you never miss a customer message.",
  h1: "Vesper 24/7: auto reply after business hours that actually helps",
  intro:
    "Vesper replies to customer messages after business hours with real answers and bookings, so night-time messages become appointments instead of missed messages.",
  chats: [
    {
      heading: "Example night-time customer reply at 11:40 PM",
      label: "Auto reply after business hours: Vesper books a customer at night",
      messages: [
        { from: "customer", text: "Are you open tomorrow? Need a beard trim before 10am" },
        { from: "vesper", text: "Yes, we open at 8:00 AM tomorrow. I have 8:30 AM and 9:15 AM free for a beard trim (Rs. 300). Want one?" },
        { from: "customer", text: "8:30" },
        { from: "vesper", text: "Done. Beard trim tomorrow at 8:30 AM. Could you share your name and phone number for the booking?" },
      ],
    },
  ],
  sections: [
    {
      heading: "Missed messages are missed bookings",
      paragraphs: [
        "Customers message when they have time: on the bus home, after dinner, late at night. If the first reply arrives at 10 AM the next day, many have already booked somewhere that answered. A WhatsApp away message saying \"we are closed\" does not help either; it tells the customer to go away and come back later.",
        "Vesper gives the same quality of reply at 11 PM as at 11 AM. It answers the question, offers real open times during your opening hours, and books the slot then and there.",
      ],
    },
    {
      heading: "24/7 customer support without night staff",
      bullets: [
        "Replies within seconds on WhatsApp, Instagram, Messenger and your website chat, at any hour",
        "Answers questions about prices, services, location and policies from your own information",
        "Only offers times inside your opening hours, so nobody is booked for 2 AM",
        "Books, reschedules and cancels overnight, so your morning starts with a full calendar",
        "Flags conversations that need a person, so staff see them first thing",
      ],
    },
    {
      heading: "What your team sees in the morning",
      paragraphs: [
        "Every overnight conversation is in the Vesper inbox. Conversations Vesper finished, such as answered questions and confirmed bookings, need no action. Conversations where a customer asked for a person, complained, or asked something Vesper could not answer from your information are marked as waiting for staff, and the owner gets an email alert when that happens.",
      ],
    },
    {
      heading: "Never miss a customer message, even on holidays",
      paragraphs: [
        "During Dashain, Tihar or any day you close, Vesper keeps answering. Mark the days you are closed and it will tell customers when you reopen and book them for the first open day.",
      ],
    },
  ],
  steps: {
    heading: "How to turn on after-hours replies with Vesper",
    items: [
      "Set your weekly opening hours and closed days in Vesper.",
      "Add the services, prices and answers customers ask about most.",
      "Connect your messaging channels. Vesper starts answering at every hour immediately.",
      "Check the inbox each morning for anything marked as needing a person.",
    ],
  },
  faq: [
    { question: "Does Vesper work at night?", answer: "Vesper answers messages 24 hours a day, including nights, weekends and holidays, and can book customers into your next open slot." },
    { question: "Will Vesper book people outside my opening hours?", answer: "Vesper only offers times inside the opening hours you set, even when the customer messages in the middle of the night." },
    { question: "How is this different from an away message?", answer: "Vesper answers the customer's actual question and books them, while an away message only says you are closed." },
    { question: "What if something needs a person at night?", answer: "Vesper tells the customer a team member will follow up, marks the conversation for staff and emails the owner an alert." },
  ],
  related: [
    { label: "Human handoff", href: "/human-handoff" },
    { label: "WhatsApp away message vs Vesper", href: "/compare/vesper-vs-whatsapp-business-auto-reply" },
    { label: "Appointment booking bot", href: "/appointment-booking-bot" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
