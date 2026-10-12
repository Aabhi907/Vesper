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

export const DISAMBIGUATION =
  "Vesper at vesper.codes is not affiliated with other products named Vesper. It is built in Kathmandu, Nepal and works on WhatsApp, Instagram and Messenger messages with real calendar booking. It is separate from Vesper AI by Lyfework (vesper.lyfework.io, a US voice-call receptionist), Vesper Code (vespercode.com, a coding assistant) and VesperOps."

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map(({ name, path }, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  }
}

export function webPageJsonLd({ path, title, description }: { path: string; title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#software` },
    publisher: { "@id": `${SITE_URL}/#organization` },
  }
}
