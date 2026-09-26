/**
 * Marketing Components Barrel & Facade
 * 
 * Architecture note:
 * All individual sections have been modularized under `@/components/sections/*`
 * and `@/components/shared/*` following clean MVC separation of concerns:
 * - Models & Data: `@/models`
 * - Controller Physics/Hooks: `@/hooks`
 * - Views & UI Sections: `@/components/sections` & `@/components/shared`
 */

export {
  Hero,
  HeroTiltCard,
  PlatformDemo,
  WhatsAppChat,
  InstagramChat,
  MessengerChat,
  TrustStrip,
  Manifesto,
  ThreeJobs,
  InteractiveJobCard,
  TrustSection,
  Pricing,
  FinalCTA,
  InteractivePricingCard,
  StudentDiscountTerminal,
} from "./sections"

export {
  WinChrome,
  ScrollReveal,
  BlueCapSticker,
  TheyCookedSticker,
  HanddrawnMessageIcon,
  HanddrawnCalendarIcon,
  HanddrawnZapIcon,
} from "./shared"
