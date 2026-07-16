/** Browser launch:
 * Browser context
 * Page
 */

import {chromium, test} from "@playwright/test"
test('browser launch', async () => {
  const browser=await chromium.launch({headless:false}) // launching in the chrome browser
  // const browser=await chromium.launch({channel:"msedge",headless:false}) // edge also use chromium so it will work
  const context=await browser.newContext() // new context with no history
  const page=await context.newPage() // new page
  await page.goto("https://leaftaps.com")
    
})

/**
 * First priority will be given to script (ex: chrome mentioned in script)
 * In terminal we can also mention a browser: npx playwright test browserLaunch.spec.ts
--project="chromium". this will be considered second
 * 3rd it will be on config file.  
 */