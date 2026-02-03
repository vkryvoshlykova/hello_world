// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation tests', () => {
  test('navigate to page and check URL', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/example\.com/);
  });

  test('click link and verify navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /more information|learn more/i }).click();
    await expect(page).toHaveURL(/iana\.org/);
  });

  test('page loads within timeout', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
  });
});
