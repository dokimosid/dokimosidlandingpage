import type { Metadata } from 'next'
import { Fraunces, Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dokimos ID — Identity Verification for Remote Hiring',
  description:
    'Stop interviewing impostors. Dokimos ID gates your interview link behind real-time government ID and biometric verification. A Fortress Reclaimed LLC product.',
  metadataBase: new URL('https://dokimosid.com'),
  openGraph: {
    title: 'Dokimos ID — Identity Verification for Remote Hiring',
    description: 'Proven genuine before the first hello.',
    url: 'https://dokimosid.com',
    siteName: 'Dokimos ID by Fortress Reclaimed LLC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dokimos ID — Identity Verification for Remote Hiring',
    description: 'Proven genuine before the first hello.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  )
}
