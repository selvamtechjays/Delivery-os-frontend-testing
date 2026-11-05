---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-TASK-02
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/tasks/:taskId'
source_reference: 'src/features/tasks/pages/TaskDetailPage.tsx'
generated_at: 2026-11-05
---

# Page: Task Detail

## Page ID

PAGE-TASK-02

## Summary

Edit a task's title, notes, due date/time, priority, list (move), delete, and manage its flat checklist (up to 20 items) with progress.

## Status

Proposed

## Route

/tasks/:taskId

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Edit a task's title, notes, due date/time, priority, list (move), delete, and manage its flat checklist (up to 20 items) with progress.

## User Personas

- Signed-in user

## Key Interactions / Workflows

- Edit fields
- Move to another list
- Delete with Undo
- Add/tick/remove/reorder checklist items

## Page States

- Past due date allowed (overdue)
- Blank title rejected
- Checklist limit reached
- Save failed: rollback

## Consumes Endpoints

- Get Task (GET /api/v1/tasks/:taskId) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/get-task.md (EP-TASK-03, backend repo)
- Update Task (Edit, Complete, Move) (PATCH /api/v1/tasks/:taskId) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/update-task.md (EP-TASK-04, backend repo)
- Delete Task (Soft, Undoable) (DELETE /api/v1/tasks/:taskId) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/delete-task.md (EP-TASK-05, backend repo)
- Undo Task Deletion (POST /api/v1/tasks/:taskId/restore) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/restore-task.md (EP-TASK-06, backend repo)
- Replace Task Checklist (PUT /api/v1/tasks/:taskId/checklist) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/replace-checklist.md (EP-TASK-07, backend repo)
- List My Lists (GET /api/v1/lists) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/list-lists.md (EP-LIST-01, backend repo)

## Used by Features

- FEAT-TASK-01 Task Lifecycle (Add, Edit, Complete, Delete, Move)
- FEAT-TASK-02 Checklist Inside a Task (Optional)

## Permissions

- Requires session.

## Source Reference

- Planned file: `src/features/tasks/pages/TaskDetailPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-TASK-01, FEAT-TASK-02
- Workflows: WF-006
- Business rules: BR-009, BR-033, BR-034
