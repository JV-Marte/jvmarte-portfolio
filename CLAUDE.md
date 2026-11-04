# JV Portfolio — Project Guide

Personal portfolio site for **John Vincent Marte (JV)**, positioned primarily as a **Virtual Assistant & Business Support** partner, with four
services for small business owners: **web development, web design, automation,
and business support** (CRM, spreadsheets, bookkeeping).

Live at **https://jvmarteportfolio.com** · repo **JV-Marte/jvmarte-portfolio**.

> Current direction: warm editorial design (November 2026). See `AGENTS.md` for current positioning, design tokens, and project conventions.

---

## Tech stack

- **Next.js 15 (App Router)** + **React 19**, plain `.jsx` (no TypeScript here).
- **Static export**: `next.config.mjs` sets `output: "export"` → `next build`
  emits `./out`. `images.unoptimized`, `trailingSlash: true`.
- **EmailJS** (`@emailjs/browser`) for the contact form (client-side, public keys).
- **Google Fonts** via `next/font`: Archivo (variable weight + `wdth` axis)
  as `--font-sans` on `<html>`, with system Georgia italic for heading emphasis.
- **Icons**: `@phosphor-icons/react` only. Server components import from
  `@phosphor-icons/react/dist/ssr`, client components from the package root.
  Don't hand-draw SVG icons or use text glyphs (→ ✓ ✕) as icons.
- No CSS framework — one hand-written stylesheet (`app/globals.css`).

## Project structure

- `app/layout.jsx` — Archivo font, `<head>` metadata, JSON-LD structured data.
- `app/page.jsx` — the single-page homepage: split hero with a natural edited portrait,
  selected work, services grid, pricing (tiers + includes + ongoing support), toolbox, contact. Kept deliberately short; long-form project detail lives on the
  case-study pages.
- `app/work/[slug]/page.jsx` — **case-study pages** (`/work/<slug>`), rendered
  data-driven from `projects` via `generateStaticParams` + `generateMetadata`.
  Only projects with `outcomes` get a page (see `lib/content.js`).
- `app/globals.css` — the entire theme (tokens in `:root`, then per-section).
- `app/icon.svg` — favicon (ivory "JV" on a rounded burnt-orange tile; Next auto-wires it).
- `app/robots.js`, `app/sitemap.js` — static robots.txt + sitemap (the sitemap
  enumerates the case-study routes).
- `components/` — `Nav.jsx` (fixed nav + scroll-spy + mobile off-canvas menu +
  "Book a call" Calendly CTA; watches the `#top` sentinel instead of a scroll
  listener), `Logo.jsx` + `Footer.jsx` (shared by home and case pages),
  `Reveal.jsx` (IntersectionObserver fade-in), `ContactForm.jsx` (EmailJS),
  `WorkGrid.jsx` (the work section in three layouts: client lead row,
  asymmetric web grid, tabular automations index), `CopyEmail.jsx`,
  `ProjectPreview.jsx` (16:9 screenshot frame, case pages), `Gallery.jsx`
  (thumbnails + lightbox, case pages).
- `lib/content.js` — **all site copy + config**: `site` (contact/socials),
  `services` (the four pillars), `toolLevels`, `projects`, plus `badgeKey()` /
  `projectBySlug()` helpers. See `SCREENSHOT_GUIDE.md` for adding images/résumé.
- `public/assets/` — portrait (`jv-portrait.webp` is the 800×1000 hero crop;
  `jv-photo.png` stays for OG/social) + project screenshots (tool logos exist
  but are unused; the toolbox is type-only). `public/CNAME` (custom
  domain) and `public/.nojekyll` are copied into `out/` on build.
- `.github/workflows/deploy.yml` — CI build + deploy to GitHub Pages.

## Editing content

Prefer editing **`lib/content.js`** — copy is data-driven, so most text/section
changes need no markup edits. Notable shapes:

- `projects[]`: `{ slug, type, status, featured, category, title, blurb,
  problem, built, role[], features[], outcomes[], challenges[], stack[], url?,
  image? }`. `featured` projects appear in the homepage work section: client
  projects lead as a full-width row, `category: "web"` fills the asymmetric
  grid, `category: "automation"` goes in the Automations index. Non-featured
  projects fall to the compact "More builds" list. Titles are written
  `"Name · Kind"` and split into two lines on cards. Projects with `outcomes`
  get a `/work/<slug>` case study.
- `serviceCodes` in `app/page.jsx` maps each service title to the short
  unit code printed beside its row (`WEB/DEV`); add one when adding a service.
- `toolLevels[]`: honest proficiency levels (`Daily drivers` / `Working
  knowledge`) — no percentages or progress bars. Daily drivers render in
  large type, working knowledge in smaller muted type.
- Hero/contact copy lives inline in `app/page.jsx`; shared links live in
  `site` in `lib/content.js`.
- **Copy voice**: plain, confident, client-focused, no em dashes ("·" separates
  title parts), no invented metrics or testimonials. Only CC Source is a
  confirmed client engagement.
- **Résumé**: `public/JV-Marte-Resume.pdf` exists and is linked from the nav
  and the contact actions (see the comment on `site` for how to regenerate it).
- **One label per intent**: every scheduling CTA says "Book a call" (Calendly),
  "See the work" is the only portfolio CTA. Don't add "Let's talk" /
  "Get in touch" variants.

## Design system (warm editorial)

- Warm ivory `--paper` (#faf8f3), dark olive charcoal `--ink` (#242821), and burnt orange `--red` (#c34420). The legacy token name `--red` now means the orange accent; `--red-ink` is the darker accessible text variant.
- Archivo for UI and body copy; Georgia italic for emphasized heading phrases. Sentence case, generous spacing, no equipment-manual or barcode styling.
- Hero: split layout, large headline, identity-preserving edited portrait (`jv-portrait-editorial.webp`) with an arched frame, caption, and small static note. Natural color, no halftone filter.
- Project proof leads after the hero. CC Source is the client feature; web builds use two-column rounded screenshot cards; automation examples use rounded rows. Preserve truthful project type labels and distinct badge markers.
- Services use a pale sage section with a two-column grid. Pricing uses rounded cards with one dark sage featured tier. Contact sits on warm sand, with rounded light form fields.
- Shared theme lives in `app/globals.css`; the editorial surface layer at the end overrides the reusable component layouts. Homepage and case studies share the same tokens and navigation.
- Effects remain restrained: scroll reveals and small image hover zooms. Honor `prefers-reduced-motion`, preserve visible focus outlines, and keep touch targets usable.
- The new portrait was edited with the built-in image tool: preserve likeness; charcoal overshirt over an off-white crewneck; warm ivory backdrop; soft natural lighting. Do not replace the source photo in Photos Library.

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
  (`html, body { overflow-x: clip }` guards the off-canvas menu; `clip`, not
  `hidden`, so `position: sticky` keeps working).
- Nav anchors use `/#section` so they work from case-study pages too.
- Match the surrounding code style; comment non-obvious sections.
- Keep copy client-focused and confident; lead with business value.
