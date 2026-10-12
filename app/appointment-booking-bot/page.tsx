import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/appointment-booking-bot",
  crumb: "Appointment booking bot",
  title: "Vesper Appointment Booking Bot – AI Scheduler",
  description:
    "Vesper is an AI appointment scheduler that books, reschedules and cancels in WhatsApp, Instagram and Messenger chats, synced with Google Calendar. 24/7 booking for Nepal.",
  h1: "Vesper appointment booking bot: AI scheduling inside the chat",
  intro:
    "Vesper books appointments inside WhatsApp, Instagram and Messenger chats, checks real availability first, and syncs every booking with Google Calendar, 24/7.",
  chats: [
    {
      heading: "Example: automatic booking on WhatsApp when the slot is taken",
      label: "Automatic booking WhatsApp: Vesper offers alternatives when a time is already booked",
      messages: [
        { from: "customer", text: "Can I book a massage Thursday 4pm?" },
        { from: "vesper", text: "Thursday 4:00 PM is already taken, sorry. I can do Thursday 2:30 PM or 5:30 PM, or Friday 4:00 PM. Would any of those work?" },
        { from: "customer", text: "5:30 thursday" },
        { from: "vesper", text: "Perfect. May I have your name and phone number?" },
        { from: "customer", text: "Priya, 98XXXXXXXX" },
        { from: "vesper", text: "Booked, Priya: 60-minute massage, Thursday at 5:30 PM. You'll get a confirmation by email if you share your address." },
      ],
    },
  ],
  sections: [
    {
      heading: "An AI appointment scheduler that never double-books",
      paragraphs: [
        "A booking bot is only useful if the times it offers are real. Vesper checks the business's own booking calendar and, when connected, Google Calendar busy times before it offers a slot. It only tells the customer a booking is confirmed after the appointment has been saved, and the database itself refuses two overlapping bookings for the same staff member, so two customers chatting at once cannot both get 4 PM.",
      ],
    },
    {
      heading: "Google Calendar booking bot",
      paragraphs: [
        "Connect Google Calendar and Vesper reads your busy times so it never offers a slot you have blocked for something else. New bookings, reschedules and cancellations made in chat are written back to your calendar, so your team keeps working from the calendar they already use.",
      ],
    },
    {
      heading: "What the booking bot handles",
      bullets: [
        "New bookings, rescheduling and cancellation in the chat",
        "Opening hours, closed days and service durations",
        "Bookings with a specific staff member",
        "Group bookings for several people at once",
        "Booking requests your staff approve first, for services that need a check",
        "Multi-day trips and packages booked by start date with a daily capacity",
        "Optional eSewa or Khalti deposits",
        "Email confirmations and reminders, plus SMS on supported plans",
      ],
    },
    {
      heading: "An online booking system for Nepal, without a booking website",
      paragraphs: [
        "Many businesses in Nepal never set up an online booking page because customers would rather message than fill in a form. Vesper turns the chat itself into the booking system: the customer asks in their own words, in English or Nepali, and the booking is made in the same conversation, at any hour. Your team sees every appointment in the Vesper dashboard and in Google Calendar.",
      ],
    },
  ],
  steps: {
    heading: "How to set up 24/7 booking with Vesper",
    items: [
      "Add each service with its price and duration, and your weekly opening hours.",
      "Add staff members if customers book with a specific person.",
      "Connect Google Calendar so Vesper sees busy times and writes new bookings.",
      "Connect the messaging channels your customers use.",
      "Book a test appointment from your own phone, then reschedule and cancel it to see the full flow.",
    ],
  },
  faq: [
    { question: "Can Vesper book appointments automatically?", answer: "Vesper books, reschedules and cancels appointments automatically in the chat, after checking that the time is really free." },
    { question: "Does Vesper work with Google Calendar?", answer: "Vesper reads Google Calendar busy times before offering slots and writes new bookings, changes and cancellations back to the calendar." },
    { question: "What happens if two people ask for the same time?", answer: "Vesper confirms only the booking that is saved first. The second customer is offered other open times instead." },
    { question: "Can customers book at night?", answer: "Vesper takes bookings 24/7, so a customer messaging at midnight can book tomorrow's slot right away." },
  ],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Clinic appointment chatbot", href: "/use-cases/clinics" },
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
