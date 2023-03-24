import { test, expect } from '@playwright/test';

test('Should paginatie correctly', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByTestId('next').click();
  await page.getByTestId('previous').click();
});
