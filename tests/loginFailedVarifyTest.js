const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "invalid_user");
  await page.fill("#password", "invalid_password");
  await page.click("#login-button");

  const erorMsg = await page.textContent("[data-test='error']");

  console.log(erorMsg);
})();
