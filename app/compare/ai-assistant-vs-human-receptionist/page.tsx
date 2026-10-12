import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/compare/ai-assistant-vs-human-receptionist",
  crumb: "AI assistant vs human receptionist",
  title: "Vesper AI Assistant vs Human Receptionist – Cost in NPR",
  description:
    "Vesper AI assistant vs a human receptionist: monthly cost in NPR, hours of coverage, and what each does better, for service businesses in Nepal.",
  h1: "Vesper AI assistant vs a human receptionist: cost and coverage",
  intro:
    "Vesper covers all 168 hours of the week for Rs. 4,999 to Rs. 19,999 a month; a receptionist covers working hours and handles what needs a person.",
  table: {
    heading: "Cost and coverage comparison",
    columns: ["", "Human receptionist", "Vesper"],
    rows: [
      ["Monthly cost", "A full salary, plus festival allowance and leave cover", "Rs. 4,999 (Starter), Rs. 11,999 (Pro) or Rs. 19,999 (Business)"],
      ["Hours covered", "Working hours, typically about 48 of the 168 hours in a week", "All 168 hours, including nights and holidays"],
      ["Reply speed", "Fast when free, slow when busy with walk-ins or calls", "Seconds, on every message"],
      ["Messages at once", "One conversation at a time", "Many conversations at the same time"],
      ["Phone calls", "Yes", "No, Vesper only answers written messages"],
      ["Walk-in customers", "Yes", "No"],
      ["Judgement, complaints, special requests", "Yes", "Hands these to staff"],
      ["Languages", "Whatever the person speaks", "English, Nepali and Romanized Nepali"],
    ],
  },
  chats: [
    {
      heading: "Example at 11:50 PM: Vesper covers the night, staff take the morning",
      label: "AI assistant books overnight and hands a special request to the receptionist",
      messages: [
        { from: "customer", text: "Can I book a hair spa on Saturday at 10?" },
        { from: "vesper", text: "Saturday 10:00 AM is free for a hair spa (Rs. 1,800). Shall I book it?" },
        { from: "customer", text: "Yes. Also can you do my mother's hair the same time? She uses a wheelchair" },
        { from: "vesper", text: "Your hair spa is booked. I've asked our team to check the best arrangement for your mother, and they'll reply here in the morning." },
      ],
    },
  ],
  sections: [
    {
      heading: "This is not either-or",
      paragraphs: [
        "Most businesses that use Vesper still have people at the front desk. Vesper takes the repetitive part, such as prices, timings, location and routine bookings, at every hour, and your receptionist handles walk-ins, phone calls and anything that needs judgement. When a message needs a person, Vesper marks it in the inbox and alerts the owner.",
      ],
    },
    {
      heading: "Where the AI assistant is stronger",
      bullets: [
        "Nights, early mornings, weekends and festivals, when nobody is at the desk",
        "Busy hours, when ten messages arrive while staff are with customers",
        "Consistency: the same correct price and policy every time",
        "Double-booking: availability is checked before every booking",
      ],
    },
    {
      heading: "Where a human receptionist is stronger",
      bullets: [
        "Phone calls and walk-in customers",
        "Complaints, refunds and sensitive situations",
        "Special requests and judgement calls",
        "Building personal relationships with regular customers",
      ],
    },
    {
      heading: "Working out the numbers for your business",
      paragraphs: [
        "Take what you pay, or would pay, a receptionist each month, including allowances, and the hours they cover. Compare that with the plan you need: Starter at Rs. 4,999 for one channel and up to 100 bookings, Pro at Rs. 11,999 for all channels and unlimited conversations, or Business at Rs. 19,999 for several staff calendars and branches. Then count how many messages arrive outside working hours today; each one is a booking Vesper can take.",
      ],
    },
  ],
  steps: {
    heading: "How to add Vesper next to your front desk",
    items: [
      "Start the 14-day free trial and add your services, prices and hours.",
      "Connect the channel that gets the most messages.",
      "Give your receptionist access to the Vesper inbox for handoffs.",
      "After two weeks, look at how many bookings came in outside working hours.",
    ],
  },
  faq: [
    { question: "Can Vesper replace a receptionist?", answer: "Vesper replaces the repetitive message work but not a person at the desk: it does not take phone calls, greet walk-ins or handle complaints." },
    { question: "How much does an AI assistant cost compared to staff?", answer: "Vesper costs Rs. 4,999 to Rs. 19,999 per month for 24/7 message coverage, usually well below a full-time salary." },
    { question: "Does Vesper answer phone calls?", answer: "Vesper does not answer phone calls. It only replies to written messages on WhatsApp, Instagram, Messenger and website chat." },
    { question: "Will my receptionist lose control of bookings?", answer: "Vesper books into the same calendar your team uses, and staff can take over any chat from the inbox." },
  ],
  related: [
    { label: "AI receptionist Nepal", href: "/ai-receptionist-nepal" },
    { label: "Human handoff", href: "/human-handoff" },
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
