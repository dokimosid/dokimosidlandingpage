import type { Metadata } from 'next'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About — Dokimos ID',
  description:
    'Fortress Reclaimed LLC is a Wyoming-based cybersecurity company built by veterans and security professionals. Dokimos ID is our flagship identity-verification product for remote hiring.',
}

export default function About() {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        <article className="max-w-2xl mx-auto px-6 py-24">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine mb-4">
            About
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink text-balance leading-tight">
            We build security software for the way people actually work now.
          </h1>

          <div className="mt-10 flex flex-col gap-6 font-body text-lg text-ink/75 leading-relaxed">
            <p>
              <span className="text-pine font-semibold">Fortress Reclaimed LLC</span> is a
              Wyoming-based cybersecurity company built by veterans and security professionals.
              We build tools that close the gaps that emerge when work goes remote.
            </p>
            <p>
              Dokimos ID is our flagship product — identity verification for remote hiring. It
              gates your interview link behind a real-time government ID and biometric check, so
              the person who shows up to your call is the person who applied.
            </p>
            <p>
              The name: Dokimos (δόκιμος) is ancient Greek for &ldquo;proven genuine after
              testing.&rdquo; That&apos;s the standard we build to.
            </p>
          </div>

          <hr className="my-12 border-ink/10" />

          <ul className="flex flex-col gap-3 font-body text-base text-ink/70">
            <li className="flex items-start gap-3">
              <span className="text-pine font-semibold" aria-hidden="true">—</span>
              <span>Founded 2024 · Sheridan, Wyoming</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pine font-semibold" aria-hidden="true">—</span>
              <span>Operated by veterans and certified security professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pine font-semibold" aria-hidden="true">—</span>
              <span>
                Dokimos ID is a product of{' '}
                <span className="text-pine font-semibold">Fortress Reclaimed LLC</span>
              </span>
            </li>
          </ul>

          <hr className="my-12 border-ink/10" />

          <p className="font-body text-base text-ink/70">
            Questions?{' '}
            <a
              href="mailto:contact@dokimosid.com"
              className="text-pine font-semibold underline underline-offset-4 hover:text-pine-light transition-colors"
            >
              contact@dokimosid.com
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}
