import type React from "react"

export type BillingCycle = "monthly" | "yearly"

export interface PricingPlan {
  name: string
  badge: string | null
  price: {
    monthly: string
    yearly: string
  }
  period: string
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  highlight: boolean
}

export interface Testimonial {
  name: string
  handle: string
  role: string
  quote: string
  color: string
}

export interface CoreJob {
  title: string
  copy: string
  icon: React.ComponentType<{ className?: string }>
}

export interface FAQItem {
  question: string
  answer: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  objectPosition?: string
}

export interface NavLink {
  label: string
  href: string
}

export type MessagingPlatform = "whatsapp" | "instagram" | "messenger"
