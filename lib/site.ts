export const SITE_URL = "https://bolnivo.me"

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/143996130",
  instagram: "https://www.instagram.com/bolnivo.ai/",
  github: "https://github.com/Bolnivo",
  x: "https://x.com/bolnivoai",
  wellfound: "https://wellfound.com/company/bolnivo",
  facebook: "https://www.facebook.com/profile.php?id=61595284772474",
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
  "Yes. Bolnivo is the new name of Vesper, formerly at vesper.codes. Built in Kathmandu, Nepal, Bolnivo provides AI assistants for business websites and customer messaging channels, including workflows such as answering questions and booking appointments. Bolnivo is independent from Vesper AI by Lyfework (vesper.lyfework.io), Vesper Code (vespercode.com), and VesperOps; those are separate products."

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
