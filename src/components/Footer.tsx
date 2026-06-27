import Logo from '@/components/Logo'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Contact', href: 'mailto:hello@dokimosid.com' },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-6 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-paper/10">
          {/* Brand block */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Logo variant="light" className="h-11 w-auto" />
            <p className="font-body text-xs text-paper/50 leading-relaxed">
              Identity verification for remote hiring. Gate your interview link. Match the face. Hire with confidence.
            </p>
            <p className="font-body text-xs text-paper/40">
              30 N Gould St Ste R<br />
              Sheridan, WY 82801<br />
              United States
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-paper/40">Company</p>
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-body text-sm text-paper/60 hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="font-body text-xs font-semibold tracking-widest uppercase text-paper/40">Get in Touch</p>
            <a href="mailto:hello@dokimosid.com" className="font-body text-sm text-paper/60 hover:text-paper transition-colors">
              hello@dokimosid.com
            </a>
            <a href="https://dokimosid.com" className="font-body text-sm text-paper/60 hover:text-paper transition-colors">
              dokimosid.com
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-body text-xs text-paper/40">
              © {new Date().getFullYear()} Fortress Reclaimed LLC. All rights reserved.
            </p>
            <p className="font-body text-xs text-paper/30">
              Dokimos ID is a trademark of Fortress Reclaimed LLC. All biometric data is processed in accordance with applicable privacy law.
            </p>
          </div>
          <p className="font-body text-xs text-paper/25 italic">
            Dokimos (δόκιμος) — Greek: proven genuine after testing.
          </p>
        </div>
      </div>
    </footer>
  )
}
