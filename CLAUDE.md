# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing site for **Dokimos ID**, an identity-verification product for remote hiring, by **Fortress Reclaimed LLC** (Wyoming). Next.js 14 (App Router) + TypeScript + Tailwind, deployed on Vercel. This is a static marketing site — there is no backend or database here; the only outbound integration is the waitlist form.

## Commands

```bash
npm install       # install deps (required: next.config is .mjs — Next 14 rejects next.config.ts)
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
npm run lint      # eslint (eslint-config-next)
```

There is no test suite.

## Environment

- `NEXT_PUBLIC_FORMSPREE_FORM_ID` — required for the waitlist form to submit. Kept in `.env.local` (gitignored); template in `.env.example`. Because it is `NEXT_PUBLIC_`, it ships to the browser and **must also be set in Vercel** for production. Restart `npm run dev` after changing it.

## Architecture

- **App Router, `src/` layout.** Import alias `@/*` → `./src/*`.
- **`src/app/layout.tsx`** is the only shared shell: it loads the Google fonts (Fraunces → `--font-fraunces`, Hanken Grotesk → `--font-hanken`) and sets default metadata. Individual pages export their own `metadata`.
- **Home page (`src/app/page.tsx`)** is a fixed vertical composition of section components from `src/components/` (`Hero`, `StatsBar`, `HowItWorks`, `Features`, `Pricing`, `TrustStrip`, `WaitlistForm`), wrapped in shared `Nav` + `Footer`. Editing landing content = editing the corresponding section component; most carry their data in a local array at the top of the file (e.g. `Pricing` tiers, `Features` list, `StatsBar` stats).
- **Other routes:** `/about`, `/privacy`, `/terms`, plus a custom `not-found.tsx` (404). Legal pages share `src/components/LegalLayout.tsx` (which also exports a `Section` helper). All routes reuse `Nav` and `Footer`.
- **`Nav`/`Footer` are shared across every page.** Nav links are root-relative (`/#features`, `/#waitlist`, `/about`) so in-page anchors work from any route, not just home. New top-level pages should be linked from `Footer` (`footerLinks`) and/or `Nav` (`links`).
- **Logo** (`src/components/Logo.tsx`) is a single inline-SVG component with a `variant` prop: `dark` (default, for the Paper background) and `light` (for the Pine/Ink backgrounds in Nav and Footer). Use the `light` variant on any dark surface.
- **Favicon** is `src/app/icon.svg`; Next serves it and injects the link tag automatically.

## Design system

Consistency across pages matters — mirror the existing components rather than introducing new patterns.

- **Colors** (Tailwind + CSS vars): `pine #15564A`, `pine-light #1d7363`, `pine-dim #0e3d34`, `paper #F4F1EA` (page background), `ink #1A1813` (text). Defined in both `tailwind.config.ts` and `src/app/globals.css`.
- **Fonts:** `font-display` (Fraunces serif) for headings, `font-body` (Hanken Grotesk) for everything else. `h1–h4` default to the display font via `globals.css`.
- **Fortress Reclaimed LLC** should always render in Pine (`text-pine`) wherever the name appears.
- Sections follow a `max-w-6xl mx-auto px-6` container with generous vertical padding; prose/legal pages use `max-w-2xl`.

## Waitlist form

`src/components/WaitlistForm.tsx` (client component) POSTs JSON to `https://formspree.io/f/${NEXT_PUBLIC_FORMSPREE_FORM_ID}` with `Accept: application/json`. Required fields (name, email, company, role, volume) are validated before submit; discovery fields (challenge, platform, currentTool, notes) are optional. Field `name` attributes are what appear in the Formspree dashboard — keep them meaningful.

## Content accuracy

Statistics in `StatsBar` are public-facing claims and must be sourced/defensible (the copy carries attributions like "Gartner" / "Crosschq"). Do not introduce unsourced numbers. The **Privacy Policy and Terms are templates** matching the product's described behavior (e.g. 7-day biometric deletion, SOC 2-*aligned* — not certified) and require legal review before relying on them; keep wording consistent with what the site actually claims.

## Deploy

Vercel (`vercel.json` pins framework/build). Production domain `dokimosid.com`. See `DEPLOY.md` for DNS records and the Stripe business-name-match note (the TrustStrip + Footer attribution to Fortress Reclaimed LLC is intentional and satisfies that requirement — don't remove it).
