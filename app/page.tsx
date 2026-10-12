import type { Metadata } from "next"
import { Hero, PlatformDemo, TrustStrip, Manifesto, ThreeJobs, TrustSection, FinalCTA } from "@/components/marketing"
import { BilingualEngineSection } from "@/components/bilingual-showcase"
import { IntegrationsBeam } from "@/components/integrations-beam"
import { TeamTooltips } from "@/components/team-tooltip"
import { FAQSection } from "@/components/faq"

export const metadata: Metadata = {
  title: { absolute: "Vesper - 24/7 AI Front Desk for Service & Booking Businesses" },
  description:
    "Vesper answers customer messages, checks real calendar availability and books appointments across WhatsApp, Instagram and Messenger, 24/7. Built in Kathmandu.",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <PlatformDemo />
      <TrustStrip />
      <BilingualEngineSection />
      <Manifesto />
      <ThreeJobs />
      <IntegrationsBeam />
      <TrustSection />
      <TeamTooltips />
      <FinalCTA />
      <FAQSection />
    </main>
  )
}
