---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-PROF-02
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/settings/account'
source_reference: 'src/features/profile/pages/AccountDataPage.tsx'
generated_at: 2026-11-05
---

# Page: Account Data And Deletion

## Page ID

PAGE-PROF-02

## Summary

Export personal data (JSON or CSV) and delete the account with confirmation and the 30-day recovery notice.

## Status

Proposed

## Route

/settings/account

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Export personal data (JSON or CSV) and delete the account with confirmation and the 30-day recovery notice.

## User Personas

- Signed-in user (verified or unverified)

## Key Interactions / Workflows

- Choose JSON or CSV and download
- Delete account: confirm with password and read the recovery window

## Page States

- Export preparing/ready
- Deletion confirm dialog
- Deletion requested: signed out

## Consumes Endpoints

- Export My Data (GET /api/v1/me/export) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/export-my-data.md (EP-PROF-06, backend repo)
- Request Account Deletion (POST /api/v1/me/deletion) - ../../../../../../backend/context/code-context/backend/domains/profile/endpoints/request-account-deletion.md (EP-PROF-07, backend repo)

## Used by Features

- FEAT-PROF-02 Account Deletion and Data Export

## Permissions

- Requires session; export allowed for unverified users.

## Source Reference

- Planned file: `src/features/profile/pages/AccountDataPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- None

## Source References

- Features: FEAT-PROF-02
- Workflows: WF-005
- Business rules: BR-024, BR-030
