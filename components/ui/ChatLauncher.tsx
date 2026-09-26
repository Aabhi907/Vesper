"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles, Calendar, CheckCheck, RefreshCw } from "lucide-react"

/* ══════════════════════════════════════════════════
   Types & Constants
══════════════════════════════════════════════════ */
const MAX_LOOK = 3.2 // px the pupils travel toward the cursor
const FINE_POINTER = "(hover: hover) and (pointer: fine)"
const easeOutExpo = [0.16, 1, 0.3, 1] as const

interface Message {
  id: string
  from: "bot" | "you"
  text: string
  time: string
  action?: {
    label: string
    href: string
  }
}

const QUICK_PROMPTS = [
  "⚡ How does live calendar sync work?",
  "💬 Does it speak Nepali & English?",
  "📱 Which platforms are supported?",
  "💳 What are the pricing plans?",
  "🌙 Does it really work at 2 AM?",
]

function getFormattedTime() {
  const now = new Date()
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}

/**
 * Knowledge-based smart responder for Vesper
 */
function generateVesperReply(query: string): { text: string; action?: { label: string; href: string } } {
  const q = query.toLowerCase()

  if (q.includes("calendar") || q.includes("slot") || q.includes("availability") || q.includes("double")) {
    return {
      text: "Vesper integrates with Google Calendar (plus Outlook & Apple Calendar). When a customer asks for a slot, Vesper queries your calendar in real-time, finds genuine openings, reserves the slot instantly, and eliminates double-bookings 100%!",
      action: { label: "See Calendar Demo", href: "/#demo" },
    }
  }

  if (q.includes("nepali") || q.includes("english") || q.includes("language") || q.includes("romanized") || q.includes("bilingual")) {
    return {
      text: "Hajur! Vesper is natively bilingual. It fluidly understands Romanized Nepali (e.g. 'bholi Saturday 11 baje haircut slot khali cha?'), Devanagari script, and English. No awkward robotic translations.",
      action: { label: "Test Bilingual Engine", href: "/#demo" },
    }
  }

  if (q.includes("platform") || q.includes("whatsapp") || q.includes("instagram") || q.includes("messenger") || q.includes("dm")) {
    return {
      text: "We connect seamlessly to WhatsApp Business API, Instagram Direct Messages, and Facebook Messenger. All customer messages route into one intelligent booking queue that operates 24/7.",
    }
  }

  if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("plan") || q.includes("subscription")) {
    return {
      text: "Vesper offers three simple tiers: Starter at Rs. 4,999/mo, Pro at Rs. 9,999/mo, and Business at Rs. 19,999/mo. All plans include a 14-day free trial with zero setup fees!",
      action: { label: "View Pricing Plans", href: "/pricing" },
    }
  }

  if (q.includes("2 am") || q.includes("night") || q.includes("midnight") || q.includes("sleep") || q.includes("awake")) {
    return {
      text: "That's our entire superpower! Over 42% of appointment inquiries in service businesses come after 9:00 PM when your front desk is asleep. Vesper replies in < 2 seconds and closes the booking while you rest.",
    }
  }

  if (q.includes("demo") || q.includes("trial") || q.includes("setup") || q.includes("start") || q.includes("contact")) {
    return {
      text: "You can test out our interactive platform simulator right on this page, or get our team to connect Vesper to your WhatsApp & Google Calendar in under 15 minutes!",
      action: { label: "Schedule Setup with Team", href: "mailto:hello@vesper.ai?subject=Vesper%20Setup" },
    }
  }

  if (q.includes("team") || q.includes("founder") || q.includes("who made")) {
    return {
      text: "Vesper was built by Aabishkar Shrestha (Co-founder & COO), Samrat Ghimere, and Kasam Thapa Magar in Kathmandu to modernize front desk operations for service businesses worldwide.",
      action: { label: "Meet the Team", href: "/team" },
    }
  }

  return {
    text: "Thanks for asking! Vesper is an AI booking assistant that connects WhatsApp, Instagram, and Messenger to your live calendar. Would you like to explore our interactive demo, check pricing, or talk to our founders?",
    action: { label: "Talk to Founders", href: "mailto:hello@vesper.ai" },
  }
}

