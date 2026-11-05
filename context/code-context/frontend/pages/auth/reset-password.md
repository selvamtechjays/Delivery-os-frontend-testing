---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-AUTH-05
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/reset-password?token=...'
source_reference: 'src/features/auth/pages/ResetPasswordPage.tsx'
generated_at: 2026-11-05
---

# Page: Reset Password

## Page ID

PAGE-AUTH-05

## Summary

Set a new password from the emailed link; shows expiry and offers a new link.

## Status

Proposed

## Route

/reset-password?token=...

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Set a new password from the emailed link; shows expiry and offers a new link.

## User Personas

- User who forgot their password

## Key Interactions / Workflows

- Enter new password with strength indicator
- Request a new link when expired

## Page States

- Form
- Success: go to sign in
- Expired / used link

## Consumes Endpoints

- Reset Password (POST /api/v1/auth/reset-password) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/reset-password.md (EP-AUTH-09, backend repo)
- Request Password Reset (POST /api/v1/auth/forgot-password) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/forgot-password.md (EP-AUTH-08, backend repo)

## Used by Features

- FEAT-AUTH-03 Password Recovery

## Permissions

- Public.

## Source Reference

- Planned file: `src/features/auth/pages/ResetPasswordPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-AUTH-03
- Workflows: WF-003
- Business rules: BR-001, BR-005, BR-028
