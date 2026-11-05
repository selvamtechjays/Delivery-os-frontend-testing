---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-AUTH-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/signup'
source_reference: 'src/features/auth/pages/SignUpPage.tsx'
generated_at: 2026-11-05
---

# Page: Sign Up

## Page ID

PAGE-AUTH-01

## Summary

Public registration form: name, email, password, terms/privacy tick and CAPTCHA, with a live password-strength indicator and a Continue with Google option.

## Status

Proposed

## Route

/signup

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Public registration form: name, email, password, terms/privacy tick and CAPTCHA, with a live password-strength indicator and a Continue with Google option.

## User Personas

- Visitor (individual, public)

## Key Interactions / Workflows

- Enter name/email/password with live strength indicator
- Tick terms and privacy, pass CAPTCHA
- Submit; land in My Tasks with the verify banner
- Continue with Google (FEAT-AUTH-04, Could)

## Page States

- Idle / submitting
- Field and password-policy errors
- Disposable domain rejected
- Email already registered: sign in or reset password (BR-026)
- CAPTCHA failed

## Consumes Endpoints

- Sign Up With Email (POST /api/v1/auth/signup) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/sign-up.md (EP-AUTH-01, backend repo)
- Sign In Or Up With Google (POST /api/v1/auth/google) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/google-sign-in.md (EP-AUTH-10, backend repo)

## Used by Features

- FEAT-AUTH-01 Account Registration and Email Verification
- FEAT-AUTH-04 Google Sign-in (Optional)

## Permissions

- Public. Signed-in visitors are redirected to their tasks.

## Source Reference

- Planned file: `src/features/auth/pages/SignUpPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- OQ-AUTH-02 | CAPTCHA vendor widget and accessibility | TL | Form markup | Open

## Source References

- Features: FEAT-AUTH-01, FEAT-AUTH-04
- Workflows: WF-001
- Business rules: BR-001, BR-007, BR-026
