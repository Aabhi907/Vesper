"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import { ArrowUp, X, CheckCircle, AlertCircle, Cookie, Loader2 } from "lucide-react"

/* ── 1. Scroll Progress Bar (Top 2px) ── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-ink z-[100] origin-left pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  )
}

/* ── 2. Scroll to Top Floating Button (^) ── */
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-ink text-canvas dark:bg-white dark:text-black flex items-center justify-center shadow-frame hover:opacity-90 transition-all focus:outline-none focus:ring-2 focus:ring-ink/20"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ── 3. Simple Cookie Banner ── */
export function CookieBanner() {
  const [mounted, setMounted] = React.useState(false)
  const [consent, setConsent] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("vesper-cookie-consent")
    if (stored !== null) {
      setConsent(stored === "accepted")
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("vesper-cookie-consent", "accepted")
    setConsent(true)
  }

  const handleDecline = () => {
    localStorage.setItem("vesper-cookie-consent", "declined")
    setConsent(false)
  }

  if (!mounted || consent !== null) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-white/95 dark:bg-[hsl(var(--soft-canvas))]/95 backdrop-blur-md border border-line rounded-2xl p-4 sm:p-5 shadow-frame flex flex-col gap-3"
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-soft-canvas flex items-center justify-center shrink-0 text-ink">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <p className="text-[13px] font-bold text-ink">Cookie &amp; Privacy Notice</p>
            <p className="text-[12px] text-muted leading-relaxed mt-0.5">
              We use minimal cookies strictly to remember your preferences and ensure reliable demo sessions. No invasive ad trackers.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-1 border-t border-line/60">
          <button
            type="button"
            onClick={handleDecline}
            className="text-[12px] font-medium text-muted hover:text-ink px-3 py-1.5 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="text-[12px] font-semibold bg-ink text-canvas dark:bg-white dark:text-black hover:opacity-90 px-4 py-1.5 rounded-lg transition-colors shadow-xs"
          >
            Accept
          </button>
        </div>
      </motion.div>
    </div>
  )
}

/* ── 4. Book a Demo Modal with Live Validation & Success State ── */
export function BookDemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [formData, setFormData] = React.useState({
    name: "",
    businessName: "",
    phone: "",
    serviceType: "Salon / Spa",
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = "Please enter your name"
    if (!formData.businessName.trim()) errs.businessName = "Please enter your business or shop name"
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid WhatsApp or phone number"
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate instant network submission
    await new Promise((r) => setTimeout(r, 900))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const resetAndClose = () => {
    setIsSuccess(false)
    setFormData({ name: "", businessName: "", phone: "", serviceType: "Salon / Spa" })
    setErrors({})
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative z-10 w-full max-w-[480px] bg-white dark:bg-[hsl(var(--soft-canvas))] rounded-3xl border border-line shadow-frame p-6 sm:p-8 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={resetAndClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-soft-canvas flex items-center justify-center text-muted hover:text-ink transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {isSuccess ? (
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-ink mb-2">You&apos;re on the calendar!</h3>
                <p className="text-[14px] text-muted max-w-[340px] leading-relaxed mb-6">
                  Thanks {formData.name}. Our founder will reach out on WhatsApp at{" "}
                  <span className="font-semibold text-ink">{formData.phone}</span> within 15 minutes to set up your preview.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full py-3 rounded-xl bg-ink text-canvas dark:bg-white dark:text-black font-semibold text-[14px] hover:opacity-90 transition-all shadow-sm"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-signal-blue bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                    Priority Access
                  </span>
                  <h3 className="text-2xl font-black text-ink mt-2">Book a 1-on-1 walkthrough</h3>
                  <p className="text-[13px] text-muted mt-1">
                    See Vesper connected to your business number and calendar in live action.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-ink mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya Shrestha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-[hsl(var(--canvas))] text-ink text-[14px] focus:outline-none transition-all ${
                        errors.name ? "border-danger focus:ring-1 focus:ring-danger" : "border-line focus:border-ink"
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-danger mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-ink mb-1">
                      Business or Shop Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Glam Studio Salon"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-[hsl(var(--canvas))] text-ink text-[14px] focus:outline-none transition-all ${
                        errors.businessName ? "border-danger focus:ring-1 focus:ring-danger" : "border-line focus:border-ink"
                      }`}
                    />
                    {errors.businessName && (
                      <p className="text-[11px] text-danger mt-1">{errors.businessName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-ink mb-1">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9801234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-white dark:bg-[hsl(var(--canvas))] text-ink text-[14px] focus:outline-none transition-all ${
                        errors.phone ? "border-danger focus:ring-1 focus:ring-danger" : "border-line focus:border-ink"
                      }`}
                    />
                    {errors.phone && <p className="text-[11px] text-danger mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-ink mb-1">
                      Service Category
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-line bg-white dark:bg-[hsl(var(--canvas))] text-ink text-[14px] focus:outline-none focus:border-ink transition-all"
                    >
                      <option value="Salon / Spa" className="bg-white dark:bg-[#121824] text-ink">Salon, Hair &amp; Spa</option>
                      <option value="Hotel / Resort" className="bg-white dark:bg-[#121824] text-ink">Hotel, Guesthouse &amp; Resort</option>
                      <option value="Auto Workshop" className="bg-white dark:bg-[#121824] text-ink">Auto Workshop / Bike Garage</option>
                      <option value="Clinic / Dental" className="bg-white dark:bg-[#121824] text-ink">Clinic, Dental &amp; Healthcare</option>
                      <option value="Other Service" className="bg-white dark:bg-[#121824] text-ink">Other Service Business</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-ink text-canvas dark:bg-white dark:text-black font-semibold text-[14px] hover:opacity-90 transition-all shadow-sm flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Reserving slot...</span>
                      </>
                    ) : (
                      <span>Confirm Demo Request</span>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
