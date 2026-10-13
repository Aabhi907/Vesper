import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/salons",
  crumb: "Salon booking chatbot",
  title: "Bolnivo Salon Booking Chatbot for WhatsApp & Instagram",
  description:
    "Bolnivo is a salon booking chatbot that answers price questions and books haircuts, colour, facials and bridal makeup on WhatsApp and Instagram, 24/7.",
  h1: "Bolnivo salon booking chatbot for WhatsApp and Instagram",
  intro:
    "Bolnivo answers salon and beauty parlour messages on WhatsApp and Instagram, quotes your real prices, and books clients with the right stylist, 24/7.",
  chats: [
    {
      heading: "Example salon WhatsApp booking",
      label: "Salon WhatsApp booking: a client books hair colour with a chosen stylist",
      messages: [
        { from: "customer", text: "Hi, global hair colour kati ho? Short hair" },
        { from: "vesper", text: "Namaste! Global colour for short hair is Rs. 3,500 and takes about 2 hours. Would you like to book?" },
        { from: "customer", text: "Yes, with Anju if possible, Sunday" },
        { from: "vesper", text: "Anju is free on Sunday at 11:00 AM or 2:00 PM. Which do you prefer?" },
        { from: "customer", text: "2pm" },
        { from: "vesper", text: "Booked: global colour with Anju, Sunday 2:00 PM. Please share your name and phone number to confirm." },
      ],
    },
  ],
  sections: [
    {
      heading: "Questions salon and beauty parlour clients actually ask",
      bullets: [
        "\"Price?\" or \"kati ho?\" under a post or reel",
        "\"Do you have a slot today evening?\"",
        "\"How long does keratin take?\"",
        "\"Can I book with the same stylist as last time?\"",
        "\"Bridal package ma ke ke huncha?\"",
        "\"Where are you? Is there parking?\"",
        "\"Can I move my appointment to tomorrow?\"",
      ],
      paragraphs: [
        "Every one of these is answered from the services, prices, durations and policies you enter, so clients get the same answer your front desk would give.",
      ],
    },
    {
      heading: "A beauty parlour appointment bot that knows your stylists",
      paragraphs: [
        "Add each stylist or beautician as a staff member and Bolnivo books against their own calendar, so a client who asks for a particular person only sees that person's free times. Service durations matter too: Bolnivo will not squeeze a two-hour colour into a 45-minute gap.",
        "Bridal and event bookings can take a deposit through eSewa or Khalti, which cuts down on no-shows for your most valuable slots.",
      ],
    },
    {
      heading: "Why salons in Nepal use a booking chatbot",
      paragraphs: [
        "Salon owners are usually busy with a client when the phone lights up. A DM that waits an hour often becomes a booking somewhere else. Bolnivo replies within seconds, including late at night when many clients scroll Instagram and plan their week, and the booking lands in your calendar before you finish the haircut you were doing.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a salon booking chatbot",
    items: [
      "Add your service menu with prices and durations: haircut, colour, keratin, facial, threading, bridal packages.",
      "Add your stylists and their working days.",
      "Connect WhatsApp and Instagram, and optionally Google Calendar.",
      "Turn on deposits for bridal or long services if you want them.",
      "Test a booking and a reschedule from your own phone.",
    ],
  },
  faq: [
    { question: "Can a salon chatbot book a specific stylist?", answer: "Bolnivo books clients with the stylist they ask for, showing only that stylist's free times." },
    { question: "Does Bolnivo work for beauty parlours in Nepal?", answer: "Bolnivo is built in Kathmandu and handles Nepali, Romanized Nepali and English messages, NPR prices and eSewa or Khalti deposits." },
    { question: "Can clients reschedule by message?", answer: "Bolnivo lets clients move or cancel their appointment in the chat and frees the old slot straight away." },
    { question: "Which plan suits a small salon?", answer: "Bolnivo Starter at Rs. 4,999 a month covers one channel and up to 100 bookings; Pro adds all channels and unlimited bookings." },
  ],
  related: [
    { label: "Instagram DM auto reply", href: "/instagram-auto-reply" },
    { label: "Appointment booking bot", href: "/appointment-booking-bot" },
    { label: "Nepali chatbot", href: "/nepali-chatbot" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
