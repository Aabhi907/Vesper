"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { PRICING_PLANS, type PricingPlan, type BillingCycle } from "@/models"
import { BlueCapSticker, ScrollReveal } from "@/components/shared"
import { useInteractiveTilt } from "@/hooks"

export function InteractivePricingCard({
  plan,
  billing,
}: {
  plan: PricingPlan
  billing: BillingCycle
}) {
  const { ref, canTilt, hover, motionProps, eventHandlers } = useInteractiveTilt({
    tiltRange: 12,
    glowRange: 100,
    shadowRange: 28,
  })

  const glowGradient = plan.highlight
    ? "bg-gradient-to-tr from-signal-blue/35 via-indigo-500/25 to-purple-500/20"
    : plan.name === "Business"
    ? "bg-gradient-to-tr from-amber-500/25 via-orange-500/20 to-yellow-500/15"
    : "bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-blue-500/15"

  return (
    <div
      className="relative flex flex-col h-full"
      style={canTilt ? { perspective: "1200px" } : undefined}
      onMouseMove={canTilt ? eventHandlers.onMouseMove : undefined}
      onMouseEnter={canTilt ? eventHandlers.onMouseEnter : undefined}
      onMouseLeave={canTilt ? eventHandlers.onMouseLeave : undefined}
    >
      <motion.div
        ref={ref}
        style={canTilt ? { rotateX: motionProps.rotateX, rotateY: motionProps.rotateY, transformStyle: "preserve-3d" } : undefined}
        animate={plan.highlight ? { y: hover ? -8 : 0 } : { y: hover ? -5 : 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="relative z-20 w-full h-full flex flex-col"
      >
        {/* Floating Most Popular Badge */}
        {plan.badge && (
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-40"
            style={canTilt ? { transform: "translateZ(44px)" } : undefined}
          >
            <span className="bg-ink text-white dark:bg-signal-blue dark:text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-lg border border-white/20 inline-flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {plan.badge}
            </span>
          </div>
        )}

        {/* "no cap!" Blue Cap Sticker for Business tier */}
        {plan.name === "Business" && (
          <div
            className="absolute -top-6 -right-3 sm:-right-4 z-40 pointer-events-none"
            style={canTilt ? { transform: "translateZ(50px)" } : undefined}
          >
            <BlueCapSticker />
          </div>
        )}

        {/* Dynamic shadow */}
        {canTilt && (
          <motion.div
            aria-hidden
            style={{
              x: motionProps.shadowX,
              y: motionProps.shadowY,
              opacity: hover ? 0.4 : plan.highlight ? 0.22 : 0.08,
            }}
            className={`pointer-events-none absolute -inset-3 -z-10 rounded-3xl blur-[30px] transition-opacity duration-300 ${
              plan.highlight
                ? "bg-signal-blue/30 dark:bg-signal-blue/45"
                : "bg-black/30 dark:bg-black/60"
            }`}
          />
        )}

        {/* Card Body */}
        <div
          className={`relative bg-white dark:bg-soft-canvas rounded-2xl sm:rounded-3xl flex flex-col justify-between h-full overflow-hidden transition-all duration-200 ${
            plan.highlight
              ? "border-2 border-ink dark:border-signal-blue shadow-frame ring-1 ring-ink/5"
              : "border border-line/90 dark:border-white/10 shadow-card hover:border-ink/25 dark:hover:border-white/30"
          }`}
          style={canTilt ? { transformStyle: "preserve-3d" } : undefined}
        >
          {/* Traffic lights */}
          <div className="flex items-center justify-between px-6 pt-5 pb-1 relative z-10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
            </div>
          </div>

          {/* Glow */}
          {canTilt && (
            <motion.div
              aria-hidden
              style={{
                x: motionProps.glowX,
                y: motionProps.glowY,
                opacity: hover ? (plan.highlight ? 0.5 : 0.35) : plan.highlight ? 0.18 : 0,
              }}
              className={`pointer-events-none absolute -inset-32 z-0 rounded-full blur-[70px] transition-opacity duration-500 ${glowGradient}`}
            />
          )}

          {/* Sheen */}
          {canTilt && (
            <motion.div
              aria-hidden
              style={{ x: motionProps.sheenX }}
              className="pointer-events-none absolute inset-0 size-full -skew-x-12 bg-gradient-to-r from-transparent via-white/25 dark:via-white/10 to-transparent z-20"
            />
          )}

          {/* Header & Price */}
          <div
            className="p-4 sm:p-5 pt-2 border-b border-line/60 relative z-10"
            style={canTilt ? { transform: "translateZ(32px)", transformStyle: "preserve-3d" } : undefined}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-ink tracking-tight">{plan.name}</h3>
              {plan.highlight && (
                <span className="text-[11px] font-medium text-muted bg-canvas px-2.5 py-1 rounded-md border border-line">
                  Recommended
                </span>
              )}
            </div>
            <p className="text-[13px] text-muted leading-snug min-h-[38px]">
              {plan.description}
            </p>

            <div className="flex items-baseline gap-1.5 mt-3">
              <motion.span
                key={plan.price[billing]}
                initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight inline-block"
              >
                {plan.price[billing]}
              </motion.span>
              <span className="text-xs sm:text-sm font-medium text-muted">
                {billing === "yearly" ? "/mo (annual)" : `/${plan.period}`}
              </span>
            </div>
          </div>

          {/* Features & CTA */}
          <div
            className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4 relative z-10"
            style={canTilt ? { transform: "translateZ(26px)", transformStyle: "preserve-3d" } : undefined}
          >
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted/70 dark:text-muted/90">
                What&apos;s included
              </p>
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-3 group/feature">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mt-0.5 shrink-0 transition-transform duration-200 group-hover/feature:scale-110">
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
                  </div>
                  <span className="text-[13.5px] text-ink/85 leading-tight">
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="pt-4"
              style={canTilt ? { transform: "translateZ(30px)" } : undefined}
            >
              <motion.a
                href={plan.ctaHref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center py-2.5 px-4 rounded-xl text-[13px] font-semibold transition-all ${
                  plan.highlight
                    ? "bg-ink text-white dark:bg-signal-blue dark:text-white hover:opacity-90 shadow-md hover:shadow-lg"
                    : "bg-soft-canvas text-ink hover:bg-[hsl(40_12%_88%)] dark:hover:bg-white/10 border border-line"
                }`}
              >
                {plan.ctaText}
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function StudentDiscountTerminal() {
  return (
    <div className="mt-14 sm:mt-16 w-full max-w-[960px] mx-auto relative px-2 sm:px-0">
      {/* "just ship it" Rainbow Sticker */}
      <div className="absolute -top-5 right-6 sm:right-12 z-30 pointer-events-none select-none -rotate-6">
        <div className="relative px-3.5 py-1 bg-white dark:bg-zinc-900 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.18)] border-2 border-white dark:border-zinc-700 ring-1 ring-black/5">
          <span className="font-black italic tracking-wide text-xs sm:text-[13px] bg-gradient-to-r from-emerald-500 via-pink-500 to-amber-500 bg-clip-text text-transparent">
            just ship it
          </span>
        </div>
      </div>

      {/* Terminal Window Box */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-[#161618] border border-zinc-800 shadow-2xl p-6 sm:p-8 sm:py-7 overflow-hidden text-left">
        <div className="flex items-center gap-2 mb-5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-white text-base sm:text-lg font-bold flex items-center gap-1.5">
              <span>&lt; student discount &gt;</span>
              <span className="inline-block w-2 h-4 sm:h-5 bg-white animate-pulse" />
            </div>
            <p className="font-mono text-zinc-400 text-xs sm:text-[13.5px] leading-relaxed">
              if you&apos;re a student, show us your school email or student id! we&apos;ll give you 50% off your first month on pro to help you out *
            </p>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 self-end lg:self-center shrink-0">
            <a
              href="mailto:founders@vesper.ai?subject=Student%20Discount%20Application"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full text-zinc-900 text-[14px] font-bold bg-gradient-to-b from-white via-zinc-100 to-zinc-200 shadow-[0_6px_16px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,1),inset_0_-2px_2px_rgba(0,0,0,0.12)] border border-white/90 hover:brightness-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              reach out to us
            </a>
          </div>
        </div>
      </div>

      <p className="text-center font-mono text-[11px] text-muted/70 mt-3">
        * open to new and existing subs.
      </p>
    </div>
  )
}

/**
 * FinalCTA / Pricing Section View
 */
export function FinalCTA() {
  const [billing, setBilling] = React.useState<BillingCycle>("monthly")

  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 bg-canvas border-t border-line relative overflow-hidden" id="pricing">
      <div className="relative z-10 mx-auto max-w-[1080px]">
        {/* Header */}
        <ScrollReveal className="text-center flex flex-col items-center justify-center mb-6 sm:mb-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted mb-2 text-center">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-ink tracking-tight mb-2 text-center">
            Simple, transparent plans.
          </h2>
          <p className="text-[13px] sm:text-[14px] text-muted max-w-[420px] mx-auto leading-relaxed text-center">
            No setup fees. No lock-in. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-4">
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
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch pt-2">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <InteractivePricingCard plan={plan} billing={billing} />
            </ScrollReveal>
          ))}
        </div>

        {/* Student Discount Terminal Banner */}
        <StudentDiscountTerminal />

        {/* Footer Guarantee */}
        <div className="text-center mt-6">
          <p className="text-[12px] text-muted/70">
            14-day free trial · Billed in NPR · Cancel anytime ·{" "}
            <a href="mailto:hello@vesper.ai" className="underline hover:text-ink">Talk to our team</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export { FinalCTA as Pricing }

