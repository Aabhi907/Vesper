
Because Next.js App Router requires specific file structures to work, I cannot put everything into a *literal* single .tsx file (otherwise routing and server/client boundaries will break).

However, to make this incredibly easy for you to copy and paste, **I have consolidated the \~30 separate component files down to just a few files.**

Here is the complete codebase.

### Step 1: Install Dependencies

Run this in your terminal first:

**codeBash**

```
npm install framer-motion lucide-react clsx tailwind-merge @radix-ui/react-slot
```

---

### 1. Configuration & Utilities

**tailwind.config.ts**

**codeTypeScript**

```
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "hsl(var(--canvas))",
        "soft-canvas": "hsl(var(--soft-canvas))",
        ink: "hsl(var(--ink))",
        muted: "hsl(var(--muted))",
        line: "hsl(var(--line))",
        night: "hsl(var(--night))",
        "signal-blue": "hsl(var(--signal-blue))",
        "signal-blue-dark": "hsl(var(--signal-blue-dark))",
        "blue-soft": "hsl(var(--blue-soft))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
      },
      fontSize: {
        "hero": ["clamp(3rem, 5vw + 1.5rem, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "700" }],
        "h1": ["clamp(2.5rem, 4vw + 1rem, 4rem)", { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "650" }],
        "h2": ["clamp(2rem, 3vw + 1rem, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.025em", fontWeight: "620" }],
        "h3": ["clamp(1.25rem, 2vw + 0.5rem, 1.75rem)", { lineHeight: "1.15", fontWeight: "600" }],
        "lead": ["clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)", { lineHeight: "1.45", fontWeight: "450" }],
        "body": ["clamp(1rem, 1vw + 0.25rem, 1.125rem)", { lineHeight: "1.55", fontWeight: "400" }],
        "small": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "eyebrow": ["clamp(0.6875rem, 1vw + 0.1rem, 0.75rem)", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "650" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        "card": "0 8px 24px rgba(12, 20, 37, 0.06)",
        "frame": "0 20px 60px rgba(12, 20, 37, 0.08)",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.22, 0.8, 0.22, 1)",
      },
      transitionDuration: {
        "micro": "150ms",
        "ui": "250ms",
        "panel": "450ms",
        "cinematic": "800ms",
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
```

**app/globals.css**

**codeCSS**

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --canvas: 0 0% 100%;
    --soft-canvas: 210 20% 97%;
    --ink: 220 12% 5%;
    --muted: 216 12% 46%;
    --line: 220 14% 91%;
    --night: 221 51% 10%;
    
    --signal-blue: 226 100% 58%;
    --signal-blue-dark: 226 80% 45%;
    --blue-soft: 226 100% 96%;
    
    --success: 145 68% 31%;
    --warning: 36 73% 48%;
    --danger: 0 54% 53%;

    --radius-sm: 12px;
    --radius-md: 18px;
    --radius-lg: 24px;
    --radius-xl: 28px;
  }
  body {
    @apply bg-canvas text-ink antialiased selection:bg-signal-blue selection:text-white;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
  p, p[class*="text-body"], p[class*="text-lead"] {
    max-width: 72ch;
  }
}

@layer utilities {
  .bg-hero-wash {
    background: linear-gradient(180deg, hsl(var(--canvas)) 0%, hsl(var(--soft-canvas)) 100%);
  }
  .bg-night-glow {
    background-color: hsl(var(--night));
    background-image: radial-gradient(circle at top center, rgba(41,91,255,0.15) 0%, transparent 60%);
  }
}
```

**lib/utils.ts**

**codeTypeScript**

```
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

### 2. Consolidated Components

**components/ui.tsx**
*(Combines Button, Card, and StatusBadge)*

**codeTsx**

