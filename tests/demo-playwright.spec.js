// @ts-check
const { test, expect } = require('@playwright/test');

// Tests against Playwright's demo site (forms, toggles, etc.)
test.describe('Demo site - Todo app', () => {
  test.use({ baseURL: 'https://demo.playwright.dev/todomvc' });

  test('add todo item', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').fill('Learn Playwright');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByText('Learn Playwright')).toBeVisible();
  });

  test('complete todo and filter active', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').fill('Task one');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Task two');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByRole('checkbox').first().check();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByText('Task two')).toBeVisible();
    await expect(page.getByText('Task one')).not.toBeVisible();
  });
});
