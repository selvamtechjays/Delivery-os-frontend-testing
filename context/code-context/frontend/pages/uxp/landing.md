---
doc_type: page
schema_version: 1.3
produced_by: tl
page_id: PAGE-UXP-02
status: Proposed
implementation_state: Planned
origin: designed
repo: frontend
route: '/'
source_reference: 'src/features/landing/pages/LandingPage.tsx'
generated_at: 2026-11-05
---

# Page: Public Landing Page

## Page ID

PAGE-UXP-02

## Summary

Single public page: hero, key features, how it works, benefits, sign-up/Get Started and a footer with Terms and Privacy links; signed-in visitors are redirected to their tasks.

## Status

Proposed

## Route

/

## Surface

Web (responsive: desktop, tablet, phone browsers, DEC-050)

## Purpose

Single public page: hero, key features, how it works, benefits, sign-up/Get Started and a footer with Terms and Privacy links; signed-in visitors are redirected to their tasks.

## User Personas

- Visitor

## Key Interactions / Workflows

- Read the sections
- Click Sign up / Get Started

## Page States

- Signed-in redirect
- Content pending from the client

## Consumes Endpoints

- Get Current User (Session Bootstrap) (GET /api/v1/auth/me) - ../../../../../../backend/context/code-context/backend/domains/auth/endpoints/get-current-user.md (EP-AUTH-07, backend repo)

## Used by Features

- FEAT-UXP-02 Public Landing Page

## Permissions

- Public.

## Source Reference

- Planned file: `src/features/landing/pages/LandingPage.tsx` in the frontend repo (`C:/Users/selva/OneDrive/Desktop/Delivery-Os-Testing/frontend`); server calls only through `src/lib/api.ts` (coding standard 2)

## Open Questions

- OQ-UXP-03 | Content, screenshots, logo and brand images supplied by the client (DEC-059) | Client | Page copy and assets | Open

## Source References

- Features: FEAT-UXP-02
- Workflows: None
- Business rules: BR-044
