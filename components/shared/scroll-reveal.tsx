"use client"

import * as React from "react"
import { motion } from "framer-motion"

export interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

/**
 * Reusable scroll entrance animation with viewport detection.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 20,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
