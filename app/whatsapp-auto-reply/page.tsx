import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/whatsapp-auto-reply",
  crumb: "WhatsApp auto reply",
  title: "Bolnivo WhatsApp Auto Reply & AI Chatbot for Business",
  description:
    "Bolnivo is a WhatsApp AI assistant that auto-replies to customers 24/7, answers prices and books real calendar slots. WhatsApp auto reply for businesses in Nepal.",
  h1: "Bolnivo WhatsApp auto reply: an AI chatbot that books appointments",
  intro:
    "Bolnivo auto-replies to your WhatsApp Business messages 24/7, answers questions from your own prices and policies, and books customers into real open slots.",
  chats: [
    {
      heading: "Example WhatsApp booking bot conversation",
      label: "WhatsApp chatbot for business: a customer books a haircut through Bolnivo",
      messages: [
        { from: "customer", text: "Hi, do you have a slot for a haircut tomorrow evening?" },
        { from: "vesper", text: "Hi! Tomorrow we have 5:00 PM and 6:30 PM open for a haircut (Rs. 600, about 45 minutes). Which one works for you?" },
        { from: "customer", text: "6:30 please" },
        { from: "vesper", text: "Great. Can I get your name and phone number to hold 6:30 PM tomorrow?" },
        { from: "customer", text: "Anish, 98XXXXXXXX" },
        { from: "vesper", text: "Done, Anish. Your haircut is booked for tomorrow at 6:30 PM. See you then!" },
      ],
    },
  ],
  sections: [
    {
      heading: "What the Bolnivo WhatsApp AI assistant does",
      paragraphs: [
        "Most WhatsApp auto reply tools send the same canned text to everyone. Bolnivo reads what the customer actually asked and answers it. If someone asks the price of a facial, Bolnivo answers with the price you entered. If they ask for a time, Bolnivo checks your real calendar, offers slots that are actually free, and only says a booking is confirmed after it has been saved.",
      ],
      bullets: [
        "Answers questions about services, prices, opening hours and location from the information you approve",
        "Books, reschedules and cancels appointments against real availability, with Google Calendar sync",
        "Suggests other open times when the requested slot is taken",
        "Collects the customer's name and phone number before booking",
        "Replies in English, Nepali or Romanized Nepali, matching the customer",
        "Alerts your staff and hands over the chat when a customer asks for a person",
      ],
    },
    {
      heading: "WhatsApp business automation on the official API",
      paragraphs: [
        "Bolnivo connects to WhatsApp through Meta's official WhatsApp Business Cloud API, not an unofficial app or a phone-scraping tool. Messages are handled on Meta's servers and Bolnivo's backend, so your phone does not need to stay switched on for the WhatsApp chatbot to keep replying.",
        "Meta's rules still apply: a business can reply freely within 24 hours of the customer's last message. Bolnivo replies within seconds, so the window is never a problem for its own answers, and the staff inbox tells you when a conversation is outside the window.",
      ],
    },
    {
      heading: "WhatsApp auto reply in Nepal",
      paragraphs: [
        "Bolnivo is built in Kathmandu for businesses in Nepal. It understands the way people really type on WhatsApp here, including Romanized Nepali such as \"bholi 2 baje slot cha?\", prices in rupees, and Nepal time. Customers can pay booking deposits through eSewa or Khalti when you switch deposits on for a service.",
      ],
    },
    {
      heading: "Who uses a WhatsApp chatbot for business",
      paragraphs: [
        "Bolnivo fits any business where customers message to ask a price or book a time: salons and beauty parlours, clinics and dental practices, hotels and homestays, trekking agencies, education consultancies and gyms. If your WhatsApp fills up with the same five questions every day, Bolnivo answers them so your staff can focus on the customers in front of them.",
      ],
    },
  ],
  steps: {
    heading: "How to set up the Bolnivo WhatsApp chatbot",
    items: [
      "Create your Bolnivo account and add your services, prices, durations and opening hours.",
      "Add the answers to the questions customers ask most: location, parking, payment, cancellation policy.",
      "Connect your WhatsApp Business number through Meta's official sign-up flow in the Bolnivo dashboard.",
      "Optionally connect Google Calendar so Bolnivo sees busy times and writes new bookings to it.",
      "Send a test message from your own phone, then let Bolnivo answer real customers.",
    ],
  },
  faq: [
    { question: "Can Bolnivo auto reply on WhatsApp?", answer: "Bolnivo auto-replies to every WhatsApp Business message within seconds, 24/7, answering questions and booking real open slots instead of sending a fixed away message." },
    { question: "Does the WhatsApp chatbot need my phone to be on?", answer: "Bolnivo runs on the official WhatsApp Business Cloud API, so replies are sent from Meta's servers and your phone does not need to be switched on." },
    { question: "Is Bolnivo a WhatsApp booking bot?", answer: "Bolnivo books, reschedules and cancels appointments in the WhatsApp chat, checking your real calendar first and confirming only after the slot is saved." },
    { question: "Does Bolnivo's WhatsApp auto reply work in Nepali?", answer: "Bolnivo understands and replies in English, Nepali in Devanagari, and Romanized Nepali, including mixed Nepali-English messages." },
    { question: "Which plan includes WhatsApp?", answer: "Bolnivo includes WhatsApp on every plan. Starter (Rs. 4,999 a month) covers one channel, and Pro and Business cover WhatsApp, Instagram and Messenger together." },
  ],
  related: [
    { label: "Instagram DM auto reply", href: "/instagram-auto-reply" },
    { label: "Appointment booking bot", href: "/appointment-booking-bot" },
    { label: "WhatsApp away message vs Bolnivo", href: "/compare/vesper-vs-whatsapp-business-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
