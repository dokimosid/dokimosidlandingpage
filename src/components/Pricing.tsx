const tiers = [
  {
    name:        'Starter',
    price:       'TBA',
    period:      '',
    description: 'For small teams and individual recruiters getting started with verified hiring.',
    volume:      'Up to 10 verifications/month',
    features: [
      'Gated Zoom & Teams links',
      'Government ID + biometric selfie check',
      'Confidence-scored PDF report',
      'Email support',
      '7-day biometric auto-deletion',
    ],
    cta:         'Get Started',
    highlighted: false,
  },
  {
    name:        'Professional',
    price:       'TBA',
    period:      '',
    description: 'For growing hiring teams running consistent interview pipelines.',
    volume:      'Up to 75 verifications/month',
    features: [
      'Everything in Starter',
      'Live in-meeting face match via bot',
      'Bulk link generation',
      'Team seat management',
      'Priority email support',
      'Audit log export',
    ],
    cta:         'Get Started',
    highlighted: true,
  },
  {
    name:        'Enterprise',
    price:       'TBA',
    period:      '',
    description: 'For staffing agencies and enterprise HR teams with high-volume needs.',
    volume:      'Unlimited verifications',
    features: [
      'Everything in Professional',
      'Dedicated onboarding call',
      'Custom SLA & uptime guarantee',
      'SSO / SAML support',
      'API access for ATS integrations',
      'Quarterly compliance review',
    ],
    cta:         'Contact Us',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine mb-3">Pricing</p>
          <h2 className="font-display text-4xl font-bold text-ink text-balance">
            Simple pricing. No per-seat surprises.
          </h2>
          <p className="font-body text-base text-ink/60 mt-3">
            No ATS required. Works with your existing Zoom or Teams account from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl p-8 flex flex-col gap-6 ${
                t.highlighted
                  ? 'bg-pine text-paper border-2 border-pine shadow-xl scale-[1.03]'
                  : 'bg-white border border-ink/10'
              }`}
            >
              {t.highlighted && (
                <div className="inline-flex self-start px-3 py-1 rounded-full bg-paper/20 text-paper text-xs font-body font-semibold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              <div>
                <p className={`font-body text-sm font-semibold ${t.highlighted ? 'text-paper/70' : 'text-ink/50'}`}>
                  {t.name}
                </p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display text-4xl font-bold">{t.price}</span>
                  <span className={`font-body text-sm ${t.highlighted ? 'text-paper/60' : 'text-ink/50'}`}>{t.period}</span>
                </div>
                <p className={`font-body text-xs mt-1 ${t.highlighted ? 'text-paper/60' : 'text-ink/50'}`}>
                  Pricing to be announced
                </p>
                <p className={`font-body text-xs mt-1 ${t.highlighted ? 'text-paper/60' : 'text-ink/50'}`}>
                  {t.volume}
                </p>
              </div>

              <p className={`font-body text-sm leading-relaxed ${t.highlighted ? 'text-paper/80' : 'text-ink/65'}`}>
                {t.description}
              </p>

              <ul className="flex flex-col gap-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                      <circle cx="9" cy="9" r="9" fill={t.highlighted ? 'rgba(244,241,234,0.2)' : 'rgba(21,86,74,0.1)'} />
                      <path d="M5.5 9 l2.5 2.5 L12.5 6" stroke={t.highlighted ? '#F4F1EA' : '#15564A'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`font-body text-sm ${t.highlighted ? 'text-paper/85' : 'text-ink/70'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#waitlist"
                className={`mt-auto inline-flex justify-center items-center px-5 py-3 rounded-md font-body font-semibold text-sm transition-colors ${
                  t.highlighted
                    ? 'bg-paper text-pine hover:bg-paper/90'
                    : 'bg-pine text-paper hover:bg-pine-light'
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-xs text-ink/40 mt-8">
          Final pricing is being finalized and will be announced soon. Join the waitlist for early-access rates.
        </p>
      </div>
    </section>
  )
}
