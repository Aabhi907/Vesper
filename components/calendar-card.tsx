"use client"

import React from "react"
import { motion } from "framer-motion"

export interface GoogleCalendarCardProps {
  title?: string
  time?: string
  dayIndex?: number // 0-based column for days: M T W T F S
  className?: string
  statusText?: string
}

export function GoogleCalendarCard({
  title = "Dental Checkup",
  time = "3:00 PM",
  dayIndex = 2,
  className = "",
  statusText = "Calendar updated",
}: GoogleCalendarCardProps) {
  const days = ["M", "T", "W", "T", "F", "S"]
  const times = ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  return (
    <div
      className={`rounded-2xl border border-line bg-white dark:bg-[#151a22] shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] overflow-hidden font-sans select-none ${className}`}
    >
      {/* ── Top Google Calendar Header ── */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-line bg-white dark:bg-[#151a22]">
        {/* Google | Calendar logo */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center text-[13px] font-semibold tracking-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
            <span className="text-muted/50 mx-1 font-normal">|</span>
            <span className="text-ink font-normal text-[12.5px]">Calendar</span>
          </div>
        </div>

        {/* Right header icons */}
        <div className="flex items-center gap-2 text-muted">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-70"><circle cx="4" cy="4" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="20" cy="20" r="2"/></svg>
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-rose-400 border border-white/40 flex items-center justify-center text-[9px] text-white font-bold">
            A
          </div>
        </div>
      </div>

      {/* ── Calendar Grid ── */}
      <div className="p-3 bg-white dark:bg-[#151a22]">
        {/* Days Header */}
        <div className="grid grid-cols-[44px_repeat(6,1fr)] text-center text-[10px] font-semibold text-muted/80 pb-1.5 border-b border-line/60">
          <div />
          {days.map((d, i) => (
            <div key={i} className="py-0.5">{d}</div>
          ))}
        </div>

        {/* Time slots rows */}
        <div className="relative divide-y divide-line/40">
          {times.map((t, idx) => (
            <div key={idx} className="grid grid-cols-[44px_repeat(6,1fr)] h-6 items-center text-[9.5px] text-muted/70">
              <span className="pr-1.5 text-right font-medium text-[9px]">{t}</span>
              {days.map((_, colIdx) => (
                <div key={colIdx} className="h-full border-l border-line/30 relative" />
              ))}
            </div>
          ))}

          {/* ── Active Event Block Overlay ── */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 4 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute top-[48px] left-[46px] right-2 h-[22px] bg-[#dcf4ec] dark:bg-[#12382e] border border-[#a3e4ce] dark:border-[#1a5344] rounded-[4px] px-2 flex items-center shadow-2xs"
          >
            {/* Left Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#00897b] rounded-l-[4px]" />
            <span className="text-[10px] font-semibold text-[#004d40] dark:text-[#a7f3d0] truncate pl-1">
              {title}
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="px-3 py-1.5 bg-[hsl(40_15%_97%)] dark:bg-[#10141b] border-t border-line/60 text-center">
        <span className="text-[10px] font-medium text-muted">
          {statusText}
        </span>
      </div>
    </div>
  )
}

export default GoogleCalendarCard
