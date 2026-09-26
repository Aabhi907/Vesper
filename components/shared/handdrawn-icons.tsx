import type React from "react"

export function HanddrawnMessageIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} stroke="currentColor">
      {/* Speech bubble outline with handdrawn organic pen stroke */}
      <path
        d="M4.5 7.8 C4.8 5.2, 7.5 4.2, 12.8 4 C18.9 3.8, 22.8 4.7, 23.5 8.2 C24.1 11.6, 23.2 15.2, 19.8 16.9 C17.1 18.2, 13.6 18.2, 10.2 17.7 L6.2 21.4 C5.7 21.8, 5 21.5, 5.2 20.6 L5.8 16.8 C4.2 14.8, 4.1 11.4, 4.5 7.8 Z"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handdrawn sketch lines */}
      <path
        d="M9.2 9.8 C11.5 9.5, 15.6 9.6, 18.8 10.1"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9.5 13.2 C11.6 13, 14.2 13.1, 15.8 13.4"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HanddrawnCalendarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} stroke="currentColor">
      {/* Binding rings */}
      <path d="M8.8 3.5 C8.7 5.2, 8.8 6.5, 8.7 7.6" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M19.2 3.6 C19.1 5.3, 19.2 6.4, 19.1 7.5" strokeWidth="1.9" strokeLinecap="round" />
      {/* Calendar body outline */}
      <path
        d="M5.8 6.2 C9.8 5.9, 17.8 5.9, 21.8 6.3 C22.8 6.4, 23.4 7.1, 23.2 8.4 C22.9 12.6, 23.2 18.4, 22.7 22.4 C22.5 23.5, 21.8 24.1, 20.5 24.2 C15.8 24.4, 9.4 24.3, 6.2 24.1 C5.1 24, 4.5 23.3, 4.6 22 C4.8 17.6, 4.4 11.2, 4.8 7.6 C4.9 6.7, 5.4 6.2, 5.8 6.2 Z"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Header divider */}
      <path d="M5.1 10.8 C9.8 10.5, 17.5 10.6, 22.9 11.1" strokeWidth="1.7" strokeLinecap="round" />
      {/* Handdrawn checkmark */}
      <path d="M10.8 16.8 L13.2 19.4 C13.4 19.6, 13.8 19.5, 14.1 19.1 L18.5 14.2" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function HanddrawnZapIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" fill="none" className={className} stroke="currentColor">
      {/* Handdrawn lightning bolt with organic contour */}
      <path
        d="M15.5 3.8 C15.2 3.9, 12.2 10.5, 10.5 13.8 C10.2 14.3, 10.6 14.9, 11.3 14.8 L15.2 14.4 C14.1 17.6, 11.9 22.4, 11.1 24.5 C10.8 25.1, 11.6 25.5, 12 25 C14.4 22.4, 19.1 16.5, 20.3 12.7 C20.7 11.8, 20.1 11.2, 19.2 11.4 L15.8 11.8 C16.8 9.1, 18.2 5.8, 18.5 4.3 C18.7 3.7, 18 3.2, 17.4 3.5 Z"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handdrawn sketch sparks */}
      <path d="M7.1 10.2 C6.2 10.7, 5.6 11.1, 5 11.6" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22.2 16.4 C23.2 16.8, 23.9 17.2, 24.8 17.6" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
