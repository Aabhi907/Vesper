import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/gyms",
  crumb: "Gym membership inquiry bot",
  title: "Vesper Gym Chatbot – Membership Inquiries & Class Booking",
  description:
    "Vesper is a gym membership inquiry bot that answers fee and timing questions 24/7 and books personal training, trial sessions and small fitness classes.",
  h1: "Vesper gym chatbot for membership inquiries and fitness class booking",
  intro:
    "Vesper answers gym membership inquiries on WhatsApp, Instagram and Messenger 24/7 and books trial sessions, personal training and small fitness classes.",
  chats: [
    {
      heading: "Example gym membership inquiry",
      label: "Gym membership inquiry bot: a visitor asks about fees and books a trial session",
      messages: [
        { from: "customer", text: "monthly membership kati ho? and timing?" },
        { from: "vesper", text: "Namaste! Monthly membership is Rs. 3,000, or Rs. 7,500 for 3 months. We are open 5:30 AM to 9:00 PM, Sunday to Friday. Would you like a free trial session first?" },
        { from: "customer", text: "yes tomorrow morning" },
        { from: "vesper", text: "Trainer Bikash has a trial session free at 6:30 AM or 7:30 AM tomorrow. Which works?" },
        { from: "customer", text: "6:30" },
        { from: "vesper", text: "Booked for 6:30 AM tomorrow with Bikash. Please share your name and phone number." },
      ],
    },
  ],
  sections: [
    {
      heading: "What people ask a gym before joining",
      bullets: [
        "\"Monthly fee kati ho?\"",
        "\"Is there a free trial?\"",
        "\"Timing? Open on Saturday?\"",
        "\"Do you have a female trainer?\"",
        "\"Personal training kati parcha?\"",
        "\"Is there a yoga or Zumba class?\"",
      ],
      paragraphs: [
        "Most of these arrive in the evening, after people see a post or walk past. Vesper answers immediately from your fees, timings and class list.",
      ],
    },
    {
      heading: "Fitness class booking and personal training",
      paragraphs: [
        "Add each trainer as a staff member and Vesper books personal training and trial sessions against their own calendar. Small classes work the same way: one booking per class time on the instructor's calendar.",
        "Vesper does not yet take many separate members into one class time, so large group classes with a headcount are best announced with their schedule, which Vesper can share, rather than booked one by one.",
      ],
    },
    {
      heading: "Turn inquiries into members",
      paragraphs: [
        "A membership inquiry that gets an answer the next day often never comes back. Vesper replies within seconds, offers a trial, and books it. Your trainers see the bookings in the dashboard or Google Calendar, and any question about injuries or health is passed to your staff, not answered by the AI.",
      ],
    },
    {
      heading: "One inbox for every channel your members use",
      paragraphs: [
        "Gyms get messages on Instagram from people who saw a reel, on WhatsApp from existing members and on Facebook from people nearby. Vesper answers all of them and puts every conversation in one inbox, so your front desk can see who booked a trial, who asked about personal training and who still needs a call back.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a gym membership inquiry bot",
    items: [
      "Write your membership plans, fees and opening hours.",
      "Add trainers and the sessions they run: trial, personal training, small classes.",
      "Add your class timetable as an answer customers can ask for.",
      "Connect WhatsApp, Instagram or Messenger.",
      "Follow up with trial bookings from the dashboard.",
    ],
  },
  faq: [
    { question: "Can Vesper answer gym membership questions?", answer: "Vesper answers questions about fees, plans, timings and trainers from the information you add, 24/7." },
    { question: "Can members book fitness classes?", answer: "Vesper books trial sessions, personal training and small classes on each trainer's calendar. Large group classes with many members per slot are not supported yet." },
    { question: "Does Vesper work in Nepali for gyms?", answer: "Vesper understands English, Nepali and Romanized Nepali, such as \"monthly fee kati ho?\"." },
    { question: "Will Vesper give fitness or injury advice?", answer: "Vesper does not give health advice. It passes those questions to your trainers." },
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
