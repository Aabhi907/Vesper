import type { Metadata } from "next"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import { TEAM_MEMBERS, FOUNDERS_LINE } from "@/models"

export const metadata: Metadata = {
  title: { absolute: "Bolnivo Team – Founders of the AI Front Desk" },
  description:
    "Bolnivo was founded in Kathmandu by Samrat Ghimire, with co-founders Aabishkar Shrestha and Kasam Thapa Magar. Meet the team building the AI front desk.",
  alternates: { canonical: "/team" },
}

export default function TeamPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-soft-canvas">
      <div className="mx-auto max-w-[1000px]">
        <div className="max-w-2xl mb-12">
          <h1 className="text-h1 text-ink mb-6">The Bolnivo team: built close to the businesses it serves.</h1>
          <p className="text-lead text-ink/80 mb-4">{FOUNDERS_LINE}</p>
          <p className="text-lead text-muted">
            We saw local service businesses (salons, hotels, auto garages, and clinics) losing hours to messaging back-and-forth about prices and availability, while existing AI tools were too unreliable to trust with an actual calendar. We built Bolnivo to bridge intent and reality.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-3">
          {TEAM_MEMBERS.map((m) => {
            const linkedin = m.sameAs.find((url) => url.includes("linkedin.com"))
            return (
              <li key={m.slug} id={m.slug} className="rounded-3xl border border-line bg-canvas p-6 flex flex-col">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role} of Bolnivo`}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                  style={{ objectPosition: m.objectPosition }}
                />
                <h2 className="text-lg font-bold text-ink">{m.name}</h2>
                <p className="text-[13px] font-semibold text-muted mb-3">{m.role}</p>
                <p className="text-[14.5px] text-ink/80 leading-relaxed mb-4">{m.bio}</p>
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${m.name} on LinkedIn`}
                    className="mt-auto inline-flex w-9 h-9 items-center justify-center rounded-full border border-line text-ink hover:bg-soft-canvas"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </li>
            )
          })}
        </ul>
        <p className="mt-12 text-[15px] text-muted">
          Read <Link href="/what-is-vesper" className="font-semibold text-ink underline">what Bolnivo is</Link> or see{" "}
          <Link href="/pricing" className="font-semibold text-ink underline">pricing</Link>.
        </p>
      </div>
    </main>
  )
}
