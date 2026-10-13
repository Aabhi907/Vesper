# Bolnivo

**AI assistants for websites and customer conversations**

Live at **[bolnivo.me](https://bolnivo.me)**

Bolnivo gives businesses AI assistants for their websites and customer channels. Assistants answer questions from approved business information and can take actions such as checking real availability and booking appointments.

---

## Key Principles

- **Calendar is Truth**: AI never invents an available slot. Availability is verified in real-time against Google Calendar / Outlook.
- **Official Meta Cloud Infrastructure**: Connected strictly through verified Meta APIs. No unauthorized web-scraping sessions or risk of WhatsApp account bans.
- **Private by Design**: Customer records, chat logs, and reservation data are isolated per tenant and never used to train public AI models.
- **Code-Switching Fluency**: Understands natural conversational phrasing across English, Nepali, and Romanized slang without confusing dates or times.
- **Always Human-Accessible**: Intervene from your phone at any time. When you reply, automation silently steps aside.

---

## Pages & Routes

- `/` — Main landing page, interactive multi-platform chat simulator, and service tiers.
- `/product` — Full engineering pipeline architecture, interactive stepper, and real-time global timezone routing map.
- `/trust` — Trust manifesto, non-negotiable engineering rules, the Bolnivo thesis memo, and the Anti-BS comparison matrix.
- `/pricing` — Transparent plans, interactive seat calculator, and student terminal tier.
- `/team` — Founding engineering and operations team directory.
- `/features` — Feature breakdown for front-desk operations.
- `/privacy` & `/terms` — Data governance, tenant isolation, and legal policies.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Aabhi907/Vesper.git

# Enter project directory
cd Vesper

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## Project Structure

```text
├── app/                        # Next.js App Router
│   ├── page.tsx                # Home landing page
│   ├── product/page.tsx        # Pipeline architecture & global map
│   ├── trust/page.tsx          # Trust manifesto & Anti-BS matrix
│   ├── pricing/page.tsx        # Pricing calculator
│   ├── team/page.tsx           # Founding team directory
│   ├── features/page.tsx       # Feature breakdown
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms of service
│   ├── layout.tsx              # Root layout & font configuration
│   └── globals.css             # Design tokens & theme definitions
│
├── components/                 # UI components
│   ├── sections/               # Section views (hero, demo, pricing, manifesto, etc.)
│   ├── shared/                 # WinChrome, ScrollReveal, and layout chrome
│   ├── ui/                     # Primitives (tooltip, world-map, text-three, etc.)
│   └── layout.tsx              # Header navigation & footer
│
├── hooks/                      # Interaction & physics hooks
│   └── useInteractiveTilt.ts   # 3D cursor-tracking tilt, sheen & glow physics
│
└── models/                     # Static datasets, domain types & navigation
    ├── types.ts                # TypeScript domain models
    └── data/                   # Pricing, testimonials, and team data
```

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) / Framer Motion
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Geist Sans, Geist Mono, Caveat
- **Language**: TypeScript

---

## Founders

- **Aabishkar Shrestha** · *Co-founder & COO*
- **Samrat Ghimire** · *Co-founder & Engineer*
- **Kasam Thapa Magar** · *Co-founder & Engineer*

---

## License

Proprietary © Bolnivo. All rights reserved.

