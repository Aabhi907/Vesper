"use client"

import * as React from "react"
import { useMotionValue, useSpring, useTransform } from "framer-motion"

const defaultTiltSpring = { damping: 25, stiffness: 120 }
const defaultDriftSpring = { damping: 30, stiffness: 100 }

export interface UseInteractiveTiltOptions {
  tiltRange?: number
  glowRange?: number
  shadowRange?: number
}

/**
 * Controller hook for 3D physics-based card tilt, light sheen, and glow tracking.
 */
export function useInteractiveTilt(options: UseInteractiveTiltOptions = {}) {
  const { tiltRange = 14, glowRange = 80, shadowRange = 24 } = options

  const ref = React.useRef<HTMLDivElement>(null)
  const [hover, setHover] = React.useState(false)
  const [canTilt, setCanTilt] = React.useState(true)

  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)")
    setCanTilt(mq.matches)
    const handler = (e: MediaQueryListEvent) => setCanTilt(e.matches)
    mq.addEventListener?.("change", handler)
    return () => mq.removeEventListener?.("change", handler)
  }, [])

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const rotateX = useSpring(useTransform(py, [-250, 250], [tiltRange, -tiltRange]), defaultTiltSpring)
  const rotateY = useSpring(useTransform(px, [-250, 250], [-tiltRange, tiltRange]), defaultTiltSpring)
  const sheenX = useSpring(useTransform(px, [-250, 250], ["-100%", "200%"]), defaultDriftSpring)
  const glowX = useSpring(useTransform(px, [-250, 250], [-glowRange, glowRange]), defaultDriftSpring)
  const glowY = useSpring(useTransform(py, [-250, 250], [-glowRange, glowRange]), defaultDriftSpring)
  const shadowX = useTransform(px, [-250, 250], [shadowRange, -shadowRange])
  const shadowY = useTransform(py, [-250, 250], [shadowRange, -shadowRange])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !canTilt) return
    const rect = ref.current.getBoundingClientRect()
    px.set(e.clientX - (rect.left + rect.width / 2))
    py.set(e.clientY - (rect.top + rect.height / 2))
  }

  const onMouseEnter = () => {
    if (canTilt) setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
    px.set(0)
    py.set(0)
  }

  return {
    ref,
    canTilt,
    hover,
    motionProps: {
      rotateX,
      rotateY,
      sheenX,
      glowX,
      glowY,
      shadowX,
      shadowY,
    },
    eventHandlers: {
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
    },
  }
}
