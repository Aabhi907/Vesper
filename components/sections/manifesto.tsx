"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { WinChrome } from "@/components/shared"

/**
 * Manifesto section with sticky notes-style pinned scroll animation.
 */
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
                <div className="w-8 h-8 rounded-full bg-[#0a0a0a] dark:bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-white dark:text-[#0a0a0a] text-[14px] font-black tracking-tight leading-none">V</span>
                </div>
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
