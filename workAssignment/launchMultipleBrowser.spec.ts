/** Browser launch:
 * Browser context
 * Page
 */

import { chromium, webkit, test } from "@playwright/test";

test.setTimeout(120000);

test('browser launch', async () => {
  const browser = await chromium.launch({ channel: "msedge", headless: false });
  const browser1 = await webkit.launch({ headless: false });
  

  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.redbus.in/");
  console.log('Title:', await page.title());
  console.log('URL:', page.url());

  const context1 = await browser1.newContext();
  const page1 = await context1.newPage();
  await page1.goto("https://www.flipkart.com/");
  console.log('Title:', await page1.title());
  console.log('URL:', page1.url());

  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
  await browser1.close();
});