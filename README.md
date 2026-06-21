# Portfolio-Website

Two portfolio apps live side-by-side in this repo:

| Folder | What it is | Stack |
| --- | --- | --- |
| [`folio/`](./folio) | The new quiet, minimal portfolio (in active development). | Vite + React + Tailwind |
| [`legacy/`](./legacy) | The previous portfolio. Kept for reference and historical commits. | CRA + React + Tailwind + MUI |

## Running the new one

```bash
cd folio
npm install
npm run dev
```

## Running the legacy one

```bash
cd legacy
npm install
npm run dev
```

The two apps are independent — separate `package.json`, separate `node_modules`,
separate build pipelines.
