'use client'

import { useState } from 'react'
import Logo from '@/components/Logo'

const links = [
  { label: 'Features',     href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing',      href: '/#pricing' },
  { label: 'About',        href: '/about' },
  { label: 'Contact',      href: '/#waitlist' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-pine shadow-md">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="Dokimos ID — home">
          <Logo variant="light" className="h-9 w-auto" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm font-medium text-paper/80 hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/#waitlist"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-paper text-pine font-body font-semibold text-sm hover:bg-paper/90 transition-colors"
        >
          Request Early Access
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-paper"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-pine-dim px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-base font-medium text-paper/80 hover:text-paper py-2 border-b border-paper/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#waitlist"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center items-center px-4 py-3 rounded-md bg-paper text-pine font-body font-semibold text-sm"
          >
            Request Early Access
          </a>
        </div>
      )}
    </header>
  )
}
