"use client"

import React, { useRef, useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import DottedMap from "dotted-map"

export interface MapPoint {
  lat: number
  lng: number
  label?: string
}

export interface WorldMapProps {
  dots?: Array<{
    start: MapPoint
    end: MapPoint
  }>
  lineColor?: string
  className?: string
}

export function WorldMap({
  dots = [],
  lineColor = "#3b82f6",
  className = "",
}: WorldMapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    checkDark()

    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "class") {
          checkDark()
        }
      }
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  // Memoize map generation for instant rendering
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 68, grid: "diagonal" })
    return map.getSVG({
      radius: 0.22,
      color: isDark ? "#FFFFFF35" : "#00000030",
      shape: "circle",
      backgroundColor: "transparent",
    })
  }, [isDark])

  // Equirectangular projection mapping to 800x400 viewBox
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  // Smooth quadratic bezier curve between two geographic coordinates
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 45
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className={`relative w-full aspect-[2/1] overflow-hidden rounded-2xl ${className}`}>
      {/* Background Dotted Map SVG */}
      {mounted && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full object-contain [mask-image:linear-gradient(to_bottom,transparent,white_12%,white_88%,transparent)] pointer-events-none select-none opacity-85 transition-opacity"
          alt="Vesper Global World Map"
          draggable={false}
        />
      )}

      {/* Animated Arcs and Global Nodes */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="vesper-map-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="20%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="80%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.9" />
          </linearGradient>

          <filter id="vesper-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Animated Connecting Curved Lines */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(start, end)}
                fill="none"
                stroke="url(#vesper-map-gradient)"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                filter="url(#vesper-glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0.7] }}
                transition={{
                  duration: 2.4,
                  delay: i * 0.35,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              />
            </g>
          )
        })}

        {/* Pulsing City Nodes */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`points-group-${i}`}>
              {/* Origin City (Foreign Client) */}
              <g transform={`translate(${start.x}, ${start.y})`}>
                <circle r="3" fill={lineColor} />
                <circle r="3" fill={lineColor} opacity="0.6">
                  <animate
                    attributeName="r"
                    from="3"
                    to="10"
                    dur="2s"
                    begin={`${i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.6"
                    to="0"
                    dur="2s"
                    begin={`${i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {dot.start.label && (
                  <text
                    y="-8"
                    textAnchor="middle"
                    className="text-[9.5px] font-mono font-medium fill-ink/70 dark:fill-white/80 select-none tracking-wider"
                  >
                    {dot.start.label}
                  </text>
                )}
              </g>

              {/* Destination Hub (Your Central Calendar) */}
              <g transform={`translate(${end.x}, ${end.y})`}>
                <circle r="4" fill="#10b981" />
                <circle r="4" fill="#10b981" opacity="0.7">
                  <animate
                    attributeName="r"
                    from="4"
                    to="14"
                    dur="2.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.7"
                    to="0"
                    dur="2.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
                {i === 0 && dot.end.label && (
                  <text
                    y="16"
                    textAnchor="middle"
                    className="text-[10px] font-mono font-bold fill-emerald-600 dark:fill-emerald-400 select-none tracking-widest uppercase"
                  >
                    ✦ {dot.end.label}
                  </text>
                )}
              </g>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
export default WorldMap
