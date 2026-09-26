"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<React.CSSProperties[]>([])

  useEffect(() => {
    const styles: React.CSSProperties[] = [...new Array(number)].map(() => ({
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * window.innerWidth)}px`,
      animationDelay: `${(Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2)}s`,
      animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
      transform: `rotate(${angle}deg)`,
    }))
    setMeteorStyles(styles)
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          style={style}
          className={cn(
            "animate-meteor pointer-events-none absolute h-0.5 w-0.5 rounded-full",
            className
          )}
        >
          {/* Tail */}
          <span className="absolute top-1/2 right-full h-px w-[80px] -translate-y-1/2 bg-gradient-to-r from-transparent to-current opacity-50" />
        </span>
      ))}
    </>
  )
}
