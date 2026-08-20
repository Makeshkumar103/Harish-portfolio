# src/app — App Router Routes

## Purpose

- Owns the Next.js App Router layer for the Harish portfolio: root layout, global styles, and all pages (Home, About, Skills, Services, Contact)

## Ownership

- `layout.tsx` — root layout: metadata, Inter + Sora fonts, Navbar, `<main>`, Footer
- `globals.css` — Tailwind directives, theme variables (`--background`, `--foreground`), and `text-gradient`, `glass`, `bg-grid` utilities
- `page.tsx` — home/landing page (hero, stats, services, skills, experience timeline, CTA)
- `about/`, `skills/`, `projects/`, `contact/` — route folders, each with `page.tsx` (`projects/` presents SEO services; `contact/` adds `ContactForm.tsx`, a `"use client"` form that composes a `mailto:` link — no backend needed for static hosting)

## Local Contracts

- One route per folder under `src/app`; each `page.tsx` exports a default React component
- Route metadata uses the Next.js `Metadata` export
- Styling via Tailwind utility classes; theme colors from `globals.css`

## Work Guidance

- Add new pages as folders under `src/app` with `page.tsx`; keep `layout.tsx` and `globals.css` in place
- Route-specific sections live in the page; shared chrome stays in `src/components`

## Verification

- Run `npm run lint` and `npm run build` before finishing route changes

## Child DOX Index

- No child AGENTS.md files are needed in this subtree
