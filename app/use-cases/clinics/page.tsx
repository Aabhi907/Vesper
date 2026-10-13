import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/clinics",
  crumb: "Clinic appointment chatbot",
  title: "Bolnivo Clinic Appointment Chatbot & Dental Booking Bot",
  description:
    "Bolnivo is a clinic appointment chatbot that books dental and clinic visits on WhatsApp, Instagram and Messenger, answers practical questions and escalates urgent messages.",
  h1: "Bolnivo clinic appointment chatbot and dental booking bot",
  intro:
    "Bolnivo books clinic and dental appointments over WhatsApp, Instagram and Messenger, answers practical questions like fees and timings, and never gives medical advice.",
  chats: [
    {
      heading: "Example dental appointment booking",
      label: "Dental appointment booking bot: a patient books a scaling with a named dentist",
      messages: [
        { from: "customer", text: "Hello, I want teeth cleaning. Is Dr. Shrestha available this week?" },
        { from: "vesper", text: "Hello! Dr. Shrestha has scaling and polishing slots on Wednesday at 10:30 AM and Friday at 4:00 PM. The fee is Rs. 2,000. Would you like one?" },
        { from: "customer", text: "Wednesday" },
        { from: "vesper", text: "Booked with Dr. Shrestha on Wednesday at 10:30 AM. May I have the patient's name and phone number?" },
      ],
    },
    {
      heading: "Example: an urgent message",
      label: "Clinic chatbot escalates a described emergency to staff",
      messages: [
        { from: "customer", text: "My tooth pain is 9/10 and my face is swollen, can you see me today?" },
        { from: "vesper", text: "I'm sorry you're in this much pain. Please call or come to the clinic directly right away so the team can help you. I've also alerted our staff." },
      ],
    },
  ],
  sections: [
    {
      heading: "Questions patients ask a clinic by message",
      bullets: [
        "\"Is the doctor available tomorrow?\"",
        "\"How much is a consultation / scaling / root canal?\"",
        "\"What are your opening hours on Saturday?\"",
        "\"Do I need to bring anything?\"",
        "\"Can I move my appointment?\"",
        "\"Where is the clinic?\"",
      ],
      paragraphs: [
        "These are practical questions with known answers, and Bolnivo answers them from the fees, timings and instructions your clinic enters.",
      ],
    },
    {
      heading: "No medical advice, and urgent messages go to people",
      paragraphs: [
        "Bolnivo is a front desk, not a clinician. It answers from your clinic's own information and does not diagnose or recommend treatment. When a message describes an emergency, such as severe pain or heavy bleeding, Bolnivo tells the patient to call or visit directly and alerts your staff, instead of trying to book a routine slot.",
      ],
    },
    {
      heading: "Bookings per doctor, with real availability",
      paragraphs: [
        "Add each doctor, dentist or hygienist as a staff member and Bolnivo books against their individual calendar. It respects opening hours, holidays and the length of each procedure, and syncs with Google Calendar if your clinic already uses it. Patients can reschedule or cancel by message, and confirmations and reminders go out by email, with SMS available on supported plans.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a clinic appointment chatbot",
    items: [
      "Add your services and fees, with realistic durations for each procedure.",
      "Add doctors and staff, and your weekly hours and holidays.",
      "Write the practical answers patients need: what to bring, parking, payment methods.",
      "Connect WhatsApp, Instagram or Messenger, and optionally Google Calendar.",
      "Make sure the owner email is correct for urgent alerts.",
    ],
  },
  faq: [
    { question: "Does Bolnivo give medical advice?", answer: "Bolnivo does not give medical advice. It answers practical questions from your clinic's information and books appointments." },
    { question: "What happens if a patient describes an emergency?", answer: "Bolnivo tells the patient to call or visit the clinic directly and alerts your staff straight away." },
    { question: "Can patients book a specific doctor?", answer: "Bolnivo books patients with the doctor or dentist they ask for, using that person's own calendar." },
    { question: "Where did the /clinics page go?", answer: "Bolnivo's clinics page moved here to /use-cases/clinics, alongside the other industry pages." },
  ],
  related: [
    { label: "Appointment booking bot", href: "/appointment-booking-bot" },
    { label: "Human handoff", href: "/human-handoff" },
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
