# src — Application Source

## Purpose

- Owns all application source for the Harish portfolio site: the Next.js App Router routes and shared UI components

## Ownership

- `src/app` — route pages, root layout, and global styles (child: `src/app/AGENTS.md`)
- `src/components` — shared UI components (child: `src/components/AGENTS.md`)

## Local Contracts

- `@/` import alias maps to `src/`
- Pages live in `src/app/<route>/page.tsx`; reusable UI lives in `src/components`
- Tailwind utility classes for styling; `lucide-react` for icons; theme colors from `globals.css` variables
- Client components (state/events) declare `"use client"`

## Work Guidance

- Keep route-specific content in its page; extract to `src/components` only when used by more than one route

## Verification

- Run `npm run lint` (next lint) and `npm run build` (static export) before finishing source changes

## Child DOX Index

- `src/app/AGENTS.md` — Next.js App Router pages, root layout, and global styles
- `src/components/AGENTS.md` — shared Navbar and Footer components
