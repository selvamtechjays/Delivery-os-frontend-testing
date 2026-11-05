---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-AUTH-03
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/verify-email?token=...'
source_reference: 'src/features/auth/pages/VerifyEmailPage.tsx'
generated_at: 2026-11-05
---

# Page: Verify Email

## Page ID

PAGE-AUTH-03

## Summary

Landing page for emailed single-use links: email verification, email-change confirmation and Google link confirmation, with a resend option when the link expired.

## Status

Proposed

## Route

/verify-email?token=...

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Landing page for emailed single-use links: email verification, email-change confirmation and Google link confirmation, with a resend option when the link expired.

## User Personas

- Unverified user
- User changing email
- User linking Google

## Key Interactions / Workflows

- Auto-submit the token on load
- Show success and return to the app
- Request a new link when expired or used

## Page States

- Verifying
- Verified
- Email changed
- Google linked
- Expired or already used: offer resend
- New email already taken (change refused)

## Consumes Endpoints

- Verify Email / Confirm Email Change (POST /api/v1/auth/verify-email) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/verify-email.md (EP-AUTH-02, backend repo)
- Resend Verification Email (POST /api/v1/auth/resend-verification) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/resend-verification.md (EP-AUTH-03, backend repo)
- Confirm Google Account Link (POST /api/v1/auth/google/link-confirm) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/google-link-confirm.md (EP-AUTH-11, backend repo)

## Used by Features

- FEAT-AUTH-01 Account Registration and Email Verification
- FEAT-AUTH-04 Google Sign-in (Optional)
- FEAT-PROF-01 Profile Management

## Permissions

- Public landing; resend requires a session.

## Source Reference

- Planned file: `src/features/auth/pages/VerifyEmailPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- OQ-AUTH-11 | Link token purpose is in the token, not the URL: confirm one URL for all three purposes is acceptable | TL | Routing | Open

## Source References

- Features: FEAT-AUTH-01, FEAT-AUTH-04, FEAT-PROF-01
- Workflows: WF-001, WF-004, WF-005
- Business rules: BR-002, BR-006, BR-029
