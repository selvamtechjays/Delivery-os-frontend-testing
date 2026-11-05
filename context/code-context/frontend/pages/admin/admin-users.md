---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-ADMN-02
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/admin'
source_reference: 'src/features/admin/pages/AdminUsersPage.tsx'
generated_at: 2026-11-05
---

# Page: Admin Users

## Page ID

PAGE-ADMN-02

## Summary

Admin home: user counts by status, user search with basic details only, and disable/re-enable. Never shows tasks.

## Status

Proposed

## Route

/admin

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Admin home: user counts by status, user search with basic details only, and disable/re-enable. Never shows tasks.

## User Personas

- Admin
- Super Admin

## Key Interactions / Workflows

- View counts
- Search by name or email
- Disable an account
- Re-enable an account
- Sign out

## Page States

- No results
- Already disabled
- Confirm disable

## Consumes Endpoints

- Get Current Admin (GET /api/v1/admin/auth/me) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/admin-get-current.md (EP-ADMN-03, backend repo)
- User Count By Status (GET /api/v1/admin/users/stats) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/user-stats.md (EP-ADMN-08, backend repo)
- Search Users (GET /api/v1/admin/users) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/search-users.md (EP-ADMN-09, backend repo)
- Disable User Account (POST /api/v1/admin/users/:userId/disable) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/disable-user.md (EP-ADMN-10, backend repo)
- Re-enable User Account (POST /api/v1/admin/users/:userId/enable) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/enable-user.md (EP-ADMN-11, backend repo)
- Admin Sign Out (POST /api/v1/admin/auth/signout) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/admin-sign-out.md (EP-ADMN-02, backend repo)

## Used by Features

- FEAT-ADMN-01 Admin Access and Roles
- FEAT-ADMN-02 Admin User Management

## Permissions

- Requires an admin session (either role).

## Source Reference

- Planned file: `src/features/admin/pages/AdminUsersPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-ADMN-01, FEAT-ADMN-02
- Workflows: WF-009
- Business rules: BR-017, BR-018, BR-038, BR-039
