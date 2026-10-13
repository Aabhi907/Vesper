import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/compare/chatbot-vs-ai-front-desk",
  crumb: "Chatbot vs AI front desk",
  title: "Rule-Based Chatbot vs Bolnivo AI Front Desk",
  description:
    "Rule-based chatbot vs AI front desk: how keyword and button bots work, where they break, and how Bolnivo answers free-text questions and books real slots.",
  h1: "Rule-based chatbot vs Bolnivo AI front desk",
  intro:
    "Bolnivo understands free-text messages and books real calendar slots, while a rule-based chatbot only follows the buttons and keywords someone programmed in advance.",
  table: {
    heading: "How they differ",
    columns: ["", "Rule-based chatbot", "Bolnivo AI front desk"],
    rows: [
      ["How it understands", "Buttons, menus and exact keywords", "Reads free text in English, Nepali or Romanized Nepali"],
      ["Unexpected question", "Falls back to \"Sorry, I didn't understand\" or a menu", "Answers from your information, or hands over to staff"],
      ["Setup", "Design every path in a flow builder", "Add services, prices, hours and FAQs"],
      ["Bookings", "Usually a link out to a form", "Books in the chat against real availability"],
      ["Changes", "Edit the flows when prices or services change", "Update the price once; every answer uses it"],
      ["Predictability", "Very predictable within its paths", "Grounded in your information; never confirms a booking that isn't saved"],
    ],
  },
  chats: [
    {
      heading: "Example: a message a menu bot can't handle",
      label: "Rule-based chatbot vs AI front desk on the same customer message",
      messages: [
        { from: "customer", text: "bholi office pachi 6 tira hair cut milcha? and is parking there" },
        { from: "other", text: "Rule-based bot: Please choose an option: 1) Services 2) Prices 3) Book appointment" },
        { from: "vesper", text: "Bholi 6 baje haircut ko slot khali cha, Rs. 600. Parking agadi nai cha. Book garidiu?" },
      ],
    },
  ],
  sections: [
    {
      heading: "What a rule-based chatbot is",
      paragraphs: [
        "A rule-based chatbot follows a decision tree. The business, or an agency, draws every path: if the customer taps \"Prices\", show this message; if they type \"book\", send this link. It is predictable and cheap to run, and it works well when customers stick to the menu.",
        "The trouble is that customers do not stick to the menu. They ask two things at once, write in Romanized Nepali, or mention a time in words. Each of those falls outside the tree.",
      ],
    },
    {
      heading: "What makes Bolnivo an AI front desk",
      paragraphs: [
        "Bolnivo reads the whole message, works out what the customer wants, and answers from the services, prices and policies you approved. When the customer wants a time, it checks your real calendar, offers open slots and confirms only after the booking is saved. When something is outside its information, it says so and brings in your staff instead of inventing an answer.",
      ],
      bullets: [
        "No flows to draw or maintain",
        "Handles mixed questions in one message",
        "Understands Nepali, Romanized Nepali and English",
        "Real bookings, rescheduling and cancellation in the chat",
        "Human takeover from a shared inbox",
      ],
    },
    {
      heading: "When a rule-based chatbot is enough",
      paragraphs: [
        "If your customers only ever need a fixed menu, such as opening hours, a price list and one link, a simple rule-based bot or the free WhatsApp Business quick replies may be all you need. Bolnivo is worth it when messages turn into bookings and arrive faster than your team can answer.",
      ],
    },
  ],
  steps: {
    heading: "How to move from a rule-based chatbot to Bolnivo",
    items: [
      "Collect the answers inside your current bot's flows and add them to Bolnivo as FAQs.",
      "Add your services, durations and opening hours so Bolnivo can book.",
      "Disconnect the old bot from the channel, then connect the channel to Bolnivo.",
      "Test with the messages that used to break the old bot.",
    ],
  },
  faq: [
    { question: "Is Bolnivo a chatbot?", answer: "Bolnivo is an AI front desk: it chats like a chatbot, but it understands free text and books real appointments instead of following fixed menus." },
    { question: "Will Bolnivo make things up?", answer: "Bolnivo answers from the information you approve and hands over to staff when it doesn't know, instead of guessing." },
    { question: "Do I need to build flows in Bolnivo?", answer: "Bolnivo needs no flows. You add services, prices, hours and FAQs, and it handles the conversation." },
    { question: "Can I run a rule-based bot and Bolnivo on the same number?", answer: "Bolnivo should be the only automation answering a channel, so customers don't get two replies." },
  ],
  related: [
    { label: "Bolnivo vs ManyChat", href: "/compare/vesper-vs-manychat" },
    { label: "WhatsApp away message vs Bolnivo", href: "/compare/vesper-vs-whatsapp-business-auto-reply" },
    { label: "Human handoff", href: "/human-handoff" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
