---
doc_type: page-index
schema_version: 1.3
produced_by: tl
layer: frontend
origin: designed
repo: frontend
status: Emerging
generated_at: 2026-11-05
---

# Frontend Index - tasknest web

16 pages across 7 areas (all `Proposed`). Stack and conventions: ./_overview.md

## Domain Map

### Authentication - `AUTH` - 5 pages - ./pages/auth/

Signed-out identity surfaces: sign-up, sign-in, email-link landing (verify, email change, Google link), forgot and reset password.
**Talks to:** Authentication endpoints in the backend repo. (cross-repo; resolve via the backend index)
**Not here:** Profile changes -> Profile.

### Profile & Account - `PROF` - 2 pages - ./pages/profile/

Signed-in account surfaces: profile settings (name, photo, password, email, time zone, digest) and account data/deletion.
**Talks to:** Profile endpoints. (cross-repo; resolve via the backend index)

### Lists - `LIST` - 1 page - ./pages/list/

List management screen.
**Talks to:** Lists endpoints. (cross-repo; resolve via the backend index)
**Not here:** The tasks inside a list -> Tasks.

### Tasks - `TASK` - 2 pages - ./pages/task/

The main working screen (list view with quick-add, order, sort) and the task detail with checklist.
**Talks to:** Tasks and Views endpoints. (cross-repo; resolve via the backend index)
**Not here:** Search and smart filters -> Views.

### Views - `VIEW` - 1 page - ./pages/view/

Cross-list search and smart filters (Today, This week, Overdue, Priority).
**Talks to:** Views and Tasks endpoints. (cross-repo; resolve via the backend index)

### Admin - `ADMN` - 3 pages - ./pages/admin/

Admin sign-in, admin home (counts, search, disable/enable) and admin account management.
**Talks to:** Admin endpoints. (cross-repo; resolve via the backend index)

### Experience - `UXP` - 2 pages - ./pages/uxp/

The authenticated app shell (navigation, theme, banners, consent) and the public landing page.
**Talks to:** Auth, Profile, Analytics endpoints. (cross-repo; resolve via the backend index)

## Units

