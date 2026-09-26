import { Button } from "@/components/ui"

export default function SolutionsPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-3xl mb-24">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-4">Any Service Business</p>
          <h1 className="text-hero text-ink mb-6">Your doors close.<br/>Customer inquiries do not.</h1>
          <p className="text-lead text-muted mb-8">
            Manage service questions, pricing inquiries, and appointment bookings automatically across WhatsApp, Instagram, and Messenger — built for salons, hotels &amp; guesthouses, auto workshops, clinics, and any appointment-driven business.
          </p>
          <Button variant="primary" size="lg">Apply for pilot</Button>
        </div>
      </div>
    </main>
  )
}
