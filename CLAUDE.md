# JV Portfolio — Project Guide

Personal portfolio site for **John Vincent Marte (JV)**, positioned as a
**Virtual Assistant** for business owners — handling CRM, web development,
automation, and bookkeeping so the day-to-day runs without the owner.

Live at **https://jvmarteportfolio.com** · repo **JV-Marte/jvmarte-portfolio**.

> Note: this file describes the project as it is built. The site was originally
> a static HTML page; it is now a Next.js app with a hand-drawn theme. If you
> change direction (positioning, design language, stack), update this file.

---

## Tech stack

- **Next.js 15 (App Router)** + **React 19**, plain `.jsx` (no TypeScript here).
- **Static export**: `next.config.mjs` sets `output: "export"` → `next build`
  emits `./out`. `images.unoptimized`, `trailingSlash: true`.
- **EmailJS** (`@emailjs/browser`) for the contact form (client-side, public keys).
- **Google Fonts** via `next/font`: Caveat, Patrick Hand, Kalam.
- No CSS framework — one hand-written stylesheet (`app/globals.css`).

## Project structure

- `app/layout.jsx` — fonts, `<head>` metadata, and the **global inline SVG
  `<filter>` defs** (`#wobble`, `#wobble-strong`) used for hand-drawn borders.
- `app/page.jsx` — the whole single-page site (hero, about, services, work,
  tools, why, contact, footer).
- `app/globals.css` — the entire hand-drawn theme.
- `app/icon.svg` — favicon (hand-drawn "JV." monogram; Next auto-wires it).
- `components/` — `Nav.jsx` (sticky nav + mobile off-canvas menu),
  `Reveal.jsx` (IntersectionObserver fade-in wrapper), `ContactForm.jsx` (EmailJS).
- `lib/content.js` — **all site copy**: `services`, `tools`, `projects`, `reasons`.
- `public/assets/` — photo + tool logos. `public/CNAME` (custom domain) and
  `public/.nojekyll` are copied into `out/` on build.
- `.github/workflows/deploy.yml` — CI build + deploy to GitHub Pages.

## Editing content

Prefer editing **`lib/content.js`** — copy is data-driven, so most text/section
changes need no markup edits. Notable shapes:

- `projects[]`: `{ tag, title, desc, stack[], url? }`. If `url` is present the
  card renders a **"Visit site →"** link (opens in a new tab); otherwise it
  renders **"Inquire about this →"** linking to `#contact`.
- Hero/about/contact copy lives inline in `app/page.jsx`.

## Design system (hand-drawn / sketchbook)

Keep this aesthetic consistent for any new UI:

- **Palette** (CSS vars in `:root`): `--paper` cream, `--ink` near-black,
  `--accent` ballpoint blue `#2f5ad0`, `--highlight` marker yellow `#ffe27a`.
- **Fonts**: `--font-display` Caveat (headings), `--font-body` Patrick Hand,
  `--font-mono` Kalam (labels/tags).
- **Wobbly borders**: don't put a plain border on a box. Draw it on a
  `::before` with `border-radius: var(--sketch-r)` + `filter: url(#wobble)` so
  the outline looks sketched while text stays crisp (see `.sketch`, `.btn`,
  `.card`, `.tool`). Fills on those pseudo-elements need `z-index: -1` so they
  sit behind the text.
- Background is a faint dot-grid; section dividers are dashed; emphasized words
  (`<em>`) get a squiggle-underline SVG; the contact section is a dark
  "chalkboard". Project cards are tilted, push-pinned index cards.
- **Accessibility**: honor `prefers-reduced-motion` — it disables `Reveal`
  animations. Add reduced-motion fallbacks for any new animation.

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
- Match the surrounding code style; comment non-obvious sections.
- Keep copy client-focused and confident; lead with business value.
