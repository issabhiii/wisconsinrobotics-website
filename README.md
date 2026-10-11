<div align="center">

# Wisconsin Robotics

### The official website of the University of Wisconsin–Madison Mars rover team

A fast, modern single-page app — dark, cinematic, and built around an interactive
cursor-lit grid and refined motion. Rebuilt from the ground up with React + Vite.

`React 18` · `Vite 5` · `Tailwind CSS 3` · `Framer Motion` · `React Three Fiber`

[Instagram](https://www.instagram.com/wi_robotics/) ·
[LinkedIn](https://www.linkedin.com/company/wisconsin-robotics/) ·
[GitHub](https://github.com/WisconsinRobotics)

</div>

---

## Overview

This is a complete rebuild of the Wisconsin Robotics site. The previous version was a
set of hand-written HTML pages (archived in [`legacy/`](./legacy)); this version is a
component-driven React app with a single source of truth for all content, one
consistent motion language, and an interactive React Bits `CursorGrid` background.

Live site: [wisconsinrobotics.org](https://wisconsinrobotics.org)  
Repo: [WisconsinRobotics/website](https://github.com/WisconsinRobotics/website)

## Features

- **Interactive grid background** — a cursor-lit `CursorGrid` (React Bits) powers the
  hero and every page header, with a click-pulse effect.
- **Scroll image sequences** — Mars intro + hero terraforming frames scrubbed by scroll.
- **One motion language** — scroll reveals, word-by-word `SplitText` headlines, and
  animated stat counters, all sharing the same easing.
- **Interactive UI** — dock-style navigation, spotlight cards, 3D tilt cards, and
  holographic team profile cards.
- **Optional 3D hero** — a React Three Fiber rover scene lives in [`src/three/`](./src/three),
  ready to re-enable (see below).
- **Content-driven** — team, rovers, sponsors, and stats all come from one data file.
- **Contact form** — posts to a Google Form linked to the team spreadsheet.
- **Custom 404** — unknown routes render an interactive not-found page.

## Tech stack

| Area | Choice |
|------|--------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 (design tokens in `tailwind.config.js`) |
| Motion | Framer Motion |
| 3D | React Three Fiber + drei (optional hero) |
| Routing | React Router 6 |
| Icons | lucide-react |
| Contact | Google Forms → Sheet |
| Hosting | Cloudflare Pages (GitHub `main`) |

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
  images/            team headshots, rover photos, scroll sequences, WR logo
    intro-sequence/  Mars intro scroll frames (webp)
    hero-sequence/   Hero terraforming scroll frames (webp)
    robots/          rover + outreach imagery
  docs/              sponsorship PDF
  _redirects         SPA fallback for Cloudflare / Netlify
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
  pages/             Home, Team, Subteam, Robots, Sponsors, NotFound
legacy/              the previous static HTML site (archived)
```

## Editing content

Almost everything — team roster, rovers, sponsors, stats, socials, and contact info —
lives in [`src/data/site.js`](./src/data/site.js). Edit it there and every page stays in sync.

Social links (footer):

- Instagram: https://www.instagram.com/wi_robotics/
- LinkedIn: https://www.linkedin.com/company/wisconsin-robotics/
- GitHub: https://github.com/WisconsinRobotics

## Re-enabling the 3D rover hero

The interactive 3D rover is currently disabled in favor of the image-sequence hero. To
bring it back, render `<RoverScene />` inside [`src/components/Hero.jsx`](./src/components/Hero.jsx)
(the scene component is already built in `src/three/RoverScene.jsx`). To use a real
scanned/CAD rover instead of the procedural model, export a `.glb`, drop it in
`public/models/`, and load it with drei's `useGLTF`.

## Deployment

This is a static SPA — `npm run build` outputs to `dist/`.

- **Cloudflare Pages (production):** connected to
  [`WisconsinRobotics/website`](https://github.com/WisconsinRobotics/website) `main`.
  Typical settings: build `npm run build`, output `dist`, root `/`.
  SPA fallback via [`public/_redirects`](./public/_redirects).
- **Vercel / Netlify:** also supported — [`vercel.json`](./vercel.json) rewrites for
  Vercel; `_redirects` for Netlify.

Push to `main` on the club repo to trigger a production deploy.

---

<div align="center">
Built by students at UW–Madison
</div>
