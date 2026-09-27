"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Terminal, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Moon, 
  Sun, 
  ArrowRight, 
  Check, 
  Layers, 
  MessageSquare,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Zap,
  Globe
} from "lucide-react"

export interface CommandItem {
  id: string
  title: string
  subtitle?: string
  category: "Scenarios" | "Navigation" | "Security & SLA" | "Preferences"
  icon: React.ComponentType<{ className?: string }>
  shortcut?: string
  action: () => void
}

interface CommandMenuProps {
  isOpen: boolean
  onClose: () => void
  onSelectScenario?: (scenarioId: string) => void
  onOpenSecurity?: () => void
}

export function CommandMenu({
  isOpen,
  onClose,
  onSelectScenario,
  onOpenSecurity,
}: CommandMenuProps) {
  const [query, setQuery] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [isDark, setIsDark] = React.useState(false)

  // Track theme on mount / modal open
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
  }, [isOpen])

  const toggleTheme = () => {
    const nextDark = !isDark
    setIsDark(nextDark)
    if (nextDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("vesper-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("vesper-theme", "light")
    }
  }

  const commands: CommandItem[] = React.useMemo(() => [
    {
      id: "scenario-salon",
      title: "Play Salon Booking Simulation",
      subtitle: "Saturday 11 AM haircut & colour slot check in Romanized Nepali",
      category: "Scenarios",
      icon: Sparkles,
      shortcut: "⌘1",
      action: () => {
        onSelectScenario?.("salon")
        onClose()
      },
    },
    {
      id: "scenario-dental",
      title: "Play Emergency Dental Triage",
      subtitle: "11:30 PM acute toothache triage with next-day 8:45 AM slot lock",
      category: "Scenarios",
      icon: Zap,
      shortcut: "⌘2",
      action: () => {
        onSelectScenario?.("dental")
        onClose()
      },
    },
    {
      id: "scenario-auto",
      title: "Play Auto Workshop Bay Allocation",
      subtitle: "Multi-item service, Motul oil, brake bleeding + 2.5h buffer",
      category: "Scenarios",
      icon: Terminal,
      shortcut: "⌘3",
      action: () => {
        onSelectScenario?.("auto")
        onClose()
      },
    },
    {
      id: "scenario-hotel",
      title: "Play Boutique Hotel Reservation",
      subtitle: "Weekend suite availability check with late check-in pass",
      category: "Scenarios",
      icon: Calendar,
      shortcut: "⌘4",
      action: () => {
        onSelectScenario?.("hotel")
        onClose()
      },
    },
    {
      id: "nav-demo",
      title: "Go to Live Platform Demo",
      subtitle: "Interactive WhatsApp, Instagram & Messenger preview",
      category: "Navigation",
      icon: MessageSquare,
      action: () => {
        const el = document.getElementById("demo")
        el?.scrollIntoView({ behavior: "smooth" })
        onClose()
      },
    },
    {
      id: "nav-bilingual",
      title: "Go to Bilingual Engine Showcase",
      subtitle: "Real-time Romanized Nepali & Devanagari translation engine",
      category: "Navigation",
      icon: Globe,
      action: () => {
        const el = document.getElementById("bilingual") || document.querySelector("section:nth-of-type(4)")
        el?.scrollIntoView({ behavior: "smooth" })
        onClose()
      },
    },
    {
      id: "nav-features",
      title: "Go to Core Features & Jobs",
      subtitle: "Answer accurately, book safely, remember context",
      category: "Navigation",
      icon: Layers,
      action: () => {
        const el = document.getElementById("features")
        el?.scrollIntoView({ behavior: "smooth" })
        onClose()
      },
    },
    {
      id: "nav-integrations",
      title: "Go to Multi-Channel Integrations",
      subtitle: "Meta Cloud API, Google Calendar, Outlook, Apple Calendar",
      category: "Navigation",
      icon: Terminal,
      action: () => {
        const el = document.getElementById("integrations")
        el?.scrollIntoView({ behavior: "smooth" })
        onClose()
      },
    },
    {
      id: "nav-pricing",
      title: "Go to Pricing Calculator",
      subtitle: "View Starter, Growth, and Custom business tiers",
      category: "Navigation",
      icon: ArrowRight,
      action: () => {
        window.location.href = "/pricing"
        onClose()
      },
    },
    {
      id: "security-specs",
      title: "View Security, Compliance & SLA Drawer",
      subtitle: "SOC2 Type II, AES-256 HMAC-SHA256, 99.98% SLA",
      category: "Security & SLA",
      icon: ShieldCheck,
      shortcut: "⌘S",
      action: () => {
        onClose()
        onOpenSecurity?.()
      },
    },
    {
      id: "pref-theme",
      title: `Switch Theme to ${isDark ? "Light Mode" : "Dark Mode"}`,
      subtitle: "Toggle visual appearance across entire experience",
      category: "Preferences",
      icon: isDark ? Sun : Moon,
      shortcut: "⌘T",
      action: () => {
        toggleTheme()
        onClose()
      },
    },
  ], [isDark, onSelectScenario, onOpenSecurity, onClose])

  const filteredCommands = React.useMemo(() => {
    if (!query.trim()) return commands
    const q = query.toLowerCase()
    return commands.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.subtitle?.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    )
  }, [commands, query])

  // Reset selected index when filtered list changes
  React.useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Focus input when opened
  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery("")
      setSelectedIndex(0)
    }
  }, [isOpen])

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "Escape") {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length))
        return
      }

      if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length))
        return
      }

      if (e.key === "Enter") {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
        return
      }

      // Quick numbers 1-4 for scenarios
      if (e.metaKey || e.ctrlKey) {
        if (e.key === "1") {
          e.preventDefault()
          onSelectScenario?.("salon")
          onClose()
        } else if (e.key === "2") {
          e.preventDefault()
          onSelectScenario?.("dental")
          onClose()
        } else if (e.key === "3") {
          e.preventDefault()
          onSelectScenario?.("auto")
          onClose()
        } else if (e.key === "4") {
          e.preventDefault()
          onSelectScenario?.("hotel")
          onClose()
        } else if (e.key === "s") {
          e.preventDefault()
          onClose()
          onOpenSecurity?.()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, filteredCommands, selectedIndex, onSelectScenario, onOpenSecurity])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] sm:pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Palette container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
            className="relative w-full max-w-[620px] bg-white dark:bg-[#12141a] border border-black/10 dark:border-white/12 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Top specular hairline */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-signal-blue/80 to-transparent" />

            {/* Input bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-black/5 dark:border-white/10">
              <Search className="w-5 h-5 text-muted/70 flex-shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search scenarios…"
                className="w-full bg-transparent text-[14.5px] text-ink placeholder:text-muted/60 focus:outline-hidden font-normal"
              />
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono text-muted bg-black/5 dark:bg-white/10">
                ESC
              </span>
            </div>

            {/* Results list */}
            <div className="p-2 max-h-[360px] overflow-y-auto divide-y divide-transparent space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-muted">
                  <p className="text-[13.5px]">No commands found for &ldquo;{query}&rdquo;</p>
                  <p className="text-[11.5px] mt-1 text-muted/70">Try searching &ldquo;salon&rdquo;, &ldquo;pricing&rdquo;, or &ldquo;security&rdquo;</p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex
                  const Icon = cmd.icon

                  return (
                    <button
                      key={cmd.id}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors duration-150 ${
                        isSelected
                          ? "bg-signal-blue text-white shadow-xs"
                          : "text-ink hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "bg-black/5 dark:bg-white/10 text-muted"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p
                            className={`text-[13px] font-medium leading-snug truncate ${
                              isSelected ? "text-white font-semibold" : "text-ink"
                            }`}
                          >
                            {cmd.title}
                          </p>
                          {cmd.subtitle && (
                            <p
                              className={`text-[11px] truncate ${
                                isSelected ? "text-white/80" : "text-muted"
                              }`}
                            >
                              {cmd.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                        <span
                          className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                            isSelected
                              ? "bg-white/20 text-white"
                              : "text-muted/60 bg-black/[0.03] dark:bg-white/[0.04]"
                          }`}
                        >
                          {cmd.category}
                        </span>
                        {cmd.shortcut && (
                          <span
                            className={`hidden sm:inline-block text-[11px] font-mono px-1.5 py-0.5 rounded ${
                              isSelected
                                ? "bg-white/25 text-white"
                                : "text-muted bg-black/5 dark:bg-white/10"
                            }`}
                          >
                            {cmd.shortcut}
                          </span>
                        )}
                        <ChevronRight
                          className={`w-3.5 h-3.5 opacity-60 ${
                            isSelected ? "text-white" : "text-muted"
                          }`}
                        />
                      </div>
                    </button>
                  )
                })
              )}
            </div>

            {/* Footer helper */}
            <div className="px-4 py-2.5 border-t border-black/5 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex items-center justify-between text-[11.5px] text-muted">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="font-mono text-[10px] px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">↑</span>
                  <span className="font-mono text-[10px] px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">↓</span>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10">↵</span>
                  <span>Select</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Vesper Command Engine</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
