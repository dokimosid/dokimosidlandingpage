import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

interface LegalLayoutProps {
  title:       string
  lastUpdated: string
  children:    React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Nav />
      <main className="bg-paper">
        <article className="max-w-2xl mx-auto px-6 py-24">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-pine mb-4">
            Legal
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink text-balance leading-tight">
            {title}
          </h1>
          <p className="font-body text-sm text-ink/50 mt-4">Last updated: {lastUpdated}</p>

          <div className="mt-10 flex flex-col gap-8">{children}</div>

          <hr className="my-12 border-ink/10" />
          <p className="font-body text-sm text-ink/60 leading-relaxed">
            Questions about this policy? Contact us at{' '}
            <a
              href="mailto:contact@dokimosid.com"
              className="text-pine font-semibold underline underline-offset-4 hover:text-pine-light transition-colors"
            >
              contact@dokimosid.com
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  )
}

export function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="font-display text-2xl font-bold text-ink">{heading}</h2>
      <div className="flex flex-col gap-3 font-body text-base text-ink/75 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
