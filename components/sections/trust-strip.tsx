"use client"

import * as React from "react"

/* ══════════════════════════════════════════════════
   Marquee Trust Strip
══════════════════════════════════════════════════ */
export function TrustStrip() {
  const items = [
    "✦ Real availability checks",
    "✦ Salons & Spas",
    "✦ Hotels & Guesthouses",
    "✦ WhatsApp · Instagram · Messenger",
    "✦ 24/7 uptime",
    "✦ Auto Workshops & Garages",
    "✦ Clinics & Hospitals",
    "✦ Zero double-bookings",
    "✦ Salons & Spas",
    "✦ Hotels & Guesthouses",
    "✦ WhatsApp · Instagram · Messenger",
    "✦ 24/7 uptime",
    "✦ Auto Workshops & Garages",
    "✦ Clinics & Hospitals",
    "✦ Zero double-bookings",
  ]

  return (
    <div className="w-full border-y border-line bg-soft-canvas py-3 overflow-hidden" aria-hidden>
      <div className="marquee-track gap-12">
        {items.map((it, i) => (
          <span key={i} className="text-[13px] font-medium text-muted/70 whitespace-nowrap">
            {it}
          </span>
        ))}
      </div>
    </div>
  )
}
