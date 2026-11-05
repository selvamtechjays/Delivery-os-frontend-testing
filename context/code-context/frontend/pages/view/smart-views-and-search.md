---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-VIEW-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/views/:filter and /search?q='
source_reference: 'src/features/views/pages/SmartViewsPage.tsx'
generated_at: 2026-11-05
---

# Page: Smart Views And Search

## Page ID

PAGE-VIEW-01

## Summary

Cross-list results for Today, This week, Overdue, Priority and search by title/notes, with a completed toggle and empty states.

## Status

Proposed

## Route

/views/:filter and /search?q=

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Cross-list results for Today, This week, Overdue, Priority and search by title/notes, with a completed toggle and empty states.

## User Personas

- Signed-in user

## Key Interactions / Workflows

- Search
- Open Today/This week/Overdue/Priority
- Show completed toggle
- Tick tasks in results

## Page States

- No results empty state
- Overdue flagged in red

## Consumes Endpoints

- Search Tasks (GET /api/v1/search/tasks) - ../../../../../../backend/context/code-context/backend/domains/views/endpoints/search-tasks.md (EP-VIEW-01, backend repo)
- Smart View Tasks (Today / This Week / Overdue / Priority) (GET /api/v1/views/tasks) - ../../../../../../backend/context/code-context/backend/domains/views/endpoints/smart-view-tasks.md (EP-VIEW-02, backend repo)
- Update Task (Edit, Complete, Move) (PATCH /api/v1/tasks/:taskId) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/update-task.md (EP-TASK-04, backend repo)
- List My Lists (GET /api/v1/lists) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/list-lists.md (EP-LIST-01, backend repo)

## Used by Features

- FEAT-VIEW-02 Task Search, Filters and Completed Toggle

## Permissions

- Requires session.

## Source Reference

- Planned file: `src/features/views/pages/SmartViewsPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-VIEW-02
- Workflows: WF-007
- Business rules: BR-012, BR-014, BR-023
