# Screenshot & Asset Guide

How to add real project screenshots (and the résumé) without touching code.
The site already renders a **graceful placeholder** wherever an image is missing
(`ProjectPreview` — no broken-image icons, no layout shift), so you can drop
assets in over time.

## How images are wired

- Project images live in `lib/content.js` on each project as `image: "/assets/images/…"`.
- Set `image: null` (or omit) to show the labelled placeholder instead.
- `imagePosition: "top"` (optional) controls framing for tall dashboards.
- Optional `gallery: [{ src, label }]` renders a thumbnail strip + lightbox on
  the case-study page.

To add a screenshot: drop the file in `public/assets/images/`, then point the
project's `image` (or `gallery`) at it. That's it.

## Required / recommended screenshots

| Project (slug) | Has image today | Still needs |
|----------------|-----------------|-------------|
| Azure Sands app (`azure-sands`) | ✅ `azure-condotel.png` | optional: admin dashboard, mobile |
| Azure Ops Digest (`azure-ops-digest`) | ✅ `azure-ops-digest-canvas.png` | **the digest as received in Gmail** |
| Azure Channel Sync (`azure-channel-sync`) | ✅ `azure-channel-sync-canvas.png` + 2 gallery shots | **blocked dates table, availability calendar, conflict alert** |
| CC Source (`cc-source`) | ✅ `cc-source.png` | optional: mobile shot, detail |
| Tawid Gutom (`tawid-gutom`) | ✅ `tawid-gutom.png` | optional: admin dashboard, mobile |
| Silencio E-commerce (`silencio`) | ✅ `silencio-co.png` | optional: members area, mobile |
| Silencio Accounting (`accounting-system`) | ✅ `silencio-accounting-dashboard.png` | optional: reports view |
| Northside HVAC (`northside-hvac`) | ✅ `northside-hvac-router.png` | optional: scoring Code node, Sheets log |
| Northside Missed Call (`northside-missed-call`) | ✅ `northside-missed-call.png` | optional: Callbacks sheet mid-escalation, escalation email |
| Service Business CRM (`ghl-crm`) | ⬜ placeholder | **pipeline + workflow screenshots** |
| Plumbing OS (`plumbing-os`) | ⬜ placeholder | **snapshot / automation screenshots** |

Highest-value additions right now, in order:

1. **The Azure Sands availability calendar** showing dates an imported Airbnb
   reservation closed off. Every current automation shot proves a workflow ran;
   that one proves the workflow changed the product.
2. **The ops digest email as received**, which is the actual deliverable — the
   canvas only shows the machine that produces it.
3. **The two GoHighLevel builds**, still on placeholders.

The full shot list for the two Azure automations lives in `../SCREENSHOTS.md`.

## Recommended dimensions

| Use | Size | Notes |
|-----|------|-------|
| Project cover | 1600 × 1000 | 16:10, shown in the card + case-study hero |
| Desktop screenshot | 1440 × 900 | full-page or hero |
| Mobile screenshot | 430 × 932 | iPhone-ish portrait |
| Dashboard screenshot | 1600 × 1000 | CRM / spreadsheet dashboards |

Prefer **WebP** or optimized **PNG**. Aim for < 300 KB each; the site uses
`images.unoptimized` (static export), so compress before committing.

## Naming suggestion

Keep it flat and predictable in `public/assets/images/`, e.g.
`ghl-crm-pipeline.png`, `ghl-crm-workflow.png`, `plumbing-os-cover.png`.
(If you prefer per-project folders like `public/projects/ghl-crm/cover.webp`,
that also works — just match the path in `lib/content.js`.)

## Résumé PDF

The nav, hero, and contact "Résumé" buttons point at `site.resumeUrl` in
`lib/content.js`, currently `"/JV-Marte-Resume.pdf"`. **Export your résumé to
`public/JV-Marte-Resume.pdf`** and the buttons resolve automatically — no code
change. To use a different filename, update `site.resumeUrl`.

## Privacy reminders

- No client data, API keys, private dashboards, or personal customer info in
  screenshots. Blur or use demo data for CRM/dashboard captures.
- CC Source is the only confirmed client engagement — keep client specifics
  generic unless you have permission to share them.
