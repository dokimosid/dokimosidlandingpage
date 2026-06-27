const steps = [
  {
    number: '01',
    title:  'Create a Verified Interview Link',
    body:   'You schedule the interview in Dokimos ID and generate a gated Zoom or Microsoft Teams link. The real link stays hidden until the candidate clears verification — your calendar invite contains the Dokimos ID verification URL instead.',
  },
  {
    number: '02',
    title:  'Candidate Proves Who They Are',
    body:   "Before receiving the join link, your candidate completes a two-minute verification: they upload a government-issued photo ID, then take a real-time selfie. Dokimos ID checks liveness, extracts the ID photo, and runs a biometric comparison. Only a passing candidate gets the link.",
  },
  {
    number: '03',
    title:  'Live Match at Interview Start',
    body:   "When the call begins, a Dokimos ID meeting bot joins and silently performs a second face-match against the verified selfie. At the end of the interview, you receive a confidence-scored PDF report — timestamped, auditable, ready for your compliance file.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine mb-3">How It Works</p>
          <h2 className="font-display text-4xl font-bold text-ink text-balance">
            Verification happens before you open the call.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-10">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-pine/20" aria-hidden="true" />

          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pine">
                <span className="font-display text-xl font-bold text-paper">{step.number}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="font-body text-sm text-ink/65 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Supporting callout */}
        <div className="mt-16 bg-pine/5 border border-pine/15 rounded-xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="shrink-0" aria-hidden="true">
            <circle cx="18" cy="18" r="18" fill="#15564A" opacity="0.12" />
            <path d="M12 18 l4 4 l8-9" stroke="#15564A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-body text-sm text-ink/75 leading-relaxed">
            <strong className="text-ink font-semibold">No ATS required.</strong> Dokimos ID works alongside your existing hiring tools. If your team uses Zoom or Microsoft Teams for interviews today, you can be up and running in under 15 minutes — no integration contracts, no IT tickets.
          </p>
        </div>
      </div>
    </section>
  )
}
