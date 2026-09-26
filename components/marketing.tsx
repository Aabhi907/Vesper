"use client"
import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Check, CheckCircle2, ChevronDown, MessageSquare, Calendar, Zap, Shield, Globe, Database } from "lucide-react"

/* ── macOS window chrome wrapper ── */
function WinChrome({ title, children, className = "", style = {} }: {
  title?: string; children: React.ReactNode; className?: string; style?: React.CSSProperties
}) {
  return (
    <div className={`win-chrome ${className}`} style={style}>
      <div className="flex items-center gap-2 px-4 h-[38px] border-b border-[hsl(0_0%_84%)] dark:border-line bg-gradient-to-b from-[hsl(0_0%_90%)] to-[hsl(0_0%_86%)] dark:from-[hsl(var(--soft-canvas))] dark:to-[hsl(var(--canvas))] flex-shrink-0">
        <span className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] border border-black/10 dark:border-white/10" />
        <span className="w-[12px] h-[12px] rounded-full bg-[#febc2e] border border-black/10 dark:border-white/10" />
        <span className="w-[12px] h-[12px] rounded-full bg-[#28c840] border border-black/10 dark:border-white/10" />
        {title && <span className="ml-2 text-[12px] text-black/50 dark:text-muted font-medium">{title}</span>}
      </div>
      {children}
    </div>
  )
}

