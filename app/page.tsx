import type { Metadata } from "next"
import { Hero, PlatformDemo, TrustStrip, Manifesto, ThreeJobs, TrustSection, FinalCTA } from "@/components/marketing"
import { BilingualEngineSection } from "@/components/bilingual-showcase"
import { IntegrationsBeam } from "@/components/integrations-beam"
import { TeamTooltips } from "@/components/team-tooltip"
import { FAQSection } from "@/components/faq"

export const metadata: Metadata = {
  title: { absolute: "Bolnivo – AI assistants for websites and customer conversations" },
  description:
    "Bolnivo helps businesses add AI assistants to their websites and customer channels. Assistants answer questions and take actions such as checking real availability and booking. Built in Kathmandu, Nepal.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Bolnivo – AI assistants for websites and customer conversations",
    description: "Bolnivo helps businesses add AI assistants to their websites and customer channels. Built in Kathmandu, Nepal.",
    url: "/",
  },
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
