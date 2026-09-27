"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Server, 
  Cpu, 
  CheckCircle2, 
  FileCheck, 
  ExternalLink, 
  X,
  Database,
  RefreshCw,
  Clock
} from "lucide-react"

interface SecurityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SecurityModal({ isOpen, onClose }: SecurityModalProps) {
  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Prevent background scrolling when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-[820px] bg-white dark:bg-[#111318] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Specular hairline top glow */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-70" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-[17px] font-bold text-ink tracking-tight">Security, Compliance &amp; SLA</h2>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      SOC2 Type II Ready
                    </span>
                  </div>
                  <p className="text-[12.5px] text-muted">Zero-data retention architecture &amp; verified calendar integrations</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 pb-12 space-y-6 max-h-[calc(85vh-130px)] overflow-y-auto">
              {/* Live Heartbeat Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
                <div>
                  <span className="text-[11px] text-muted font-medium uppercase tracking-wider">Live Status</span>
                  <div className="flex items-center gap-1.5 mt-1 font-semibold text-[13.5px] text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Operational</span>
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-muted font-medium uppercase tracking-wider">90-Day SLA</span>
                  <p className="mt-1 font-semibold text-[13.5px] text-ink tabular-nums">99.98% Uptime</p>
                </div>
                <div>
                  <span className="text-[11px] text-muted font-medium uppercase tracking-wider">Avg Latency</span>
                  <p className="mt-1 font-semibold text-[13.5px] text-ink tabular-nums">284ms E2E</p>
                </div>
                <div>
                  <span className="text-[11px] text-muted font-medium uppercase tracking-wider">Cloud Region</span>
                  <p className="mt-1 font-semibold text-[13.5px] text-ink">AWS ap-south-1</p>
                </div>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pillar 1: Zero Retention */}
                <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Database className="w-4 h-4 text-signal-blue" />
                    <h3 className="text-[13.5px] font-bold">Zero-PII Data Retention</h3>
                  </div>
                  <p className="text-[12.5px] text-muted leading-relaxed">
                    Customer conversations are processed in volatile memory and purged within 24 hours. Only the confirmed calendar reservation metadata is committed to your calendar.
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>GDPR &amp; ISO 27001 Compliant Triage</span>
                  </div>
                </div>

                {/* Pillar 2: Google & Apple Scopes */}
                <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Lock className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-[13.5px] font-bold">Least-Privilege OAuth 2.0</h3>
                  </div>
                  <p className="text-[12.5px] text-muted leading-relaxed">
                    Vesper only requests granular <code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[11px] font-mono">calendar.events.freebusy</code> and insert access. We never access emails, contacts, or files.
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Google Cloud Verified Security App</span>
                  </div>
                </div>

                {/* Pillar 3: Meta Webhook Encryption */}
                <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Key className="w-4 h-4 text-amber-500" />
                    <h3 className="text-[13.5px] font-bold">Meta Cloud API HMAC-SHA256</h3>
                  </div>
                  <p className="text-[12.5px] text-muted leading-relaxed">
                    Every incoming payload from WhatsApp &amp; Instagram is cryptographically signed and verified via Meta Cloud API app secret signatures. Replay attacks are rejected.
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>TLS 1.3 &amp; AES-256-GCM Storage</span>
                  </div>
                </div>

                {/* Pillar 4: Multi-AZ Reliability */}
                <div className="p-4 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-2">
                  <div className="flex items-center gap-2 text-ink">
                    <Server className="w-4 h-4 text-purple-500" />
                    <h3 className="text-[13.5px] font-bold">Multi-AZ Redundant Failover</h3>
                  </div>
                  <p className="text-[12.5px] text-muted leading-relaxed">
                    Redundant cluster deployment across three independent availability zones. Automatic circuit breaking prevents cascading API throttles during peak customer surges.
                  </p>
                  <div className="flex items-center gap-1.5 pt-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Automatic Zero-Downtime Blue/Green Deploys</span>
                  </div>
                </div>
              </div>

              {/* Architecture Walkthrough Box */}
              <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10">
                <h4 className="text-[12px] font-bold uppercase tracking-wider text-muted mb-2">Data Flow Architecture</h4>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-[11.5px] font-mono">
                  <div className="px-3 py-2 rounded-lg bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 w-full sm:w-auto">
                    WhatsApp / IG DM
                  </div>
                  <span className="text-muted">──(TLS 1.3 HMAC)──▶</span>
                  <div className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold w-full sm:w-auto">
                    Vesper Edge Engine
                  </div>
                  <span className="text-muted">──(OAuth2 Slot Lock)──▶</span>
                  <div className="px-3 py-2 rounded-lg bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 w-full sm:w-auto">
                    Google Calendar API
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
              <span className="text-muted">Security audited by Independent Third-Party DevSecOps</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-ink hover:bg-black/5 dark:hover:bg-white/5 font-medium transition-colors"
                >
                  Close
                </button>
                <a
                  href="#demo"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-ink text-canvas font-semibold hover:bg-ink/80 transition-colors shadow-xs"
                >
                  Request Security Whitepaper
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
