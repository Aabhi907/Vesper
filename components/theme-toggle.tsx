"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("vesper-theme")
    if (stored === "dark" || stored === "light") {
      setTheme(stored)
      if (stored === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const initial = prefersDark ? "dark" : "light"
      setTheme(initial)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("vesper-theme", next)
    if (next === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) {
    return (
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={`relative w-8 h-8 rounded-full flex items-center justify-center text-ink/70 hover:text-ink hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${className}`}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-300" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ scale: 0.5, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-ink/75" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
