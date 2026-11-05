---
doc_type: code-context-index
schema_version: 1.3
produced_by: tl
status: Emerging
repo: frontend
layers: [frontend]
generated_at: 2026-11-05
---

# Code Context Index - frontend

## What this repository is

React/Vite single-page web client for TaskNest. It holds no authoritative state; every page calls the backend REST API (repo `backend`).

## Layers

| Layer            | Present                     | Units | Index                                                                                                       |
| ---------------- | --------------------------- | ----- | ----------------------------------------------------------------------------------------------------------- |
| Backend          | no, separate repo `backend` | -     | `C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/backend/context/code-context/backend/backend-index.md` |
| Frontend (pages) | yes                         | 16    | ./frontend/frontend-index.md                                                                                |
| Database         | no, owned by `backend`      | -     | -                                                                                                           |

## Domains

| Area              | Token | One-line meaning                                                                                                                   | Pages |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Authentication    | AUTH  | Signed-out identity surfaces: sign-up, sign-in, email-link landing (verify, email change, Google link), forgot and reset password. | 5     |
| Profile & Account | PROF  | Signed-in account surfaces: profile settings (name, photo, password, email, time zone, digest) and account data/deletion.          | 2     |
| Lists             | LIST  | List management screen.                                                                                                            | 1     |
| Tasks             | TASK  | The main working screen (list view with quick-add, order, sort) and the task detail with checklist.                                | 2     |
| Views             | VIEW  | Cross-list search and smart filters (Today, This week, Overdue, Priority).                                                         | 1     |
| Admin             | ADMN  | Admin sign-in, admin home (counts, search, disable/enable) and admin account management.                                           | 3     |
| Experience        | UXP   | The authenticated app shell (navigation, theme, banners, consent) and the public landing page.                                     | 2     |

## Coverage and confidence

Forward-planned for all 19 TaskNest features; no page exists in code yet.

## Cross-repo

Pages consume endpoints in the `backend` repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/backend`). Wiring: Frontend -> Backend over REST (`.jetrix/connection-map.md`).
