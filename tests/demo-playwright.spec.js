// @ts-check
const { test, expect } = require('@playwright/test');

// Tests against Playwright's demo site (forms, toggles, etc.)
test.describe('Demo site - Todo app', () => {
  test.use({ baseURL: 'https://demo.playwright.dev/todomvc' });

  const todoInput = (page) => page.getByPlaceholder(/what needs to be done/i).or(page.getByRole('textbox', { name: /todo|what needs/i }));

  test('add todo item', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('input[placeholder*="What"], input[placeholder*="what"], [class*="new-todo"]', { state: 'visible', timeout: 15000 }).catch(() => {});
    await page.getByPlaceholder(/what needs to be done/i).first().fill('Learn Playwright');
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

  test('shows correct item count', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').fill('First');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('Second');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByText('2 items left')).toBeVisible();
  });

  test('clear completed removes done items', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').fill('Done task');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByRole('checkbox').check();
    await page.getByRole('button', { name: 'Clear completed' }).click();
    await expect(page.getByText('Done task')).not.toBeVisible();
  });

  test('delete todo via destroy button', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('What needs to be done?').fill('To delete');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    const item = page.getByRole('listitem').filter({ hasText: 'To delete' });
    await item.hover();
    await item.getByRole('button').click();
    await expect(page.getByText('To delete')).not.toBeVisible();
  });
});
