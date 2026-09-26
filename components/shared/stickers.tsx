"use client"

import * as React from "react"

export function BlueCapSticker({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-end pointer-events-none select-none ${className}`}>
      {/* 3D Blue Cap with White Sticker Border */}
      <div className="relative -rotate-12 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.22)]">
        <svg
          width="74"
          height="52"
          viewBox="0 0 120 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            <filter id="cap-sticker-outline" x="-20%" y="-20%" width="140%" height="140%">
              <feMorphology in="SourceAlpha" result="EXPANDED" operator="dilate" radius="5" />
              <feFlood floodColor="white" result="WHITE_COLOR" />
              <feComposite in="WHITE_COLOR" in2="EXPANDED" operator="in" result="OUTLINE" />
              <feMerge>
                <feMergeNode in="OUTLINE" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="crown-grad" x1="45" y1="12" x2="105" y2="58" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="40%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>
            <linearGradient id="visor-grad" x1="12" y1="38" x2="72" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="70%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>
          </defs>

          <g filter="url(#cap-sticker-outline)">
            {/* Crown dome */}
            <path
              d="M 46 54 C 40 32 50 14 74 14 C 98 14 110 28 112 52 C 108 55 86 58 46 54 Z"
              fill="url(#crown-grad)"
              stroke="#1D4ED8"
              strokeWidth="2"
            />
            {/* Crown highlight specular */}
            <path
              d="M 54 50 C 48 34 56 20 74 16 C 88 16 98 24 102 38"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.45"
            />
            {/* Crown panel stitch */}
            <path
              d="M 74 14 C 74 28 73 42 71 55"
              fill="none"
              stroke="#1E3A8A"
              strokeWidth="1.5"
              strokeDasharray="2.5 2.5"
              opacity="0.7"
            />
            {/* Crown apex button */}
            <ellipse cx="74" cy="14" rx="5" ry="3" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.5" />

            {/* Front curved visor / bill */}
            <path
              d="M 12 56 C 10 50 26 44 54 48 C 76 51 92 54 94 58 C 82 72 44 74 12 56 Z"
              fill="url(#visor-grad)"
              stroke="#1D4ED8"
              strokeWidth="2"
            />
            {/* Visor edge rim light */}
            <path
              d="M 15 55 C 32 66 60 68 88 59"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        </svg>

        {/* Playful "no cap!" angled script */}
        <div className="text-right -mt-2 mr-0.5">
          <span className="text-[13px] font-black italic tracking-wide text-signal-blue dark:text-sky-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] font-sans rotate-[-8deg] inline-block">
            no cap!
          </span>
        </div>
      </div>
    </div>
  )
}

export function TheyCookedSticker({ className = "" }: { className?: string }) {
  return (
    <div className={`select-none pointer-events-none ${className}`}>
      <div className="rotate-3 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black tracking-tight rounded-full shadow-[0_4px_14px_rgba(245,158,11,0.35)] border-2 border-white dark:border-stone-900 flex items-center gap-1">
        <span>they cooked</span>
        <span className="text-[12.5px] leading-none">🧑‍🍳</span>
      </div>
    </div>
  )
}
