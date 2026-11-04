# Portfolio editorial redesign

Client-facing direction: warm ivory, charcoal olive, burnt orange, natural portrait, sentence-case Archivo headings with Georgia italic emphasis. Work leads after the hero; services use a sage grid; packages, workflow examples, contact form, and case studies share the rounded surface language.

Preserved: all project records, honest client/demo distinctions, package pricing, résumé, contact form, booking destinations, and case-study routes. Existing uncommitted work was the starting point. No deployment performed.

## Portrait

Built-in image generation/editing tool. Final optimized asset: `public/assets/images/jv-portrait-editorial.webp` (1000 × 1250, 141138 bytes).

Prompt:

> Use case: identity-preserve. Edit target: the supplied photograph of John Vincent. Create a polished natural editorial portrait for his freelance web development and business automation portfolio. Preserve his exact recognizable face, facial proportions, natural skin tone, hair, age, and relaxed expression. Change the red branded T-shirt into a tasteful charcoal cotton overshirt worn open over a plain off-white crewneck. Replace wall with a seamless warm ivory studio background. Soft natural window lighting, realistic skin texture, subtle cleanup only, no beauty filter. Chest-up portrait with both shoulders visible, generous headroom, centered, vertical 4:5 composition. No text, logos, jewelry, props, or watermark. Keep identity and facial structure strictly faithful to the input.

## Verification

Production build passed in an isolated temporary copy to avoid competing with the active development server for `.next`. Next.js generated 18 entries, including 11 case studies. Exported HTML audit checked 14 HTML files: no missing local link or image targets, no duplicate IDs, and alt attributes present on all images. Updated homepage and social metadata reference the new portrait. `git diff --check` passed.

Browser visual review and interactive mobile testing were unavailable because the computer-use host was unavailable. Contact submission was not sent.
