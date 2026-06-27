const badges = [
  {
    label: 'CISSP-Founded',
    sub:   'Built by a certified security professional',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3 L28 7.5 v10c0 7-5 12-12 14C7 29.5 4 24.5 4 17.5v-10L16 3z"
          stroke="#15564A" strokeWidth="2" fill="rgba(21,86,74,0.1)" strokeLinejoin="round" />
        <path d="M11 16 l3.5 3.5 L21 12" stroke="#15564A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'SOC 2-Aligned Architecture',
    sub:   'Designed for enterprise compliance requirements',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="5" stroke="#15564A" strokeWidth="2" fill="rgba(21,86,74,0.1)" />
        <rect x="10" y="10" width="5" height="5" rx="1" fill="#15564A" opacity="0.6" />
        <rect x="17" y="10" width="5" height="5" rx="1" fill="#15564A" opacity="0.6" />
        <rect x="10" y="17" width="5" height="5" rx="1" fill="#15564A" opacity="0.6" />
        <rect x="17" y="17" width="5" height="5" rx="1" fill="#15564A" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: 'Biometric Data Auto-Deleted',
    sub:   'Raw templates purged within 7 days — no exceptions',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="#15564A" strokeWidth="2" fill="rgba(21,86,74,0.1)" />
        <path d="M16 9 v7 l5 5" stroke="#15564A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function TrustStrip() {
  return (
    <section className="bg-pine/8 border-y border-pine/15 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Company attribution — Stripe compliance */}
        <div className="text-center mb-12">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine/60 mb-3">
            About This Product
          </p>
          <h2 className="font-display text-2xl font-bold text-ink mb-2">
            Dokimos ID is a product of{' '}
            <span className="text-pine">Fortress Reclaimed LLC</span>
          </h2>
          <p className="font-body text-sm text-ink/60 max-w-xl mx-auto leading-relaxed">
            Fortress Reclaimed LLC is a Wyoming-registered security company founded by a U.S.
            military veteran and CISSP-certified cybersecurity professional. Dokimos ID is our
            flagship SaaS product — the same way Facebook is a product of Meta, Dokimos ID is
            built, operated, and backed by Fortress Reclaimed LLC.
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid sm:grid-cols-3 gap-8">
          {badges.map((b) => (
            <div key={b.label} className="flex flex-col items-center text-center gap-3">
              {b.icon}
              <p className="font-body text-sm font-semibold text-ink">{b.label}</p>
              <p className="font-body text-xs text-ink/55 leading-relaxed">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