/* ── Hero ── */
/* ══════════════════════════════════════════════════
   WhatsApp Chat UI  ✂️ Salon — Glam Studio
══════════════════════════════════════════════════ */
function WhatsAppChat() {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}>
      {/* WA header bar */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#075e54]">
        <div className="w-9 h-9 rounded-full bg-[#25d366]/30 border-2 border-[#25d366]/50 flex items-center justify-center text-[16px] flex-shrink-0">💇</div>
        <div className="flex-1">
          <p className="text-[13.5px] font-semibold text-white leading-tight">Glam Studio Salon</p>
          <p className="text-[11px] text-[#25d366]">online</p>
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v2.92z"/></svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.6"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </div>
      {/* WA chat wallpaper bg */}
      <div className="bg-[#e5ddd5] dark:bg-[#0b141a] px-4 py-4 min-h-[300px] space-y-3" style={{ backgroundImage:"radial-gradient(circle, rgba(0,0,0,0.025) 1px, transparent 1px)", backgroundSize:"18px 18px" }}>
        <div className="flex justify-center"><span className="bg-white/70 dark:bg-white/10 backdrop-blur-sm text-[10.5px] text-black/50 dark:text-white/60 px-3 py-1 rounded-full shadow-sm">Today</span></div>
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-[13.5px] text-black/85 dark:text-white px-3.5 py-2.5 rounded-xl rounded-tr-sm max-w-[75%] shadow-sm">
            <p>Hi! I want to book a haircut + hair colour for this Saturday 🎨</p>
            <div className="flex justify-end items-center gap-1 mt-1">
              <span className="text-[10px] text-black/35 dark:text-white/60">11:14 AM</span>
              <svg width="16" height="10" viewBox="0 0 16 11" fill="none"><path d="M1.5 5.5l3 3 6-7" stroke="#4fc3f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M5.5 8.5l6-7" stroke="#4fc3f7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        </div>
        {/* Availability check */}
        <div className="flex justify-start">
          <div className="flex items-center gap-2 bg-white/75 dark:bg-[#1f2c34] backdrop-blur-sm px-3 py-1.5 rounded-full text-[11.5px] text-[#075e54] dark:text-[#25d366] font-medium shadow-sm border border-[#25d366]/20">
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25d366] opacity-70"/><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#25d366]"/></span>
            Checking stylist availability…
          </div>
        </div>
        {/* AI reply */}
        <div className="flex justify-start">
          <div className="bg-white dark:bg-[#1f2c34] text-[13.5px] text-black/85 dark:text-white px-3.5 py-2.5 rounded-xl rounded-tl-sm max-w-[80%] shadow-sm">
            <p>Hey! 💇‍♀️ Saturday slots with our colourist Priya:</p>
            <p className="mt-2 font-medium text-[13px] leading-[1.8]">✂️ <span className="font-semibold text-black dark:text-white">10:00 AM</span> — Haircut + Colour (2.5 hrs)<br/>✂️ <span className="font-semibold text-black dark:text-white">1:30 PM</span> — Haircut + Colour (2.5 hrs)</p>
            <p className="mt-1.5">Want me to book one? 🌟</p>
            <div className="flex justify-end mt-1"><span className="text-[10px] text-black/35 dark:text-white/60">11:15 AM</span></div>
          </div>
        </div>
      </div>
      {/* WA input */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#f0f0f0] dark:bg-[#1f2c34]">
        <div className="w-8 h-8 rounded-full bg-[#919191]/20 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
        </div>
        <div className="flex-1 bg-white dark:bg-[#2a3942] rounded-full px-4 py-2 text-[13px] text-black/30 dark:text-white/50 shadow-sm">Type a message</div>
        <div className="w-9 h-9 rounded-full bg-[#075e54] flex items-center justify-center flex-shrink-0 shadow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════
   Instagram DM Chat UI  🏨 Hotel — The Grand Inn
══════════════════════════════════════════════════ */
function InstagramChat() {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}>
      {/* IG header */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-[#121212] border-b border-gray-100 dark:border-white/10">
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[16px]" style={{ background:"linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>🏨</div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#121212]" />
        </div>
        <div className="flex-1">
          <p className="text-[13.5px] font-bold text-black dark:text-white leading-tight">thegrandinn.hotel</p>
          <p className="text-[11px] text-black/45 dark:text-white/50">Active now</p>
        </div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/50 dark:text-white/60" strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v2.92z"/></svg>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-black/50 dark:text-white/60" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
      </div>
      {/* IG messages */}
      <div className="bg-white dark:bg-[#121212] px-4 py-4 min-h-[300px] space-y-3">
        <div className="flex justify-center"><span className="text-[11px] text-black/35 dark:text-white/50 font-medium">Tuesday 10:41 AM</span></div>
        {/* Bot message */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background:"linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}>🏨</div>
          <div className="bg-[#efefef] dark:bg-[#262626] text-[13.5px] text-black/85 dark:text-white/95 px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[72%]">
            🌟 Welcome to The Grand Inn! I&apos;m your 24/7 AI concierge. How can I help?
          </div>
        </div>
        {/* User */}
        <div className="flex justify-end">
          <div className="text-white text-[13.5px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[70%]" style={{ background:"linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
            Do you have a deluxe room for 2 nights, Dec 24–26? 🎄
          </div>
        </div>
        {/* Checking */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background:"linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}>🏨</div>
          <div className="flex items-center gap-2 bg-[#efefef] dark:bg-[#262626] px-4 py-2 rounded-2xl rounded-bl-md text-[11.5px] font-medium text-black/55 dark:text-white/70">
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c13584] opacity-70"/><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c13584]"/></span>
            Checking room availability…
          </div>
        </div>
        {/* Reply */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background:"linear-gradient(45deg, #f09433, #dc2743, #bc1888)" }}>🏨</div>
          <div className="bg-[#efefef] dark:bg-[#262626] text-[13.5px] text-black/85 dark:text-white/95 px-4 py-2.5 rounded-2xl rounded-bl-md max-w-[74%]">
            🎉 Yes! <span className="font-semibold text-black dark:text-white">Deluxe Room 204</span> is available Dec 24–26. Mountain view, king bed. <span className="font-semibold text-black dark:text-white">$89/night</span>. Shall I reserve it?
          </div>
        </div>
        <div className="flex justify-end items-center gap-1">
          <span className="text-[10px] text-black/30 dark:text-white/50">Seen</span>
          <div className="w-3.5 h-3.5 rounded-full flex-shrink-0 text-[8px] flex items-center justify-center" style={{ background:"linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>✓</div>
        </div>
        <div className="flex justify-end">
          <div className="bg-white dark:bg-[#262626] border border-gray-200 dark:border-white/10 rounded-full px-2 py-0.5 text-[12px] shadow-sm">🔥</div>
        </div>
      </div>
      {/* IG input */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-[#121212] border-t border-gray-100 dark:border-white/10">
        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c13584" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
        </div>
        <div className="flex-1 border border-gray-200 dark:border-white/15 bg-white dark:bg-[#262626] rounded-full px-4 py-2 text-[13px] text-black/40 dark:text-white/50">Message…</div>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c13584" strokeWidth="2" strokeLinecap="round" opacity="0.8"><path d="M12 5v14M5 12l7-7 7 7"/></svg>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════
   Messenger Chat UI  🔧 Auto Workshop — QuickFix Garage
══════════════════════════════════════════════════ */
function MessengerChat() {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.2 }}>
      {/* Messenger header */}
      <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-[#18191a] border-b border-gray-100 dark:border-white/10">
        <div className="relative flex-shrink-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-[16px]" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#31a24c] rounded-full border-2 border-white dark:border-[#18191a]" />
        </div>
        <div className="flex-1">
          <p className="text-[13.5px] font-bold text-black dark:text-white leading-tight">QuickFix Garage</p>
          <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#31a24c]"/><p className="text-[11px] text-black/45 dark:text-white/60">Active now</p></div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 6.18 2 2 0 015 4h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 11.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 18v2.92z"/></svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </div>
      </div>
      {/* Messages */}
      <div className="bg-white dark:bg-[#18191a] px-4 py-4 min-h-[300px] space-y-3">
        <div className="flex justify-center"><span className="text-[11px] text-black/35 dark:text-white/50 font-medium">Wednesday 2:15 PM</span></div>
        {/* Bot */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <div className="bg-[#f0f2f5] dark:bg-[#3a3b3c] text-[13.5px] text-black/85 dark:text-white px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[70%]">
            Hey! 🔧 QuickFix Garage here. I&apos;m your 24/7 service bot. What do you need?
          </div>
        </div>
        {/* User */}
        <div className="flex justify-end">
          <div className="text-white text-[13.5px] px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[70%]" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>
            Need a full service for my Honda CB300R, this weekend if possible 🏍️
          </div>
        </div>
        {/* Checking */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <div className="flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#3a3b3c] px-4 py-2 rounded-2xl rounded-bl-sm text-[11.5px] text-black/50 dark:text-white/70 font-medium">
            <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0084ff] opacity-70"/><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0084ff]"/></span>
            Checking mechanic slots this weekend…
          </div>
        </div>
        {/* Reply */}
        <div className="flex justify-start items-end gap-2">
          <div className="w-6 h-6 rounded-full flex-shrink-0 text-[10px] flex items-center justify-center" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>🔧</div>
          <div className="bg-[#f0f2f5] dark:bg-[#3a3b3c] text-[13.5px] text-black/85 dark:text-white px-4 py-2.5 rounded-2xl rounded-bl-sm max-w-[74%]">
            ✅ <span className="font-semibold text-black dark:text-white">Saturday 9 AM</span> is open! Full service includes oil change, brakes &amp; chain lube. Est. <span className="font-semibold text-black dark:text-white">3 hrs</span>. Book it?
          </div>
        </div>
        {/* Reaction */}
        <div className="flex justify-start pl-8">
          <div className="bg-white dark:bg-[#242526] border border-gray-200 dark:border-white/10 rounded-full px-2 py-0.5 text-[12px] shadow-sm flex items-center gap-1">👍 <span className="text-[10px] text-black/35 dark:text-white/60">1</span></div>
        </div>
        {/* Seen */}
        <div className="flex justify-end items-center gap-1">
          <span className="text-[10px] text-black/30 dark:text-white/50">Seen 2:16 PM</span>
          <div className="w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2 4-4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
      {/* Messenger input */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white dark:bg-[#18191a] border-t border-gray-100 dark:border-white/10">
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
        </div>
        <div className="flex-1 bg-[#f0f2f5] dark:bg-[#3a3b3c] rounded-full px-4 py-2 text-[13px] text-black/40 dark:text-white/50">Aa</div>
        <div className="w-8 h-8 rounded-full bg-[#f0f2f5] dark:bg-[#3a3b3c] flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0084ff" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background:"linear-gradient(135deg, #0084ff, #a033ff)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
        </div>
      </div>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════
   Hero Section (Initial Full-Viewport Screen)
══════════════════════════════════════════════════ */
export function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-hero-wash pt-14 pb-8 px-4 sm:px-6">
      {/* ── Floating decoration ── */}
      <div className="absolute right-[10%] top-[28%] text-[18px] float-2 select-none pointer-events-none hidden lg:block opacity-30">✦</div>
      <div className="absolute left-[10%] bottom-[22%] text-[16px] float-1 select-none pointer-events-none hidden lg:block opacity-30">✦</div>

      {/* ── Floating window: live chat (left) ── */}
      <motion.div
        initial={{ opacity:0, x:-24, rotate:-3 }}
        animate={{ opacity:1, x:0,  rotate:-3 }}
        transition={{ delay:0.3, duration:0.7, ease:"easeOut" }}
        className="absolute left-[2%] 2xl:left-[6%] top-[22%] w-[220px] lg:w-[245px] hidden xl:block float-2 z-0"
      >
        <WinChrome title="whatsapp.mov">
          <div className="bg-[#ece5dd] dark:bg-[#0b141a] p-3.5 space-y-2.5">
            <div className="flex justify-end">
              <div className="bg-[#dcf8c6] dark:bg-[#005c4b] text-[12px] text-black/80 dark:text-white px-3 py-2 rounded-xl rounded-tr-sm max-w-[85%] shadow-xs">Can I book tomorrow at 3pm?</div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white dark:bg-[#1f2c34] text-[12px] text-black/80 dark:text-white px-3 py-2 rounded-xl rounded-tl-sm max-w-[85%] shadow-xs">Yes! 3 PM is open. Booked ✓</div>
            </div>
          </div>
        </WinChrome>
      </motion.div>

      {/* ── Floating window: booking confirmed (right) ── */}
      <motion.div
        initial={{ opacity:0, x:24, rotate:4 }}
        animate={{ opacity:1, x:0,  rotate:4 }}
        transition={{ delay:0.5, duration:0.7, ease:"easeOut" }}
        className="absolute right-[2%] 2xl:right-[6%] top-[20%] w-[215px] lg:w-[235px] hidden xl:block float-3 z-0"
      >
        <WinChrome title="booking.mov">
          <div className="bg-white dark:bg-soft-canvas p-3.5 space-y-2">
            <div className="text-[10.5px] font-semibold text-black/40 dark:text-muted uppercase tracking-wider">Confirmed</div>
            <div className="text-[13px] font-bold text-ink">Deluxe Room 204 · Dec 24</div>
            <div className="text-[11.5px] text-muted">2 Nights · 2 Guests Reserved</div>
            <div className="mt-1.5 flex items-center gap-1.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800/40 rounded-lg px-2.5 py-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-[11.5px] text-green-700 dark:text-green-300 font-medium">Booked &amp; confirmed</span>
            </div>
          </div>
        </WinChrome>
      </motion.div>

      {/* ── Central headline ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[960px] mx-auto my-auto px-4">
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, ease:"easeOut" }} className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-signal-blue/20 dark:border-signal-blue/40 text-signal-blue text-[11px] sm:text-[12px] font-bold tracking-wider uppercase mb-5 sm:mb-7 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
            AI Booking Assistant · Any Service Business
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-black text-ink mb-5 sm:mb-7 tracking-[-0.04em] leading-[0.93]">
            your front desk,<br/>
            <span className="text-ink">still awake.</span>
          </h1>

          <p className="text-[15px] sm:text-[18px] md:text-[20px] text-muted mb-8 sm:mb-10 max-w-[620px] mx-auto leading-relaxed font-normal">
            Answer messages, check real availability, and book appointments across WhatsApp, Instagram &amp; Messenger — for salons, hotels, garages, and any service business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 justify-center w-full sm:w-auto">
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 bg-ink text-canvas text-[14px] sm:text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-ink/85 transition-all shadow-sm w-full sm:w-auto"
            >
              <span>🌙</span> book a demo
            </a>
            <a
              href="#demo"
              className="flex items-center justify-center gap-2 text-[14px] sm:text-[15px] font-medium text-muted hover:text-ink transition-colors px-5 py-3.5"
            >
              see how it works →
            </a>
          </div>

          <p className="mt-4 sm:mt-5 text-[12px] sm:text-[13px] text-muted/60 dark:text-muted/80">
            100% free to try · no card needed · works with your calendar
          </p>
        </motion.div>
      </div>

      {/* ── Scroll hint at bottom of hero ── */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-muted/50 hover:text-ink transition-colors cursor-pointer">
        <a href="#demo" className="flex flex-col items-center text-[11px] font-medium tracking-wide gap-0.5">
          <span>see live demo</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════
   Platform Chatbox Demo Section
══════════════════════════════════════════════════ */
export function PlatformDemo() {
  const [activeTab, setActiveTab] = React.useState<"whatsapp"|"instagram"|"messenger">("whatsapp")

  return (
    <section className="w-full py-20 md:py-28 px-4 sm:px-6 bg-canvas border-b border-line" id="demo">
      <div className="mx-auto max-w-[840px] text-center flex flex-col items-center justify-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-signal-blue/10 border border-signal-blue/20 text-signal-blue text-[11px] font-bold tracking-wider uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-signal-blue animate-pulse" />
          Live Interactive Demo
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink mb-4 tracking-tight text-center">
          Real conversations. Across every platform.
        </h2>
        <p className="text-muted text-[15px] sm:text-[17px] max-w-[560px] mx-auto leading-relaxed text-center">
          Switch platforms below to see how Vesper checks actual availability and books appointments on WhatsApp, Instagram, and Messenger.
        </p>
      </div>

      {/* ── Platform Chatbox Demo Window ── */}
      <div className="w-full max-w-[680px] mx-auto">
        <WinChrome title="vesper-demo.mov">
          {/* Platform tab bar */}
          <div className="flex items-center border-b border-[hsl(0_0%_84%)] dark:border-line bg-[hsl(0_0%_93%)] dark:bg-[hsl(var(--soft-canvas))]">
            <button
              onClick={()=>setActiveTab("whatsapp")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-all ${
                activeTab==="whatsapp"
                  ? "border-[#25d366] text-[#075e54] dark:text-[#25d366] bg-white/70 dark:bg-white/10"
                  : "border-transparent text-black/40 dark:text-white/60 hover:text-black/65 dark:hover:text-white/90"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={activeTab==="whatsapp"?"text-[#25d366]":"text-black/25 dark:text-white/40"}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>WhatsApp</span>
            </button>
            <button
              onClick={()=>setActiveTab("instagram")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-all ${
                activeTab==="instagram"
                  ? "border-[#c13584] text-[#c13584] dark:text-[#f472b6] bg-white/70 dark:bg-white/10"
                  : "border-transparent text-black/40 dark:text-white/60 hover:text-black/65 dark:hover:text-white/90"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={activeTab==="instagram"?"text-[#c13584]":"text-black/25 dark:text-white/40"}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              <span>Instagram</span>
            </button>
            <button
              onClick={()=>setActiveTab("messenger")}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-[12.5px] sm:text-[13px] font-semibold border-b-2 transition-all ${
                activeTab==="messenger"
                  ? "border-[#0084ff] text-[#0084ff] dark:text-[#60a5fa] bg-white/70 dark:bg-white/10"
                  : "border-transparent text-black/40 dark:text-white/60 hover:text-black/65 dark:hover:text-white/90"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={activeTab==="messenger"?"text-[#0084ff]":"text-black/25 dark:text-white/40"}><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.683V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z"/></svg>
              <span>Messenger</span>
            </button>
          </div>
          {/* Animated chat panels */}
          <AnimatePresence mode="wait">
            {activeTab === "whatsapp"  && <WhatsAppChat  key="wa" />}
            {activeTab === "instagram" && <InstagramChat key="ig" />}
            {activeTab === "messenger" && <MessengerChat key="ms" />}
          </AnimatePresence>
        </WinChrome>
        <p className="mt-3 text-center text-[12px] text-muted/60">✦ Fully interactive · Switch tabs to test different business scenarios</p>
      </div>
    </section>
  )
}

/* ── Marquee trust strip ── */
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
          <span key={i} className="text-[13px] font-medium text-muted/70 whitespace-nowrap">{it}</span>
        ))}
      </div>
    </div>
  )
}

/* ── Manifesto (notes window style) ── */
export function Manifesto() {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] })
  const o1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [0.25, 1, 1])
  const o2 = useTransform(scrollYProgress, [0.25, 0.45, 0.5], [0.25, 1, 1])
  const o3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75], [0.25, 1, 1])
  const o4 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0.25, 1, 1])

  return (
    <section ref={targetRef} className="relative h-[320vh] bg-soft-canvas">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden">
        {/* Notes-style window */}
        <div className="w-full max-w-[580px]">
          <WinChrome title="notes">
            <div className="bg-[#fdf8e8] dark:bg-[#151b26] p-10 md:p-14 min-h-[340px]">
              <div className="space-y-5 text-[15px] leading-[1.7] text-ink/80 font-[450]">
                <motion.p style={{ opacity: o1 }}>
                  most service businesses lose high-paying customers because they can&apos;t reply at midnight.
                </motion.p>
                <motion.p style={{ opacity: o2 }}>
                  we believe <span className="text-ink font-semibold underline decoration-signal-blue decoration-2 underline-offset-2">the interface is the problem.</span>
                </motion.p>
                <motion.p style={{ opacity: o3 }}>
                  vesper takes the same frontier AI everyone else uses, and makes it actually check your calendar before saying yes.
                </motion.p>
                <motion.p style={{ opacity: o4 }}>
                  it&apos;s early! try it out and tell us what you think.
                  <span className="blink-cursor" />
                </motion.p>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-black/10 dark:border-white/10 pt-6">
                <div className="w-8 h-8 rounded-full bg-signal-blue flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">S</div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">the team,</p>
                  <p className="text-[12px] text-muted">vesper</p>
                </div>
              </div>
            </div>
          </WinChrome>
        </div>
      </div>
    </section>
  )
}

/* ── Three Jobs ── */
export function ThreeJobs() {
  const jobs = [
    { icon: MessageSquare, title: "Answer accurately", copy: "Vesper reads from your approved business knowledge. No hallucinations about prices, staff, or availability.", color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400" },
    { icon: Calendar,     title: "Book safely",       copy: "Every booking is checked against real availability before confirming. Zero double-bookings.",       color: "bg-green-50 dark:bg-green-950/40 text-green-600 dark:text-green-400" },
    { icon: Zap,          title: "Remember context",  copy: "Recent messages and history are layered together for natural, multi-turn conversations.",            color: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400" },
  ]
  return (
    <section className="w-full py-28 px-6 bg-canvas" id="features">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-16 flex flex-col items-center justify-center text-center">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-3 text-center">core jobs</p>
          <h2 className="text-h2 text-ink text-center max-w-[800px] mx-auto">three things it does right.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {jobs.map((job, i) => (
            <WinChrome key={i} className="flex flex-col h-full">
              <div className="bg-white dark:bg-soft-canvas p-8 flex flex-col h-full">
                <div className={`w-10 h-10 rounded-full ${job.color} flex items-center justify-center mb-6`}>
                  <job.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[18px] font-semibold text-ink mb-3">{job.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed">{job.copy}</p>
              </div>
            </WinChrome>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials / Feedback ── */
export function TrustSection() {
  const feedbacks = [
    { name: "Priya Tamang",      handle: "@glamstudio_ktm",  role: "Salon Owner",        quote: "Vesper books haircut slots at midnight while I sleep. My chair is always full now.", color: "#c13584" },
    { name: "Rajan Shrestha",    handle: "@grandinn_hotel",  role: "Hotel Manager",       quote: "Room reservations come in 24/7 — even on holidays. Zero front desk needed after 10 PM.", color: "#3472ff" },
    { name: "Bikram Rai",        handle: "@quickfix_garage", role: "Auto Workshop",       quote: "Customers book bike servicing on WhatsApp at 11 PM. We wake up to a full schedule.", color: "#f97316" },
    { name: "Sunita Gurung",     handle: "@zenithspa",       role: "Spa Manager",         quote: "It actually checks therapist availability before confirming. Every other bot just lies.", color: "#a855f7" },
    { name: "Arun Karmacharya",  handle: "@horizontravel",   role: "Travel Agency",       quote: "Package bookings come through Messenger now. Our Instagram DMs are fully automated.", color: "#28c840" },
    { name: "Meera Pandey",      handle: "@spicegardenktm",  role: "Restaurant Owner",    quote: "Table reservations, takeaway slots — Vesper handles it all. Worth every paisa.", color: "#febc2e" },
  ]
  const cols = [feedbacks.slice(0,2), feedbacks.slice(2,4), feedbacks.slice(4,6)]
  return (
    <section className="w-full py-28 px-6 bg-soft-canvas">
      <div className="mx-auto max-w-[1080px]">
        <div className="mb-14 flex flex-col items-center justify-center text-center">
          <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-4 text-center">feedback</p>
          <div className="marquee-outer mb-8 w-full overflow-hidden">
            <div className="marquee-track gap-10">
              {["they use it everyday","they use it everyday","they use it everyday","they use it everyday","they use it everyday","they use it everyday"].map((t,i)=>(
                <span key={i} className="text-[28px] font-bold text-ink/10 whitespace-nowrap">{t}</span>
              ))}
            </div>
          </div>
          <p className="text-[13px] text-muted/60 dark:text-muted/80 font-medium text-center max-w-[600px] mx-auto">10,000+ bookings handled · 200+ service businesses · growing every day</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cols.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((fb) => (
                <WinChrome key={fb.handle}>
                  <div className="bg-white dark:bg-soft-canvas" style={{ borderTop:`3px solid ${fb.color}20` }}>
                    <div className="p-5 border-b border-[hsl(0_0%_90%)] dark:border-line" style={{ background:`linear-gradient(90deg, ${fb.color}14, ${fb.color}14), linear-gradient(90deg, #e8e8e8 0%, #f4f4f4 50%, #e8e8e8 100%)` }} />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0" style={{ background:fb.color }}>
                          {fb.name[0]}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-ink">{fb.name}</p>
                          <p className="text-[12px] text-muted">{fb.handle}</p>
                          {fb.role && <span className="inline-block mt-0.5 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-black/40 dark:text-white/70">{fb.role}</span>}
                        </div>
                      </div>
                      <p className="text-[14px] text-ink/80 leading-relaxed">{fb.quote}</p>
                    </div>
                  </div>
                </WinChrome>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Pricing ── */
export function FinalCTA() {
  const [billing, setBilling] = React.useState<"monthly" | "yearly">("monthly")
  const plans = [
    {
      name: "Starter",
      badge: null,
      price: { monthly: "Rs. 4,999", yearly: "Rs. 3,999" },
      period: "per month",
      description: "For small studios and solo operators automating their first channel.",
      features: [
        "Up to 100 automated bookings / month",
        "1 messaging channel (WhatsApp or Instagram)",
        "Google Calendar 2-way sync",
        "Instant conflict checks",
        "Standard support & setup guide",
      ],
      ctaText: "Start 14-day trial",
      ctaHref: "#demo",
      highlight: false,
    },
    {
      name: "Pro",
      badge: "Most popular",
      price: { monthly: "Rs. 11,999", yearly: "Rs. 9,599" },
      period: "per month",
      description: "For active salons, hotels, and service shops handling daily guest messages.",
      features: [
        "Unlimited conversations & bookings",
        "All channels: WhatsApp, Instagram & Messenger",
        "Real-time calendar slot verification",
        "Instant staff alert & human handoff",
        "Custom service menu & FAQ rules",
        "Automated booking confirmations",
      ],
      ctaText: "Start 14-day free trial",
      ctaHref: "#demo",
      highlight: true,
    },
    {
      name: "Business",
      badge: null,
      price: { monthly: "Rs. 19,999", yearly: "Rs. 15,999" },
      period: "per month",
      description: "For operators with multiple staff members, calendars, or branches.",
      features: [
        "Everything in Pro",
        "Multi-staff & multi-calendar routing",
        "Multiple location support",
        "Custom CRM & database synchronization",
        "Dedicated onboarding & priority support",
      ],
      ctaText: "Start 14-day trial",
      ctaHref: "#demo",
      highlight: false,
    },
  ]

  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-6 bg-canvas border-t border-line relative overflow-hidden" id="pricing">
      <div className="relative z-10 mx-auto max-w-[1080px]">
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center mb-12 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-muted mb-3 text-center">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight mb-4 text-center">
            Simple, transparent plans.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-muted max-w-[480px] mx-auto leading-relaxed text-center">
            No setup fees. No lock-in contracts. Upgrade or cancel whenever you need.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="inline-flex items-center p-1 rounded-full bg-[hsl(40_10%_92%)] dark:bg-soft-canvas border border-line">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-[13px] font-semibold transition-all ${
                  billing === "monthly"
                    ? "bg-white dark:bg-white/15 text-ink shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("yearly")}
                className={`px-4 sm:px-5 py-1.5 rounded-full text-[13px] font-semibold transition-all inline-flex items-center gap-1.5 ${
                  billing === "yearly"
                    ? "bg-white dark:bg-white/15 text-ink shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span>Annual</span>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white dark:bg-soft-canvas rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-200 ${
                plan.highlight
                  ? "border-2 border-ink dark:border-signal-blue shadow-frame ring-1 ring-ink/5 md:-translate-y-2"
                  : "border border-line shadow-card hover:shadow-card-hover hover:border-ink/20 dark:hover:border-white/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-ink text-white dark:bg-signal-blue dark:text-white text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Card Header & Price */}
              <div className="p-7 sm:p-8 border-b border-line/60">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="text-[11px] font-medium text-muted bg-soft-canvas px-2.5 py-1 rounded-md border border-line">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-muted leading-snug min-h-[38px]">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1.5 mt-5">
                  <span className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-ink tracking-tight">
                    {plan.price[billing]}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-muted">
                    {billing === "yearly"
                      ? "/mo (annual)"
                      : `/${plan.period}`}
                  </span>
                </div>
              </div>

              {/* Feature List */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between gap-6">
                <div className="space-y-3.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted/70 dark:text-muted/90">
                    What's included
                  </p>
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-emerald-600 stroke-[2.5]" />
                      </div>
                      <span className="text-[13.5px] text-ink/85 leading-tight">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href={plan.ctaHref}
                    className={`block w-full text-center py-3.5 px-4 rounded-xl text-[14px] font-semibold transition-all ${
                      plan.highlight
                        ? "bg-ink text-white dark:bg-signal-blue dark:text-white hover:opacity-90 shadow-sm"
                        : "bg-soft-canvas text-ink hover:bg-[hsl(40_12%_88%)] dark:hover:bg-white/10 border border-line"
                    }`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guarantee */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-[13px] text-muted font-medium">
            14-day free trial on all plans · Billed in NPR (Nepali Rupees) · Cancel anytime
          </p>
          <p className="text-[12px] text-muted/60 dark:text-muted/80">
            Need a custom integration or multi-branch plan?{" "}
            <a href="mailto:hello@vesper.ai" className="underline hover:text-ink">
              Talk to our team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}


