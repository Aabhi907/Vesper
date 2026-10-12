import type { Metadata } from "next"
import { FinalCTA } from "@/components/marketing"
import { PRICING_PLANS } from "@/models"

export const metadata: Metadata = {
  title: { absolute: "Vesper Pricing – AI Front Desk Plans in NPR" },
  description:
    "Vesper plans in Nepali rupees: Starter Rs. 4,999, Pro Rs. 11,999 and Business Rs. 19,999 per month.",
  alternates: { canonical: "/pricing" },
}

export default function PricingPage() {
  return (
    <main className="w-full pt-32 min-h-screen bg-canvas">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 mb-12">
        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-4">Vesper pricing</h1>
        <p className="text-lead text-muted mb-8">
          Vesper costs Rs. 4,999 to Rs. 19,999 per month, with a 14-day free trial on every plan.
        </p>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-soft-canvas text-ink">
              <tr>
                <th scope="col" className="p-3 font-bold">Plan</th>
                <th scope="col" className="p-3 font-bold">Monthly</th>
                <th scope="col" className="p-3 font-bold">Yearly (per month)</th>
                <th scope="col" className="p-3 font-bold">Best for</th>
                <th scope="col" className="p-3 font-bold">Includes</th>
              </tr>
            </thead>
            <tbody className="text-ink/80">
              {PRICING_PLANS.map((plan) => (
                <tr key={plan.name} className="border-t border-line align-top">
                  <th scope="row" className="p-3 font-bold text-ink">{plan.name}</th>
                  <td className="p-3 tabular-nums whitespace-nowrap">{plan.price.monthly}</td>
                  <td className="p-3 tabular-nums whitespace-nowrap">{plan.price.yearly}</td>
                  <td className="p-3">{plan.description}</td>
                  <td className="p-3">{plan.features.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FinalCTA />
    </main>
  )
}
