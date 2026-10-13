import { LandingPage, landingMetadata, type Landing } from "@/components/landing-page"

const PAGE: Landing = {
  path: "/use-cases/hotels",
  crumb: "Hotel booking chatbot",
  title: "Bolnivo Hotel Booking Chatbot – WhatsApp Reservations",
  description:
    "Bolnivo is a hotel and homestay booking chatbot that answers room, rate and facility questions on WhatsApp 24/7 and takes reservation requests your staff confirm.",
  h1: "Bolnivo hotel booking chatbot for WhatsApp reservations and homestays",
  intro:
    "Bolnivo answers hotel and homestay guests on WhatsApp, Instagram and Messenger 24/7, quotes your rates, and takes reservation requests that your staff confirm.",
  chats: [
    {
      heading: "Example hotel WhatsApp reservation request",
      label: "Hotel WhatsApp reservation bot: a guest asks about rooms and requests a stay package",
      messages: [
        { from: "customer", text: "Hi, do you have a room for 2 people from 14th? 2 nights" },
        { from: "vesper", text: "Hello! Our 2-night deluxe double package is Rs. 9,000 including breakfast. Check-in is from 1:00 PM, check-out by 11:00 AM. Shall I send a request for the 14th?" },
        { from: "customer", text: "Yes please. Is airport pickup possible?" },
        { from: "vesper", text: "Airport pickup is available for Rs. 1,500, and our team can arrange it when they confirm. Please share your name and phone number, and our team will confirm your stay shortly." },
      ],
    },
  ],
  sections: [
    {
      heading: "What hotel and homestay guests ask before they book",
      bullets: [
        "\"Room available from the 14th?\"",
        "\"What is the rate per night, with breakfast?\"",
        "\"Check-in and check-out time?\"",
        "\"Do you have parking / hot water / Wi-Fi?\"",
        "\"Airport pickup possible?\"",
        "\"How far are you from Lakeside / Thamel?\"",
      ],
      paragraphs: [
        "Guests often message from another time zone, late at night in Nepal. Bolnivo answers immediately from the rates, facilities and policies you enter.",
      ],
    },
    {
      heading: "Reservation requests your staff confirm",
      paragraphs: [
        "Bolnivo books stays as packages by check-in date, such as a 2-night double or a 3-night homestay package, and you can set how many of each package you accept per day. For hotels, set these as requests that need approval: the guest is told their request has been received, your staff confirm it in the dashboard, and the guest is then told it is confirmed. This keeps room allocation in your hands while every enquiry gets an instant answer.",
        "Bolnivo does not connect to channel managers or OTAs such as Booking.com, so your team stays in charge of final room inventory.",
      ],
    },
    {
      heading: "Homestay booking without missed messages",
      paragraphs: [
        "Homestay owners often run the house and the bookings at the same time. Bolnivo answers questions about meals, rooms and directions in English or Nepali, takes the request with the guest's name and phone, and can collect an eSewa or Khalti deposit once you set one for the package.",
      ],
    },
  ],
  steps: {
    heading: "How to set up a hotel booking chatbot",
    items: [
      "Add each room type or stay package with its price and number of nights.",
      "Set how many of each you can accept per check-in date, and mark them as requests that need approval.",
      "Add facilities, check-in times, directions and policies as answers.",
      "Connect WhatsApp, Instagram or Messenger.",
      "Confirm incoming requests from the Bolnivo dashboard.",
    ],
  },
  faq: [
    { question: "Can Bolnivo take hotel reservations on WhatsApp?", answer: "Bolnivo takes reservation requests on WhatsApp, Instagram and Messenger and your staff confirm them in the dashboard before the guest is told the stay is booked." },
    { question: "Does Bolnivo connect to Booking.com or a channel manager?", answer: "Bolnivo does not connect to OTAs or channel managers. It handles direct messages from guests." },
    { question: "Can guests pay a deposit for a homestay?", answer: "Bolnivo can send an eSewa or Khalti deposit link for a stay package when you turn deposits on." },
    { question: "Does Bolnivo answer guests at night?", answer: "Bolnivo replies to guests 24/7, which matters when they message from another time zone." },
  ],
  related: [
    { label: "WhatsApp auto reply", href: "/whatsapp-auto-reply" },
    { label: "Trekking agency chatbot", href: "/use-cases/trekking" },
    { label: "After-hours auto reply", href: "/after-hours-auto-reply" },
  ],
}

export const metadata = landingMetadata(PAGE)

export default function Page() {
  return <LandingPage page={PAGE} />
}
