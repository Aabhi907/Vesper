import type { Metadata } from "next"
import Link from "next/link"
import { breadcrumbJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/site"

// One keyword cluster = one page. Every search landing page is this data shape rendered by <LandingPage>.
export type Landing = {
  path: string
  title: string // full <title>, includes "Vesper"
  description: string
  h1: string // includes "Vesper"
  intro: string // starts with "Vesper", answers the page's main question in <=25 words
  chats: { heading: string; label: string; lang?: string; messages: { from: "customer" | "vesper"; text: string }[] }[]
  sections: { heading: string; lang?: string; paragraphs?: string[]; bullets?: string[] }[]
  steps: { heading: string; items: string[] }
  faq: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  crumb: string
}

export function landingMetadata(page: Landing): Metadata {
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { title: page.title, description: page.description, url: page.path, siteName: "Vesper", type: "website" },
  }
}

const ALWAYS_LINKED = [
  { label: "What is Vesper?", href: "/what-is-vesper" },
  { label: "Vesper pricing in NPR", href: "/pricing" },
]

export function LandingPage({ page }: { page: Landing }) {
  const jsonLd = [
    webPageJsonLd(page),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: page.crumb, path: page.path },
    ]),
    faqJsonLd(page.faq),
  ]
  return (
    <main className="w-full pt-32 pb-24 px-4 sm:px-6 bg-canvas min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-[840px] text-[15px] text-ink/80 leading-relaxed">
        <nav aria-label="Breadcrumb" className="text-[13px] text-muted mb-6">
          <Link href="/" className="hover:text-ink underline">Home</Link> <span aria-hidden="true">/</span> {page.crumb}
        </nav>
        <h1 className="text-3xl sm:text-5xl font-black text-ink tracking-tight mb-6">{page.h1}</h1>
        <p className="text-lead text-ink/80 mb-12">{page.intro}</p>

        {page.chats.map((chat) => (
          <section key={chat.heading} className="mb-12">
            <h2 className="text-xl font-bold text-ink mb-4">{chat.heading}</h2>
            <figure aria-label={chat.label} lang={chat.lang} className="rounded-2xl border border-line bg-soft-canvas p-4 sm:p-6 space-y-3">
              {chat.messages.map((m, i) => (
                <div key={i} className={m.from === "customer" ? "flex justify-start" : "flex justify-end"}>
                  <p
                    className={
                      m.from === "customer"
                        ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-canvas border border-line px-4 py-2 text-ink"
                        : "max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-2 text-canvas"
                    }
                  >
                    <span className="sr-only">{m.from === "customer" ? "Customer: " : "Vesper: "}</span>
                    {m.text}
                  </p>
                </div>
              ))}
              <figcaption className="text-[12px] text-muted pt-1">{chat.label}</figcaption>
            </figure>
          </section>
        ))}

        <div className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.heading} lang={s.lang}>
              <h2 className="text-xl font-bold text-ink mb-2">{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p} className="mb-3">{p}</p>)}
              {s.bullets && (
                <ul className="list-disc pl-5 space-y-1.5">
                  {s.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">{page.steps.heading}</h2>
            <ol className="list-decimal pl-5 space-y-1.5">
              {page.steps.items.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-4">Frequently asked questions</h2>
            <div className="space-y-6">
              {page.faq.map((f) => (
                <div key={f.question}>
                  <h3 className="font-bold text-ink mb-1">{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <nav aria-label="Related pages" className="border-t border-line pt-8">
            <h2 className="text-xl font-bold text-ink mb-3">Related</h2>
            <ul className="flex flex-wrap gap-2">
              {[...ALWAYS_LINKED, ...page.related].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-block rounded-full border border-line px-3 py-1.5 text-[13.5px] font-semibold text-ink hover:bg-soft-canvas">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </main>
  )
}
