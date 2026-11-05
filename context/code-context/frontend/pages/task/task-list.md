---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-TASK-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/lists/:listId'
source_reference: 'src/features/tasks/pages/TaskListPage.tsx'
generated_at: 2026-11-05
---

# Page: Task List

## Page ID

PAGE-TASK-01

## Summary

The main working screen: a list's tasks with quick-add, tick, delete with Undo, drag to reorder, sort, Show completed toggle and overdue marking.

## Status

Proposed

## Route

/lists/:listId

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

The main working screen: a list's tasks with quick-add, tick, delete with Undo, drag to reorder, sort, Show completed toggle and overdue marking.

## User Personas

- Signed-in user

## Key Interactions / Workflows

- Quick-add (type title, Enter)
- Tick/untick
- Delete with 10s Undo
- Drag to reorder
- Sort Manual/Due date/Priority
- Show completed toggle
- Open a task

## Page States

- Empty list
- Unverified 5-task cap message with resend link
- Save failed: rollback with message
- Overdue highlighted

## Consumes Endpoints

- Create Task (Quick Add) (POST /api/v1/tasks) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/create-task.md (EP-TASK-01, backend repo)
- List Tasks In A List (GET /api/v1/lists/:listId/tasks) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/list-tasks-in-list.md (EP-TASK-02, backend repo)
- Update Task (Edit, Complete, Move) (PATCH /api/v1/tasks/:taskId) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/update-task.md (EP-TASK-04, backend repo)
- Delete Task (Soft, Undoable) (DELETE /api/v1/tasks/:taskId) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/delete-task.md (EP-TASK-05, backend repo)
- Undo Task Deletion (POST /api/v1/tasks/:taskId/restore) - ../../../../../../backend/context/code-context/backend/domains/tasks/endpoints/restore-task.md (EP-TASK-06, backend repo)
- Reposition Task (Manual Order) (POST /api/v1/tasks/:taskId/reposition) - ../../../../../../backend/context/code-context/backend/domains/views/endpoints/reposition-task.md (EP-VIEW-03, backend repo)
- List My Lists (GET /api/v1/lists) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/list-lists.md (EP-LIST-01, backend repo)
- Resend Verification Email (POST /api/v1/auth/resend-verification) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/resend-verification.md (EP-AUTH-03, backend repo)

## Used by Features

- FEAT-LIST-01 List Management
- FEAT-TASK-01 Task Lifecycle (Add, Edit, Complete, Delete, Move)
- FEAT-TASK-02 Checklist Inside a Task (Optional)
- FEAT-VIEW-01 Manual Ordering and Sorting
- FEAT-VIEW-02 Task Search, Filters and Completed Toggle

## Permissions

- Requires session.

## Source Reference

- Planned file: `src/features/tasks/pages/TaskListPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-LIST-01, FEAT-TASK-01, FEAT-TASK-02, FEAT-VIEW-01, FEAT-VIEW-02
- Workflows: WF-006, WF-007
- Business rules: BR-011, BR-012, BR-013, BR-014, BR-021, BR-027, BR-036
