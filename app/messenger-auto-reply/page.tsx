import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/messenger-auto-reply",
  crumb: "Messenger chatbot",
  title: "Vesper Messenger Chatbot – Facebook Page Auto Reply",
  description:
    "Vesper auto-replies to Facebook Page messages on Messenger 24/7, answers customer questions and books appointments. A Facebook Messenger AI for local businesses.",
  h1: "Vesper Messenger chatbot: Facebook Page auto reply that books",
  intro:
    "Vesper auto-replies to your Facebook Page's Messenger inbox around the clock, answering questions from your own information and booking customers into real open slots.",
  chats: [
    {
      heading: "Example Facebook Messenger AI conversation",
      label: "Auto reply Facebook messages: a customer reschedules through Vesper on Messenger",
      messages: [
        { from: "customer", text: "Hello, I booked a cleaning for Friday 11am but I can't make it" },
        { from: "vesper", text: "No problem. I can move it for you. Friday 3:00 PM or Saturday 10:00 AM are open. Would either work?" },
        { from: "customer", text: "Saturday 10 is good" },
        { from: "vesper", text: "Done. Your cleaning is now Saturday at 10:00 AM, and the Friday 11:00 AM slot has been released." },
      ],
    },
  ],
  sections: [
    {
      heading: "Why a Facebook Page auto reply matters",
      paragraphs: [
        "In Nepal, many customers still find a business through its Facebook Page and send a message before they ever call. Facebook shows how quickly a Page usually responds, and an unanswered Messenger inbox costs bookings. Vesper answers each message as it arrives, including late at night, so customers get a real answer while they are still interested.",
      ],
    },
    {
      heading: "What the Vesper Messenger chatbot handles",
      bullets: [
        "Questions about services, prices, opening hours, location and policies",
        "New bookings against real availability, with Google Calendar sync",
        "Rescheduling and cancelling existing appointments",
        "Collecting the customer's name and phone number",
        "English, Nepali and Romanized Nepali messages",
        "Handing the chat to staff, with an alert, when a person is needed",
      ],
    },
    {
      heading: "Facebook Messenger AI that stays grounded in your information",
      paragraphs: [
        "Vesper only states prices, services and policies that you have entered. When it does not know something, it says so and can bring in your staff rather than guessing. That is the difference between an AI front desk and a chatbot that invents an answer to keep the conversation going.",
        "Messenger conversations land in the same Vesper inbox as WhatsApp and Instagram, so your team sees every customer in one place. When a staff member replies from the inbox, Vesper steps back from that conversation.",
      ],
    },
    {
      heading: "Works alongside WhatsApp and Instagram",
      paragraphs: [
        "A customer might message your Facebook Page today and WhatsApp you next week. Vesper books all channels against one calendar, so the same slot is never promised twice. Messenger is included on the Pro and Business plans along with WhatsApp and Instagram.",
      ],
    },
  ],
  steps: {
    heading: "How to set up Messenger auto reply with Vesper",
    items: [
      "Make sure you are an admin of the Facebook Page you want Vesper to answer.",
      "Add your services, prices, durations and opening hours in Vesper.",
      "Connect the Facebook Page through Meta on the Vesper Channels page.",
      "Send a test message to the Page from a personal account.",
      "Let Vesper answer customers, and check conversations in the Vesper inbox.",
    ],
  },
  faq: [
    { question: "Can Vesper auto reply to Facebook messages?", answer: "Vesper replies automatically to messages sent to your Facebook Page on Messenger, 24/7, and can book, reschedule or cancel appointments in the chat." },
    { question: "Does Vesper reply to Facebook comments?", answer: "Vesper answers Messenger conversations with your Page. It does not reply to comments on Facebook posts." },
    { question: "Which Vesper plan includes Messenger?", answer: "Vesper Pro (Rs. 11,999 a month) and Business (Rs. 19,999 a month) include Messenger, WhatsApp and Instagram." },
    { question: "Can my staff reply on Messenger after 24 hours?", answer: "Vesper sends staff replies with Meta's human-agent tag, which allows a person to reply after the normal 24-hour messaging window." },
  ],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Instagram DM auto reply", href: "/instagram-auto-reply" },
    { label: "Human handoff", href: "/human-handoff" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
