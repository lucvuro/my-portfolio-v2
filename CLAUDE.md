# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **yarn** (v1, pinned via `packageManager`). Node v18.20.0 (README).

```bash
yarn dev            # next dev
yarn build          # next build (validates env via src/env.js)
yarn start          # next start
yarn lint           # next lint
yarn lint:fix
yarn prettier       # prettier --write over js/ts/json/css/md
```

There is no test framework in this repo — no test runner, config, or test files.

`.env` must exist for `dev`/`build`: `src/env.js` (`@t3-oss/env-nextjs` + zod) is imported from `next.config.js` and throws on invalid vars. Copy `.env.example`. Set `SKIP_ENV_VALIDATION=1` to bypass. Any new env var needs entries in both `client`/`server` and `runtimeEnv` in `src/env.js`.

Husky + lint-staged run prettier and `eslint --fix` on commit, and commitlint enforces conventional commits (`feat`, `fix`, `chore`, `refactor`, … see `commitlint.config.js`).

## Architecture

Next.js 14 **App Router**, but the app is effectively a single client-side page. `src/app/page.tsx` renders `@/features/pages/home`, which is `"use client"` and switches between About / Projects / Contact via `useState` — there is no routing, no server components beyond the layout, and no API routes.

**Feature-folder layout.** Page-level code lives under `src/features/pages/<page>/` with its own `components/` and `hooks/` (`hooks/form/`, `hooks/mutation/`). Shared, page-agnostic pieces live in `src/components`, `src/services`, `src/validation`, `src/constants`. Path alias `@/*` → `./src/*`.

**Content lives in `src/constants/home.tsx`**, not in components. Experiences and projects are typed constant objects (`EXPERIENCES`, `TProjectEntry`) that the About/Projects components map over. Updating portfolio content means editing that file plus `src/assets/images/index.ts` (all images are re-exported as named `StaticImageData` from there).

**Form → mutation → service** is the data path for the one piece of dynamic behavior (the contact form):

- `src/validation/contact.ts` — zod schema + inferred type
- `hooks/form/useContactForm.ts` — react-hook-form + zodResolver, returns `{ method, onSubmit }`
- `hooks/mutation/useContactMutation.ts` — hand-rolled mutation hook (`{ isLoading, error, mutate }`), no react-query
- `src/services/googleService.ts` — posts to a Google Form via `no-cors` fetch with hardcoded `entry.*` field IDs and `NEXT_PUBLIC_GOOGLE_FORM_ID`. Because of `no-cors` the response is opaque, so failures are effectively invisible.

**RHF wrappers**: `src/components/RHF/*` wrap retroui inputs in `<Controller>` and render field errors. Use these inside forms rather than the raw inputs.

## Two component systems (important)

`src/components/` contains **two generations** of UI:

- `src/components/retroui/*` — the **current** system. shadcn-style (`components.json`, `new-york`, cva + `cn` from `@/lib/utils`), styled with the neo-brutalist HSL token theme in `src/styles/globals.css` (`font-head` = Archivo Black / `font-sans` = Space Grotesk). New UI goes here.
- `src/components/{Button,Input,Text,Dialog,Badge,...}` (the `@/components` barrel) — **legacy** NES.css components emitting `nes-*` class names. NES.css is no longer a dependency and is not imported anywhere, so those classes resolve to nothing. Only `Text` and `Dialog` are still imported (in `Menu` and `Contact`); prefer replacing them with retroui equivalents rather than extending this layer.

`RetroUIContainer` is the standard section wrapper (`Card` + optional titled header) used by every home section.

## Theming

The palette is **strictly monochrome** — every token in `src/styles/globals.css` is a shade of black/white. The one intentional exception is the ❤️ in the footer; leave it. Never hardcode a Tailwind palette color (`text-gray-400`, `border-red-500`, …) in a component; use the tokens (`bg-background`, `text-muted-foreground`, `border-border`, `text-destructive`). `--primary` is the _inverse of the surface_ (black in light, white in dark), so `bg-primary text-primary-foreground` is the inverted/active state in both themes.

`shadow-*` maps to the hard offset shadows (`--shadow-*` in globals.css), not Tailwind's blur, and they resolve `--border` at use time — so shadows are black in light mode and white in dark with no per-theme classes. Consequence: colored shadow utilities (`shadow-red-600`) no longer work.

Dark is the default: `<html>` ships with `class="dark"` from `src/app/layout.tsx`, and `THEME_INIT_SCRIPT` (`src/constants/theme.ts`) runs in `<head>` to strip it before paint when the visitor stored `light`. The `<html>` class is the source of truth; `useTheme` (`src/hooks/useTheme.ts`) reads it on mount and `ThemeToggle` writes both the class and `localStorage`. Do not initialize theme state from `localStorage` during render — it would desync from the server-rendered dark default.

## Notes

- SEO is deliberately disabled: `DISABLE_SEO = true` in `src/app/layout.tsx` emits noindex metadata, and `src/app/robots.txt` disallows everything.
- `.gitlab-ci.yml` is inherited from an unrelated project ("checkmate-website", also still the `name` in `package.json`). It syncs `./out` to S3, but `next.config.js` has no `output: "export"`, so that pipeline does not match the current build.
