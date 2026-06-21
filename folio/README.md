# folio

A quiet, information-first portfolio. Inspired by here.now's restraint —
heavy whitespace, one muted accent, almost no motion.

## Stack

- Vite + React 18
- Tailwind CSS v3
- `react-icons` (icons only)
- No framer-motion, no particles, no parallax. CSS-only fade-in via IntersectionObserver.

## Theme — Dull Teal Paper

| Token | Hex |
| --- | --- |
| `bg` | `#EFEDE4` |
| `surface` | `#F7F5EE` |
| `ink` | `#0F1414` |
| `muted` | `#5E6968` |
| `border` | `#D8D3C4` |
| `accent` | `#3E6B68` |
| `accent-soft` | `#DDE6E3` |

## Develop

```bash
cd folio
npm install
npm run dev
```

Open <http://localhost:5173>.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
folio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/    # NavBar, Reveal, Pill, SectionHeader
    ├── sections/      # Hero, About, Experience, Projects, Contact, Footer
    ├── data/          # profile, experience, projects
    └── hooks/         # useReveal
```
