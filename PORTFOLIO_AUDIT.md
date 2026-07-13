# Portfolio Audit — jvmarteportfolio.com

Audit of the existing codebase against the goal of a **credible, recruiter-friendly
portfolio for remote CRM & Automation VA roles**. Positioning target:
**CRM & Automation Virtual Assistant** (supporting: web, spreadsheet & operations support).

## Stack & structure (Phase 1 findings)

- **Framework:** Next.js 15 (App Router) + React 19, plain `.jsx`. No TypeScript.
- **Rendering:** Static export (`next.config.mjs` → `output: "export"`, `images.unoptimized`,
  `trailingSlash: true`). Emits `./out`, deployed to GitHub Pages via
  `.github/workflows/deploy.yml`. Custom domain via `public/CNAME`.
- **Routing:** Single route (`app/page.jsx`) — one-page site. No `/work/*` case-study routes.
- **Styling:** One hand-written stylesheet (`app/globals.css`), hand-drawn / sketchbook theme
  (wobble SVG filters, Caveat/Patrick Hand/Kalam fonts). No CSS framework.
- **Reusable components:** `Nav`, `Reveal` (IntersectionObserver fade-in), `ContactForm`
  (EmailJS), `ProjectPreview` (16:9 image / graceful placeholder), `Gallery` (lightbox),
  `WorkCarousel` (horizontal snap scroller).
- **Content data:** Centralised in `lib/content.js` (`services`, `steps`, `toolGroups`,
  `projects`, `reasons`). Copy is mostly data-driven.
- **Contact:** EmailJS (public keys, client-side). Email `martejohnvincent13@gmail.com`.
- **Deps:** minimal — `next`, `react`, `react-dom`, `@emailjs/browser`. Good.

## Already strong (no change needed)

- SEO metadata is thorough: title, description, keywords, canonical, Open Graph, Twitter card,
  and JSON-LD `ProfessionalService` with `sameAs` (LinkedIn/IG/FB) — Phase 12 largely done.
- Screenshot placeholder system already exists (`ProjectPreview` renders a labelled
  placeholder when `image` is null — no broken-image icons) — Phase 14 foundation done.
- Data is centralised (`lib/content.js`) — Phase 13 foundation done.
- Accessibility basics present: `prefers-reduced-motion` honoured, semantic sections, nav
  `aria-*`, alt text on the photo, focus styles.
- Hero headline & credibility strip already match the target positioning.

## Findings

| # | Issue | Why it matters | Recommended fix | Priority | Status |
|---|-------|----------------|-----------------|----------|--------|
| 1 | No résumé CTA anywhere (nav, hero, contact) | Recruiters look for a résumé first | Add a "Résumé" button (nav + hero + contact) wired to a configurable path; mark where to drop the PDF | Critical | ✅ Done (placeholder path) |
| 2 | Nav order & items don't match recruiter flow; no Contact link in bar | Clarity / expected IA | Reorder to Work · Services · About · Tools · Contact + Résumé | High | ✅ Done |
| 3 | Weak/vague project CTAs ("Ask about a CRM build", "Talk about a finance system") | Recruiters need *proof* before a sales chat | Replace with "Visit live website" / "View project breakdown" | High | ✅ Done |
| 4 | No case-study pages; cards can't show depth | Depth = credibility for hiring | Add data-driven `/work/[slug]` route (overview, role, problem, build, tools, challenges, outcomes, gallery, links) | High | ✅ Done |
| 5 | Project order not proof-first; a generic concept competes with real work | Strongest work should lead | Reorder featured (CC Source first); move the generic concept into "Experiments & Practice Builds" | High | ✅ Done |
| 6 | Cards lack explicit "my role" & "status" | Recruiters want to know what *you* did | Add `role[]` + `status` per project; render on card + case study | High | ✅ Done |
| 7 | Tools shown as a flat wall (no honesty about depth) | Over-implies mastery of everything | Split into "Primary tools" vs "Working knowledge" (editable data) | Medium | ✅ Done |
| 8 | About copy generic ("continuously improving my skills…") | Reads AI-generic, low trust | Rewrite around the real small-business-owner background | Medium | ✅ Done |
| 9 | "Why work with me" = unsupported adjectives (reliable, proactive) | Empty claims don't convert | Replace with evidence-based value props | Medium | ✅ Done |
| 10 | Contact heading is sales-y, not recruiter-facing; no copy-email; no résumé | Recruiter conversion | Recruiter-first heading + copy-email button + résumé + existing links | Medium | ✅ Done |
| 11 | No `robots.txt` / `sitemap.xml` | Basic SEO / crawlability | Add `app/robots.js` + `app/sitemap.js` (static-export friendly) | Low | ✅ Done |
| 12 | No documentation for screenshots / changelog | Maintainability & handover | Add `SCREENSHOT_GUIDE.md` + `PORTFOLIO_CHANGELOG.md` | Low | ✅ Done |
| 13 | OnlineJobs.ph profile link missing | Recruiters on that platform | Add when the URL is provided | Low | ⬜ Needs URL from JV |
| 14 | Real project screenshots missing for GHL CRM, Plumbing OS, some galleries | Visual proof | Placeholders in place; drop real images per `SCREENSHOT_GUIDE.md` | Medium | ⬜ Needs assets from JV |
| 15 | Résumé PDF file itself | Download must resolve to a real file | Export résumé to `public/JV-Marte-Resume.pdf` | Critical | ⬜ Needs PDF from JV |

## Design direction decision

The prompt asks to *reuse the existing design language* and *not redesign for aesthetics*.
The site's hand-drawn / sketchbook theme is a deliberate, distinctive brand, so **all changes
keep that theme** (wobble borders, paper palette, handwriting fonts) rather than swapping to a
generic "modern SaaS" look. Improvements target trust, hierarchy, proof, and CTAs — not visuals.

## Notes / not-done and why

- **No fake assets created:** résumé link points at a configurable path; the PDF itself must be
  added by JV (see #15). No invented testimonials, metrics, or client results.
- **Contact form untouched** (already a working EmailJS flow; no credentials exposed).
- Items #13–#15 are blocked on assets/links only JV can provide.
