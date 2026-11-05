---
doc_type: layer-overview
schema_version: 1.3
produced_by: tl
layer: frontend
generated_at: 2026-11-05
---

# Frontend Overview

## Stack

React 19 + TypeScript (strict) on Vite 8; Vitest + Testing Library (technology-stack.md, DEC-005, DEC-009). Router and data libraries are not chosen yet.

## Conventions

Feature code under `src/features/<feature>/` (pages, components, hooks, API calls, tests); shared UI in `src/components/`; shared utilities in `src/lib/`. All server calls go through `src/lib/api.ts` with `credentials: 'include'` (cookie sessions, DEC-077). `import.meta.env.VITE_*` is read only in `src/lib/config.ts` (`VITE_API_BASE_URL`).

## Entry Points

`src/main.tsx`, `src/App.tsx` (scaffold). Routes and the app shell are planned, not yet written.

## Notes

Every page here is `Proposed`. Endpoints live in the backend repo; links to them are relative paths that resolve when both repos are checked out side by side.
