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
  lineColor = "#2563eb",
  className = "",
}: WorldMapProps) {
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

  // Apple-grade delicate, airy dot matrix
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" })
    return map.getSVG({
      radius: 0.18,
      color: isDark ? "#FFFFFF22" : "#00000018",
      shape: "circle",
      backgroundColor: "transparent",
    })
  }, [isDark])

  // Precise projection mapping to 800x400 coordinate space
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  // Graceful arc curve between origin & central calendar
  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 40
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  return (
    <div className={`relative w-full aspect-[2/1] overflow-hidden select-none ${className}`}>
      {/* ── Background Dotted Landmass ── */}
      {mounted && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full object-contain [mask-image:radial-gradient(ellipse_at_center,white_75%,transparent_100%)] pointer-events-none select-none transition-opacity duration-500"
          alt="World Map"
          draggable={false}
        />
      )}

      {/* ── Vector Layer: Elegant Trajectories & Light Beams ── */}
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none"
      >
        <defs>
          <linearGradient id="apple-beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
            <stop offset="60%" stopColor={lineColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* 1. Ultra-faint static guide arcs (Apple keynote style) */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)
          return (
            <path
              key={`guide-${i}`}
              d={createCurvedPath(start, end)}
              fill="none"
              stroke="currentColor"
              className="text-black/[0.07] dark:text-white/[0.08]"
              strokeWidth="0.8"
            />
          )
        })}

        {/* 2. Smooth gliding light photons along trajectories */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)
          const pathD = createCurvedPath(start, end)

          return (
            <motion.path
              key={`photon-${i}`}
              d={pathD}
              fill="none"
              stroke="url(#apple-beam-gradient)"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 0.28, 0],
                pathOffset: [0, 0.72, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.8,
                ease: [0.25, 0.1, 0.25, 1],
                repeat: Infinity,
                repeatDelay: 0.8 + i * 0.35,
                delay: i * 0.45,
              }}
            />
          )
        })}

        {/* 3. Subtle City Pins & Radar Ripples */}
        {dots.map((dot, i) => {
          const start = projectPoint(dot.start.lat, dot.start.lng)
          const end = projectPoint(dot.end.lat, dot.end.lng)

          return (
            <g key={`city-${i}`}>
              {/* Origin City Pin */}
              <g transform={`translate(${start.x}, ${start.y})`}>
                <circle r="2" fill={lineColor} />
                <circle
                  r="2"
                  fill="none"
                  stroke={lineColor}
                  strokeWidth="0.75"
                  opacity="0.4"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="3s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="3s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {dot.start.label && (
                  <text
                    y="-7"
                    textAnchor="middle"
                    className="text-[8.5px] font-sans font-medium tracking-tight fill-ink/65 dark:fill-white/70"
                  >
                    {dot.start.label}
                  </text>
                )}
              </g>

              {/* Central Destination Hub (Render once) */}
              {i === 0 && (
                <g transform={`translate(${end.x}, ${end.y})`}>
                  <circle r="3" fill="#10b981" />
                  <circle
                    r="3"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="1"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      from="3"
                      to="12"
                      dur="2.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.6"
                      to="0"
                      dur="2.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  {dot.end.label && (
                    <text
                      y="14"
                      textAnchor="middle"
                      className="text-[9px] font-mono font-bold tracking-widest uppercase fill-emerald-600 dark:fill-emerald-400"
                    >
                      {dot.end.label}
                    </text>
                  )}
                </g>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
export default WorldMap
