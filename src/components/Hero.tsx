export default function Hero() {
  return (
    <section className="bg-paper pt-20 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-pine/10 text-pine text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-pine inline-block" />
            Now in Early Access
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-ink leading-tight text-balance mb-6">
            Stop Interviewing<br />
            <span className="text-pine">Impostors.</span>
          </h1>
          <p className="font-body text-lg text-ink/70 leading-relaxed mb-8 text-balance">
            Dokimos ID withholds your Zoom or Teams interview link until the candidate proves they are who they say they are — government ID checked, face matched, confidence score on file before you spend a minute of your time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#waitlist"
              className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-pine text-paper font-body font-semibold hover:bg-pine-light transition-colors"
            >
              Request Early Access
            </a>
            <a
              href="#how-it-works"
              className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-pine/30 text-pine font-body font-semibold hover:border-pine hover:bg-pine/5 transition-colors"
            >
              See how it works ↓
            </a>
          </div>
        </div>

        {/* SVG Illustration */}
        <div className="flex justify-center">
          <svg
            viewBox="0 0 420 340"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-md"
            aria-label="Identity verified video call illustration"
          >
            {/* Video call frame */}
            <rect x="30" y="40" width="360" height="220" rx="16" fill="#fff" stroke="#15564A" strokeWidth="2.5" />
            
            {/* Top bar */}
            <rect x="30" y="40" width="360" height="44" rx="16" fill="#15564A" />
            <rect x="30" y="68" width="360" height="16" fill="#15564A" />
            <circle cx="58" cy="62" r="6" fill="#F4F1EA" opacity="0.5" />
            <circle cx="78" cy="62" r="6" fill="#F4F1EA" opacity="0.5" />
            <text x="105" y="67" fontFamily="system-ui" fontSize="11" fill="#F4F1EA" opacity="0.8">Interview Room · Dokimos ID</text>

            {/* Candidate tile — blurred/locked */}
            <rect x="50" y="100" width="145" height="140" rx="10" fill="#e8e4dd" />
            <rect x="50" y="100" width="145" height="140" rx="10" fill="#15564A" opacity="0.08" />
            <circle cx="122" cy="148" r="28" fill="#c5bfb5" />
            <rect x="88" y="185" width="70" height="40" rx="8" fill="#c5bfb5" />
            {/* Lock icon overlay */}
            <rect x="104" y="218" width="36" height="28" rx="4" fill="#15564A" opacity="0.85" />
            <path d="M116 218v-6a6 6 0 0 1 12 0v6" stroke="#F4F1EA" strokeWidth="2.5" fill="none" />
            <circle cx="122" cy="230" r="3" fill="#F4F1EA" />
            <text x="69" y="255" fontFamily="system-ui" fontSize="9" fill="#15564A" fontWeight="600">Awaiting Verification</text>

            {/* Interviewer tile */}
            <rect x="210" y="100" width="150" height="140" rx="10" fill="#d4ede8" />
            <circle cx="285" cy="150" r="30" fill="#15564A" opacity="0.3" />
            <circle cx="285" cy="138" r="16" fill="#15564A" opacity="0.5" />
            <rect x="255" y="162" width="60" height="60" rx="30" fill="#15564A" opacity="0.4" />
            <text x="248" y="254" fontFamily="system-ui" fontSize="9" fill="#15564A" fontWeight="600">Hiring Manager</text>

            {/* Verified badge */}
            <circle cx="316" cy="107" r="22" fill="#15564A" />
            <path d="M306 107 l7 7 l13-13" stroke="#F4F1EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

            {/* Confidence score pill */}
            <rect x="108" y="278" width="204" height="36" rx="18" fill="#15564A" />
            <text x="147" y="301" fontFamily="system-ui" fontSize="12" fill="#F4F1EA" fontWeight="700">Identity Match: 98.4%</text>

            {/* Small ID card icon bottom-left */}
            <rect x="50" y="278" width="46" height="32" rx="5" fill="#F4F1EA" stroke="#15564A" strokeWidth="1.5" />
            <circle cx="62" cy="290" r="5" fill="#15564A" opacity="0.4" />
            <rect x="71" y="287" width="18" height="2.5" rx="1" fill="#15564A" opacity="0.4" />
            <rect x="71" y="293" width="12" height="2" rx="1" fill="#15564A" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
