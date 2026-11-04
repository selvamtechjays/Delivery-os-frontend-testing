# Delivery OS — Frontend

Web client for Delivery OS. Stack: **React 19 + Vite + TypeScript (strict)**, Vitest + Testing Library, ESLint + Prettier, npm, Node 22+.

Backend: https://github.com/selvamtechjays/Delivery-os-backend-Testing

## Getting started

```bash
npm install
cp .env.example .env.local   # set VITE_API_BASE_URL (default http://localhost:3000)
npm run dev                  # http://localhost:5173
```

## Scripts

| Command                           | Purpose                                                |
| --------------------------------- | ------------------------------------------------------ |
| `npm run dev`                     | Vite dev server                                        |
| `npm run lint`                    | ESLint (typescript-eslint, react-hooks), zero warnings |
| `npm run format` / `format:check` | Prettier write / check                                 |
| `npm run typecheck`               | `tsc -b --noEmit` (strict)                             |
| `npm test`                        | Vitest + Testing Library (jsdom)                       |
| `npm run build`                   | Type-check then `vite build` to `dist/`                |
| `npm run preview`                 | Serve the production build                             |

## Layout

```
src/
  main.tsx, App.tsx    entry and root component
  lib/config.ts        API_BASE_URL from VITE_API_BASE_URL
  lib/api.ts           typed fetch wrapper (apiGet)
  test/setup.ts        Testing Library / jest-dom setup
```

Conventions: see the workspace `.jetrix/shared-context/coding-standards.md`.