```
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-[15px] font-[600] transition-all duration-micro focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-signal-blue text-white hover:bg-signal-blue-dark shadow-sm",
        secondary: "bg-white text-ink border border-line hover:bg-soft-canvas",
        outline: "border border-line bg-transparent hover:bg-soft-canvas text-ink",
        ghost: "hover:bg-soft-canvas text-ink",
        link: "text-signal-blue hover:text-signal-blue-dark p-0 h-auto font-[600] group",
        dark: "bg-white text-night hover:bg-soft-canvas",
      },
      size: { default: "h-11 px-6 py-2", lg: "h-12 px-8 py-2", sm: "h-9 px-4", icon: "h-11 w-11" },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
)
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean; showChevron?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showChevron, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
        {showChevron && <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-micro group-hover:translate-x-1" />}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-md border border-line bg-white text-ink shadow-card transition-shadow duration-ui", className)} {...props} />
))
Card.displayName = "Card"
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)} {...props} />
))
CardHeader.displayName = "CardHeader"
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

export type FeatureStatus = "live" | "beta" | "coming-soon" | "planned"
export function StatusBadge({ status, label, className, ...props }: { status: FeatureStatus, label?: string } & React.HTMLAttributes<HTMLDivElement>) {
  const config = { "live": { c: "bg-success", l: "Live" }, "beta": { c: "bg-warning", l: "Beta" }, "coming-soon": { c: "bg-warning", l: "Coming Soon" }, "planned": { c: "bg-muted", l: "Planned" } }
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border border-line bg-white px-2.5 py-1 text-[13px] font-medium text-ink shadow-sm", className)} {...props}>
      <span className="relative flex h-2 w-2">
        {status === "live" && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-20"></span>}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", config[status].c)}></span>
      </span>
      {label || config[status].l}
    </div>
  )
}
```

**components/layout.tsx**
*(Combines Navbar and Footer)*

**codeTsx**

```
"use client"
import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)
  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 32))

  return (
    <motion.header className={cn("fixed top-0 z-50 w-full transition-all duration-ui", isScrolled ? "h-[52px] bg-white/80 backdrop-blur-md border-b border-line shadow-sm" : "h-20 bg-transparent border-b border-transparent")} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-start gap-1 group">
          <span className="text-xl font-bold tracking-tight text-ink group-hover:text-signal-blue transition-colors">Night Guard</span>
          <span className="text-[10px] font-bold text-signal-blue bg-blue-soft px-1.5 py-0.5 rounded-sm uppercase tracking-wider">AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {["Product", "Clinics", "Pricing", "Trust", "Team"].map((name) => (
            <Link key={name} href={`/${name.toLowerCase()}`} className="text-[14px] font-medium text-muted hover:text-ink transition-colors duration-micro">{name}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="primary" size={isScrolled ? "sm" : "default"}>Book a demo</Button>
        </div>
      </div>
    </motion.header>
  )
}

export function Footer() {
  return (
    <footer className="w-full bg-night-glow text-white py-16 px-6 mt-auto">
      <div className="mx-auto max-w-[1240px] flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <div className="flex items-start gap-1 group mb-4">
            <span className="text-xl font-bold tracking-tight text-white">Night Guard</span>
            <span className="text-[10px] font-bold text-night bg-blue-soft px-1.5 py-0.5 rounded-sm uppercase tracking-wider">AI</span>
          </div>
          <p className="text-[14px] text-white/60 leading-relaxed">The AI front desk for appointment-driven businesses. Understands intent. Checks truth. Takes action.</p>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/40 mb-2">Product</h4>
            <Link href="/product" className="text-[14px] text-white/80 hover:text-white">How it works</Link>
            <Link href="/pricing" className="text-[14px] text-white/80 hover:text-white">Pricing</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white/40 mb-2">Company</h4>
            <Link href="/clinics" className="text-[14px] text-white/80 hover:text-white">For Clinics</Link>
            <Link href="/team" className="text-[14px] text-white/80 hover:text-white">Team</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**components/demos.tsx**
*(Combines all interactive Framer Motion components)*

**codeTsx**

```
"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, CheckCircle2, Mic, GitCommit, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui"

