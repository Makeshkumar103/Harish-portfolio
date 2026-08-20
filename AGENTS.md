# DOX framework

- DOX is highly performant AGENTS.md hierarchy installed here
- Agent must follow DOX instructions across any edits

## Purpose

- Harish is a personal portfolio site for Harish H, SEO Analyst (Technical SEO, On-Page/Off-Page SEO, GA4, Search Console, content optimization)
- Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and lucide-react; statically exported and deployed on Netlify

## Local Contracts

- Stack: Next.js 14, React 18, TypeScript, Tailwind 3, lucide-react
- `next` is pinned to exactly `14.2.5` — newer 14.2.x (e.g. 14.2.35) fail `next build` during build-trace collection (`_not-found/page.js.nft.json` ENOENT); do not bump without re-verifying `npm run build`
- Scripts: `npm run dev` (dev), `npm run build` (production export), `npm run lint` (next lint)
- Deploy: GitHub Pages via `.github/workflows/deploy.yml` (GitHub Actions) — builds `out/` and deploys to `https://makeshkumar103.github.io/Harish-portfolio/`
- `next.config.js` sets `output: 'export'` with `basePath: '/Harish-portfolio'`; internal links must use `next/link` (plain `<a href="/...">` breaks under the basePath) and the GitHub Pages source must be set to "GitHub Actions" in repo settings
- Routes live in `src/app`; shared UI lives in `src/components`; docs and source assets live in `docs/`
- Public assets (e.g., profile image) live in `public/`; source assets stay in `docs/`
- Interactive components use `"use client"`; `@/` import alias maps to `src/`
- Design system: emerald `primary`/cyan `accent` on dark `background`; display font `--font-sora`, body font `--font-inter`; `text-gradient`, `glass`, and `bg-grid` utilities in `globals.css`
- `node_modules/`, `.next/`, `out/` are gitignored and must not be committed

## Core Contract

- AGENTS.md files are binding work contracts for their subtrees
- Work products, source materials, instructions, records, assets, and durable docs must stay understandable from the nearest applicable AGENTS.md plus every parent AGENTS.md above it

## Read Before Editing

1. Read the root AGENTS.md
2. Identify every file or folder you expect to touch
3. Walk from the repository root to each target path
4. Read every AGENTS.md found along each route
5. If a parent AGENTS.md lists a child AGENTS.md whose scope contains the path, read that child and continue from there
6. Use the nearest AGENTS.md as the local contract and parent docs for repo-wide rules
7. If docs conflict, the closer doc controls local work details, but no child doc may weaken DOX

Do not rely on memory. Re-read the applicable DOX chain in the current session before editing.

## Update After Editing

Every meaningful change requires a DOX pass before the task is done.

Update the closest owning AGENTS.md when a change affects:

- purpose, scope, ownership, or responsibilities
- durable structure, contracts, workflows, or operating rules
- required inputs, outputs, permissions, constraints, side effects, or artifacts
- user preferences about behavior, communication, process, organization, or quality
- AGENTS.md creation, deletion, move, rename, or index contents

Update parent docs when parent-level structure, ownership, workflow, or child index changes. Update child docs when parent changes alter local rules. Remove stale or contradictory text immediately. Small edits that do not change behavior or contracts may leave docs unchanged, but the DOX pass still must happen.

## Hierarchy

- Root AGENTS.md is the DOX rail: project-wide instructions, global preferences, durable workflow rules, and the top-level Child DOX Index
- Child AGENTS.md files own domain-specific instructions and their own Child DOX Index
- Each parent explains what its direct children cover and what stays owned by the parent
- The closer a doc is to the work, the more specific and practical it must be

## Child Doc Shape

- Create a child AGENTS.md when a folder becomes a durable boundary with its own purpose, rules, responsibilities, workflow, materials, or quality standards
- Work Guidance must reflect the current standards of the project or user instructions; if there are no specific standards or instructions yet, leave it empty
- Verification must reflect an existing check; if no verification framework exists yet, leave it empty and update it when one exists

Default section order:
- Purpose
- Ownership
- Local Contracts
- Work Guidance
- Verification
- Child DOX Index

## Style

- Keep docs concise, current, and operational
- Document stable contracts, not diary entries
- Put broad rules in parent docs and concrete details in child docs
- Prefer direct bullets with explicit names
- Do not duplicate rules across many files unless each scope needs a local version
- Delete stale notes instead of explaining history
- Trim obvious statements, repeated rules, misplaced detail, and warnings for risks that no longer exist

## Closeout

1. Re-check changed paths against the DOX chain
2. Update nearest owning docs and any affected parents or children
3. Refresh every affected Child DOX Index
4. Remove stale or contradictory text
5. Run existing verification when relevant
6. Report any docs intentionally left unchanged and why

## User Preferences

When the user requests a durable behavior change, record it here or in the relevant child AGENTS.md

## Child DOX Index

- `src/AGENTS.md` — Next.js application source: App Router routes (`src/app`) and shared components (`src/components`)
- `docs/AGENTS.md` — project documentation, content notes, resume, and image assets
- Root-owned files: `README.md`, `LICENSE`, `banner.jpg`, `video-thumbnail.jpg`, and root-level project documentation
