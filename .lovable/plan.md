# Plan: Unique ML/Quant Portfolio Redesign

## Inspiration takeaways

- **Sparacio** — cinematic full-bleed hero, circular portrait, "Featured in" credential bar, serif display type, sticky top nav with sections.
- **Hira Javed** — soft organic shapes, friendly portrait-forward intro, calm scroll rhythm.
- **Mitchell Sparrow** — minimalist concentric orbit motif, mono caption labels, anchor section links under the hero.

## Unique direction for Abhijeet (ML Engineer / Quant)

A **"Signal Room"** aesthetic — a quiet, instrumentation-grade interface that nods to both ML research notebooks and a trading terminal, without becoming a literal dashboard. Keeps the locked **Midnight Indigo + Space Grotesk/DM Sans + Magazine** taste but reorganizes the homepage around a more memorable, identity-forward hero.

Distinctive motifs:

- **Animated price/loss curve** drawn as SVG behind the hero — slowly redraws on load (suggests both a P&L tape and a training loss curve).
- **Concentric "orbit" rings** (from Mitchell) re-cast as a **probability halo** around a circular portrait (from Sparacio/Javed).
- **Ticker strip** beneath the hero: rotating chips like `LLM-EVAL · α=0.07`, `PAIRS-TRADE · Sharpe 1.8`, `ADV-RL · ICLR'25 submitted` — credentials styled like a market tape.
- **"Now" panel** (research focus, location, latest paper) — Sparacio-style at-a-glance card.
- **Role-specific contact CTA**: keep the ML Engineering and Quant Research tracks clear without publishing resume PDFs.

## Pages & structure

Keep current routes (`/`, `/about`, `/projects`, `/experience`, `/writing`, `/contact`). Redesign the **home** + small polish on others; data layer (`src/content/site-data.ts`) untouched.

### Home (`src/routes/index.tsx`) — full rebuild

1. **Hero** — left: eyebrow (PhD · University of Dayton), display headline "Abhijeet Gupta", one-line positioning ("ML engineer & quant researcher — building reliable learning systems and systematic strategies."), CTA buttons for selected work and direct contact. Right: circular portrait placeholder inside concentric orbit rings + animated SVG curve in the background.
2. **Ticker strip** — horizontally scrolling marquee of project/credential chips.
3. **Two-track section** — side-by-side "ML / AI Research" and "Quantitative Research" panels, each with 2 featured project cards pulled from `projects` by category.
4. **"Now" + selected publication** — split row: a "Currently" card and a featured publication callout.
5. **Writing preview** — keep, tightened.
6. **Footer CTA band** — large "Let's talk" with email + socials.

### Other routes — light polish

- **About**: add a portrait + orbit treatment at top to match home identity.
- **Projects/Experience/Writing/Contact**: keep structure; unify section eyebrow + spacing tokens with the new home.

## Technical details

- New components in `src/components/`:
  - `hero-orbit.tsx` — SVG portrait with concentric rings + animated loss/price curve (CSS `stroke-dashoffset` animation, no extra deps).
  - `ticker.tsx` — pure CSS marquee (`@keyframes` in `styles.css`), pauses on hover, `prefers-reduced-motion` respected.
  - `track-panel.tsx` — reusable two-track card grid.
- Add tokens to `src/styles.css`: `--accent-quant` (subtle teal/green) to differentiate quant track from primary indigo, plus marquee keyframes.
- Use existing `profile`, `projects`, `posts` from `src/content/site-data.ts`. Filter projects by `category` for the two-track section.
- Fix hydration bug: replace `new Date(post.date).toLocaleDateString("en-US", …)` with a deterministic formatter (UTC-based, no locale) to stop the SSR/client date mismatch shown in current runtime errors.
- Portrait: use a placeholder `/portrait.jpg` reference; if missing, render an SVG monogram fallback so build never breaks.
- SEO: keep per-route `head()`; update home meta to reflect ML + Quant dual positioning.
- Accessibility: all motion gated by `@media (prefers-reduced-motion: reduce)`.

## Out of scope

- No backend, no Lovable Cloud.
- No new pages or routing changes.
- No content rewrites beyond hero copy (data file untouched).

## Open question

Do you have a portrait photo to use? If not, I'll ship an SVG monogram inside the orbit and you can drop a `public/portrait.jpg` later.
