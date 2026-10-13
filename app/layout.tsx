import type { Metadata } from "next"
import { Navbar, Footer } from "@/components/layout"
import { CookieBanner, ScrollToTop } from "@/components/interactive-utils"
import { ChatLauncher } from "@/components/ui/ChatLauncher"
import "@/app/globals.css"
import { Geist, Caveat } from "next/font/google";
import { cn } from "@/lib/utils";
import { SITE_URL, SOCIAL_LINKS, DISAMBIGUATION } from "@/lib/site";
import { TEAM_MEMBERS } from "@/models";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const caveat = Caveat({ subsets: ['latin'], variable: '--font-handwriting', weight: ['400','500','600','700'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bolnivo – AI assistants for websites and customer conversations",
    template: "%s | Bolnivo",
  },
  description:
    "AI assistants that help businesses answer customer questions and take actions across websites and messaging channels, including booking.",
  authors: TEAM_MEMBERS.map((m) => ({ name: m.name })),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bolnivo – AI assistants for websites and customer conversations",
    description:
      "Give your website and customer channels an AI assistant that understands your business and can help customers take the next step.",
    siteName: "Bolnivo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolnivo – AI for websites and customer conversations",
    description: "AI assistants for business websites and customer channels. Answer questions and support customer workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    other: {
      "msvalidate.01": "EDF2A1885B339B30D7F6B5E1019F2636",
    },
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
        name: "Bolnivo",
        alternateName: ["Bolnivo AI", "Bolnivo (formerly Vesper)", "Vesper", "vesper.codes"],
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description:
          "Bolnivo is an AI platform built in Kathmandu, Nepal. Businesses can use its assistants on websites and messaging channels to answer customer questions and take actions such as checking availability and booking.",
        disambiguatingDescription: DISAMBIGUATION,
        founder: TEAM_MEMBERS.map((m) => ({
          "@type": "Person",
          "@id": `${SITE_URL}/team#${m.slug}`,
          name: m.name,
          jobTitle: m.role,
          worksFor: { "@id": `${SITE_URL}/#organization` },
          sameAs: m.sameAs,
        })),
        sameAs: Object.values(SOCIAL_LINKS),
        contactPoint: {
          "@type": "ContactPoint",
          email: "bolnivo.ai@gmail.com",
          contactType: "customer support",
          areaServed: { "@type": "Country", name: "Nepal" },
          availableLanguage: ["English", "Nepali"],
        },
        areaServed: { "@type": "Country", name: "Nepal" },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Bolnivo",
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Bolnivo",
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "AI assistants for business websites and messaging channels that answer questions, use approved business knowledge, and take actions such as checking availability and booking.",
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

