"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WinChrome, ScrollReveal } from "@/components/shared"

/* ══════════════════════════════════════════════════
   WhatsApp Chat UI  ✂️ Salon — Glam Studio
══════════════════════════════════════════════════ */
export function WhatsAppChat() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {/* WA header bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#075e54]">
        <div className="w-9 h-9 rounded-full bg-[#25d366]/30 border-2 border-[#25d366]/50 flex items-center justify-center text-[16px] flex-shrink-0">💇</div>
        <div className="flex-1">
          <p className="text-[13.5px] font-semibold text-white leading-tight">Glam Studio Salon · Kathmandu</p>
          <p className="text-[11px] text-[#25d366]">online · 24/7 AI Booking Assistant</p>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v2.92z" />
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </div>
      {/* WA chat wallpaper bg */}
      <div className="bg-[#e5ddd5] dark:bg-[#0b141a] px-4 py-4 min-h-[300px] space-y-3" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.025) 1px, transparent 1px)", backgroundSize: "18px 18px" }}>
        <div className="flex justify-center">
          <span className="bg-white/70 dark:bg-white/10 backdrop-blur-sm text-[10.5px] text-black/50 dark:text-white/60 px-3 py-1 rounded-full shadow-sm">Today</span>
        </div>
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-[13.5px] text-black/85 dark:text-white px-3.5 py-2.5 rounded-xl rounded-tr-sm max-w-[78%] shadow-sm">
            <p>Dai bholi Saturday 11 baje haircut ra hair colour ko slot khali cha? 🎨</p>
            <div className="flex justify-end items-center gap-1 mt-1">
              <span className="text-[10px] text-black/35 dark:text-white/60">11:14 AM</span>
              <svg width="16" height="10" viewBox="0 0 16 11" fill="none">
                <path d="M1.5 5.5l3 3 6-7" stroke="#4fc3f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 8.5l6-7" stroke="#4fc3f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
        {/* Availability check */}
        <div className="flex justify-start">
          <div className="flex items-center gap-2 bg-white/75 dark:bg-[#1f2c34] backdrop-blur-sm px-3 py-1.5 rounded-full text-[11.5px] text-[#075e54] dark:text-[#25d366] font-medium shadow-sm border border-[#25d366]/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#25d366]" />
            </span>
            Checking Priya&apos;s calendar in real-time…
          </div>
        </div>
        {/* AI reply */}
        <div className="flex justify-start">
          <div className="bg-white dark:bg-[#1f2c34] text-[13.5px] text-black/85 dark:text-white px-3.5 py-2.5 rounded-xl rounded-tl-sm max-w-[82%] shadow-sm">
            <p>Namaste hajur! 🙏 Saturday colourist Priya sanga 2 ta slot khali cha:</p>
            <p className="mt-2 font-medium text-[13px] leading-[1.8]">
              ✂️ <span className="font-semibold text-black dark:text-white">10:00 AM</span> — Haircut + Colour (2.5 hrs)<br />
              ✂️ <span className="font-semibold text-black dark:text-white">1:30 PM</span> — Haircut + Colour (2.5 hrs)
            </p>
            <p className="mt-1.5">Rs. 1,800 parcha. Kun time ma lock gardim hajur? 🌟</p>
            <div className="flex justify-end mt-1"><span className="text-[10px] text-black/35 dark:text-white/60">11:15 AM</span></div>
          </div>
        </div>
      </div>
      {/* WA input */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f0f0] dark:bg-[#1f2c34]">
        <div className="w-8 h-8 rounded-full bg-[#919191]/20 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
          </svg>
        </div>
        <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full px-4 py-2 text-[13px] text-black/30 dark:text-white/50 shadow-sm">
          Type a message…
        </div>
        <div className="w-9 h-9 rounded-full bg-[#075e54] flex items-center justify-center flex-shrink-0 shadow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════
   Instagram DM Chat UI  🏨 Hotel — The Grand Inn
══════════════════════════════════════════════════ */
export function InstagramChat() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {/* IG header */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-[#121212] border-b border-gray-100 dark:border-white/10">
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[16px]" style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>🏨</div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#121212]" />
        </div>
        <div className="flex-1">
          <p className="text-[13.5px] font-bold text-black dark:text-white leading-tight">thegrandinn.pokhara</p>
          <p className="text-[11px] text-black/45 dark:text-white/50">Active now · 24/7 AI Concierge</p>
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/50 dark:text-white/60" strokeWidth="1.8" strokeLinecap="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v2.92z" />
        </svg>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/50 dark:text-white/60" strokeWidth="1.8" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <polyline points="8 21 12 17 16 21" />
        </svg>
      </div>
      {/* IG messages */}
      <div className="bg-white dark:bg-[#121212] px-4 py-4 min-h-[300px] space-y-3">
        <div className="flex justify-center"><span className="text-[11px] text-black/35 dark:text-white/50 font-medium">Tuesday 10:41 AM</span></div>
        {/* Bot message */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}>🏨</div>
          <div className="bg-[#efefef] dark:bg-[#262626] text-[13.5px] text-black/85 dark:text-white/95 px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[76%]">
            🌟 Namaste! Welcome to The Grand Inn Pokhara. 24/7 AI concierge hajur. Kasari help garna sakchu?
          </div>
        </div>
        {/* User */}
        <div className="flex justify-end">
          <div className="text-white text-[13.5px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[76%]" style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
            Namaste! Dec 24–26 ma 2 nights ko deluxe room cha? Couple ko lagi 🎄
          </div>
        </div>
        {/* Checking */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}>🏨</div>
          <div className="flex items-center gap-2 bg-[#efefef] dark:bg-[#262626] px-4 py-2 rounded-2xl rounded-bl-md text-[11.5px] font-medium text-black/55 dark:text-white/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c13584] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c13584]" />
            </span>
            Pokhara lake-view rooms check hudai cha…
          </div>
        </div>
        {/* Reply */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background: "linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}>🏨</div>
          <div className="bg-[#efefef] dark:bg-[#262626] text-[13.5px] text-black/85 dark:text-white/95 px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[76%]">
            🎉 Hajur cha! <span className="font-semibold text-black dark:text-white">Deluxe Room 204</span> available cha Dec 24–26. Mountain view, king bed, breakfast sahit <span className="font-semibold text-black dark:text-white">Rs. 4,500/night</span>. Reserve gardim ta?
          </div>
        </div>
        <div className="flex justify-end items-center gap-1">
          <span className="text-[10px] text-black/30 dark:text-white/50">Seen</span>
          <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 text-[8px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>✓</div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white dark:bg-[#262626] border border-gray-200 dark:border-white/10 rounded-full px-2 py-0.5 text-[12px] shadow-sm">🔥</div>
        </div>
      </div>
      {/* IG input */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-[#121212] border-t border-gray-100 dark:border-white/10">
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c13584" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" />
          </svg>
        </div>
        <div className="flex-1 border border-gray-200 dark:border-white/15 bg-white dark:bg-[#262626] rounded-full px-4 py-2 text-[13px] text-black/40 dark:text-white/50">
          Message…
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c13584" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <path d="M12 5v14M5 12l7-7 7 7" />
        </svg>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════
   Messenger Chat UI  🔧 Auto Workshop — QuickFix Garage
══════════════════════════════════════════════════ */
export function MessengerChat() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {/* Messenger header */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-[#18191a] border-b border-gray-100 dark:border-white/10">
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[16px]" style={{ background: "linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#31a24c] rounded-full border-2 border-white dark:border-[#18191a]" />
        </div>
        <div className="flex-1">
          <p className="text-[13.5px] font-bold text-black dark:text-white leading-tight">QuickFix Garage · Kathmandu</p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#31a24c]" />
            <p className="text-[11px] text-black/45 dark:text-white/60">Active now · Automated Booking</p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v2.92z" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <polyline points="8 21 12 17 16 21" />
          </svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </div>
      </div>
      {/* Messages */}
      <div className="bg-white dark:bg-[#18191a] px-4 py-4 min-h-[300px] space-y-3">
        <div className="flex justify-center"><span className="text-[11px] text-black/35 dark:text-white/50 font-medium">Wednesday 2:15 PM</span></div>
        {/* Bot */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <div className="bg-[#f0f2f5] dark:bg-[#3a3b3c] text-[13.5px] text-black/85 dark:text-white px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[74%]">
            Hey! 🔧 QuickFix Garage Kathmandu. K service chaineko thiyo hajur?
          </div>
        </div>
        {/* User */}
        <div className="flex justify-end">
          <div className="text-white text-[13.5px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[76%]" style={{ background: "linear-gradient(135deg, #0084ff, #a033ff)" }}>
            Dai bike servicing ra chain tight garna bholi Saturday time milcha? Mobil ni change garnu cha 🏍️
          </div>
        </div>
        {/* Checking */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <div className="flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#3a3b3c] px-4 py-2 rounded-2xl rounded-bl-sm text-[11.5px] text-black/50 dark:text-white/70 font-medium">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0084ff] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0084ff]" />
            </span>
            Checking mechanic bay slots this weekend…
          </div>
        </div>
        {/* Reply */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <div className="bg-[#f0f2f5] dark:bg-[#3a3b3c] text-[13.5px] text-black/85 dark:text-white px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[76%]">
            ✅ <span className="font-semibold text-black dark:text-white">Saturday 9:30 AM</span> khali cha! Full servicing includes Motul engine oil, brakes &amp; chain lube. Est. <span className="font-semibold text-black dark:text-white">Rs. 1,450 (2.5 hrs)</span>. Book gardim?
          </div>
        </div>
        {/* Reaction */}
        <div className="flex justify-start pl-8">
          <div className="bg-white dark:bg-[#242526] border border-gray-200 dark:border-white/10 rounded-full px-2 py-0.5 text-[12px] shadow-sm flex items-center gap-1">👍 <span className="text-[10px] text-black/35 dark:text-white/60">1</span></div>
        </div>
        {/* Seen */}
        <div className="flex justify-end items-center gap-1">
          <span className="text-[10px] text-black/30 dark:text-white/50">Seen 2:16 PM</span>
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #0084ff, #a033ff)" }}>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
      {/* Messenger input */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-[#18191a] border-t border-gray-100 dark:border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
        </div>
        <div className="flex-1 bg-[#f0f2f5] dark:bg-[#3a3b3c] rounded-full px-4 py-2 text-[13px] text-black/40 dark:text-white/50">
          Type a message…
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[#0084ff]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════
   Platform Chatbox Demo Section
══════════════════════════════════════════════════ */
export function PlatformDemo() {
  const [activeTab, setActiveTab] = React.useState<"whatsapp" | "instagram" | "messenger">("whatsapp")

  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-6 bg-canvas border-b border-line" id="demo">
      <ScrollReveal className="mx-auto max-w-[840px] text-center flex flex-col items-center justify-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-signal-blue/10 border border-signal-blue/20 text-signal-blue text-[11px] font-bold tracking-wider uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
          Connected to WhatsApp · Messenger · Instagram
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight text-center">
          Real conversations. Across every platform.
        </h2>
        <p className="text-muted text-[15px] sm:text-[17px] max-w-[580px] mx-auto leading-relaxed text-center">
          Switch platforms below to see how Vesper seamlessly connects to WhatsApp, Instagram DMs, and Messenger to check live availability and lock bookings 24/7.
        </p>
      </ScrollReveal>

      {/* ── Platform Chatbox Demo Window ── */}
      <ScrollReveal delay={0.15} className="w-full max-w-[680px] mx-auto">
        <WinChrome title="vesper-demo.mov">
          {/* Platform tab bar */}
          <div className="flex items-center border-b border-[hsl(0_0%_84%)] dark:border-line bg-[hsl(0_0%_93%)] dark:bg-[hsl(var(--soft-canvas))]">
            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-all ${
                activeTab === "whatsapp"
                  ? "border-[#25d366] text-[#075e54] dark:text-[#25d366] bg-white/70 dark:bg-white/10"
                  : "border-transparent text-black/40 dark:text-white/60 hover:text-black/65 dark:hover:text-white/90"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={activeTab === "whatsapp" ? "text-[#25d366]" : "text-black/25 dark:text-white/40"}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => setActiveTab("instagram")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-all ${
                activeTab === "instagram"
                  ? "border-[#c13584] text-[#c13584] dark:text-[#f472b6] bg-white/70 dark:bg-white/10"
                  : "border-transparent text-black/40 dark:text-white/60 hover:text-black/65 dark:hover:text-white/90"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={activeTab === "instagram" ? "text-[#c13584]" : "text-black/25 dark:text-white/40"}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              <span>Instagram</span>
            </button>
            <button
              onClick={() => setActiveTab("messenger")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-all ${
                activeTab === "messenger"
                  ? "border-[#0084ff] text-[#0084ff] dark:text-[#60a5fa] bg-white/70 dark:bg-white/10"
                  : "border-transparent text-black/40 dark:text-white/60 hover:text-black/65 dark:hover:text-white/90"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={activeTab === "messenger" ? "text-[#0084ff]" : "text-black/25 dark:text-white/40"}><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.683V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z" /></svg>
              <span>Messenger</span>
            </button>
          </div>
          {/* Animated chat panels */}
          <AnimatePresence mode="wait">
            {activeTab === "whatsapp" && <WhatsAppChat key="wa" />}
            {activeTab === "instagram" && <InstagramChat key="ig" />}
            {activeTab === "messenger" && <MessengerChat key="ms" />}
          </AnimatePresence>
        </WinChrome>
        <p className="mt-3 text-center text-[12px] text-muted/60">✦ Fully interactive · Switch platforms to test real automated customer conversations</p>
      </ScrollReveal>
    </section>
  )
}
