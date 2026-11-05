import { test as base, expect } from '@playwright/test';
import { healthFixture } from '../../src/test/fixtures/health';
import { AppPage } from '../pages/app-page';

interface Fixtures {
  /** Stubs backend calls with contract-validated fixtures (no live backend). */
  mockApi: void;
  appPage: AppPage;
  /** Auth stub; becomes a real session fixture once auth exists. */
  signedInUser: { email: string };
}

export const test = base.extend<Fixtures>({
  mockApi: [
    async ({ page }, run) => {
      await page.route('**/health', (route) =>
        route.fulfill({ json: healthFixture }),
      );
      await run();
    },
    { auto: true },
  ],
  appPage: async ({ page }, run) => {
    await run(new AppPage(page));
  },
  // eslint-disable-next-line no-empty-pattern
  signedInUser: async ({}, run) => {
    await run({ email: 'e2e-user@example.com' });
  },
});

export { expect };
