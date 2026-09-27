"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  WinChrome,
  ScrollReveal,
  HanddrawnMessageIcon,
  HanddrawnCalendarIcon,
  HanddrawnZapIcon,
} from "@/components/shared"
import { useInteractiveTilt } from "@/hooks"
import type { CoreJob } from "@/models"

export function InteractiveJobCard({ job }: { job: CoreJob & { tag?: string } }) {
  const { ref, canTilt, hover, motionProps, eventHandlers } = useInteractiveTilt({
    tiltRange: 14,
    glowRange: 80,
    shadowRange: 24,
  })

  return (
    <div
      className="relative flex flex-col h-full group"
      style={canTilt ? { perspective: "1000px" } : undefined}
      onMouseMove={canTilt ? eventHandlers.onMouseMove : undefined}
      onMouseEnter={canTilt ? eventHandlers.onMouseEnter : undefined}
      onMouseLeave={canTilt ? eventHandlers.onMouseLeave : undefined}
    >
      <motion.div
        ref={ref}
        style={canTilt ? { rotateX: motionProps.rotateX, rotateY: motionProps.rotateY, transformStyle: "preserve-3d" } : undefined}
        className="relative z-20 w-full h-full flex flex-col"
      >
        {/* Soft shadow drifting opposite the pointer */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{ x: motionProps.shadowX, y: motionProps.shadowY, opacity: hover ? 0.35 : 0.08 }}
            className="pointer-events-none absolute -inset-3 -z-10 rounded-2xl bg-black/40 dark:bg-black/60 blur-[24px] transition-opacity duration-300"
          />
        )}

        {/* Dual-layer outer specular glow line */}
        <div className="relative rounded-2xl p-[1px] overflow-hidden transition-all duration-300 bg-gradient-to-b from-black/10 via-black/5 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent group-hover:from-signal-blue/50 group-hover:via-signal-blue/20">
          <WinChrome className="flex flex-col h-full relative overflow-hidden rounded-[15px]">
            {/* Hover glow that follows the pointer */}
            {canTilt && (
              <motion.div
                aria-hidden
                style={{ x: motionProps.glowX, y: motionProps.glowY, opacity: hover ? 0.45 : 0 }}
                className="pointer-events-none absolute -inset-24 z-0 rounded-full bg-gradient-to-tr from-signal-blue/30 to-purple-500/30 blur-[50px] transition-opacity duration-500"
              />
            )}

            {/* Specular sheen that slides across */}
            {canTilt && (
              <motion.div
                aria-hidden
                style={{ x: motionProps.sheenX }}
                className="pointer-events-none absolute inset-0 size-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent z-20"
              />
            )}

            {/* Content lifted toward the viewer */}
            <div
              style={canTilt ? { transform: "translateZ(30px)", transformStyle: "preserve-3d" } : undefined}
              className="bg-white dark:bg-soft-canvas p-7 sm:p-8 flex flex-col h-full relative z-10"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-soft-canvas dark:bg-white/5 border border-line flex items-center justify-center text-ink shadow-[0_1px_2px_rgba(0,0,0,0.03)] group-hover:scale-105 transition-transform duration-200">
                  <job.icon className="w-6 h-6 text-ink" />
                </div>
                {job.tag && (
                  <span className="text-[10.5px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-signal-blue/10 text-signal-blue border border-signal-blue/20">
                    {job.tag}
                  </span>
                )}
              </div>
              <h3 className="text-[18px] font-semibold text-ink mb-3 group-hover:text-signal-blue transition-colors duration-200">{job.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed">{job.copy}</p>
            </div>
          </WinChrome>
        </div>
      </motion.div>
    </div>
  )
}

const JOBS: (CoreJob & { tag?: string })[] = [
  {
    icon: HanddrawnMessageIcon,
    title: "Answer accurately",
    copy: "Vesper reads from your approved business knowledge. No hallucinations about prices, staff, or availability.",
    tag: "STRICT RAG",
  },
  {
    icon: HanddrawnCalendarIcon,
    title: "Book safely",
    copy: "Every booking is checked against real availability before confirming. Zero double-bookings.",
    tag: "MUTEX LOCK",
  },
  {
    icon: HanddrawnZapIcon,
    title: "Remember context",
    copy: "Recent messages and history are layered together for natural, multi-turn conversations.",
    tag: "12-TURN MEMORY",
  },
]

export function ThreeJobs() {
  return (
    <section className="w-full py-28 px-6 bg-canvas" id="features">
      <div className="mx-auto max-w-[1080px]">
        <ScrollReveal className="mb-16 flex flex-col items-center justify-center text-center">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-3 text-center">core jobs</p>
          <h2 className="text-h2 text-ink text-center max-w-[800px] mx-auto">three things it does right.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {JOBS.map((job, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <InteractiveJobCard job={job} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
