# Deepanshu Singh — Portfolio

Premium portfolio website for **Deepanshu Singh**, Amazon Connect & AI Engineer.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

## Add Resume

Place your resume PDF at `public/resume.pdf` — the Download Resume button will serve it automatically.

## Customization

| File | Purpose |
|------|---------|
| `src/components/Hero.tsx` | Hero section & typing animation |
| `src/components/About.tsx` | About section & metrics |
| `src/components/Projects.tsx` | Project cards |
| `src/components/Experience.tsx` | Timeline |
| `src/components/Skills.tsx` | Skill tags |
| `src/components/Certifications.tsx` | Cert cards |
| `src/components/Contact.tsx` | Contact form & links |
| `src/app/layout.tsx` | SEO metadata & OG tags |

## Environment Variables (Optional)

For contact form email delivery, add to `.env.local`:
```
RESEND_API_KEY=your_key_here
```

Then update `Contact.tsx` to POST to an API route using Resend or Nodemailer.
