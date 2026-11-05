---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-ADMN-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/admin/login'
source_reference: 'src/features/admin/pages/AdminSignInPage.tsx'
generated_at: 2026-11-05
---

# Page: Admin Sign In

## Page ID

PAGE-ADMN-01

## Summary

Dedicated admin login, separate from user sign-in.

## Status

Proposed

## Route

/admin/login

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Dedicated admin login, separate from user sign-in.

## User Personas

- Admin
- Super Admin

## Key Interactions / Workflows

- Sign in

## Page States

- Invalid credentials

## Consumes Endpoints

- Admin Sign In (POST /api/v1/admin/auth/signin) - ../../../../../../backend/context/code-context/backend/domains/admin/endpoints/admin-sign-in.md (EP-ADMN-01, backend repo)

## Used by Features

- FEAT-ADMN-01 Admin Access and Roles

## Permissions

- Public.

## Source Reference

- Planned file: `src/features/admin/pages/AdminSignInPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-ADMN-01
- Workflows: WF-009
- Business rules: BR-037
