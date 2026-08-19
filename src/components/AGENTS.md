# src/components — Shared Components

## Purpose

- Owns shared, reusable UI components used across the Harish portfolio routes

## Ownership

- `Navbar.tsx` — fixed top navigation with active-link highlighting, desktop links, and mobile hamburger menu (`"use client"`)
- `Footer.tsx` — footer with brand, quick links, and LinkedIn/contact links

## Local Contracts

- Client components (state/events) declare `"use client"`
- Components imported via `@/components`
- Icons from `lucide-react`; styling via Tailwind utility classes

## Work Guidance

- Add components here only when used by more than one route; route-specific UI stays in the route's `page.tsx`

## Verification

- Run `npm run lint` and `npm run build` before finishing component changes

## Child DOX Index

- No child AGENTS.md files are needed in this subtree
