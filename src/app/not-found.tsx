import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found — Dokimos ID',
}

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        <section className="max-w-2xl mx-auto px-6 py-32 text-center flex flex-col items-center">
          {/* Shield mark with a question, echoing the brand */}
          <svg width="72" height="80" viewBox="0 0 48 56" fill="none" aria-hidden="true" className="mb-8">
            <path d="M24 2 L46 9 L46 26 C46 40 36 49 24 54 C12 49 2 40 2 26 L2 9 Z" fill="#15564A" />
            <path d="M19 21 a5 5 0 1 1 7 4.5 c-1.8 1-2 1.8-2 3.5" stroke="#F4F1EA" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="24" cy="37" r="2.2" fill="#F4F1EA" />
          </svg>

          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine mb-3">
            Error 404
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink text-balance leading-tight">
            This page couldn&apos;t be verified.
          </h1>
          <p className="font-body text-base text-ink/65 leading-relaxed mt-4 max-w-md">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
            back to somewhere real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="/"
              className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-pine text-paper font-body font-semibold hover:bg-pine-light transition-colors"
            >
              Back to home
            </a>
            <a
              href="/#waitlist"
              className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-pine/30 text-pine font-body font-semibold hover:border-pine hover:bg-pine/5 transition-colors"
            >
              Request early access
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
