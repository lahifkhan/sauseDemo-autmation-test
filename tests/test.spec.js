const { chromium } = require("playwright");
const LoginPage = require("../login/LoginPage");
const InventoryPage = require("../inverntoryPage/inventoryPage");
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await page.goto("https://www.saucedemo.com");
  await loginPage.login("standard_user", "secret_sauce");

  await page.waitForSelector(".inventory_list");
  console.log("Login successful");

  const inventoryPage = new InventoryPage(page);
  inventoryPage.addToCart();
  console.log("Items added to cart");
})();
