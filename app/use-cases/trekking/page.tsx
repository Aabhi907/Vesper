import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/trekking",
  crumb: "Trekking agency chatbot",
  title: "Vesper Trekking Agency Chatbot – Tour Inquiry Auto Reply",
  description:
    "Vesper is a trekking agency and travel agency WhatsApp bot that answers tour inquiries 24/7 and books treks by start date with group capacity and staff approval.",
  h1: "Vesper trekking agency chatbot and tour inquiry auto reply",
  intro:
    "Vesper answers trekking and tour inquiries on WhatsApp, Instagram and Messenger 24/7 and books multi-day treks by start date, with your staff confirming each booking.",
  chats: [
    {
      heading: "Example tour inquiry on WhatsApp",
      label: "Travel agency WhatsApp bot: a trekker asks about Everest Base Camp and requests a start date",
      messages: [
        { from: "customer", text: "Hi! How much is the Everest Base Camp trek, and do you have a group starting early November?" },
        { from: "vesper", text: "Hi! Our 12-day Everest Base Camp trek is USD 1,250 per person, including guide, porter, permits and teahouse stays. November 3 and November 7 still have space. Which date suits you?" },
        { from: "customer", text: "Nov 7, 2 people" },
        { from: "vesper", text: "Great, I've sent a request for 2 people starting November 7. Please share your name and WhatsApp number; our team will check permits and confirm shortly." },
      ],
    },
  ],
  sections: [
    {
      heading: "What trekkers ask a trekking agency",
      bullets: [
        "\"How much is the Annapurna Circuit / EBC trek?\"",
        "\"What's included: permits, guide, porter, flights?\"",
        "\"Do you have a group starting on the 7th?\"",
        "\"How fit do I need to be?\"",
        "\"Can you do a private trek for 2?\"",
        "\"What's the best season?\"",
      ],
      paragraphs: [
        "Most of these come from abroad, at night in Nepal. Vesper answers them from the itineraries, prices and inclusions you write, in the customer's own language.",
      ],
    },
    {
      heading: "Treks booked by start date, with group capacity",
      paragraphs: [
        "Multi-day trips work differently from appointments. In Vesper, a trek is a package booked by start date, such as a 12-day trek, and you set how many groups you accept per start date. Vesper offers dates that still have space and never overbooks a departure.",
        "Set treks as requests that need approval and your team checks permits, guides and flights before the customer is told the trip is confirmed. Deposits can be taken through eSewa or Khalti for Nepali customers.",
      ],
    },
    {
      heading: "Tour inquiry auto reply that stays accurate",
      paragraphs: [
        "Vesper does not make up altitude advice, permit rules or prices. It answers from your information, and when a question goes beyond it, such as a medical concern about altitude, it hands the conversation to your team. You can take over any chat from the Vesper inbox.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a trekking agency chatbot",
    items: [
      "Add each trek or tour as a multi-day package with its price, length and inclusions.",
      "Set how many groups you accept per start date, and turn on approval.",
      "Write answers for seasons, fitness, permits and what to pack.",
      "Connect WhatsApp, Instagram or Messenger.",
      "Confirm requests in the dashboard after checking permits and guides.",
    ],
  },
  faq: [
    { question: "Can Vesper book treks?", answer: "Vesper books multi-day treks by start date, limited by the capacity you set, and can send them to your team for approval first." },
    { question: "Does Vesper answer international trekkers at night?", answer: "Vesper replies 24/7 in English, which suits trekkers messaging from other time zones." },
    { question: "Will Vesper give altitude or medical advice?", answer: "Vesper answers only from your information and passes medical or safety questions to your team." },
    { question: "Is Vesper a travel agency WhatsApp bot?", answer: "Vesper works for travel and tour agencies on WhatsApp, Instagram and Messenger, answering inquiries and taking trip bookings." },
  ],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Hotel booking chatbot", href: "/use-cases/hotels" },
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
