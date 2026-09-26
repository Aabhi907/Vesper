import Link from "next/link"

export default function ChangelogPage() {
  const updates = [
    {
      version: "v2.4.0",
      date: "September 2026",
      title: "Multi-Platform Chat Suite (WhatsApp, Instagram, Messenger)",
      items: [
        "Native Instagram Direct Message integration with rich replies and interactive cards",
        "WhatsApp Business API multi-agent calendar integration",
        "Messenger automated reservation and service booking flow",
        "Universal business support for salons, hotels, auto workshops, and appointments",
      ],
    },
    {
      version: "v2.1.0",
      date: "August 2026",
      title: "Real Availability Engine & Double-Booking Shield",
      items: [
        "Sub-second sync with Google Calendar, Outlook, and custom CRM systems",
        "Human handoff detection when a customer requests a live manager",
        "Romanized Nepali and English bilingual language comprehension",
      ],
    },
  ]

  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-soft-canvas">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-14">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-4">Changelog</p>
          <h1 className="text-h1 text-ink mb-4">What's new in Vesper.</h1>
          <p className="text-lead text-muted">A chronicle of updates, releases, and platform enhancements.</p>
        </div>

        <div className="space-y-12">
          {updates.map((u) => (
            <div key={u.version} className="bg-white rounded-2xl p-8 border border-line shadow-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-bold text-signal-blue bg-blue-50 px-3 py-1 rounded-full">{u.version}</span>
                <span className="text-[13px] text-muted">{u.date}</span>
              </div>
              <h2 className="text-[20px] font-bold text-ink mb-4">{u.title}</h2>
              <ul className="space-y-2">
                {u.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[14px] text-muted">
                    <span className="text-signal-blue font-bold">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
