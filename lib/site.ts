export const SITE_URL = "https://vesper.codes"

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/143977886",
  instagram: "https://www.instagram.com/vespercodes",
  github: "https://github.com/vespercodes",
  x: "https://x.com/vespercodes",
  wellfound: "https://wellfound.com/onboarding/recruit/vesper-11/complete",
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }
}
