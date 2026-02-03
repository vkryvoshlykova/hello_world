// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Assertions and page state', () => {
  test('example page has expected paragraph text', async ({ page }) => {
    await page.goto('/');
    const paragraph = page.locator('p').first();
    await expect(paragraph).toContainText('domain');
    await expect(paragraph).toBeVisible();
  });

  test('main content is in viewport', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: 'Example Domain' });
    await expect(heading).toBeInViewport();
  });

  test('link is enabled and has correct count', async ({ page }) => {
    await page.goto('/');
    const links = page.getByRole('link');
    await expect(links).toHaveCount(1);
    await expect(links.first()).toBeEnabled();
  });
});
