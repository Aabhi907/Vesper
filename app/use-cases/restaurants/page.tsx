import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/restaurants",
  crumb: "Restaurant reservation chatbot",
  title: "Vesper Restaurant Reservation Chatbot – Table Booking",
  description:
    "Vesper is a restaurant reservation chatbot that answers menu, hours and location questions on WhatsApp 24/7 and books bookable tables, rooms and sittings.",
  h1: "Vesper restaurant reservation chatbot for WhatsApp table booking",
  intro:
    "Vesper answers restaurant and cafe messages on WhatsApp, Instagram and Messenger 24/7 and books reservations for the tables, rooms or sittings you set up.",
  chats: [
    {
      heading: "Example table booking on WhatsApp",
      label: "Table booking WhatsApp: a guest reserves the rooftop table for dinner",
      messages: [
        { from: "customer", text: "Hi, rooftop table available Friday 7pm? We are 6" },
        { from: "vesper", text: "Hello! The rooftop table seats up to 8 and is free on Friday at 7:00 PM for 2 hours. Shall I reserve it?" },
        { from: "customer", text: "yes. do you have veg options?" },
        { from: "vesper", text: "Yes, about half our menu is vegetarian, including the paneer tikka and veg thakali set. Please share your name and phone number to confirm the rooftop table." },
      ],
    },
  ],
  sections: [
    {
      heading: "Questions restaurant guests send by message",
      bullets: [
        "\"Table available tonight at 8?\"",
        "\"Do you have veg / vegan options?\"",
        "\"Opening hours on Saturday?\"",
        "\"Is there parking?\"",
        "\"Can we book the private room for a birthday?\"",
        "\"Location pathaunu na\"",
      ],
      paragraphs: [
        "Vesper answers these from your menu highlights, hours and policies, in English or Nepali, while your staff are busy on the floor.",
      ],
    },
    {
      heading: "How reservations work in Vesper",
      paragraphs: [
        "In Vesper, each bookable table, room or sitting has its own calendar, and each calendar takes one reservation per time slot. That fits private dining rooms, rooftop or window tables, chef's table nights and set-menu sittings very well: Vesper never gives the same table to two parties at once.",
        "Vesper does not yet manage a full floor plan with dozens of interchangeable tables in one slot. If that is how your restaurant takes reservations, talk to us before you start so we can set it up honestly for your floor.",
      ],
    },
    {
      heading: "Fewer missed messages at the busiest hour",
      paragraphs: [
        "Restaurants get the most messages exactly when nobody can answer: during service. Vesper replies within seconds, and anything it cannot handle, such as a large event enquiry, is passed to your manager with an email alert.",
      ],
    },
    {
      heading: "Answers in English and Nepali",
      paragraphs: [
        "Guests write \"aaja beluka table cha?\" as often as \"table for tonight?\". Vesper understands both, plus Devanagari Nepali, and replies in the guest's own language. Tourists get clear English answers about the menu, prices and directions, at any hour.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a restaurant reservation chatbot",
    items: [
      "Add each bookable table, room or sitting, with how long a reservation lasts.",
      "Add your opening hours and closed days.",
      "Write answers for menu highlights, dietary options, parking and location.",
      "Connect WhatsApp, Instagram or Messenger.",
      "Check reservations and handoffs in the Vesper dashboard.",
    ],
  },
  faq: [
    { question: "Can Vesper take table bookings on WhatsApp?", answer: "Vesper books reservations on WhatsApp for each table, room or sitting you set up, and never double-books one table." },
    { question: "Can Vesper manage my whole floor plan?", answer: "Vesper does not yet manage many interchangeable tables in one slot. It works best for specific tables, private rooms and sittings." },
    { question: "Does Vesper answer menu questions?", answer: "Vesper answers questions about menu items, dietary options, hours and location from the information you add." },
    { question: "Can guests cancel by message?", answer: "Vesper lets guests cancel or move a reservation in the chat and frees the slot right away." },
  ],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Human handoff", href: "/human-handoff" },
    { label: "Appointment booking bot", href: "/appointment-booking-bot" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
