const { chromium } = require("playwright");
const LoginPage = require("../login/LoginPage");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

  const Login = new LoginPage(page);

  await Login.login("standard_user", "secret_sauce");
  await page.waitForSelector(".inventory_item");

  const items = await page.$$(".inventory_item");
  //   console.log(items[2]);

  const name = await items[2].$(".inventory_item_name");
  console.log(await name.textContent());
})();
