import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/compare/vesper-vs-manychat",
  crumb: "Bolnivo vs ManyChat",
  title: "Bolnivo vs ManyChat – Comparison for Nepali Businesses",
  description:
    "Bolnivo vs ManyChat: a factual comparison of channels, pricing currency, booking and language for service businesses in Nepal, with links to ManyChat's own pages.",
  h1: "Bolnivo vs ManyChat: which fits a booking business in Nepal?",
  intro:
    "Bolnivo is built for booking appointments in chat for businesses in Nepal; ManyChat is a broad chat-marketing automation platform. They solve different problems.",
  table: {
    heading: "Bolnivo and ManyChat at a glance",
    columns: ["", "ManyChat", "Bolnivo"],
    rows: [
      ["Main purpose", "Chat marketing automation: flows, broadcasts and lead capture", "AI front desk: answer questions and book appointments"],
      ["Channels", "Instagram, Facebook Messenger, WhatsApp, TikTok, Telegram, SMS and email, depending on plan", "WhatsApp, Instagram, Messenger and website chat (TikTok coming soon)"],
      ["Pricing", "Free plan plus paid plans in US dollars, scaled by active contacts", "Rs. 4,999 to Rs. 19,999 per month in NPR, 14-day free trial"],
      ["How replies are built", "Mostly flows you design, with AI features on paid plans", "AI replies from your services, prices and policies; no flows to draw"],
      ["Appointment booking", "Through flows and third-party integrations", "Built in: real availability, rescheduling, cancellation, Google Calendar sync"],
      ["Local payments", "Not a focus", "Optional eSewa and Khalti deposits"],
      ["Built for", "Creators, brands and e-commerce worldwide", "Service businesses in Nepal"],
    ],
  },
  chats: [
    {
      heading: "Example: a booking handled by Bolnivo without a flow",
      label: "Bolnivo books a customer from a free-text Instagram DM",
      messages: [
        { from: "customer", text: "parsi beluka 5 baje nails garna milcha?" },
        { from: "vesper", text: "Namaste! Parsi 5 baje gel nails ko lagi slot khali cha, Rs. 1,800. Book garidiu?" },
        { from: "customer", text: "ok" },
        { from: "vesper", text: "Tapai ko naam ra phone number pathaunu na, ani ma pakka garidinchu." },
      ],
    },
  ],
  sections: [
    {
      heading: "When ManyChat is the better choice",
      paragraphs: [
        "ManyChat is a mature platform for marketing automation: keyword and comment-triggered DMs, broadcasts, growth tools and a visual flow builder. If your goal is lead capture or running Instagram campaigns at scale, and you are comfortable building flows, ManyChat is designed for that. It also covers channels Bolnivo does not, such as Telegram, SMS and email, and offers a free plan.",
      ],
    },
    {
      heading: "When Bolnivo is the better choice",
      paragraphs: [
        "Bolnivo is narrower on purpose. It is for businesses whose messages end in an appointment: salons, clinics, consultancies, trekking agencies. There are no flows to design. You add your services, prices and hours, and Bolnivo answers free-text questions, including Romanized Nepali, checks real availability and books the slot. Prices are in rupees, and deposits can be taken through eSewa and Khalti.",
      ],
    },
    {
      heading: "A note on accuracy",
      paragraphs: [
        "ManyChat details on this page come from ManyChat's public pricing and help pages, linked below, and may change. Check them for the current plans and limits before you decide.",
      ],
    },
  ],
  steps: {
    heading: "How to try Bolnivo alongside your current setup",
    items: [
      "Start a 14-day Bolnivo trial and add your services, prices and hours.",
      "Connect one channel, for example WhatsApp, that ManyChat is not handling.",
      "Compare booking conversations over two weeks before moving other channels.",
    ],
  },
  faq: [
    { question: "Is Bolnivo a ManyChat alternative?", answer: "Bolnivo is an alternative for service businesses that mainly need questions answered and appointments booked, rather than marketing flows." },
    { question: "Is Bolnivo cheaper than ManyChat?", answer: "Bolnivo is priced in NPR from Rs. 4,999 per month; ManyChat has a free plan and US-dollar paid plans that scale with contacts, so it depends on your volume." },
    { question: "Does Bolnivo have a flow builder like ManyChat?", answer: "Bolnivo does not use flows. It replies with AI from the information you enter and books against your real calendar." },
    { question: "Does Bolnivo work on TikTok?", answer: "Bolnivo's TikTok support is coming soon and is not live yet. ManyChat lists TikTok as a supported channel today." },
  ],
  sources: [
    { label: "ManyChat pricing (manychat.com)", href: "https://manychat.com/pricing" },
    { label: "ManyChat Free plan (ManyChat help center)", href: "https://help.manychat.com/hc/en-us/articles/25800197498652-Free-plan" },
  ],
  related: [
    { label: "Chatbot vs AI front desk", href: "/compare/chatbot-vs-ai-front-desk" },
    { label: "Instagram DM auto reply", href: "/instagram-auto-reply" },
    { label: "Appointment booking bot", href: "/appointment-booking-bot" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
