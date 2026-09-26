import type { Metadata } from "next"
import { Navbar, Footer } from "@/components/layout"
import { CookieBanner, ScrollToTop } from "@/components/interactive-utils"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "Vesper - 24/7 AI Front Desk for Service & Booking Businesses",
  description:
    "Answer customer inquiries, check real-time availability, and book appointments across WhatsApp, Instagram, Messenger and web - 24/7.",
  keywords: [
    "AI front desk",
    "automated appointment booking",
    "WhatsApp business automation",
    "Instagram booking bot",
    "Google calendar sync",
    "salon booking software",
    "hotel reservation AI",
    "Vesper AI",
  ],
  authors: [{ name: "Vesper Team" }],
  openGraph: {
    title: "Vesper - 24/7 AI Front Desk for Service & Booking Businesses",
    description:
      "Customer messages from WhatsApp, Instagram, and Messenger seamlessly converge into real confirmed bookings.",
    url: "https://vesper.ai",
    siteName: "Vesper",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vesper - 24/7 AI Front Desk",
    description: "Automated booking and calendar sync across WhatsApp, Instagram & Messenger.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vesper",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "NPR",
      lowPrice: "4999",
      highPrice: "19999",
    },
    description:
      "24/7 AI front desk that connects WhatsApp, Instagram, Messenger, and web to real-time calendar availability.",
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex min-h-screen flex-col bg-canvas text-ink">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  )
}
