import type { Metadata } from "next"
import { FinalCTA } from "@/components/marketing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Vesper plans in Nepali rupees: Starter Rs. 4,999, Pro Rs. 11,999 and Business Rs. 19,999 per month.",
  alternates: { canonical: "/pricing" },
}

export default function PricingPage() {
  return (
    <main className="w-full pt-16 min-h-screen bg-canvas">
      <FinalCTA />
    </main>
  )
}
