---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-ADMN-03
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/admin/admins'
source_reference: 'src/features/admin/pages/AdminAccountsPage.tsx'
generated_at: 2026-11-05
---

# Page: Admin Accounts

## Page ID

PAGE-ADMN-03

## Summary

Super Admin management of admin accounts: create, change role, remove.

## Status

Proposed

## Route

/admin/admins

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Super Admin management of admin accounts: create, change role, remove.

## User Personas

- Super Admin

## Key Interactions / Workflows

- Create admin and assign role
- Change role
- Remove admin

## Page States

- Not authorised (Admin role)
- Last Super Admin protected

## Consumes Endpoints

- Get Current Admin (GET /api/v1/admin/auth/me) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/admin-get-current.md (EP-ADMN-03, backend repo)
- List Admin Accounts (GET /api/v1/admin/admins) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/list-admins.md (EP-ADMN-04, backend repo)
- Create Admin Account (POST /api/v1/admin/admins) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/create-admin.md (EP-ADMN-05, backend repo)
- Change Admin Role (PATCH /api/v1/admin/admins/:adminId) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/change-admin-role.md (EP-ADMN-06, backend repo)
- Remove Admin Access (DELETE /api/v1/admin/admins/:adminId) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/remove-admin.md (EP-ADMN-07, backend repo)

## Used by Features

- FEAT-ADMN-01 Admin Access and Roles

## Permissions

- Super Admin only.

## Source Reference

- Planned file: `src/features/admin/pages/AdminAccountsPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-ADMN-01
- Workflows: WF-009
- Business rules: BR-037
