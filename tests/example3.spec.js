import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('cribuzz');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press('Enter');
  await page.getByRole('link', { name: 'Cricbuzz Sports news website' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('live score');
  await page.getByRole('combobox', { name: 'Search Wikipedia' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('li:nth-child(6) > .searchResultImage > .searchResultImage-text > .mw-search-result-heading').click();
  await page.getByRole('radio', { name: 'Wide' }).check();
  await page.getByLabel('Search results').getByRole('button', { name: 'Search', exact: true }).click();
  await page.goto('https://en.wikipedia.org/w/index.php?search=live+score&title=Special%3ASearch&ns0=1');
  await page.locator('#pt-login-2').click();
  await page.goto('https://en.wikipedia.org/w/index.php?search=live+score&title=Special%3ASearch&ns0=1');
});