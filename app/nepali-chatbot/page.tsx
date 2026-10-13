import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/nepali-chatbot",
  crumb: "Nepali chatbot",
  title: "Bolnivo Nepali Chatbot – Roman Nepali & Nepanglish AI",
  description:
    "Bolnivo is a Nepali AI chatbot that understands Roman Nepali, Devanagari and Nepali-English mixed chat, and replies in the customer's own language on WhatsApp and Instagram.",
  h1: "Bolnivo: a Nepali AI chatbot that understands Roman Nepali",
  intro:
    "Bolnivo understands Romanized Nepali, Devanagari Nepali and Nepanglish, and replies in the language each customer uses, on WhatsApp, Instagram, Messenger and your website.",
  chats: [
    {
      heading: "Roman Nepali chatbot: real example chats",
      label: "Romanized Nepali AI: a customer asks for a slot, the price and the location",
      messages: [
        { from: "customer", text: "Dai bholi 2 baje slot cha?" },
        { from: "vesper", text: "Namaste! Bholi 2 baje haircut ko lagi slot khali cha. Book garidiu?" },
        { from: "customer", text: "Kati parcha?" },
        { from: "vesper", text: "Haircut Rs. 600 parcha, karib 45 minute lagcha." },
        { from: "customer", text: "Location kaha ho?" },
        { from: "vesper", text: "Hami Jhamsikhel, Lalitpur ma chhau. Book garna tapai ko naam ra phone number pathaunu na." },
        { from: "customer", text: "Ram, 98XXXXXXXX. Book garidinus" },
        { from: "vesper", text: "Bhayo Ram ji! Bholi 2 baje tapai ko haircut book bhayo. Bholi bhetaula!" },
      ],
    },
    {
      heading: "नेपाली च्याटबोट: देवनागरीमा कुराकानी",
      label: "Chatbot that understands Nepali: a booking conversation in Devanagari",
      lang: "ne",
      messages: [
        { from: "customer", text: "भोलि बिहान १० बजे फेसियल गर्न मिल्छ?" },
        { from: "vesper", text: "नमस्ते! भोलि बिहान १० बजे फेसियलको लागि समय खाली छ। बुक गरिदिऊँ?" },
        { from: "customer", text: "हुन्छ, बुक गरिदिनुस्।" },
        { from: "vesper", text: "तपाईंको नाम र फोन नम्बर पठाउनुहोस्, अनि म भोलि बिहान १० बजेको समय पक्का गरिदिन्छु।" },
      ],
    },
  ],
  sections: [
    {
      heading: "Why a Nepali AI chatbot has to understand Roman Nepali",
      paragraphs: [
        "Most customers in Nepal do not type in Devanagari on their phones. They write Nepali with English letters (\"kati parcha\", \"slot cha?\", \"bholi aauna milcha?\") and switch to English mid-sentence. A chatbot trained only on English, or only on formal Nepali, misreads these messages or answers in the wrong language. Bolnivo was built and tested on the way people in Nepal actually message businesses.",
      ],
    },
    {
      heading: "Nepali English mixed chat (Nepanglish) is normal, and Bolnivo handles it",
      paragraphs: [
        "A real message often looks like \"Sir tomorrow ko lagi appointment milcha? 4pm tira\". Bolnivo reads the date, the time and the request, checks your calendar, and replies in the same mix the customer used. If a customer writes in English, Bolnivo answers in English. If they switch to Nepali, it follows them.",
      ],
      bullets: [
        "Romanized Nepali: \"bholi\", \"parsi\", \"kati\", \"cha/chaina\", \"milcha\"",
        "Devanagari Nepali, including weekday names such as शनिबार and आइतबार",
        "Mixed Nepali and English in one message",
        "Prices in rupees and times in Nepal time",
      ],
    },
    {
      heading: "Bolnivo नेपाली बुझ्छ",
      lang: "ne",
      paragraphs: [
        "Bolnivo एउटा एआई फ्रन्ट डेस्क हो जसले WhatsApp, Instagram र Messenger मा आउने ग्राहकका सन्देशहरूको जवाफ २४ घण्टा दिन्छ। ग्राहकले देवनागरी नेपाली, रोमन नेपाली वा अंग्रेजीमा लेखे पनि Bolnivo ले बुझ्छ र सोही भाषामा जवाफ दिन्छ।",
        "यसले तपाईंले राखेको सेवा, मूल्य र खुला समयको जानकारीबाट मात्र जवाफ दिन्छ, तपाईंको क्यालेन्डरमा खाली समय हेरेर बुकिङ गर्छ, र ग्राहकले मान्छेसँग कुरा गर्न चाहेमा तपाईंको कर्मचारीलाई सूचना दिन्छ।",
      ],
    },
    {
      heading: "Answers come from your information, not guesses",
      paragraphs: [
        "Whatever the language, Bolnivo answers from the services, prices and policies you enter. If a customer asks something you have not covered, Bolnivo says it will check rather than invent an answer, and your staff can pick up the conversation from the Bolnivo inbox.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a Nepali chatbot with Bolnivo",
    items: [
      "Add your services, prices and opening hours in Bolnivo. English is fine; Bolnivo answers Nepali questions from English information.",
      "Connect WhatsApp, Instagram or Messenger from the Channels page.",
      "Test it with the messages your customers really send, such as \"kati parcha?\" or \"bholi milcha?\".",
      "Go live and read the conversations in the Bolnivo inbox.",
    ],
  },
  faq: [
    { question: "Does Bolnivo work in Nepali?", answer: "Bolnivo understands and replies in Nepali, both in Devanagari script and in Romanized Nepali, as well as English and mixed Nepali-English." },
    { question: "Is there a chatbot that understands Roman Nepali?", answer: "Bolnivo is built for Roman Nepali messages like \"Dai bholi 2 baje slot cha?\" and replies in the same style the customer used." },
    { question: "Do I need to write my information in Nepali?", answer: "Bolnivo can answer Nepali questions from information you write in English, so you only need to enter your services and prices once." },
    { question: "Will Bolnivo reply in Nepali if the customer writes in English?", answer: "Bolnivo replies in the language the customer is using, so an English message gets an English reply and a Nepali message gets a Nepali reply." },
    { question: "Does the Nepali chatbot work on WhatsApp?", answer: "Bolnivo's Nepali understanding works on every channel it supports: WhatsApp, Instagram, Messenger and the website chat widget." },
  ],
  related: [
    { label: "AI receptionist Nepal", href: "/ai-receptionist-nepal" },
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Salon booking chatbot", href: "/use-cases/salons" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
