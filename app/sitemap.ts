import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Bump a page's date when its content meaningfully changes.
const PAGES: { path: string; lastModified: string; priority: number }[] = [
  { path: "", lastModified: "2026-10-12", priority: 1.0 },
  { path: "/what-is-vesper", lastModified: "2026-10-12", priority: 0.9 },
  { path: "/faq", lastModified: "2026-10-12", priority: 0.8 },
  { path: "/product", lastModified: "2026-10-12", priority: 0.9 },
  { path: "/features", lastModified: "2026-10-12", priority: 0.8 },
  { path: "/pricing", lastModified: "2026-10-12", priority: 0.9 },
  { path: "/clinics", lastModified: "2026-10-12", priority: 0.7 },
  // Channels
  { path: "/whatsapp-auto-reply", lastModified: "2026-10-13", priority: 0.8 },
  { path: "/instagram-auto-reply", lastModified: "2026-10-13", priority: 0.8 },
  { path: "/messenger-auto-reply", lastModified: "2026-10-13", priority: 0.8 },
  // Language and Nepal
  { path: "/nepali-chatbot", lastModified: "2026-10-13", priority: 0.8 },
  { path: "/ai-receptionist-nepal", lastModified: "2026-10-13", priority: 0.8 },
  { path: "/team", lastModified: "2026-10-12", priority: 0.6 },
  { path: "/trust", lastModified: "2026-10-12", priority: 0.7 },
  { path: "/changelog", lastModified: "2026-09-30", priority: 0.5 },
  { path: "/privacy", lastModified: "2026-09-26", priority: 0.3 },
  { path: "/terms", lastModified: "2026-09-26", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(({ path, lastModified, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    priority,
  }));
}
