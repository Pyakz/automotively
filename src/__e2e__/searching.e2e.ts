import { test, expect } from '@playwright/test';

test('Should search correctly', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByPlaceholder('Honda, 2003, White, John Doe').click();
  await page.getByPlaceholder('Honda, 2003, White, John Doe').fill('blue');
});
