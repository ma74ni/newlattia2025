# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing + ordering website for **Heladería Lattia**, an artisanal ice cream shop in Quito, Ecuador (`heladerialattia.com`). UI copy and data are in Spanish. There is no real backend: products and blog content come from static JSON mocks, and orders are placed by handing the cart off to WhatsApp.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build (runs next-sitemap via postbuild)
npm start        # serve the production build
npm run lint     # next lint (eslint: next/core-web-vitals + next/typescript)
```

There is no test setup in this repo.

## Architecture

Next.js 15 (**Pages Router**, not App Router) + React 19 + TypeScript + Tailwind CSS v4.

- **Routing**: `src/pages/`. Each file is a route (`index`, `menu`, `nosotros`, `contacto`, `blog/index`, `blog/[slug]`). `src/pages/api/` holds API routes (only the scaffold `hello.ts`). `_app.tsx` wraps every page; `_document.tsx` is the HTML shell.
- **App shell** (`_app.tsx`): nests `ThemeProvider` (next-themes) → `CartProvider` → `DefaultSeo` → `Navbar` / `main` / `Footer`. New global providers and chrome go here.
- **Cart** (`src/context/CartContext.tsx`): the only stateful domain logic. Holds the cart array plus customer fields (nombre, teléfono, dirección, tipoEntrega), persists to `localStorage` under key `carrito`, and `enviarPorWhatsapp()` formats the order and opens a `wa.me` link to the shop's WhatsApp (`593983766954`). The same number is shown in `Navbar.tsx`. Consume via `useContext(CartContext)`.
- **Data**: `src/data/*.json` are static mocks (`mockProducts.json`, `mockBlog.json`, `mockArticle.json`). Pages import them directly (`resolveJsonModule` is on). `blog/[slug].tsx` uses `getStaticPaths` + `getStaticProps` with `fallback: true` and `revalidate: 60`. Code comments mark these as future Firebase/CMS integration points. `src/data/index.ts` re-exports only `navbarItems`.
- **Interfaces**: shared types in `src/interfaces/` (`producto.ts`, `articulo.ts`). Note `CartContext` defines its own lighter `Producto` shape inline — distinct from `interfaces/producto.ts`.
- **Components**: shared in `src/components/` (`Navbar`, `Footer`); page-specific grouped under folders like `src/components/Home/`.
- **SEO**: `next-seo.config.ts` (root) holds `DefaultSeo` defaults; per-page overrides go through `next-seo`'s `<NextSeo>`. `next-sitemap.config.js` generates sitemap + robots.txt at build.

## Conventions

- Import alias: `@/*` → `src/*` (see `tsconfig.json`).
- Client components that use hooks/`localStorage`/`window` start with `"use client";` (carried over from App Router habits; harmless in Pages Router).
- TypeScript is `strict`.
- **Theme tokens** are defined in `src/styles/globals.css` via Tailwind v4's `@theme`, not a `tailwind.config`. Brand colors are utility classes: `purpleMain` (#964091), `orangeMain` (#f18700), `blueMain`, `greenMain`, `yellowMain`, `primary`. Fonts: `font-nerko` (headings) and `font-space` (body). Some styling (`header`, `h2`, `.patron`, `.linea`) is hardcoded in `globals.css` with background images from `public/assets/`.
- Static assets live in `public/assets/` (`images/`, `pdf/`); reference by absolute path (e.g. `/assets/images/products/menu_1.jpg`).