function blink(el: HTMLElement | null, durationMs = 80) {
  if (!el) return
  el.setAttribute("data-blink", "")
  window.setTimeout(() => el.removeAttribute("data-blink"), durationMs)
}

/* ══════════════════════════════════════════════════
   Eye Sub-Component
══════════════════════════════════════════════════ */
function Eye() {
  return (
    <span className="chat-eye relative block h-[13px] w-[10px] overflow-hidden rounded-full bg-white shadow-inner">
      <span className="chat-pupil absolute top-1/2 left-1/2 -mt-[3px] -ml-[3px] block size-[6px] rounded-full bg-[#0b1329] dark:bg-[#020617]" />
    </span>
  )
}

/* ══════════════════════════════════════════════════
   Chat Launcher Main Component
══════════════════════════════════════════════════ */
export function ChatLauncher() {
  const [open, setOpen] = React.useState(false)
  const [still, setStill] = React.useState(false)
  const button = React.useRef<HTMLButtonElement>(null)
  const eyes = React.useRef<HTMLSpanElement>(null)
  const openRef = React.useRef(open)

  // Keep openRef synced
  React.useEffect(() => {
    openRef.current = open
  }, [open])


  // Reduced motion detection
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setStill(mq.matches)
    const handler = (e: MediaQueryListEvent) => setStill(e.matches)
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  // Pupils ease toward a target; the target comes from the mouse (fine pointers) or idle glances (touch)
  React.useEffect(() => {
    if (still) return
    const el = eyes.current
    if (!el) return

    const pos = { x: 0, y: 0 }
    let target = { x: 0, y: 0 }
    let raf = 0

    const step = () => {
      if (openRef.current) target = { x: 0, y: -MAX_LOOK } // look up at the panel
      pos.x += (target.x - pos.x) * 0.18
      pos.y += (target.y - pos.y) * 0.18
      el.style.setProperty("--look-x", `${pos.x.toFixed(2)}px`)
      el.style.setProperty("--look-y", `${pos.y.toFixed(2)}px`)
      raf = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.02 ? requestAnimationFrame(step) : 0
    }

    const aim = (next: { x: number; y: number }) => {
      target = next
      if (!raf) raf = requestAnimationFrame(step)
    }

    const mouse = window.matchMedia(FINE_POINTER).matches
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" || openRef.current) return
      const r = el.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const d = Math.hypot(dx, dy) || 1
      const reach = Math.min(MAX_LOOK, d / 40)
      aim({ x: (dx / d) * reach, y: (dy / d) * reach })
    }

    // Touch: glance left, back, right, back — one move every 2s
    const glances = [-2.6, 0, 2.6, 0]
    let g = 0
    const glance = mouse ? 0 : window.setInterval(() => !openRef.current && aim({ x: glances[g++ % 4], y: 0 }), 2000)

    if (mouse) window.addEventListener("pointermove", onMove, { passive: true })
    const onOpenChange = () => aim(openRef.current ? { x: 0, y: -MAX_LOOK } : { x: 0, y: 0 })
    el.addEventListener("lookreset", onOpenChange)

    // Periodic life-like blink every 4.5 seconds
    const blinkInterval = window.setInterval(() => {
      if (!still && !openRef.current && Math.random() > 0.25) {
        blink(eyes.current, 90)
      }
    }, 4500)

    return () => {
      window.removeEventListener("pointermove", onMove)
      el.removeEventListener("lookreset", onOpenChange)
      window.clearInterval(glance)
      window.clearInterval(blinkInterval)
      cancelAnimationFrame(raf)
    }
  }, [still])

  React.useEffect(() => {
    eyes.current?.dispatchEvent(new Event("lookreset"))
  }, [open])

  return (
    <>
      <button
        ref={button}
        type="button"
        aria-label={open ? "Close chat" : "Chat with Vesper assistant"}
        aria-expanded={open}
        aria-controls="chat-panel"
        aria-haspopup="dialog"
        onClick={() => setOpen((o) => !o)}
        onPointerEnter={(e) => e.pointerType === "mouse" && !still && blink(eyes.current, 70)}
        data-open={open || undefined}
        className="chat-launcher group fixed right-[calc(20px+env(safe-area-inset-right))] bottom-[calc(20px+env(safe-area-inset-bottom))] z-[140] size-[52px] rounded-full sm:right-[calc(24px+env(safe-area-inset-right))] sm:bottom-[calc(24px+env(safe-area-inset-bottom))] sm:size-14 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue"
      >
        <span aria-hidden className="chat-float absolute inset-0">
          {/* Teardrop speech-bubble blob styled in Vesper's signature signal-blue gradient */}
          <span className="absolute inset-0 rounded-[50%_50%_14%_50%] bg-gradient-to-tr from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] dark:from-[#1e40af] dark:via-[#2563eb] dark:to-[#60a5fa] shadow-[0_10px_24px_-6px_rgba(37,99,235,0.55),inset_0_1px_1.5px_rgba(255,255,255,0.45)] transition-shadow duration-300 pointer-fine:group-hover:shadow-[0_14px_30px_-6px_rgba(37,99,235,0.7),inset_0_1px_2px_rgba(255,255,255,0.6)]" />

          {/* Interactive Following Eyes */}
          <span ref={eyes} className="chat-eyes absolute inset-0 flex items-center justify-center gap-[7px] pb-0.5">
            <Eye />
            <Eye />
          </span>
        </span>
      </button>


      <AnimatePresence>
        {open && <ChatPanel onClose={() => setOpen(false)} launcher={button} />}
      </AnimatePresence>
    </>
  )
}

