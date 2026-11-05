# Testing

How tests are written and run in this repo. The quality-gate contract (`qa/quality-gates.md` in the Delivery OS workspace) is the source of truth for what is required; this file is the how-to.

## Commands

| Purpose                                                    | Command                                                                      |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| All unit + component + integration + contract + a11y tests | `npm test`                                                                   |
| Same, with JSON report (CI)                                | `npm run test:ci` (writes `reports/vitest.json`)                             |
| Integration tests only (`*.int.test.tsx`)                  | `npm run test:int`                                                           |
| Contract tests only (`src/lib/contract`)                   | `npm run test:contract`                                                      |
| Coverage gate (enforced)                                   | `npm run test:cov`                                                           |
| E2E (Chromium, headless)                                   | `npm run e2e` (smoke: `npm run e2e:smoke`)                                   |
| Lint / format / types / build                              | `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm run build` |
| Dependency scan (new findings only)                        | `npm run security:audit`                                                     |

CI runs exactly these scripts (`.github/workflows/ci.yml`). Do not run a different command locally and call it the gate.

## Where tests live and what they are called

- Unit and component tests sit beside the source: `*.test.ts`, `*.test.tsx`.
- Integration tests (render + user-event + MSW): `*.int.test.tsx`, using `renderWithProviders` from `src/test/render.tsx`.
- Contract tests: beside the schemas in `src/lib/contract/`.
- Accessibility checks (vitest-axe): `*.a11y.test.tsx`, or an `axe` assertion inside the component test.
- E2E: `e2e/*.spec.ts`, page objects in `e2e/pages/`, fixtures in `e2e/fixtures/`. Tag accessibility scans `@a11y`.

## Network, data and isolation

- All network is mocked with MSW (`src/test/msw`). A request with no handler fails the test. Override per test with `server.use(...)`; handlers reset automatically.
- Handlers and e2e route stubs are built from the contract schemas in `src/lib/contract` (via `src/test/fixtures`), never hand-typed JSON, so mock and validator cannot drift. `apiGet(path, schema)` validates responses at the API boundary.
- Test data comes from typed factories in `src/test/factories` (seeded `@faker-js/faker`, fixed seed). Override only what the test cares about: `buildTask({ priority: 'high' })`. No inline object literals for domain objects.
- Time: use `freezeTime()` from `src/test/fake-timers.ts`.
- `src/test/setup.ts` runs a global `afterEach` (DOM cleanup, MSW reset, unstub globals, restore mocks, real timers, clear storage and cookies). Do not add per-file resets.
- E2E runs the production build against mocked network. There is no live backend.

## Style rules

- Use `user-event`, not `fireEvent`. Query by role or label first.
- Add an axe check to every new page or major component (WCAG 2.1 AA: tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`).
- A test is e2e-worthy when it needs a real browser: auth and session, cookie and consent network behaviour, theme persistence, navigation across pages. Everything else stays at unit or integration level.
- No `.skip`, `.only`, or snapshot-only tests.
- Coverage thresholds live in one place, `vite.config.ts` (`test.coverage.thresholds`). They only ratchet up, and any change goes through a `DEC-###` in the decision log. Do not exclude files to raise the number.

## Hooks

`husky` runs `lint-staged` (prettier check + eslint) on commit and `npm run typecheck` on push. Hooks are a convenience; CI is the gate.

## Dependency and secret scanning

`npm run security:audit` fails only on high or critical advisories that are not recorded in `.github/security/npm-audit-baseline.json`. Existing advisories are fixed through the dev loop (`/dev:build --vulnerable repo=frontend`), then removed from the baseline. Gitleaks runs in CI over the pushed or pull-request commits.
