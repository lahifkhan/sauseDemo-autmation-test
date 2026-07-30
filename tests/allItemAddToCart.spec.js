const { chromium } = require("playwright");
const loginPage = require("../login/LoginPage");
const AllItemAddToCart = require("../addToCartAllItem/allitemAddToCart");

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.saucedemo.com/");

  const LoginPage = new loginPage(page);
  await LoginPage.login("standard_user", "secret_sauce");
  await page.waitForSelector(".inventory_list");
  const allitemAddToCart = new AllItemAddToCart(page);
  await allitemAddToCart.addCart();
})();
