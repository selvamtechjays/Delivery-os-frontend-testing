---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-AUTH-02
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/signin'
source_reference: 'src/features/auth/pages/SignInPage.tsx'
generated_at: 2026-11-05
---

# Page: Sign In

## Page ID

PAGE-AUTH-02

## Summary

Email/password sign-in with remember-me, lockout, disabled and pending-deletion messaging, links to forgot password, and account recovery within the 30-day window.

## Status

Proposed

## Route

/signin

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Email/password sign-in with remember-me, lockout, disabled and pending-deletion messaging, links to forgot password, and account recovery within the 30-day window.

## User Personas

- Returning user
- User recovering a deleted account

## Key Interactions / Workflows

- Sign in with optional remember me
- Continue with Google
- Follow Forgot password
- Recover account when pending deletion (identity confirmation)

## Page States

- Invalid credentials
- Locked for 15 minutes (shows unlock time)
- Account disabled: contact support
- Pending deletion: offer recovery, shows purge date
- Unverified: allowed in with banner

## Consumes Endpoints

- Sign In (POST /api/v1/auth/signin) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/sign-in.md (EP-AUTH-04, backend repo)
- Recover Account During Deletion Window (POST /api/v1/auth/recover-account) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/recover-account.md (EP-PROF-08, backend repo)
- Sign In Or Up With Google (POST /api/v1/auth/google) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/google-sign-in.md (EP-AUTH-10, backend repo)

## Used by Features

- FEAT-AUTH-02 Sign-in and Session Management
- FEAT-AUTH-04 Google Sign-in (Optional)
- FEAT-PROF-02 Account Deletion and Data Export

## Permissions

- Public.

## Source Reference

- Planned file: `src/features/auth/pages/SignInPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-AUTH-02, FEAT-AUTH-04, FEAT-PROF-02
- Workflows: WF-002, WF-005
- Business rules: BR-003, BR-004, BR-024, BR-038
