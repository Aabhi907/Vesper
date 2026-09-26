import { TeamTooltips } from "@/components/team-tooltip"

export default function TeamPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-soft-canvas">
      <div className="mx-auto max-w-[1000px]">
        <div className="max-w-2xl mb-12">
          <h1 className="text-h1 text-ink mb-6">Built close to the businesses it serves.</h1>
          <p className="text-lead text-muted">
            We saw local service businesses — salons, hotels, auto garages, and clinics — losing hours to messaging back-and-forth about prices and availability, while existing AI tools were too unreliable to trust with an actual calendar. We built Vesper to bridge intent and reality.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden border border-line bg-canvas">
          <TeamTooltips />
        </div>
      </div>
    </main>
  )
}
