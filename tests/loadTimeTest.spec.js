const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const startTime = Date.now();
  await page.goto("https://www.saucedemo.com/");
  const loadTime = Date.now() - startTime;
  console.log("load time", loadTime);
})();
