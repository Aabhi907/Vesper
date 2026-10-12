import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/ai-receptionist-nepal",
  crumb: "AI receptionist Nepal",
  title: "Vesper AI Receptionist Nepal – AI Front Desk in NPR",
  description:
    "Vesper is an AI receptionist built in Kathmandu for businesses in Nepal: 24/7 message replies, bookings in Nepal time, NPR pricing and eSewa or Khalti deposits.",
  h1: "Vesper, the AI receptionist and front desk for businesses in Nepal",
  intro:
    "Vesper is an AI front desk built in Kathmandu that answers customer messages 24/7, books appointments in Nepal time, and is priced in Nepali rupees.",
  chats: [
    {
      heading: "Example: AI customer service in Nepal with an eSewa deposit",
      label: "AI front desk Nepal: a customer books and pays a deposit through Vesper",
      messages: [
        { from: "customer", text: "Hello, Saturday 11 baje hair colour garna milcha?" },
        { from: "vesper", text: "Namaste! Saturday 11 baje hair colour ko lagi slot khali cha. Price Rs. 3,500, ani booking pakka garna Rs. 1,000 advance lagcha." },
        { from: "customer", text: "ok book garnus" },
        { from: "vesper", text: "Tapai ko naam ra phone number pathaunu na. Advance eSewa wa Khalti bata tirna milcha. Kun chahincha?" },
        { from: "customer", text: "Sita, 98XXXXXXXX. Khalti" },
        { from: "vesper", text: "Dhanyabad Sita ji! Yo link bata Rs. 1,000 Khalti ma tirnu hola. Payment aaye pachi ma yahi message garchu." },
      ],
    },
  ],
  sections: [
    {
      heading: "A chatbot for business in Nepal, not a translated foreign tool",
      paragraphs: [
        "Most AI customer service tools are built for the US or Europe. They price in dollars, assume card payments, and stumble on Roman Nepali. Vesper is built in Kathmandu for how businesses in Nepal actually work: customers message on WhatsApp, Instagram and Facebook, write in Nepali or a Nepali-English mix, pay through eSewa and Khalti, and expect a reply at 10 PM.",
      ],
    },
    {
      heading: "What a Kathmandu AI chatbot needs to get right",
      bullets: [
        "Nepal time: bookings and opening hours follow Asia/Kathmandu time (UTC+5:45), so \"bholi 2 baje\" means 2 PM tomorrow in Nepal",
        "Nepali rupees: prices, deposits and plans are in NPR",
        "Local payments: optional booking deposits through eSewa and Khalti, verified before the customer is told the payment arrived",
        "Language: English, Devanagari Nepali and Romanized Nepali",
        "Channels people here use: WhatsApp, Instagram, Facebook Messenger and your website",
      ],
    },
    {
      heading: "Vesper pricing in NPR",
      paragraphs: [
        "Vesper Starter costs Rs. 4,999 per month for one channel and up to 100 automated bookings. Pro costs Rs. 11,999 per month with unlimited conversations and all three messaging channels. Business costs Rs. 19,999 per month for teams with several staff, calendars or branches. Every plan starts with a 14-day free trial, and paying yearly lowers the monthly price.",
      ],
    },
    {
      heading: "एआई रिसेप्सनिस्ट: नेपाली व्यवसायका लागि",
      lang: "ne",
      paragraphs: [
        "Vesper ले तपाईंको व्यवसायमा आउने सन्देशहरूको जवाफ दिन, नेपाल समय अनुसार बुकिङ गर्न र eSewa वा Khalti मार्फत अग्रिम भुक्तानी लिन मद्दत गर्छ। मूल्य नेपाली रुपैयाँमा छ, र सुरुमा १४ दिन निःशुल्क प्रयोग गर्न सकिन्छ।",
      ],
    },
    {
      heading: "What Vesper does not do",
      paragraphs: [
        "Vesper answers written messages. It does not answer phone calls. When a customer needs a person, Vesper alerts your staff by email and hands over the conversation in the Vesper inbox.",
      ],
    },
  ],
  steps: {
    heading: "How to set up your AI front desk in Nepal",
    items: [
      "Sign up and choose a plan. The first 14 days are free.",
      "Add your services, prices in NPR, durations and opening hours.",
      "Connect WhatsApp, Instagram or Messenger, and optionally Google Calendar.",
      "If you want deposits, connect your eSewa or Khalti merchant account and set a deposit percentage per service.",
      "Test with a few real-style messages, then go live.",
    ],
  },
  faq: [
    { question: "Is there an AI receptionist in Nepal?", answer: "Vesper is an AI receptionist built in Kathmandu that answers WhatsApp, Instagram and Messenger messages and books appointments for businesses in Nepal." },
    { question: "How much does Vesper cost in Nepal?", answer: "Vesper costs Rs. 4,999, Rs. 11,999 or Rs. 19,999 per month depending on the plan, with a 14-day free trial." },
    { question: "Can Vesper take eSewa or Khalti payment?", answer: "Vesper can send customers an eSewa or Khalti link for a booking deposit and confirms in the chat once the payment is verified." },
    { question: "Does Vesper use Nepal time?", answer: "Vesper uses your business's time zone, Asia/Kathmandu for businesses in Nepal, for slots, opening hours and booking confirmations." },
    { question: "Does Vesper answer phone calls?", answer: "Vesper does not answer phone calls. It replies to written messages on WhatsApp, Instagram, Messenger and your website chat." },
  ],
  related: [
    { label: "Nepali chatbot", href: "/nepali-chatbot" },
    { label: "AI assistant vs human receptionist", href: "/compare/ai-assistant-vs-human-receptionist" },
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
