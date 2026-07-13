# Portfolio Changelog

Upgrade pass to reposition the site as a **CRM & Automation Virtual Assistant**
portfolio that reads well for recruiters — without redesigning the hand-drawn
theme. See `PORTFOLIO_AUDIT.md` for the issue list this addresses.

## Files created

- `PORTFOLIO_AUDIT.md` — findings, priorities, status.
- `SCREENSHOT_GUIDE.md` — how to add screenshots + the résumé PDF.
- `PORTFOLIO_CHANGELOG.md` — this file.
- `app/work/[slug]/page.jsx` — data-driven **case-study route** with
  `generateStaticParams` + per-project `generateMetadata` (static-export safe).
- `components/CopyEmail.jsx` — copy-email-to-clipboard button (with fallback).

## Files modified

- `lib/content.js`
  - Added `site` config (email, résumé path, calendly, socials, OnlineJobs slot).
  - Added `badgeKey()` + `projectBySlug()` helpers (single source of truth).
  - **Projects** reworked to a richer, proof-first data model: `slug`, `status`,
    `featured`, `role[]`, `outcomes[]`, `challenges[]`. Reordered so the
    strongest/live work leads (CC Source → Tawid → Silencio → Accounting →
    GHL CRM → Plumbing OS). The generic concept is `featured: false`.
  - Replaced vague CTAs ("Ask about a CRM build", "Talk about a finance system")
    with proof CTAs ("Visit live website", "View project breakdown", etc.).
  - **Tools** split from a flat wall into honest levels (`toolLevels`):
    Primary tools vs Working knowledge, with short descriptions — no percentages.
  - **Why-me** rewritten from adjectives to evidence-based value props.
- `app/page.jsx`
  - Hero: added **Download résumé** secondary CTA, updated the credibility line
    (GoHighLevel · Google Sheets · Next.js · Supabase) + a proof statement.
  - Work: carousel now shows **featured** projects with a **My role** line, a
    **Live** indicator, and dual CTAs (live site + case-study breakdown); a new
    **Experiments & practice builds** list holds non-featured work.
  - About: rewritten around the real small-business-owner background.
  - Tools: renders the new proficiency levels with notes + descriptions.
  - Contact: recruiter-first heading ("Looking for a CRM, automation, or
    operations VA?"), résumé + **copy-email** buttons, OnlineJobs.ph slot.
- `components/Nav.jsx` — reordered to Work · Services · About · Tools · Contact,
  and the CTA button is now **Résumé ↓**.
- `components/WorkCarousel.jsx` — imports shared `badgeKey`; renders role,
  status, and case-study links.
- `app/sitemap.js` — now includes every case-study URL.
- `app/globals.css` — styles for role line / live badge, hero proof, experiments
  list, tool descriptions, contact CTA row, and the full case-study page; fixed
  a contrast bug where solid buttons rendered light-on-light on the dark contact
  board (now accent-blue + white).

## Major design changes

None to the visual language — the hand-drawn / sketchbook theme is preserved
(wobble borders, paper palette, handwriting fonts). Changes are structural:
hierarchy, proof, honest tool levels, and clear CTAs.

## Remaining placeholders / assets still needed from JV

- **Résumé PDF** — add `public/JV-Marte-Resume.pdf` (buttons already wired). Until
  then the buttons resolve to a 404. *(Critical)*
- **GHL CRM + Plumbing OS screenshots** — currently graceful placeholders; real
  pipeline/workflow captures would strengthen these most. See `SCREENSHOT_GUIDE.md`.
- **OnlineJobs.ph URL** — set `site.onlineJobs` in `lib/content.js` to render it.

## Not done (and why)

- **Services section (Phase 9)** left largely as-is — the existing three
  categories already map cleanly to CRM/Automation, Web/Ops, and Business
  operations, and use honest wording ("Basic bookkeeping support"). Retitle in
  `lib/content.js → services` if you want the exact Phase-9 labels.
- No fake résumé, testimonials, metrics, or client results were invented.

## Run / build / deploy

```bash
npm run dev     # local dev at http://localhost:3001
npm run build   # static export to ./out  (do NOT run while `dev` is running)
```

Deploy is automatic: push to `main` → `.github/workflows/deploy.yml` builds and
publishes `out/` to GitHub Pages (custom domain via `public/CNAME`). No manual
build needed before pushing.

## Recommended next improvements

- Add the résumé PDF and the two GHL screenshots (biggest credibility wins).
- Consider a per-project OG image for richer case-study link previews.
- Add 1–2 real galleries (Tawid admin, Silencio members area) via each
  project's `gallery` field.
