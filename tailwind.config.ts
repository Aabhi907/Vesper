import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      colors: {
        canvas:      "hsl(var(--canvas))",
        "soft-canvas": "hsl(var(--soft-canvas))",
        ink:         "hsl(var(--ink))",
        muted:       "hsl(var(--muted))",
        line:        "hsl(var(--line))",
        night:       "hsl(var(--night))",
        "signal-blue":      "hsl(var(--signal-blue))",
        "signal-blue-dark": "hsl(var(--signal-blue-dark))",
        "blue-soft":  "hsl(var(--blue-soft))",
        success:     "hsl(var(--success))",
        warning:     "hsl(var(--warning))",
        danger:      "hsl(var(--danger))",
      },
      fontSize: {
        "hero":   ["clamp(3.5rem, calc(6vw + 1rem), 6.5rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "800" }],
        "h1":     ["clamp(2.5rem, calc(4vw + 1rem), 4.25rem)", { lineHeight: "1.0",  letterSpacing: "-0.03em",  fontWeight: "700" }],
        "h2":     ["clamp(2rem, calc(3vw + 0.75rem), 3.5rem)", { lineHeight: "1.06", letterSpacing: "-0.03em",  fontWeight: "650" }],
        "h3":     ["clamp(1.25rem, calc(2vw + 0.25rem), 1.875rem)", { lineHeight: "1.2", fontWeight: "600" }],
        "lead":   ["clamp(1.1rem, calc(1.5vw + 0.4rem), 1.375rem)", { lineHeight: "1.5", fontWeight: "450" }],
        "body":   ["clamp(0.9375rem, calc(1vw + 0.15rem), 1.0625rem)", { lineHeight: "1.6", fontWeight: "400" }],
        "small":  ["0.8125rem", { lineHeight: "1.5", fontWeight: "400" }],
        "eyebrow":["clamp(0.7rem, calc(0.8vw + 0.1rem), 0.8rem)", { lineHeight: "1", letterSpacing: "0.12em", fontWeight: "700" }],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      boxShadow: {
        "card":  "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "frame": "0 2px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.10), 0 32px 80px rgba(0,0,0,0.07)",
        "win":   "0 2px 0 rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.10), 0 32px 80px rgba(0,0,0,0.07)",
      },
      transitionTimingFunction: {
        "standard": "cubic-bezier(0.22,0.8,0.22,1)",
      },
      transitionDuration: {
        "micro":    "120ms",
        "ui":       "220ms",
        "panel":    "400ms",
        "cinematic":"800ms",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;

