import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/human-handoff",
  crumb: "Human handoff",
  title: "Bolnivo Human Handoff – Chatbot with Staff Takeover",
  description:
    "Bolnivo is a chatbot with human takeover: staff can step into any WhatsApp, Instagram or Messenger chat from one inbox, and the AI goes quiet while they reply.",
  h1: "Bolnivo human handoff: AI plus a staff inbox with live chat takeover",
  intro:
    "Bolnivo hands a conversation to your staff when a customer asks for a person, and goes quiet while staff take over the chat from one shared inbox.",
  chats: [
    {
      heading: "Example: a customer asks for a person",
      label: "Chatbot with human takeover: Bolnivo hands the chat to staff",
      messages: [
        { from: "customer", text: "Can I talk to someone from the team? It's about a group discount" },
        { from: "vesper", text: "Of course. I've let the team know and someone will reply here shortly." },
        { from: "staff", text: "Hi, this is Rina. For groups of 5 or more we can do 10% off. How many people?" },
        { from: "customer", text: "6 people, next Saturday" },
      ],
    },
  ],
  sections: [
    {
      heading: "AI plus staff inbox: one place for every channel",
      paragraphs: [
        "Every WhatsApp, Instagram, Messenger and website conversation appears in the Bolnivo inbox with the full history. Your team can read what Bolnivo said, see which conversations are waiting for a person, and reply directly. The reply goes out on the customer's own channel, so the customer keeps talking in the same chat.",
      ],
    },
    {
      heading: "When Bolnivo hands over",
      bullets: [
        "The customer asks for a person, in English, Roman Nepali or Nepali",
        "The customer makes a complaint",
        "The question is not covered by your information, so Bolnivo won't guess",
        "A message describes an emergency: Bolnivo tells the customer to call or visit directly and alerts your staff",
        "A conversation keeps going in circles without being resolved",
      ],
      paragraphs: [
        "In each case the conversation is marked as waiting for a person, and the business owner gets an email alert with a link to the chat.",
      ],
    },
    {
      heading: "How live chat takeover works",
      paragraphs: [
        "A staff member can take over any conversation with one click, or simply reply from the inbox. While a staff member is handling the chat, Bolnivo stays silent on it, even if a message arrives while Bolnivo is drafting a reply. Staff can hand the chat back to Bolnivo when they are done, and if nobody does, Bolnivo resumes automatically two hours after the last staff reply.",
        "On Messenger and Instagram, staff replies are sent with Meta's human-agent tag, which allows replies after the usual 24-hour window. On WhatsApp, the inbox tells you if the customer's 24-hour window has closed.",
      ],
    },
  ],
  steps: {
    heading: "How to set up human handoff in Bolnivo",
    items: [
      "Add your team members to the Bolnivo dashboard.",
      "Make sure the owner's email is correct so handoff alerts arrive.",
      "Open the inbox, filter to conversations waiting for a person, and reply.",
      "Use Take over to pause Bolnivo on a chat, and Release to hand it back.",
    ],
  },
  faq: [
    { question: "Can my staff take over the chat?", answer: "Bolnivo lets any staff member take over a conversation from the inbox, and it stays silent on that chat while staff are replying." },
    { question: "How does Bolnivo tell me a customer needs a person?", answer: "Bolnivo marks the conversation as waiting for a person in the inbox and sends the owner an email alert with a link." },
    { question: "Does the AI start talking again after staff reply?", answer: "Bolnivo resumes when staff release the chat, or automatically two hours after the last staff reply." },
    { question: "Can staff reply on all channels from one place?", answer: "Bolnivo's inbox lets staff reply on WhatsApp, Instagram, Messenger and the website chat from one screen." },
  ],
  related: [
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
    { label: "Messenger chatbot", href: "/messenger-auto-reply" },
    { label: "Chatbot vs AI front desk", href: "/compare/chatbot-vs-ai-front-desk" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
