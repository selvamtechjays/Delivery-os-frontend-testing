import AxeBuilder from '@axe-core/playwright';
import { expect, test } from './fixtures';

test('app loads and shows the heading', async ({ appPage }) => {
  await appPage.goto();

  await expect(appPage.heading).toHaveText(/delivery os/i);
});

test('home page has no WCAG 2.1 AA violations @a11y', async ({
  appPage,
  page,
}) => {
  await appPage.goto();

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(results.violations).toEqual([]);
});
