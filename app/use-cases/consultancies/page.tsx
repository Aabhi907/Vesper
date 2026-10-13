import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/consultancies",
  crumb: "Education consultancy chatbot",
  title: "Bolnivo Education Consultancy Chatbot for Inquiries",
  description:
    "Bolnivo is an education consultancy chatbot that answers abroad study inquiries from your approved information and books counselling sessions on WhatsApp and Instagram.",
  h1: "Bolnivo education consultancy chatbot for abroad study inquiries",
  intro:
    "Bolnivo answers abroad study inquiries for education consultancies from your approved information and books counselling sessions, without making visa or admission promises.",
  chats: [
    {
      heading: "Example abroad study consultancy inquiry",
      label: "Abroad study consultancy inquiry bot: a student books a counselling session",
      messages: [
        { from: "customer", text: "Australia ko lagi IELTS kati chahincha? Ani counselling free ho?" },
        { from: "vesper", text: "Namaste! Hamro information anusar dherai Australian university le overall 6.0 to 6.5 IELTS mangcha, tara course anusar pharak parcha. First counselling session free ho." },
        { from: "customer", text: "Visa pakka huncha?" },
        { from: "vesper", text: "Visa ko decision embassy le garcha, tyo hami pakka bhanna sakdainau. Counsellor le tapai ko profile herera honest advice dinu huncha. Bholi 3 baje session book garidiu?" },
        { from: "customer", text: "Huncha" },
      ],
    },
  ],
  sections: [
    {
      heading: "What students and parents ask a consultancy",
      bullets: [
        "\"Which countries do you process?\"",
        "\"IELTS / PTE score kati chahincha?\"",
        "\"What is the next intake?\"",
        "\"Is counselling free?\"",
        "\"How much does your service cost?\"",
        "\"Can my parents come to the session?\"",
        "\"Visa pakka huncha?\"",
      ],
    },
    {
      heading: "Answers only from your approved information",
      paragraphs: [
        "Consultancies live on trust. Bolnivo answers from the countries, intakes, fees and requirements you write down, and nothing else. When a student asks about something you have not covered, or about their own specific case, Bolnivo offers a session with a counsellor instead of guessing.",
        "Bolnivo does not promise visas or admissions. Write your policy on that the way you want it said, and Bolnivo will stick to it; anything about an individual application goes to a counsellor.",
      ],
    },
    {
      heading: "Counselling sessions booked with the right counsellor",
      paragraphs: [
        "Add each counsellor as a staff member, with the countries or services they cover. Students can book, move or cancel a session by message, and Bolnivo checks the counsellor's real availability first. During intake season, when inquiries spike in the evenings, Bolnivo keeps every student answered and your counsellors' calendars full.",
      ],
    },
    {
      heading: "Follow up with every serious inquiry",
      paragraphs: [
        "Every student conversation is saved in the Bolnivo inbox with the student's name and phone number once they share it. Your counsellors can see which students asked about which country, which ones booked a session, and which ones asked for a person, and pick up where Bolnivo left off without asking the student to repeat themselves.",
      ],
    },
  ],
  steps: {
    heading: "How to set up an education consultancy chatbot",
    items: [
      "Write down the countries, intakes, test requirements and fees you want students to know.",
      "Add your counselling session types and counsellors.",
      "State your policy on visa and admission questions in your own words.",
      "Connect WhatsApp, Instagram or Messenger.",
      "Review conversations in the inbox and pick up any student who asks for a counsellor.",
    ],
  },
  faq: [
    { question: "Will Bolnivo promise a visa to students?", answer: "Bolnivo does not promise visas or admissions. It answers from your approved information and passes individual cases to a counsellor." },
    { question: "Can Bolnivo book counselling sessions?", answer: "Bolnivo books, reschedules and cancels counselling sessions with the right counsellor after checking their real availability." },
    { question: "Does Bolnivo answer in Nepali?", answer: "Bolnivo answers students and parents in English, Nepali or Romanized Nepali, matching how they wrote." },
    { question: "Can a counsellor take over the chat?", answer: "Bolnivo lets any counsellor take over a conversation from the inbox, and stays silent while they reply." },
  ],
  related: [
    { label: "Nepali chatbot", href: "/nepali-chatbot" },
    { label: "Human handoff", href: "/human-handoff" },
    { label: "Instagram DM auto reply", href: "/instagram-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
