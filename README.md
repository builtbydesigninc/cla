# Clinic Launch Academy Website

Landing page for Clinic Launch Academy, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## What this repo is

Single-page marketing website composed of reusable section components:

- Header
- Hero
- Why CLA
- Course Modules
- Faculty
- Success Stories
- Comparison
- Money-Back Guarantee
- FAQ
- Book a Call
- Footer

The page composition lives in `app/page.tsx`.

## Tech stack

- Next.js `14.2.18`
- React `18`
- TypeScript `5`
- Tailwind CSS `3`
- Framer Motion
- Radix UI primitives

## Local development

### Prerequisites

- Node.js 18.17+ (Node 20 LTS recommended)
- npm (lockfile is `package-lock.json`)

### Install + run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Available scripts

```bash
npm run dev     # start local dev server
npm run lint    # run Next.js/ESLint checks
npm run build   # production build
npm run start   # run built app locally
```

## Project structure

```txt
app/
  layout.tsx        # Root layout, SEO metadata, tracking scripts
  page.tsx          # Home page section order/composition
  globals.css       # Global styles

components/
  Header.tsx
  Hero.tsx
  WhyCLA.tsx
  CourseModules.tsx
  Faculty.tsx
  SuccessStories.tsx
  Comparison.tsx
  MoneyBackGuarantee.tsx
  FAQ.tsx
  BookACall.tsx
  Footer.tsx
```

## Editing content quickly

- **Change section order**: edit `app/page.tsx`
- **Edit copy/UI for a section**: edit corresponding file in `components/`
- **Update SEO/social metadata**: edit `metadata` in `app/layout.tsx`
- **Update global styles/theme tokens**: edit `app/globals.css` and `tailwind.config.ts`

## Tracking + third-party scripts

`app/layout.tsx` currently includes:

- Meta Pixel bootstrap script
- ContentSquare script

If you need environment-specific IDs (staging vs prod), move those IDs to `NEXT_PUBLIC_*` environment variables and reference them in `layout.tsx`.

## Production build

```bash
npm run build
npm run start
```

## Deployment notes

This app is a standard Next.js app and can be deployed to Vercel or any Node host.

- Build command: `npm run build`
- Start command: `npm run start`
- Output: `.next/`

## Troubleshooting

- **Port already in use**: run `npm run dev -- -p 3001`
- **Type/lint issues before deploy**: run `npm run lint`
- **Clean install issues**:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## License

All rights reserved.