export function HeroDemo() {
  const [activeTab, setActiveTab] = React.useState("website")
  return (
    <div className="relative w-full max-w-[1000px] mx-auto mt-16 lg:mt-24">
      <div className="relative rounded-xl border border-line bg-white shadow-frame overflow-hidden">
        <div className="flex items-center justify-center border-b border-line bg-soft-canvas px-4 py-3">
          <div className="flex space-x-6">
            {["website", "whatsapp", "messenger"].map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[13px] font-medium transition-colors ${activeTab === tab ? "text-ink" : "text-muted hover:text-ink"}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <div className="p-8 md:p-12 bg-white min-h-[400px] flex flex-col justify-center items-center">
          <div className="w-full max-w-md space-y-6">
            <div className="flex justify-end">
              <div className="bg-soft-canvas text-ink px-4 py-3 rounded-2xl rounded-tr-sm text-[15px] max-w-[85%]">Can I book tomorrow around 3:00 PM?</div>
            </div>
            <div className="flex items-center justify-center py-2">
              <div className="bg-blue-soft border border-signal-blue/20 text-signal-blue-dark px-3 py-1.5 rounded-full text-[12px] font-medium flex items-center gap-2">
                <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-blue opacity-40"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-signal-blue"></span></span>
                Checking real availability...
              </div>
            </div>
            <div className="flex justify-start">
               <div className="bg-signal-blue text-white px-4 py-3 rounded-2xl rounded-tl-sm text-[15px] max-w-[85%] shadow-sm">Yes, 3:00 PM is available. Would you like me to book it?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TrainingRoomDemo() {
  const [isApproved, setIsApproved] = React.useState(false)
  return (
    <div className="bg-soft-canvas border border-line rounded-[24px] p-8 md:p-12 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-xl border border-line p-6 shadow-sm">
          <div className="text-[12px] font-bold text-muted uppercase tracking-wider mb-4">Customer Question</div>
          <div className="bg-soft-canvas text-ink px-4 py-3 rounded-md text-[14px] mb-6">How much is a standard cleaning?</div>
          <div className="text-[12px] font-bold text-warning uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-warning"></span>AI Draft (Needs Review)</div>
          <div className="text-ink text-[14px] leading-relaxed">A standard cleaning is <span className="bg-danger/10 text-danger line-through px-1 rounded">around $50</span> depending on the dentist.</div>
        </div>
        <div className="relative h-full">
          <div className="bg-white rounded-xl border border-line p-6 shadow-card h-full flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-bold text-signal-blue uppercase tracking-wider mb-4 flex items-center gap-2"><GitCommit className="w-4 h-4" />Staff Correction</div>
              <div className="text-ink text-[14px] leading-relaxed mb-8">A standard cleaning is <span className="bg-success/10 text-success px-1 rounded font-medium">NPR 3,500</span> depending on the dentist.</div>
            </div>
            <AnimatePresence mode="wait">
              {!isApproved ? (
                <motion.div key="approve-btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Button variant="primary" className="w-full" onClick={() => setIsApproved(true)}>Approve to Knowledge Base</Button></motion.div>
              ) : (
                <motion.div key="approved-state" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-success/10 text-success rounded-md px-4 py-3 flex items-center justify-center gap-2 font-medium text-[14px] border border-success/20"><Check className="w-4 h-4" />Saved as approved knowledge</motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VoiceDemo() {
  const [recordingPhase, setRecordingPhase] = React.useState(0)
  const handleMicClick = () => {
    if (recordingPhase !== 0) return
    setRecordingPhase(1); setTimeout(() => setRecordingPhase(2), 3000); setTimeout(() => setRecordingPhase(3), 4500); setTimeout(() => setRecordingPhase(0), 10000)
  }
  return (
    <div className="w-full max-w-sm mx-auto space-y-6 flex flex-col border border-line p-8 rounded-[24px] bg-white shadow-frame min-h-[350px] justify-center">
      <div className="flex justify-end mb-4">
        <button onClick={handleMicClick} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-ui shadow-sm ${recordingPhase === 1 ? "bg-danger text-white scale-110" : "bg-soft-canvas text-ink border border-line hover:bg-white"}`}><Mic className="w-5 h-5" /></button>
      </div>
      <div className="flex justify-end">
        <div className="bg-soft-canvas text-ink px-4 py-3 rounded-2xl rounded-tr-sm text-[15px] min-w-[200px] flex items-center justify-center border border-line">
          {recordingPhase === 0 && <span className="text-muted/60 text-sm">Tap mic to speak</span>}
          {recordingPhase === 1 && (<div className="flex items-center gap-1 h-5">{[1, 2, 3, 4, 5].map((bar) => (<motion.div key={bar} className="w-1 bg-danger rounded-full" animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 0.8, delay: bar * 0.1 }} />))}</div>)}
          {recordingPhase >= 2 && <span>"Cancel my appointment for tomorrow."</span>}
        </div>
      </div>
      {recordingPhase === 3 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
          <div className="bg-signal-blue text-white px-4 py-3 rounded-2xl rounded-tl-sm text-[15px] max-w-[85%] shadow-sm">Canceled. Reschedule?</div>
        </motion.div>
      )}
    </div>
  )
}
```

**components/marketing.tsx**
*(Combines all static and scroll-based marketing blocks)*

**codeTsx**

```
"use client"
import * as React from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Database, UserCheck, Globe2, ShieldCheck, Server, Lock, GitPullRequest, MessageCircleReply, CalendarCheck, History } from "lucide-react"
import { Button, Card, CardContent, CardHeader, StatusBadge } from "@/components/ui"
import { HeroDemo, TrainingRoomDemo, VoiceDemo } from "@/components/demos"

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-hero-wash">
      <div className="mx-auto max-w-[1240px] flex flex-col items-center text-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }} className="max-w-[800px] flex flex-col items-center">
          <h2 className="text-eyebrow text-signal-blue mb-6">AI Front Desk For Appointment Businesses</h2>
          <h1 className="text-hero text-ink mb-6">Your front desk, still awake.</h1>
          <p className="text-lead text-muted mb-10 max-w-2xl">Answer messages, check real availability, and book appointments across your website, WhatsApp and Messenger - 24/7.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4"><Button variant="primary" size="lg">Book a demo</Button><Button variant="secondary" size="lg" showChevron>See how it works</Button></div>
        </motion.div>
        <HeroDemo />
      </div>
    </section>
  )
}

export function TrustStrip() {
  return (
    <div className="w-full border-y border-line bg-white h-24 flex items-center justify-center px-6">
      <div className="max-w-[1240px] w-full flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4">
        {[{ icon: Database, text: "Real availability checks" }, { icon: UserCheck, text: "Human handoff" }, { icon: Globe2, text: "English, Nepali & Romanized Nepali" }].map((claim, i) => {
          const Icon = claim.icon; return <div key={i} className="flex items-center gap-3 text-muted"><Icon className="w-5 h-5 text-ink/70" /><span className="text-[14px] font-medium">{claim.text}</span></div>
        })}
      </div>
    </div>
  )
}

export function Manifesto() {
  const targetRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end end"] })
  const o1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [0.3, 1, 1]); const o2 = useTransform(scrollYProgress, [0.25, 0.45, 0.5], [0.3, 1, 1]); const o3 = useTransform(scrollYProgress, [0.5, 0.7, 0.75], [0.3, 1, 1]); const o4 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0.3, 1, 1]);
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-soft-canvas">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="max-w-[900px] text-center mb-16">
          <h2 className="text-h2 text-ink mb-4">AI should understand the request.<br/>Your system should decide the truth.</h2>
          <p className="text-body text-muted">Consequential outcomes come from real checked results.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-h3 md:text-h2 font-semibold">
          <motion.span style={{ opacity: o1 }} className="text-ink">Understand</motion.span><span className="text-line hidden md:block">→</span>
          <motion.span style={{ opacity: o2 }} className="text-signal-blue">Check</motion.span><span className="text-line hidden md:block">→</span>
          <motion.span style={{ opacity: o3 }} className="text-ink">Act</motion.span><span className="text-line hidden md:block">→</span>
          <motion.span style={{ opacity: o4 }} className="text-success">Confirm</motion.span>
        </div>
      </div>
    </section>
  )
}

export function ThreeJobs() {
  const jobs = [{ title: "Answer accurately", icon: MessageCircleReply, copy: "Night Guard reads from your approved business knowledge." }, { title: "Book safely", icon: CalendarCheck, copy: "Bookings are checked against real availability." }, { title: "Remember context", icon: History, copy: "Recent messages and history are layered together." }]
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12"><h2 className="text-h2 text-ink mb-4">Three core jobs.</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <Card key={i} className="flex flex-col h-full bg-white rounded-[24px] p-6 hover:shadow-frame"><div className="w-10 h-10 rounded-full bg-blue-soft flex items-center justify-center mb-4"><job.icon className="w-5 h-5 text-signal-blue" /></div><h3 className="text-h3 text-ink mb-2">{job.title}</h3><p className="text-body text-muted">{job.copy}</p></Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustSection() {
  const trustCards = [{ title: "Database-backed actions", icon: Server, copy: "Bookings are confirmed after database commits." }, { title: "Tenant isolation", icon: Lock, copy: "Your business data is strictly siloed." }, { title: "Transaction safety", icon: ShieldCheck, copy: "Double-booking prevention is enforced." }, { title: "Staff-approved knowledge", icon: GitPullRequest, copy: "Triggers clean handoff if unknown." }]
  return (
    <section className="w-full py-24 px-6 bg-night-glow text-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto"><h2 className="text-h2 mb-4">AI decides intent.<br/>The database decides truth.</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {trustCards.map((card, i) => (
            <div key={i} className="p-8 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm"><card.icon className="w-6 h-6 text-signal-blue mb-4" /><h3 className="text-h3 mb-2">{card.title}</h3><p className="text-body text-white/70">{card.copy}</p></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="bg-soft-canvas rounded-[28px] border border-line p-12 md:p-24 text-center flex flex-col items-center shadow-sm">
          <h2 className="text-h2 md:text-h1 text-ink mb-6 max-w-2xl">Ready for a front desk that does not go offline?</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4"><Button variant="primary" size="lg">Book a demo</Button></div>
        </div>
      </div>
    </section>
  )
}
```

---

### 3. Application Layout & Pages

**app/layout.tsx**

**codeTsx**

```
import type { Metadata } from "next"
import { Navbar, Footer } from "@/components/layout"
import "@/app/globals.css" // Ensure this path matches where you put globals.css

export const metadata: Metadata = {
  title: "Night Guard AI - AI Front Desk for Appointment Businesses",
  description: "Answer messages, check real availability, and book appointments across your website, WhatsApp and Messenger - 24/7.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className="bg-canvas text-ink flex min-h-screen flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

**app/page.tsx** (Homepage)

**codeTsx**

```
import { Hero, TrustStrip, Manifesto, ThreeJobs, TrustSection, FinalCTA } from "@/components/marketing"
import { TrainingRoomDemo, VoiceDemo } from "@/components/demos"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <TrustStrip />
      <Manifesto />
      <ThreeJobs />
      
      {/* Interactive Demos integrated into layout */}
      <section className="py-24 px-6 max-w-[1240px] mx-auto w-full"><TrainingRoomDemo /></section>
      <section className="py-24 px-6 bg-soft-canvas"><VoiceDemo /></section>
      
      <TrustSection />
      <FinalCTA />
    </main>
  )
}
```

**app/product/page.tsx**

**codeTsx**

```
import { Button } from "@/components/ui"

export default function ProductPage() {
  const steps = ["Arrival", "Context", "Knowledge", "Real execution", "Confirmed response"]
  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-h1 text-ink mb-6">AI understands.<br/>Real systems act.</h1>
          <p className="text-lead text-muted mb-10">Night Guard AI is not a generic chatbot guessing answers. It is an engineering pipeline where AI determines what the customer wants, but real database code decides what actually happens.</p>
          <Button variant="primary" size="lg">Watch 60-second product overview</Button>
        </div>
        <div className="bg-soft-canvas rounded-[24px] border border-line p-8 md:p-12 mb-24 flex flex-col lg:flex-row gap-4">
          {steps.map((step, i) => (
             <div key={i} className="bg-white border border-line rounded-lg p-6 shadow-sm flex-1"><div className="text-[12px] font-bold text-signal-blue uppercase mb-2">Step 0{i + 1}</div><h3 className="font-semibold">{step}</h3></div>
          ))}
        </div>
      </div>
    </main>
  )
}
```

**app/clinics/page.tsx**

**codeTsx**

```
import { Button } from "@/components/ui"

export default function ClinicsPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="mx-auto max-w-[1240px]">
        <div className="max-w-3xl mb-24">
          <h1 className="text-hero text-ink mb-6">Your clinic closes.<br/>Patient messages do not.</h1>
          <p className="text-lead text-muted mb-8">Manage service questions, hours, and bookings automatically. Night Guard understands both English and Romanized Nepali, ensuring your local patients are always answered.</p>
          <Button variant="primary" size="lg">Apply for pilot</Button>
        </div>
      </div>
    </main>
  )
}
```

**app/pricing/page.tsx**

**codeTsx**

```
import { Button } from "@/components/ui"

export default function PricingPage() {
  const plans = [
    { name: "Suru", price: "2,900", cta: "Join pilot", rec: false },
    { name: "Business", price: "7,900", cta: "Book demo", rec: true },
    { name: "Premium", price: "18,900", cta: "Contact sales", rec: false }
  ]
  return (
    <main className="w-full pt-32 pb-24 px-6 bg-soft-canvas min-h-screen">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center max-w-2xl mx-auto mb-16"><h1 className="text-h1 text-ink mb-6">Simple pricing.<br/>No surprises.</h1></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`bg-white rounded-[24px] p-8 border ${p.rec ? "border-signal-blue shadow-frame" : "border-line shadow-card"}`}>
              <h3 className="text-h3 mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-8"><span className="text-h2 font-bold">{p.price}</span><span className="text-small text-muted">NPR / month</span></div>
              <Button variant={p.rec ? "primary" : "outline"} size="lg" className="w-full">{p.cta}</Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
```

**app/trust/page.tsx**

**codeTsx**

```
export default function TrustPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-night-glow text-white">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-20">
          <h1 className="text-h1 mb-6">AI decides intent.<br/>The database decides truth.</h1>
          <p className="text-lead text-white/70">We do not rely on fake certification seals. Security and reliability at Night Guard AI come from strict engineering rules, tenant isolation, and transactional safety.</p>
        </div>
      </div>
    </main>
  )
}
```

**app/team/page.tsx**

**codeTsx**

```
export default function TeamPage() {
  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-soft-canvas">
      <div className="mx-auto max-w-[1000px]">
        <div className="max-w-2xl mb-24">
          <h1 className="text-h1 text-ink mb-6">Built close to the businesses it serves.</h1>
          <p className="text-lead text-muted">We saw local clinics losing hours to messaging back-and-forth about prices and availability, while existing AI tools were too unreliable to trust with an actual calendar. We built Night Guard to bridge intent and reality.</p>
        </div>
      </div>
    </main>
  )
}
```