'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name:        string
  email:       string
  company:     string
  role:        string
  volume:      string
  challenge:   string
  platform:    string
  currentTool: string
  notes:       string
}

const INITIAL: FormData = {
  name: '', email: '', company: '', role: '', volume: '',
  challenge: '', platform: '', currentTool: '', notes: '',
}

const volumeOptions = [
  { value: '',        label: 'Monthly interview volume' },
  { value: 'under10', label: 'Fewer than 10 interviews/month' },
  { value: '10-50',   label: '10 – 50 interviews/month' },
  { value: '50-200',  label: '50 – 200 interviews/month' },
  { value: '200plus', label: '200+ interviews/month' },
]

const challengeOptions = [
  { value: '',            label: 'Biggest hiring challenge today' },
  { value: 'identity',    label: 'Candidates misrepresenting their identity' },
  { value: 'proxy',       label: 'Proxy interviews (someone else taking the call)' },
  { value: 'credentials', label: 'Verifying credentials & real experience' },
  { value: 'bgchecks',    label: 'Slow or costly background checks' },
  { value: 'compliance',  label: 'Compliance & audit requirements' },
  { value: 'other',       label: 'Something else' },
]

const platformOptions = [
  { value: '',      label: 'Primary interview platform' },
  { value: 'zoom',  label: 'Zoom' },
  { value: 'teams', label: 'Microsoft Teams' },
  { value: 'meet',  label: 'Google Meet' },
  { value: 'mixed', label: 'A mix / other' },
]

const currentToolOptions = [
  { value: '',         label: 'How do you verify candidates today?' },
  { value: 'none',     label: 'Nothing formal yet' },
  { value: 'manual',   label: 'Manual ID checks by our team' },
  { value: 'thirdpty', label: 'A third-party background-check service' },
  { value: 'inhouse',  label: 'An in-house / custom process' },
]

export default function WaitlistForm() {
  const [form, setForm]     = useState<FormData>(INITIAL)
  const [status, setStatus] = useState<FormState>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    if (!form.name || !form.email || !form.company || !form.role || !form.volume) return

    const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
    if (!formId) {
      console.error('Missing NEXT_PUBLIC_FORMSPREE_FORM_ID environment variable')
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full font-body text-sm text-ink bg-white border border-ink/15 rounded-md px-4 py-3 placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-pine/40 focus:border-pine transition-colors'

  return (
    <section id="waitlist" className="bg-pine py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <p className="font-body text-xs font-semibold tracking-widest uppercase text-paper/60 mb-3">
            Early Access
          </p>
          <h2 className="font-display text-4xl font-bold text-paper text-balance mb-3">
            Be the first to verify.
          </h2>
          <p className="font-body text-base text-paper/70 leading-relaxed">
            We&apos;re onboarding a limited number of early customers. Join the waitlist and we&apos;ll reach out as soon as early access opens.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-paper/10 border border-paper/20 rounded-xl px-8 py-12 text-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4" aria-hidden="true">
              <circle cx="24" cy="24" r="24" fill="rgba(244,241,234,0.2)" />
              <path d="M14 24 l7 7 L34 16" stroke="#F4F1EA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="font-display text-2xl font-bold text-paper mb-2">You&apos;re on the list.</h3>
            <p className="font-body text-sm text-paper/70">We&apos;ll reach out as soon as early access opens to get you set up.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Work Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Work Email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="sr-only">Company Name</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="role" className="sr-only">Your Role</label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="Your Role (e.g. Head of Talent)"
                  value={form.role}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="volume" className="sr-only">Monthly Interview Volume</label>
              <select
                id="volume"
                name="volume"
                value={form.volume}
                onChange={handleChange}
                className={`${inputClass} ${!form.volume ? 'text-ink/35' : 'text-ink'}`}
                required
              >
                {volumeOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={!o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="challenge" className="sr-only">Biggest hiring challenge</label>
                <select
                  id="challenge"
                  name="challenge"
                  value={form.challenge}
                  onChange={handleChange}
                  className={`${inputClass} ${!form.challenge ? 'text-ink/35' : 'text-ink'}`}
                >
                  {challengeOptions.map((o) => (
                    <option key={o.value} value={o.value} disabled={!o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="platform" className="sr-only">Primary interview platform</label>
                <select
                  id="platform"
                  name="platform"
                  value={form.platform}
                  onChange={handleChange}
                  className={`${inputClass} ${!form.platform ? 'text-ink/35' : 'text-ink'}`}
                >
                  {platformOptions.map((o) => (
                    <option key={o.value} value={o.value} disabled={!o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="currentTool" className="sr-only">Current verification method</label>
              <select
                id="currentTool"
                name="currentTool"
                value={form.currentTool}
                onChange={handleChange}
                className={`${inputClass} ${!form.currentTool ? 'text-ink/35' : 'text-ink'}`}
              >
                {currentToolOptions.map((o) => (
                  <option key={o.value} value={o.value} disabled={!o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="sr-only">What matters most to you</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="What would make verification a must-have for your team? (optional)"
                value={form.notes}
                onChange={handleChange}
                rows={3}
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'error' && (
              <p className="font-body text-sm text-red-300 text-center">
                Something went wrong. Email us directly at{' '}
                <a href="mailto:hello@dokimosid.com" className="underline">hello@dokimosid.com</a>
              </p>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="mt-2 w-full inline-flex justify-center items-center gap-2 px-6 py-4 rounded-md bg-paper text-pine font-body font-bold text-base hover:bg-paper/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Join the waitlist"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-pine" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
                  </svg>
                  Submitting…
                </>
              ) : (
                'Join the Waitlist'
              )}
            </button>
            <p className="text-center font-body text-xs text-paper/40">
              A Fortress Reclaimed LLC product. No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
