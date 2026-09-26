# Vesper

**24/7 AI Front Desk for Service & Booking Businesses**

Vesper connects WhatsApp, Instagram, Messenger, and your website into one intelligent booking hub. It checks real-time calendar availability, answers inquiries accurately from your approved business knowledge, and confirms appointments around the clock without double-booking.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Aabhi907/Vesper.git

# Enter project directory
cd Vesper

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Architecture (MVC Pattern)

The project follows a clean **Model-View-Controller (MVC)** architectural pattern to separate concerns and ensure maintainability:

```text
├── models/                     # [M] MODEL LAYER — Domain models, TypeScript interfaces & static datasets
│   ├── types.ts                # Domain interfaces (PricingPlan, Testimonial, CoreJob, TeamMember, etc.)
│   ├── data/                   # Data sources & constants
│   │   ├── pricing.data.ts     # Pricing plans & feature tiers
│   │   ├── testimonials.data.ts# Customer reviews & feedback
│   │   ├── faq.data.ts         # Frequently asked questions
│   │   ├── team.data.ts        # Founding team directory
│   │   └── navigation.data.ts  # Header & footer routes
│   └── index.ts                # Master model & data barrel export
│
├── hooks/                      # [C] CONTROLLER LAYER — Reusable state, physical motion & user interaction controllers
│   ├── useInteractiveTilt.ts   # 3D cursor-tracking tilt, specular sheen, dynamic glow & shadow physics
│   └── index.ts                # Master controller hooks export
│
├── components/                 # [V] VIEW LAYER — UI rendering components
│   ├── sections/               # Modular landing page sections
│   │   ├── hero.tsx            # Full viewport hero section & floating widgets
│   │   ├── platform-demo.tsx   # Interactive WhatsApp, Instagram & Messenger chatbox
│   │   ├── trust-strip.tsx     # Animated marquee trust ticker
│   │   ├── manifesto.tsx       # Sticky scroll notes window
│   │   ├── three-jobs.tsx      # Core value proposition 3D tilt cards
│   │   ├── trust-section.tsx   # Testimonials grid with floating reactions
│   │   └── pricing.tsx         # Interactive pricing calculator & student terminal
│   ├── shared/                 # Reusable UI primitives
│   │   ├── win-chrome.tsx      # macOS retro traffic-light window chrome wrapper
│   │   ├── scroll-reveal.tsx   # Viewport entrance motion animation wrapper
│   │   ├── stickers.tsx        # Floating editorial badge stickers
│   │   └── handdrawn-icons.tsx # Custom human-sketched vector icons
│   ├── marketing.tsx           # Facade & backward-compatible barrel for all sections
│   ├── layout.tsx              # Root Navbar & Footer layout chrome
│   ├── faq.tsx                 # Accordion FAQ view component
│   └── team-tooltip.tsx        # Team avatar tooltip display
│
└── app/                        # Next.js App Router (Pages & routing)
    ├── page.tsx                # Home landing page
    ├── pricing/page.tsx        # Dedicated pricing page
    ├── team/page.tsx           # Meet the team page
    ├── features/page.tsx       # Feature breakdown
    ├── privacy/page.tsx        # Privacy policy
    └── terms/page.tsx          # Terms of service
```

---

## 🛠️ Tech Stack


- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 👥 Founders

- **Aabishkar Shrestha** · *Co-founder & COO*
- **Samrat Ghimere** · *Co-founder & Engineer*
- **Kasam Thapa Magar** · *Co-founder & Engineer*

---

## 📄 License

Proprietary © Vesper. All rights reserved.
