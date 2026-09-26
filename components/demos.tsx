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
          <div className="bg-soft-canvas text-ink px-4 py-3 rounded-md text-[14px] mb-6">How much is a full haircut &amp; styling session?</div>
          <div className="text-[12px] font-bold text-warning uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-warning"></span>AI Draft (Needs Review)</div>
          <div className="text-ink text-[14px] leading-relaxed">A standard package is <span className="bg-danger/10 text-danger line-through px-1 rounded">around $50</span> depending on the stylist.</div>
        </div>
        <div className="relative h-full">
          <div className="bg-white rounded-xl border border-line p-6 shadow-card h-full flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-bold text-signal-blue uppercase tracking-wider mb-4 flex items-center gap-2"><GitCommit className="w-4 h-4" />Staff Correction</div>
              <div className="text-ink text-[14px] leading-relaxed mb-8">A standard haircut &amp; styling package is <span className="bg-success/10 text-success px-1 rounded font-medium">NPR 1,800</span> depending on the stylist.</div>
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
