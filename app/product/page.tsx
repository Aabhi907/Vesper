import { Button } from "@/components/ui"

export default function ProductPage() {
  const steps = ["Arrival", "Context", "Knowledge", "Real execution", "Confirmed response"]
  return (
    <main className="w-full pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="mx-auto max-w-[1240px]">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-h1 text-ink mb-6">AI understands.<br/>Real systems act.</h1>
          <p className="text-lead text-muted mb-10">Vesper is not a generic chatbot guessing answers. It is an engineering pipeline where AI determines what the customer wants, but real database code decides what actually happens.</p>
          <Button variant="primary" size="lg">Watch 60-second product overview</Button>
        </div>
        <div className="bg-soft-canvas rounded-[24px] border border-line p-8 md:p-12 mb-24 flex flex-col lg:flex-row gap-4">
          {steps.map((step, i) => (
             <div key={i} className="bg-white border border-line rounded-lg p-6 shadow-sm flex-1"><div className="text-[12px] font-bold text-signal-blue uppercase mb-2">Step 0{i + 1}</div><h3 className="font-semibold">{step}</h3></div>
          ))}
        </div>
      </div>
    </main>
  )
}
