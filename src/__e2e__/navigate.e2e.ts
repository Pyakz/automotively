import { test, expect } from '@playwright/test';

test('Should navigate correctly to details pages', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page
    .getByRole('link', { name: 'Honda Accord 2003 HondaAccord VIN: 9FA46P0HDDD7E3963 $5,999' })
    .click();
  await page.locator('svg').click();
});
