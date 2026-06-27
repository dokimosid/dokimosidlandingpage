# Deploying Dokimos ID Landing Page

## Prerequisites
- Node.js 18+
- GitHub account
- Vercel account (free tier works)

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Push to GitHub

```bash
git init
git add .
git commit -m "feat: initial Dokimos ID landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/dokimosid-landing.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `dokimosid-landing` GitHub repo
3. Framework: Next.js (auto-detected)
4. No environment variables needed at launch
5. Click **Deploy**

## Custom Domain (dokimosid.com)

In Vercel → Project → Settings → Domains, add `dokimosid.com` and `www.dokimosid.com`.

Then in your DNS provider:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 76.76.21.21            |
| CNAME | www  | cname.vercel-dns.com   |

DNS propagation takes 5–30 minutes.

## Stripe Compliance Note

Stripe will see:
- `https://dokimosid.com` as the business website
- The TrustStrip section explicitly states: *"Dokimos ID is a product of Fortress Reclaimed LLC"*
- The Footer states: *"© Fortress Reclaimed LLC. All rights reserved."* with the Wyoming address
- This satisfies Stripe's requirement that the website match the business name on file

## Next Steps After Launch

- Wire up `/waitlist` API route in the main Dokimos ID app (Hardik)
- Add `/privacy` and `/terms` pages
- Connect Stripe Billing once Stripe onboarding is approved
- Merge this repo into the main dokimosid monorepo or keep as separate Vercel project
