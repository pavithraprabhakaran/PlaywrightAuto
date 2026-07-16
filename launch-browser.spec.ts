/** Browser launch:
 * Browser context
 * Page
 */

import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {
//  const browserInstance = await chromium.launch({ headless: false, channel: "Chrome" });
      // channel will give which browser we want to use.
  const browserInstance = await chromium.launch({ headless: false });
  /** In your case:
    chromium.launch({ headless: false })
    means Playwright launches the default Chromium browser it manages for the environment
So:
with channel specified, Playwright tries to use a specific installed browser channel
without channel, it uses the default browser it already knows how to run
That is why removing channel is usually the safest approach 
when the exact browser channel is not available or not recognized. */
  const browserContext = await browserInstance.newContext();
  const page = await browserContext.newPage();
  await page.goto("https://leaftaps.com");
});