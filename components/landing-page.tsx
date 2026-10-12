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
  chats: { heading: string; label: string; lang?: string; messages: { from: keyof typeof SPEAKER; text: string }[] }[]
  sections: { heading: string; lang?: string; paragraphs?: string[]; bullets?: string[] }[]
  steps: { heading: string; items: string[] }
  faq: { question: string; answer: string }[]
  related: { label: string; href: string }[]
  crumb: string
  table?: { heading: string; columns: string[]; rows: string[][] }
  sources?: { label: string; href: string }[]
}

export function landingMetadata(page: Landing): Metadata {
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: { title: page.title, description: page.description, url: page.path, siteName: "Vesper", type: "website" },
  }
}

// "other" = a different tool shown for comparison (an away message, a menu bot)
const SPEAKER = { customer: "Customer", vesper: "Vesper", staff: "Staff", other: "Other tool" }

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
                        : m.from === "vesper"
                          ? "max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-2 text-canvas"
                          : "max-w-[85%] rounded-2xl rounded-br-sm bg-line px-4 py-2 text-ink"
                    }
                  >
                    {m.from === "customer" || m.from === "vesper" ? (
                      <span className="sr-only">{SPEAKER[m.from]}: </span>
                    ) : (
                      <span className="block text-[11px] font-bold uppercase tracking-wide text-muted">{SPEAKER[m.from]}</span>
                    )}
                    {m.text}
                  </p>
                </div>
              ))}
              <figcaption className="text-[12px] text-muted pt-1">{chat.label}</figcaption>
            </figure>
          </section>
        ))}

        {page.table && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-ink mb-4">{page.table.heading}</h2>
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-soft-canvas text-ink">
                  <tr>
                    {page.table.columns.map((c) => <th key={c} scope="col" className="p-3 font-bold">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map(([first, ...rest]) => (
                    <tr key={first} className="border-t border-line align-top">
                      <th scope="row" className="p-3 font-bold text-ink">{first}</th>
                      {rest.map((cell, i) => <td key={i} className="p-3">{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

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

          {page.sources && (
            <section>
              <h2 className="text-xl font-bold text-ink mb-2">Sources</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                {page.sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener" className="underline">{s.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}

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
