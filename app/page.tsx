import { Hero, PlatformDemo, TrustStrip, Manifesto, ThreeJobs, TrustSection, FinalCTA } from "@/components/marketing"
import { BilingualEngineSection } from "@/components/bilingual-showcase"
import { IntegrationsBeam } from "@/components/integrations-beam"
import { TeamTooltips } from "@/components/team-tooltip"
import { FAQSection } from "@/components/faq"

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
