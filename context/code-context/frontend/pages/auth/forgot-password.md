---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-AUTH-04
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/forgot-password'
source_reference: 'src/features/auth/pages/ForgotPasswordPage.tsx'
generated_at: 2026-11-05
---

# Page: Forgot Password

## Page ID

PAGE-AUTH-04

## Summary

Ask for a reset link by email; always shows a neutral confirmation.

## Status

Proposed

## Route

/forgot-password

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Ask for a reset link by email; always shows a neutral confirmation.

## User Personas

- User who forgot their password

## Key Interactions / Workflows

- Enter email
- See the neutral 'if an account exists we emailed you' message

## Page States

- Idle
- Submitted (neutral)
- Rate limited

## Consumes Endpoints

- Request Password Reset (POST /api/v1/auth/forgot-password) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/forgot-password.md (EP-AUTH-08, backend repo)

## Used by Features

- FEAT-AUTH-03 Password Recovery

## Permissions

- Public.

## Source Reference

- Planned file: `src/features/auth/pages/ForgotPasswordPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-AUTH-03
- Workflows: WF-003
- Business rules: BR-005, BR-026
