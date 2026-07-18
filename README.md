<div align="center">

# Wisconsin Robotics

### The official website of the University of Wisconsin–Madison Mars rover team

A fast, modern single-page app — dark, cinematic, and built around an interactive
cursor-lit grid and refined motion. Rebuilt from the ground up with React + Vite.

`React 18` · `Vite 5` · `Tailwind CSS 3` · `Framer Motion` · `React Three Fiber`

</div>

---

## Overview

This is a complete rebuild of the Wisconsin Robotics site. The previous version was a
set of hand-written HTML pages (archived in [`legacy/`](./legacy)); this version is a
component-driven React app with a single source of truth for all content, one
consistent motion language, and an interactive React Bits `CursorGrid` background.

## Features

- **Interactive grid background** — a cursor-lit `CursorGrid` (React Bits) powers the
  hero and every page header, with a click-pulse effect.
- **One motion language** — scroll reveals, word-by-word `SplitText` headlines, and
  animated stat counters, all sharing the same easing.
- **Interactive UI** — dock-style navigation, spotlight cards, 3D tilt cards, and
  holographic team profile cards.
- **Optional 3D hero** — a React Three Fiber rover scene lives in [`src/three/`](./src/three),
  ready to re-enable (see below).
- **Content-driven** — team, rovers, sponsors, and stats all come from one data file.
- **Accessible & fast** — respects `prefers-reduced-motion`, lazy-loads heavy assets,
  and ships proper meta/OG tags.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 (design tokens in `tailwind.config.js`) |
| Motion | Framer Motion |
| 3D | React Three Fiber + drei (optional hero) |
| Routing | React Router 6 |
| Icons | lucide-react |

## Getting started

**Prerequisites:** Node.js 18+ (built on Node 22) and npm.

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## Project structure

```
public/
  images/            team headshots + rover photos
  docs/              sponsorship PDF
  favicon.svg
src/
  main.jsx           app entry
  App.jsx            routes + scroll management
  index.css          Tailwind layers + global styles
  data/site.js       ← single source of truth for ALL content
  components/
    CursorGrid.jsx   interactive grid background (React Bits)
    Aurora.jsx       ambient background (wraps CursorGrid)
    Navbar / Footer / Hero / Contact / ...
    motion/          Reveal, SplitText, CountUp
  three/             Rover.jsx, RoverScene.jsx (optional 3D hero)
  pages/             Home, Team, Robots, Operations, Sponsors
legacy/              the previous static HTML site (archived)
```

## Editing content

Almost everything — team roster, rovers, sponsors, stats, and contact info — lives in
[`src/data/site.js`](./src/data/site.js). Edit it there and every page stays in sync.

## Re-enabling the 3D rover hero

The interactive 3D rover is currently disabled in favor of the cursor grid. To bring it
back, render `<RoverScene />` inside [`src/components/Hero.jsx`](./src/components/Hero.jsx)
(the scene component is already built in `src/three/RoverScene.jsx`). To use a real
scanned/CAD rover instead of the procedural model, export a `.glb`, drop it in
`public/models/`, and load it with drei's `useGLTF`.

## Deployment

This is a static SPA — `npm run build` outputs to `dist/`.

- **Vercel / Netlify (recommended):** point the platform at this repo — build command
  `npm run build`, output directory `dist`. SPA routing is already handled:
  [`vercel.json`](./vercel.json) rewrites for Vercel and [`public/_redirects`](./public/_redirects)
  for Netlify both send unknown paths to `/index.html`, so deep links like `/team` work.
- **GitHub Pages:** because routing uses `BrowserRouter`, deep links like `/team` would
  need an SPA fallback (a `404.html` copy of `index.html`) or a switch to `HashRouter`,
  plus Vite's `base` set to `/<repo-name>/` for a project page.

## Housekeeping notes

A few things are intentionally left as placeholders — search `site.js` and update:

- **Meeting time** — the legacy pages disagreed; confirm the real cadence.
- **Social + LinkedIn links** — currently `#` / generic profiles.
- **Contact form** — falls back to `mailto:`. To collect submissions, set
  `FORM_ENDPOINT` in `src/components/Contact.jsx` (e.g. a Formspree URL).

---

<div align="center">
Built by students at UW–Madison 🦡
</div>
