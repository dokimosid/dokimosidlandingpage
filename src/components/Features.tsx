const features = [
  {
    title: 'Gated Zoom & Teams Links',
    body:  'Real interview links are never shared directly. Candidates receive a verification URL; the actual meeting link is released only after a passing check.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="10" width="16" height="14" rx="3" stroke="#15564A" strokeWidth="2" />
        <path d="M8 10V7a6 6 0 0 1 12 0v3" stroke="#15564A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="17" r="2" fill="#15564A" />
        <path d="M20 14 l5-3 v8 l-5-3" stroke="#15564A" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Government ID + Biometric Selfie',
    body:  'Accepts passports, driver\'s licenses, and national IDs. Liveness detection prevents photo spoofing. Name and photo are extracted and compared automatically.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="24" height="16" rx="3" stroke="#15564A" strokeWidth="2" />
        <circle cx="9" cy="14" r="3.5" stroke="#15564A" strokeWidth="1.5" />
        <rect x="15" y="10" width="8" height="2" rx="1" fill="#15564A" opacity="0.5" />
        <rect x="15" y="14" width="5" height="2" rx="1" fill="#15564A" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: 'Live In-Meeting Face Match',
    body:  'A Dokimos ID bot joins at call start and silently performs a second biometric check — ensuring the person who verified is the same person on screen.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="12" r="5" stroke="#15564A" strokeWidth="2" />
        <path d="M6 24c0-4 3.6-7 8-7s8 3 8 7" stroke="#15564A" strokeWidth="2" strokeLinecap="round" />
        <path d="M21 7 l2 2 M23 7 l-2 2" stroke="#15564A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="20" r="4" fill="#15564A" />
        <path d="M20 20 l1.5 1.5 L23.5 18.5" stroke="#F4F1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Confidence-Scored PDF Report',
    body:  'Every interview generates an auditable report: ID scan, selfie comparison score, liveness result, and meeting-join timestamp. Ready for your compliance file.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="3" width="18" height="22" rx="3" stroke="#15564A" strokeWidth="2" />
        <path d="M9 9 h10 M9 13 h10 M9 17 h6" stroke="#15564A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" fill="#15564A" />
        <path d="M20.5 22 l1 1 L23 20.5" stroke="#F4F1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Auto-Expiring Biometric Data',
    body:  'Raw face templates and ID images are never stored permanently. Transient biometric artifacts are auto-deleted after 7 days. Only the verification outcome is retained.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10" stroke="#15564A" strokeWidth="2" />
        <path d="M14 8 v6 l4 4" stroke="#15564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6 L22 22" stroke="#15564A" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      </svg>
    ),
  },
  {
    title: 'SOC 2-Aligned Security',
    body:  'Built on AWS KMS encryption, least-privilege access controls, and audit logging throughout. Designed from day one for the compliance requirements of enterprise hiring teams.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3 L24 7 v8c0 6-4.5 10-10 12C8.5 25 4 21 4 15V7L14 3z" stroke="#15564A" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 14 l3 3 l5-6" stroke="#15564A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine mb-3">Features</p>
          <h2 className="font-display text-4xl font-bold text-ink text-balance">
            Every layer of the hiring handshake, verified.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-ink/8 hover:border-pine/30 hover:shadow-sm transition-all flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-pine/8 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
              <p className="font-body text-sm text-ink/65 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
