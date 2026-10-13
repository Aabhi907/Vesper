import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/instagram-auto-reply",
  crumb: "Instagram DM auto reply",
  title: "Bolnivo Instagram DM Auto Reply & Booking Chatbot",
  description:
    "Bolnivo auto-replies to Instagram DMs 24/7, answers price questions and books appointments in the chat. An Instagram AI reply and booking bot for service businesses.",
  h1: "Bolnivo Instagram DM auto reply and booking chatbot",
  intro:
    "Bolnivo auto-replies to Instagram Direct Messages for your business, answering \"price?\" and \"available?\" questions and booking real calendar slots, day or night.",
  chats: [
    {
      heading: "Example Instagram AI reply conversation",
      label: "Instagram chatbot: a follower asks a price and books through Bolnivo",
      messages: [
        { from: "customer", text: "price for bridal makeup?" },
        { from: "vesper", text: "Hi! Bridal makeup is Rs. 15,000 and takes about 3 hours, including hair styling. Do you have a date in mind?" },
        { from: "customer", text: "28th, morning" },
        { from: "vesper", text: "On the 28th we have 7:00 AM and 9:00 AM free. Shall I book one for you?" },
        { from: "customer", text: "7am" },
        { from: "vesper", text: "Lovely. Please share your name and phone number and I'll lock in 7:00 AM on the 28th." },
      ],
    },
  ],
  sections: [
    {
      heading: "Auto reply to Instagram messages without sounding like a bot",
      paragraphs: [
        "On Instagram, customers find you through a post or a reel and send a short DM: \"price?\", \"available?\", \"location?\". Every one of those is a potential booking, and most go cold if nobody answers within the hour. Bolnivo answers each DM based on what was actually asked, using your own service menu and policies, so the reply is specific instead of a generic \"thanks for reaching out\".",
      ],
    },
    {
      heading: "What the Bolnivo Instagram chatbot can do",
      bullets: [
        "Answers Instagram DMs about services, prices, hours and location from information you approve",
        "Checks real availability and books, reschedules or cancels appointments inside the DM",
        "Offers other open times when the one the customer wants is taken",
        "Replies in English, Nepali or Romanized Nepali to match the customer",
        "Passes the conversation to your team, with an alert, when a customer asks for a person",
      ],
    },
    {
      heading: "An Instagram booking bot connected to your real calendar",
      paragraphs: [
        "Bolnivo keeps its own booking calendar and can sync with Google Calendar, so the times it offers on Instagram are times you are actually free. A booking is only confirmed to the customer after it has been saved, which prevents the double bookings that happen when two people promise the same slot in two different apps.",
        "Because WhatsApp, Instagram and Messenger share one calendar inside Bolnivo, a slot booked on Instagram is no longer offered on WhatsApp a minute later.",
      ],
    },
    {
      heading: "Your team can still answer Instagram DMs",
      paragraphs: [
        "Every Instagram conversation shows up in the Bolnivo inbox. When a staff member replies there, Bolnivo pauses on that conversation so it never talks over a person. Staff replies are sent with Meta's human-agent tag, which allows replies after the normal 24-hour window.",
      ],
    },
  ],
  steps: {
    heading: "How to set up Instagram auto reply with Bolnivo",
    items: [
      "Make sure your Instagram account is a professional (business or creator) account.",
      "Add your services, prices and opening hours in the Bolnivo dashboard.",
      "Connect Instagram through Meta in the Bolnivo Channels page and allow message access.",
      "DM your own account from a personal profile to test a price question and a booking.",
      "Turn it on for real customers and watch the conversations in the Bolnivo inbox.",
    ],
  },
  faq: [
    { question: "Can Bolnivo auto reply to Instagram messages?", answer: "Bolnivo replies to Instagram Direct Messages automatically, 24/7, answering what the customer asked and booking real appointment slots in the chat." },
    { question: "Does Bolnivo reply to Instagram comments?", answer: "Bolnivo handles Instagram Direct Messages. It does not reply to comments on posts or reels." },
    { question: "Is the Instagram chatbot available on the Starter plan?", answer: "Bolnivo Starter includes one channel, which can be Instagram or WhatsApp. Pro and Business include Instagram, WhatsApp and Messenger together." },
    { question: "Will my followers know it's an AI reply?", answer: "Bolnivo writes short, natural replies in the customer's language, and your staff can step into any conversation from the inbox at any time." },
    { question: "Does Bolnivo work with Instagram in Nepali?", answer: "Bolnivo understands Nepali, Romanized Nepali and English on Instagram and answers in the language the customer used." },
  ],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Messenger chatbot", href: "/messenger-auto-reply" },
    { label: "Salon booking chatbot", href: "/use-cases/salons" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
