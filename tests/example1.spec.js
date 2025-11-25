import { test, expect } from '@playwright/test';
//const {hello,helloworld}=require('.demo/hello');
// import { hello, helloworld } from './demo/hello';

// console.log(hello());
// console.log(helloworld());
test('my first test', async ({ page }) => {
await page.goto('https://www.google.com');
const title = await page.title();
console.log('page title:', title);

// More robust assertions:
// Option A: check the page object with a regex
await expect(page).toHaveTitle(/Google/);

// Option B: check the captured title string
// await expect(title).toContain('Google');
  await expect(page).toHaveTitle('Google');
});