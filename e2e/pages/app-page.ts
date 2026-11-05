import type { Locator, Page } from '@playwright/test';

/** Base page object. Feature page objects extend it. */
export class AppPage {
  protected readonly page: Page;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { level: 1 });
  }

  async goto(path = '/'): Promise<void> {
    await this.page.goto(path);
  }
}
