---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-LIST-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/lists'
source_reference: 'src/features/lists/pages/ListsPage.tsx'
generated_at: 2026-11-05
---

# Page: Lists

## Page ID

PAGE-LIST-01

## Summary

Manage lists: create, rename, delete (tasks move to My Tasks) and drag to reorder custom lists; My Tasks fixed on top.

## Status

Proposed

## Route

/lists

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Manage lists: create, rename, delete (tasks move to My Tasks) and drag to reorder custom lists; My Tasks fixed on top.

## User Personas

- Verified user
- Unverified user (create blocked with explanation)

## Key Interactions / Workflows

- Create list
- Rename
- Delete with confirmation
- Drag to reorder

## Page States

- Duplicate/long name errors
- Unverified: needs a verified email
- My Tasks locked

## Consumes Endpoints

- List My Lists (GET /api/v1/lists) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/list-lists.md (EP-LIST-01, backend repo)
- Create List (POST /api/v1/lists) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/create-list.md (EP-LIST-02, backend repo)
- Rename List (PATCH /api/v1/lists/:listId) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/rename-list.md (EP-LIST-03, backend repo)
- Delete List (DELETE /api/v1/lists/:listId) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/delete-list.md (EP-LIST-04, backend repo)
- Reorder Custom Lists (PUT /api/v1/lists/order) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/reorder-lists.md (EP-LIST-05, backend repo)

## Used by Features

- FEAT-LIST-01 List Management

## Permissions

- Requires session; create requires verified email.

## Source Reference

- Planned file: `src/features/lists/pages/ListsPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-LIST-01
- Workflows: WF-006
- Business rules: BR-032, BR-045
