import type { Metadata } from "next"
import { Navbar, Footer } from "@/components/layout"
import { CookieBanner, ScrollToTop } from "@/components/interactive-utils"
import { ChatLauncher } from "@/components/ui/ChatLauncher"
import "@/app/globals.css"
import { Geist, Caveat } from "next/font/google";
import { cn } from "@/lib/utils";
import { SITE_URL, SOCIAL_LINKS, DISAMBIGUATION } from "@/lib/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const caveat = Caveat({ subsets: ['latin'], variable: '--font-handwriting', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vesper AI – 24/7 AI Front Desk & Auto-Reply for WhatsApp, Instagram & Messenger",
    template: "%s | Vesper",
  },
  description:
    "Answer customer inquiries, check real-time availability, and book appointments across WhatsApp, Instagram, Messenger and web - 24/7.",
  authors: [{ name: "Samrat Ghimire" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vesper AI – 24/7 AI Front Desk & Auto-Reply for WhatsApp, Instagram & Messenger",
    description:
      "Customer messages from WhatsApp, Instagram, and Messenger seamlessly converge into real confirmed bookings.",
    url: SITE_URL,
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
  const offer = (name: string, price: string) => ({
    "@type": "Offer",
    name,
    price,
    priceCurrency: "NPR",
    url: `${SITE_URL}/pricing`,
  })
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Vesper",
        alternateName: ["Vesper AI", "Vesper AI Front Desk", "Vesper Nepal", "vesper.codes"],
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description:
          "Vesper is an AI front desk for service businesses in Nepal. It answers customer messages on WhatsApp, Instagram and Messenger and books appointments against real calendar availability, 24/7.",
        disambiguatingDescription: DISAMBIGUATION,
        founder: {
          "@type": "Person",
          name: "Samrat Ghimire",
          sameAs: ["https://github.com/SamratGhimire01", "https://www.linkedin.com/in/samratghimire01"],
        },
        sameAs: Object.values(SOCIAL_LINKS),
        areaServed: { "@type": "Country", name: "Nepal" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Vesper",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Vesper",
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "24/7 AI front desk that answers WhatsApp, Instagram and Messenger messages, checks real-time calendar availability and books appointments.",
        featureList: [
          "WhatsApp",
          "Instagram",
          "Messenger",
          "Google Calendar sync",
          "Human handoff",
          "eSewa/Khalti",
        ],
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: [offer("Starter", "4999"), offer("Pro", "11999"), offer("Business", "19999")],
      },
    ],
  }

  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable, caveat.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('vesper-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
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
        <ChatLauncher />
      </body>
    </html>
  )
}

