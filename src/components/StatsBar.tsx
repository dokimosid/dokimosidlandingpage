const stats = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#F4F1EA" opacity="0.15" />
        <path d="M8 22 L12 14 L17 18 L22 10 L26 16" stroke="#F4F1EA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="26" cy="16" r="2" fill="#F4F1EA" />
      </svg>
    ),
    stat:  '$600B',
    label: 'estimated annual cost of resume fraud to U.S. businesses (Crosschq, 2025)',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#F4F1EA" opacity="0.15" />
        <circle cx="16" cy="13" r="5" stroke="#F4F1EA" strokeWidth="2.5" />
        <path d="M8 26c0-4 3.6-7 8-7s8 3 8 7" stroke="#F4F1EA" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M23 9 L25 11" stroke="#F4F1EA" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 9 L23 11" stroke="#F4F1EA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    stat:  '1 in 4',
    label: 'candidate profiles will be fake by 2028, Gartner predicts',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#F4F1EA" opacity="0.15" />
        <rect x="9" y="8" width="14" height="18" rx="3" stroke="#F4F1EA" strokeWidth="2.5" />
        <path d="M12 14 h8 M12 18 h5" stroke="#F4F1EA" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="22" r="4" fill="#0e3d34" stroke="#F4F1EA" strokeWidth="2" />
        <path d="M20 22 l1.5 1.5 L23.5 20" stroke="#F4F1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    stat:  'Too late',
    label: 'background checks happen after the interview — you\'ve already wasted the time',
  },
]

export default function StatsBar() {
  return (
    <section className="bg-pine py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {stats.map((s) => (
          <div key={s.stat} className="flex flex-col items-start gap-3">
            {s.icon}
            <p className="font-display text-3xl font-bold text-paper">{s.stat}</p>
            <p className="font-body text-sm text-paper/75 leading-relaxed">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
