---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-UXP-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '(layout wrapping all signed-in routes)'
source_reference: 'src/components/AppShell.tsx (layout) and src/features/shell/'
generated_at: 2026-11-05
---

# Page: App Shell (Authenticated Layout)

## Page ID

PAGE-UXP-01

## Summary

Reusable layout every signed-in screen sits in: responsive navigation with lists and smart views, theme switch (system default, manual override), verify-your-email banner, log-out menu, cookie-consent banner, instant-save/rollback feedback toasts. Documented as a page because every screen leans on it.

## Status

Proposed

## Route

(layout wrapping all signed-in routes)

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Reusable layout every signed-in screen sits in: responsive navigation with lists and smart views, theme switch (system default, manual override), verify-your-email banner, log-out menu, cookie-consent banner, instant-save/rollback feedback toasts. Documented as a page because every screen leans on it.

## User Personas

- All signed-in users

## Key Interactions / Workflows

- Follow system theme, switch manually
- Resend verification from the banner
- Log out of this device
- Accept/decline cookie consent

## Page States

- Verify banner (unverified)
- Offline/save failed toast with rollback
- Consent undecided / accepted / declined

## Consumes Endpoints

- Get Current User (Session Bootstrap) (GET /api/v1/auth/me) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/get-current-user.md (EP-AUTH-07, backend repo)
- Resend Verification Email (POST /api/v1/auth/resend-verification) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/resend-verification.md (EP-AUTH-03, backend repo)
- Sign Out This Device (POST /api/v1/auth/signout) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/sign-out.md (EP-AUTH-05, backend repo)
- Update Preferences (PATCH /api/v1/me/preferences) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/update-preferences.md (EP-PROF-05, backend repo)
- Get Cookie Consent Choice (GET /api/v1/consent) - ../../../../../../backend/context/code-context/backend/domains/analytics/endpoints/get-consent.md (EP-ANLY-01, backend repo)
- Record Or Withdraw Cookie Consent (PUT /api/v1/consent) - ../../../../../../backend/context/code-context/backend/domains/analytics/endpoints/set-consent.md (EP-ANLY-02, backend repo)
- List My Lists (GET /api/v1/lists) - ../../../../../../backend/context/code-context/backend/domains/lists/endpoints/list-lists.md (EP-LIST-01, backend repo)

## Used by Features

- FEAT-ANLY-01 Analytics and Cookie Consent
- FEAT-AUTH-01 Account Registration and Email Verification
- FEAT-AUTH-02 Sign-in and Session Management
- FEAT-LIST-01 List Management
- FEAT-UXP-01 App Shell, Theme and Instant Feedback

## Permissions

- Requires session (consent banner also shows to visitors on public routes).

## Source Reference

- Planned file: `src/components/AppShell.tsx (layout) and src/features/shell/` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- OQ-UXP-02 | Terms of Service and Privacy Policy URLs/content are supplied by the client (DEC-044) | Client | Links in sign-up, footer, consent banner | Open

## Source References

- Features: FEAT-ANLY-01, FEAT-AUTH-01, FEAT-AUTH-02, FEAT-LIST-01, FEAT-UXP-01
- Workflows: WF-010
- Business rules: BR-019, BR-020, BR-021, BR-022, BR-043
