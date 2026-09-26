"use client"

import * as React from "react"
import { TESTIMONIALS } from "@/models"
import { WinChrome, ScrollReveal, TheyCookedSticker } from "@/components/shared"

export function TrustSection() {
  const cols = [
    TESTIMONIALS.slice(0, 2),
    TESTIMONIALS.slice(2, 4),
    TESTIMONIALS.slice(4, 6),
  ]

  return (
    <section className="w-full py-28 px-6 bg-soft-canvas">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mb-14 flex flex-col items-center justify-center text-center">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-4 text-center">feedback</p>
          <div className="marquee-outer mb-8 w-full overflow-hidden">
            <div className="marquee-track gap-10">
              {["they use it everyday","they use it everyday","they use it everyday","they use it everyday","they use it everyday","they use it everyday"].map((t, i) => (
                <span key={i} className="text-[28px] font-bold text-ink/10 whitespace-nowrap">{t}</span>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-muted/60 dark:text-muted/80 font-medium text-center max-w-[600px] mx-auto">
            10,000+ bookings handled · 200+ service businesses · growing every day
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cols.map((col, ci) => (
            <ScrollReveal key={ci} delay={ci * 0.1} className="flex flex-col gap-4">
              {col.map((fb, fi) => (
                <div key={fb.handle} className="relative group">
                  {/* Floating "they cooked 🧑‍🍳" sticker on first card */}
                  {ci === 0 && fi === 0 && (
                    <div className="absolute -top-3.5 -right-2 z-20">
                      <TheyCookedSticker />
                    </div>
                  )}
                  <WinChrome>
                    <div className="bg-white dark:bg-soft-canvas" style={{ borderTop: `3px solid ${fb.color}20` }}>
                      <div
                        className="p-5 border-b border-[hsl(0_0%_90%)] dark:border-line"
                        style={{
                          background: `linear-gradient(90deg, ${fb.color}14, ${fb.color}14), linear-gradient(90deg, #e8e8e8 0%, #f4f4f4 50%, #e8e8e8 100%)`,
                        }}
                      />
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0"
                            style={{ background: fb.color }}
                          >
                            {fb.name[0]}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-ink">{fb.name}</p>
                            <p className="text-[12px] text-muted">{fb.handle}</p>
                            {fb.role && (
                              <span className="inline-block mt-0.5 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black/40 dark:text-white/70">
                                {fb.role}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-[14px] text-ink/80 leading-relaxed">{fb.quote}</p>
                      </div>
                    </div>
                  </WinChrome>
                </div>
              ))}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
