import type { TeamMember } from "../types"

// Bios are placeholders for the founders to edit.
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    slug: "samrat-ghimire",
    name: "Samrat Ghimire",
    role: "Founder",
    bio: "Samrat founded Vesper in Kathmandu and leads the product and engineering. He builds the AI front desk that answers and books for Nepali businesses.",
    image: "/team/samrat-ghimere.jpg",
    objectPosition: "center 25%",
    sameAs: ["https://github.com/SamratGhimire01", "https://www.linkedin.com/in/samratghimire01/"],
  },
  {
    id: 2,
    slug: "aabishkar-shrestha",
    name: "Aabishkar Shrestha",
    role: "Co-founder",
    bio: "Aabishkar co-founded Vesper and works with the businesses that use it, from first setup to day-to-day operations.",
    image: "/team/aabishkar.jpg",
    objectPosition: "center 28%",
    sameAs: ["https://www.linkedin.com/in/aabishkar-shrestha-895492349/"],
  },
  {
    id: 3,
    slug: "kasam-thapa-magar",
    name: "Kasam Thapa Magar",
    role: "Co-founder",
    bio: "Kasam co-founded Vesper and builds the engineering behind it, including the channel integrations and booking system.",
    image: "/team/kasam-thapa-magar.png",
    objectPosition: "center 18%",
    sameAs: ["https://www.linkedin.com/in/kasamthapamagar/"],
  },
]

export const FOUNDERS_LINE =
  "Vesper was founded in Kathmandu, Nepal by Samrat Ghimire (Founder), with co-founders Aabishkar Shrestha and Kasam Thapa Magar."
