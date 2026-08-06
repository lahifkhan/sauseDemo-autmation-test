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

  await page.selectOption(".product_sort_container", "lohi");
  await page.waitForTimeout(1000);

  const prices = await page.$$eval(".inventory_item_price", (items) =>
    items.map((item) => parseFloat(item.innerText.replace("$", ""))),
  );

  const isSorted = prices.every(
    (price, i) => i === 0 || prices[i - 1] <= price,
  );
  console.log(`Items are sorted by price: ${isSorted}`);
  await browser.close();
})();