/* ══════════════════════════════════════════════════
   Chat Panel Popup Window
══════════════════════════════════════════════════ */
function ChatPanel({
  onClose,
  launcher,
}: {
  onClose: () => void
  launcher: React.RefObject<HTMLButtonElement | null>
}) {
  const panel = React.useRef<HTMLDivElement>(null)
  const input = React.useRef<HTMLInputElement>(null)
  const log = React.useRef<HTMLDivElement>(null)
  const titleId = React.useId()

  const [isTyping, setIsTyping] = React.useState(false)
  const [draft, setDraft] = React.useState("")
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "m-0",
      from: "bot",
      text: "Namaste! 🙏 I'm Vesper, your 24/7 AI front desk. I answer inquiries, check live calendar availability, and confirm bookings across WhatsApp, Instagram & Messenger. How can I help you today?",
      time: getFormattedTime(),
    },
  ])

  // Focus input and handle outside clicks / ESC key
  React.useEffect(() => {
    input.current?.focus()

    const onDown = (e: PointerEvent) => {
      const t = e.target as Node
      if (!panel.current?.contains(t) && !launcher.current?.contains(t)) {
        onClose()
      }
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("pointerdown", onDown)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onDown)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [onClose, launcher])

  // Auto-scroll message log to bottom on updates
  React.useEffect(() => {
    if (log.current) {
      log.current.scrollTop = log.current.scrollHeight
    }
  }, [messages, isTyping])

  const send = (text: string) => {
    const clean = text.trim()
    if (!clean) return

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      from: "you",
      text: clean,
      time: getFormattedTime(),
    }

    setMessages((prev) => [...prev, userMsg])
    setDraft("")
    setIsTyping(true)

    // Simulate smart AI typing latency
    window.setTimeout(() => {
      const { text: replyText, action } = generateVesperReply(clean)
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        from: "bot",
        text: replyText,
        time: getFormattedTime(),
        action,
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 650)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    send(draft)
  }

  return (
    <motion.div
      ref={panel}
      id="chat-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 14, scale: 0.96 }}
      transition={{ duration: 0.25, ease: easeOutExpo }}
      className="fixed inset-x-2 bottom-[calc(84px+env(safe-area-inset-bottom))] z-[140] flex h-[72svh] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-line bg-canvas shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.65)] sm:inset-x-auto sm:right-[calc(24px+env(safe-area-inset-right))] sm:bottom-[calc(92px+env(safe-area-inset-bottom))] sm:h-[530px] sm:max-h-[calc(100svh-120px)] sm:w-[380px]"
    >
      {/* ── Top Header Bar ── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-line bg-soft-canvas/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#0a0a0a] dark:bg-white flex items-center justify-center shadow-xs">
              <span className="text-white dark:text-[#0a0a0a] text-[14px] font-black tracking-tight leading-none">
                V
              </span>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-canvas dark:border-zinc-900" />
          </div>

          <div>
            <h2 id={titleId} className="text-[13.5px] font-bold text-ink leading-tight flex items-center gap-1.5">
              Vesper Assistant
              <Sparkles className="w-3 h-3 text-signal-blue" />
            </h2>
            <p className="text-[11px] text-muted flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Active 24/7 · Instant Calendar Sync
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat dialog"
          className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* ── Chat Messages Scroll Area ── */}
      <div
        ref={log}
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 text-[13px] leading-relaxed scroll-smooth"
      >
        <div className="flex justify-center">
          <span className="px-2.5 py-0.5 rounded-full bg-soft-canvas text-muted text-[10.5px] font-mono">
            Always awake · 24/7 Demo
          </span>
        </div>

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.from === "you" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 shadow-xs ${
                m.from === "you"
                  ? "bg-signal-blue text-white rounded-tr-xs"
                  : "bg-soft-canvas text-ink border border-line/60 rounded-tl-xs"
              }`}
            >
              <p className="whitespace-pre-wrap">{m.text}</p>

              {/* Action Button inside message if available */}
              {m.action && (
                <div className="mt-2.5 pt-2 border-t border-line/50">
                  <a
                    href={m.action.href}
                    onClick={() => {
                      if (m.action?.href.startsWith("#") || m.action?.href.startsWith("/#")) {
                        onClose()
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-signal-blue dark:text-blue-400 hover:underline"
                  >
                    <span>{m.action.label}</span>
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
            <span className="text-[10px] text-muted/70 px-1 mt-1 font-mono flex items-center gap-1">
              {m.time}
              {m.from === "you" && <CheckCheck className="w-3 h-3 text-signal-blue" />}
            </span>
          </div>
        ))}

        {/* Live Typing Indicator */}
        {isTyping && (
          <div className="flex items-start">
            <div className="bg-soft-canvas border border-line/60 text-ink px-3 py-2 rounded-2xl rounded-tl-xs flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-signal-blue animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-signal-blue animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-signal-blue animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* ── Suggested Quick Prompts Pills ── */}
      <div className="px-3 pt-2 pb-1 bg-canvas border-t border-line/50 overflow-x-auto no-scrollbar flex items-center gap-1.5 flex-nowrap">
        {QUICK_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => send(prompt)}
            className="shrink-0 text-[11px] font-medium px-2.5 py-1 rounded-full bg-soft-canvas text-ink/80 hover:text-ink hover:bg-signal-blue/10 hover:border-signal-blue/30 border border-line transition-all whitespace-nowrap"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* ── Input Form ── */}
      <form onSubmit={submit} className="p-3 bg-soft-canvas/60 border-t border-line flex items-center gap-2">
        <input
          ref={input}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask Vesper anything about booking..."
          className="flex-1 bg-canvas border border-line rounded-full px-4 py-2.5 text-[13px] text-ink placeholder:text-muted/60 focus:outline-none focus:border-signal-blue transition-colors"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          aria-label="Send message"
          className="w-9 h-9 rounded-full bg-signal-blue text-white flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-signal-blue/90 active:scale-95 transition-all shadow-xs"
        >
          <Send className="w-4 h-4 ml-0.5" />
        </button>
      </form>
    </motion.div>
  )
}
