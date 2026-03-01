# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

13uxz.com — a single-page DJ & producer landing site. Clean, dark, minimal aesthetic. All editable content lives in `src/data/siteData.ts`. Documentation in `docs/PRD.md`, remaining tasks in `docs/TODO.md`.

## Commands

- `npm run dev` — Start dev server (port 3000)
- `npm run build` — Static export to `out/` directory
- `npm run lint` — ESLint checks

## Tech Stack

- **Next.js 16.1.6** with App Router (`src/app/`)
- **React 19.2.3** with TypeScript 5 (strict mode)
- **Tailwind CSS 4** via PostCSS (`@tailwindcss/postcss`)
- **ESLint 9** with flat config (`eslint.config.mjs`)

## Architecture

- **Single page**: `src/app/page.tsx` composes all section components
- **Components**: `src/components/` — Navbar, Hero, Bio, Music, Photos, Contact, Footer
- **Site content**: `src/data/siteData.ts` — all text, track links, photos, and social URLs in one file
- **Contact form**: Uses `mailto:` link (no server needed)
- **Hosting**: Static export (`output: "export"` in next.config.ts) — deploy to GitHub Pages for free
- **Path alias**: `@/*` maps to `./src/*`
- **Styling**: Dark theme with CSS custom properties in `globals.css`, Tailwind utility classes
- **Fonts**: Geist Sans + Geist Mono via `next/font/google`
- **Photos**: Served from `public/photos/`

## Design Tokens (globals.css)

- `--background: #050505` (near-black)
- `--foreground: #f0f0f0` (off-white)
- `--accent: #a0a0a0` (muted gray for secondary text)
- `--card: #111111` (card/photo backgrounds)
- `--border: #222222` (subtle dividers)
