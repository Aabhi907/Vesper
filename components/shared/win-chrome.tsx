"use client"

import * as React from "react"

export interface WinChromeProps {
  title?: string
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

/**
 * Reusable macOS/retro window chrome with traffic light controls.
 */
export function WinChrome({
  title,
  children,
  className = "",
  style = {},
}: WinChromeProps) {
  return (
    <div className={`win-chrome ${className}`} style={style}>
      <div className="flex items-center gap-2 px-4 h-[38px] border-b border-[hsl(0_0%_84%)] dark:border-line bg-gradient-to-b from-[hsl(0_0%_90%)] to-[hsl(0_0%_86%)] dark:from-[hsl(var(--soft-canvas))] dark:to-[hsl(var(--canvas))] flex-shrink-0">
        <span className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] border border-black/10 dark:border-white/10" />
        <span className="w-[12px] h-[12px] rounded-full bg-[#febc2e] border border-black/10 dark:border-white/10" />
        <span className="w-[12px] h-[12px] rounded-full bg-[#28c840] border border-black/10 dark:border-white/10" />
        {title && (
          <span className="ml-2 text-[12px] text-black/50 dark:text-muted font-medium">
            {title}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}
