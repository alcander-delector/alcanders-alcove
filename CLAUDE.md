# Café Landing Page

Mock café landing page. SvelteKit 5 + Tailwind CSS v4 + TypeScript. Owned by aquil, who
tinkers with the code live between assistant turns.

## Commands

- `npm run dev` — dev server at localhost:5173
- `npm run build` — production build; the "does it actually work" check
- `npx prettier --write src` — format (config: printWidth 120, tabs, single quotes)

## Architecture

- `src/routes/+page.svelte` — the landing page. Markup carries **layout/positioning only**
  (Tailwind utilities). All looks live in themes.css.
- `src/lib/styles/themes.css` — the theme system. The one file to edit to restyle everything.
- `src/lib/components/Card.svelte` — menu card (props: src, alt, name, description, price,
  href, class passthrough). The whole card is the link.
- `src/routes/dev-log/+page.svelte` — disposable over-commented explainer page at /dev-log.
  Delete the folder anytime; it is not part of the product.
- `src/lib/assets/` — `.webp` files are what the site imports. Same-named `.jpg` files are
  untouched original masters — never delete, never import them.

## Theme system

- Colors/effects are tokens in `:root` (`--cream`, `--espresso`, `--espresso-lift`,
  `--caramel`, `--caramel-deep`, `--scrim`, `--squircle`, `--shadow-soft`, `--shadow-lift`,
  `--text-shadow-soft`). Change once, updates everywhere.
- Classes are named `<element>-<theme>[-<variant>]`, **max 3 words**: `text-hero`,
  `text-muted`, `button-caramel`, `button-outline-caramel`, `button-sm`, `card-espresso`,
  `overlay-hero-shade`, `overlay-hero-fade`, `overlay-card-fade`, `link-footer`.
  `text-*` always touches text.
- Shared DNA goes in grouped selectors (`.button-caramel, .button-outline-caramel { … }`);
  variant blocks declare only what differs.
- Themes sit in `@layer components`, so Tailwind utilities in markup can still override them
  for one-offs.

## Conventions and hard-won gotchas

- **Tailwind classes must appear literally in source.** Never assemble them from interpolated
  variables (`w-[{size}%]` compiles to nothing — Tailwind scans text, it cannot evaluate
  runtime values). For configurable values use CSS custom properties instead.
- **No hover underlines on button-style links** (Our Menu, About Us, the cards) — even when
  they redirect off-site. The underline-on-hover + caramel signal belongs to plain text links
  leaving the site (`.link-footer`) only.
- Fluid text uses `min(CEILING, FLOOR + Nvw)`; to resize a theme change only the first (rem)
  number.
- New images: resize to display size (hero 1920w, cards 900w) and encode WebP q80–82 via
  `magick in.jpg -resize 900x -quality 80 out.webp`. Never ship megapixel originals.
- Invalid CSS fails silently (e.g. `1.2 rem` with a space is dropped by browsers) — the build
  passing does not prove a style works; verify visually.

## Deploy (GitHub Pages)

- Lives at `https://<username>.github.io/alcanders-alcove/` — deploys via
  `.github/workflows/deploy.yml` on every push to `main`.
- Adapter is `@sveltejs/adapter-static` (configured in `vite.config.ts` — this project keeps
  SvelteKit config in vite.config.ts, there is no svelte.config.js). All routes prerender via
  `src/routes/+layout.js`.
- Pages serves from a subpath, so builds for deploy MUST run with `BASE_PATH=/alcanders-alcove`
  (the workflow sets it). Plain `npm run build` is for local checks only.
- The old `/dev-log` explainer page lives outside the repo at
  `../dev-log-alcanders-backup/` — move it back into `src/routes/` to resurrect it.

## Working with aquil

- aquil experiments in the code between turns. A partially applied feature (one sibling styled
  differently from the rest) is usually intentional work-in-progress: **do not assume error,
  do not normalize silently**. Finish the assigned task with the asymmetry untouched, then
  **prompt with AskUserQuestion** (expand-to-siblings vs. accidental typo) — never relegate
  the question to end-of-turn prose.
- Verify changes before claiming done: prettier → `npm run build` → render/screenshot at
  desktop and phone widths when anything visual changed.
- When done editing, **leave the dev server running** — aquil refreshes the browser and Vite
  HMR applies the changes. Do not kill it as cleanup.
