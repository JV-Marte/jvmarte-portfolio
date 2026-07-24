# JV Portfolio — Project Guide

Personal portfolio site for **John Vincent Marte (JV)**, positioned around four
services for small business owners: **web development, web design, automation,
and business support** (CRM, spreadsheets, bookkeeping).

Live at **https://jvmarteportfolio.com** · repo **JV-Marte/jvmarte-portfolio**.

> Note: this file describes the project as it is built. The site started as a
> static HTML page, became a Next.js app with a hand-drawn theme, and was
> redesigned in July 2026 into the current clean/bright theme. If you change
> direction (positioning, design language, stack), update this file.

---

## Tech stack

- **Next.js 15 (App Router)** + **React 19**, plain `.jsx` (no TypeScript here).
- **Static export**: `next.config.mjs` sets `output: "export"` → `next build`
  emits `./out`. `images.unoptimized`, `trailingSlash: true`.
- **EmailJS** (`@emailjs/browser`) for the contact form (client-side, public keys).
- **Google Fonts** via `next/font`: Inter only (weights 400–800), exposed as
  `--font-sans` on `<html>`.
- No CSS framework — one hand-written stylesheet (`app/globals.css`).

## Project structure

- `app/layout.jsx` — Inter font, `<head>` metadata, JSON-LD structured data.
- `app/page.jsx` — the single-page homepage (hero with portrait, services,
  work grid + "More builds", toolbox chips, contact panel, footer). Kept
  deliberately short; long-form project detail lives on the case-study pages.
- `app/work/[slug]/page.jsx` — **case-study pages** (`/work/<slug>`), rendered
  data-driven from `projects` via `generateStaticParams` + `generateMetadata`.
  Only projects with `outcomes` get a page (see `lib/content.js`).
- `app/globals.css` — the entire theme (tokens in `:root`, then per-section).
- `app/icon.svg` — favicon (white "JV" on a blue rounded tile; Next auto-wires it).
- `app/robots.js`, `app/sitemap.js` — static robots.txt + sitemap (the sitemap
  enumerates the case-study routes).
- `components/` — `Nav.jsx` (fixed nav + scroll-spy + mobile off-canvas menu +
  "Book a call" Calendly CTA), `Reveal.jsx` (IntersectionObserver fade-in),
  `ContactForm.jsx` (EmailJS), `WorkGrid.jsx` (two-column featured project
  cards), `CopyEmail.jsx` (copy-to-clipboard), `ProjectPreview.jsx` (16:9
  screenshot frame, used on case pages), `Gallery.jsx` (lightbox, case pages).
- `lib/content.js` — **all site copy + config**: `site` (contact/socials),
  `services` (the four pillars), `toolLevels`, `projects`, plus `badgeKey()` /
  `projectBySlug()` helpers. See `SCREENSHOT_GUIDE.md` for adding images/résumé.
- `public/assets/` — portrait + project screenshots (tool logos exist but are
  currently unused — the toolbox renders text chips). `public/CNAME` (custom
  domain) and `public/.nojekyll` are copied into `out/` on build.
- `.github/workflows/deploy.yml` — CI build + deploy to GitHub Pages.

## Editing content

Prefer editing **`lib/content.js`** — copy is data-driven, so most text/section
changes need no markup edits. Notable shapes:

- `projects[]`: `{ slug, type, status, featured, title, blurb, problem, built,
  role[], features[], outcomes[], challenges[], stack[], url?, image? }`.
  `featured` projects appear in the homepage work grid (cards show `blurb`,
  stack, and links only); the rest fall to the compact "More builds" list.
  Projects with `outcomes` get a `/work/<slug>` case study.
- `toolLevels[]`: honest proficiency levels (`Daily drivers` / `Working
  knowledge`) — no percentages or progress bars. Daily drivers render as
  highlighted chips.
- Hero/contact copy lives inline in `app/page.jsx`; shared links live in
  `site` in `lib/content.js`.
- **Copy voice**: plain, confident, client-focused, no em dashes ("·" separates
  title parts), no invented metrics or testimonials. Only CC Source is a
  confirmed client engagement.
- **Résumé**: `site.resumeUrl` points at a PDF that does not exist yet, so no
  page renders a download button. Add `public/JV-Marte-Resume.pdf`, then add
  the button back (nav / contact) if wanted.

## Design system (clean & bright)

Keep this aesthetic consistent for any new UI:

- **Palette** (CSS vars in `:root`): white `--bg`, `--bg-soft` alternating
  section tint, slate `--ink` / `--ink-soft`, blue `--accent` `#2563eb`, and
  one gradient `--grad` (blue → violet) used only for `<em>` words in headings
  and the hero photo glow.
- **Type**: Inter everywhere; hierarchy comes from weight (800 headings,
  negative tracking) and size, not extra typefaces.
- **Surfaces**: cards are white with a 1px `--line` border, `--r` radius, and
  a soft shadow on hover; buttons and chips are pills.
- **Effects — deliberately restrained**: scroll reveals (`Reveal`), hover
  lifts, image zoom inside project cards, pulsing availability dot, faint
  masked grid + colour glow in the hero. Don't add more than this.
- **Badges**: project type is never colour alone — the label names the type
  and each type keeps a distinct dot shape (round / square / hollow).
- **Accessibility**: honor `prefers-reduced-motion` — it disables `Reveal`,
  the pulse, and hover transforms. Add reduced-motion fallbacks for any new
  animation. Keep visible `:focus-visible` outlines.

## Dev & deploy

```bash
npm run dev     # local dev on http://localhost:3001 (Turbopack)
npm run build   # static export to ./out
```

- **Do NOT run `npm run build` while `npm run dev` is running** — both write to
  `.next` and corrupt each other (causes 500s / ENOENT). Fix: stop dev,
  `rm -rf .next`, restart.
- **Deploy is automatic**: every push to `main` triggers
  `.github/workflows/deploy.yml` → `npm ci` → `npm run build` → publishes `out/`
  to GitHub Pages. No need to build locally before pushing.
- GitHub Pages **Source must be "GitHub Actions"** (Settings → Pages), not
  "deploy from a branch" — branch mode 404s because there's no root `index.html`.
- Custom domain is preserved via `public/CNAME` (`jvmarteportfolio.com`).

## Conventions

- Mobile-first / responsive; verify no horizontal overflow on small screens
  (`html, body { overflow-x: hidden }` guards the off-canvas menu).
- Nav anchors use `/#section` so they work from case-study pages too.
- Match the surrounding code style; comment non-obvious sections.
- Keep copy client-focused and confident; lead with business value.
