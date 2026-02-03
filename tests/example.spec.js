// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Example.com website', () => {
  test('page has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('page has heading', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
  });

  test('page has link to more information', async ({ page }) => {
    await page.goto('/');
    const link = page.getByRole('link', { name: /more information|learn more/i });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', /iana\.org/);
  });
});
