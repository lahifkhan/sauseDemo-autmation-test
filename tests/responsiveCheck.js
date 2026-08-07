const { chromium } = require("playwright");
const { loginPage } = require("../login/LoginPage");
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 },
  });
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  await page.click("#react-burger-menu-btn");
  await page.waitForSelector("#logout_sidebar_link");
  await page.click("#logout_sidebar_link");

  console.log("logout-successfull");
  await browser.close();
})();