| Page ID      | Page                             | Route                                  | Area              | Summary                                                                                                                                                                                                                                                                                                        | Used by Features                                                     | Consumes Endpoints                                                                             | File                                         |
| ------------ | -------------------------------- | -------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| PAGE-AUTH-01 | Sign Up                          | /signup                                | Authentication    | Public registration form: name, email, password, terms/privacy tick and CAPTCHA, with a live password-strength indicator and a Continue with Google option.                                                                                                                                                    | FEAT-AUTH-01, FEAT-AUTH-04                                           | EP-AUTH-01, EP-AUTH-10                                                                         | ./pages/auth/sign-up.md                      |
| PAGE-AUTH-02 | Sign In                          | /signin                                | Authentication    | Email/password sign-in with remember-me, lockout, disabled and pending-deletion messaging, links to forgot password, and account recovery within the 30-day window.                                                                                                                                            | FEAT-AUTH-02, FEAT-AUTH-04, FEAT-PROF-02                             | EP-AUTH-04, EP-PROF-08, EP-AUTH-10                                                             | ./pages/auth/sign-in.md                      |
| PAGE-AUTH-03 | Verify Email                     | /verify-email?token=...                | Authentication    | Landing page for emailed single-use links: email verification, email-change confirmation and Google link confirmation, with a resend option when the link expired.                                                                                                                                             | FEAT-AUTH-01, FEAT-AUTH-04, FEAT-PROF-01                             | EP-AUTH-02, EP-AUTH-03, EP-AUTH-11                                                             | ./pages/auth/verify-email.md                 |
| PAGE-AUTH-04 | Forgot Password                  | /forgot-password                       | Authentication    | Ask for a reset link by email; always shows a neutral confirmation.                                                                                                                                                                                                                                            | FEAT-AUTH-03                                                         | EP-AUTH-08                                                                                     | ./pages/auth/forgot-password.md              |
| PAGE-AUTH-05 | Reset Password                   | /reset-password?token=...              | Authentication    | Set a new password from the emailed link; shows expiry and offers a new link.                                                                                                                                                                                                                                  | FEAT-AUTH-03                                                         | EP-AUTH-09, EP-AUTH-08                                                                         | ./pages/auth/reset-password.md               |
| PAGE-PROF-01 | Profile Settings                 | /settings/profile                      | Profile & Account | Maintain display name, photo, password, email (with re-verification), time zone and digest on/off; log out of all devices.                                                                                                                                                                                     | FEAT-AUTH-02, FEAT-NOTF-01, FEAT-PROF-01                             | EP-AUTH-07, EP-PROF-01, EP-PROF-02, EP-PROF-03, EP-PROF-04, EP-PROF-05, EP-AUTH-06             | ./pages/profile/profile-settings.md          |
| PAGE-PROF-02 | Account Data And Deletion        | /settings/account                      | Profile & Account | Export personal data (JSON or CSV) and delete the account with confirmation and the 30-day recovery notice.                                                                                                                                                                                                    | FEAT-PROF-02                                                         | EP-PROF-06, EP-PROF-07                                                                         | ./pages/profile/account-data-and-deletion.md |
| PAGE-LIST-01 | Lists                            | /lists                                 | Lists             | Manage lists: create, rename, delete (tasks move to My Tasks) and drag to reorder custom lists; My Tasks fixed on top.                                                                                                                                                                                         | FEAT-LIST-01                                                         | EP-LIST-01, EP-LIST-02, EP-LIST-03, EP-LIST-04, EP-LIST-05                                     | ./pages/list/lists.md                        |
| PAGE-TASK-01 | Task List                        | /lists/:listId                         | Tasks             | The main working screen: a list's tasks with quick-add, tick, delete with Undo, drag to reorder, sort, Show completed toggle and overdue marking.                                                                                                                                                              | FEAT-LIST-01, FEAT-TASK-01, FEAT-TASK-02, FEAT-VIEW-01, FEAT-VIEW-02 | EP-TASK-01, EP-TASK-02, EP-TASK-04, EP-TASK-05, EP-TASK-06, EP-VIEW-03, EP-LIST-01, EP-AUTH-03 | ./pages/task/task-list.md                    |
| PAGE-TASK-02 | Task Detail                      | /tasks/:taskId                         | Tasks             | Edit a task's title, notes, due date/time, priority, list (move), delete, and manage its flat checklist (up to 20 items) with progress.                                                                                                                                                                        | FEAT-TASK-01, FEAT-TASK-02                                           | EP-TASK-03, EP-TASK-04, EP-TASK-05, EP-TASK-06, EP-TASK-07, EP-LIST-01                         | ./pages/task/task-detail.md                  |
| PAGE-VIEW-01 | Smart Views And Search           | /views/:filter and /search?q=          | Views             | Cross-list results for Today, This week, Overdue, Priority and search by title/notes, with a completed toggle and empty states.                                                                                                                                                                                | FEAT-VIEW-02                                                         | EP-VIEW-01, EP-VIEW-02, EP-TASK-04, EP-LIST-01                                                 | ./pages/view/smart-views-and-search.md       |
| PAGE-ADMN-01 | Admin Sign In                    | /admin/login                           | Admin             | Dedicated admin login, separate from user sign-in.                                                                                                                                                                                                                                                             | FEAT-ADMN-01                                                         | EP-ADMN-01                                                                                     | ./pages/admin/admin-sign-in.md               |
| PAGE-ADMN-02 | Admin Users                      | /admin                                 | Admin             | Admin home: user counts by status, user search with basic details only, and disable/re-enable. Never shows tasks.                                                                                                                                                                                              | FEAT-ADMN-01, FEAT-ADMN-02                                           | EP-ADMN-03, EP-ADMN-08, EP-ADMN-09, EP-ADMN-10, EP-ADMN-11, EP-ADMN-02                         | ./pages/admin/admin-users.md                 |
| PAGE-ADMN-03 | Admin Accounts                   | /admin/admins                          | Admin             | Super Admin management of admin accounts: create, change role, remove.                                                                                                                                                                                                                                         | FEAT-ADMN-01                                                         | EP-ADMN-03, EP-ADMN-04, EP-ADMN-05, EP-ADMN-06, EP-ADMN-07                                     | ./pages/admin/admin-accounts.md              |
| PAGE-UXP-01  | App Shell (Authenticated Layout) | (layout wrapping all signed-in routes) | Experience        | Reusable layout every signed-in screen sits in: responsive navigation with lists and smart views, theme switch (system default, manual override), verify-your-email banner, log-out menu, cookie-consent banner, instant-save/rollback feedback toasts. Documented as a page because every screen leans on it. | FEAT-ANLY-01, FEAT-AUTH-01, FEAT-AUTH-02, FEAT-LIST-01, FEAT-UXP-01  | EP-AUTH-07, EP-AUTH-03, EP-AUTH-05, EP-PROF-05, EP-ANLY-01, EP-ANLY-02, EP-LIST-01             | ./pages/uxp/app-shell.md                     |
| PAGE-UXP-02  | Public Landing Page              | /                                      | Experience        | Single public page: hero, key features, how it works, benefits, sign-up/Get Started and a footer with Terms and Privacy links; signed-in visitors are redirected to their tasks.                                                                                                                               | FEAT-UXP-02                                                          | EP-AUTH-07                                                                                     | ./pages/uxp/landing.md                       |
