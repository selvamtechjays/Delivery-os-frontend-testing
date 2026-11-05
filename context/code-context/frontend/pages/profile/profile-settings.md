---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-PROF-01
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/settings/profile'
source_reference: 'src/features/profile/pages/ProfileSettingsPage.tsx'
generated_at: 2026-11-05
---

# Page: Profile Settings

## Page ID

PAGE-PROF-01

## Summary

Maintain display name, photo, password, email (with re-verification), time zone and digest on/off; log out of all devices.

## Status

Proposed

## Route

/settings/profile

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Maintain display name, photo, password, email (with re-verification), time zone and digest on/off; log out of all devices.

## User Personas

- Signed-in user (verified or unverified)

## Key Interactions / Workflows

- Edit name
- Upload/replace photo (JPG, JPEG, PNG, WebP up to 5 MB)
- Change password
- Request email change
- Change time zone and toggle the daily digest
- Log out of all devices

## Page States

- Photo rejected (type/size)
- New email already used
- Email change pending verification
- Google-only account: no password section (OQ-PROF-02)

## Consumes Endpoints

- Get Current User (Session Bootstrap) (GET /api/v1/auth/me) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/get-current-user.md (EP-AUTH-07, backend repo)
- Update Display Name (PATCH /api/v1/me) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/update-profile.md (EP-PROF-01, backend repo)
- Upload Profile Photo (POST /api/v1/me/photo) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/upload-photo.md (EP-PROF-02, backend repo)
- Change Password (POST /api/v1/me/password) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/change-password.md (EP-PROF-03, backend repo)
- Request Email Change (POST /api/v1/me/email) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/request-email-change.md (EP-PROF-04, backend repo)
- Update Preferences (PATCH /api/v1/me/preferences) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/update-preferences.md (EP-PROF-05, backend repo)
- Sign Out Of All Devices (POST /api/v1/auth/signout-all) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/sign-out-all.md (EP-AUTH-06, backend repo)

## Used by Features

- FEAT-AUTH-02 Sign-in and Session Management
- FEAT-NOTF-01 Daily Digest Email
- FEAT-PROF-01 Profile Management

## Permissions

- Requires session; available to unverified users.

## Source Reference

- Planned file: `src/features/profile/pages/ProfileSettingsPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-AUTH-02, FEAT-NOTF-01, FEAT-PROF-01
- Workflows: WF-005, WF-008
- Business rules: BR-006, BR-015, BR-028, BR-031
