# Harmonia 寰宇心流 — Website

East-West Life Wisdom Platform · harmoniawisdom.com

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **CMS:** Sanity.io
- **Hosting:** Vercel
- **Email:** Resend
- **Analytics:** GA4 + Plausible

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in: RESEND_API_KEY, SANITY_PROJECT_ID, NEXT_PUBLIC_SITE_URL

# 3. Run development server
npm run dev

# 4. Open browser
open http://localhost:3000
```

## Project Structure

```
harmonia-nextjs/
├── app/
│   ├── page.tsx              # Homepage
│   ├── pillars/page.tsx      # Five Pillars page
│   ├── courses/page.tsx      # Courses listing
│   ├── about/page.tsx        # About Richard
│   ├── blog/page.tsx         # Blog / Library
│   ├── shop/page.tsx         # Crystal Shop
│   ├── contact/page.tsx      # Contact
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # robots.txt
│   └── api/
│       ├── contact/route.ts  # Contact form handler
│       └── subscribe/route.ts# Newsletter subscription
├── components/
│   ├── layout/
│   │   ├── Nav.tsx           # Navigation with dropdowns
│   │   └── Footer.tsx        # Footer
│   ├── ui/
│   │   ├── Lotus.tsx         # Lotus SVG icon
│   │   ├── Divider.tsx       # Gold ornamental divider
│   │   └── StarRow.tsx       # Star rating row
│   └── seo/
│       └── JsonLd.tsx        # Structured data injector
├── lib/
│   ├── seo.ts                # Metadata builder
│   └── utils.ts              # Shared utilities + pillar data
├── styles/
│   └── globals.css           # Global styles + Tailwind
├── .env.example              # Environment variable template
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── vercel.json               # Vercel deployment config
```

## Deployment to Vercel

```bash
# Option A: Via CLI
npx vercel

# Option B: Via GitHub
# 1. Push to GitHub
# 2. Go to vercel.com → New Project
# 3. Import GitHub repo
# 4. Add environment variables in Vercel dashboard
# 5. Deploy
```

## Domain Setup (harmoniawisdom.com)

After deploying to Vercel:
1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `harmoniawisdom.com` and `www.harmoniawisdom.com`
3. Copy the CNAME/A records Vercel provides
4. Add those records in Cloudflare DNS dashboard
5. Wait 5–15 minutes for propagation

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | https://harmoniawisdom.com | Yes |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | For CMS |
| `NEXT_PUBLIC_SANITY_DATASET` | production | For CMS |
| `SANITY_API_TOKEN` | Sanity read token | For CMS |
| `RESEND_API_KEY` | Email service key | For forms |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 ID | For analytics |

## SEO

- Sitemap auto-generated at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- All pages have proper meta tags via `buildMetadata()`
- Organization schema on homepage
- hreflang tags for EN/ZH

Built with ♥ for Richard · Harmonia 寰宇心流
