import { test } from "@playwright/test";
const loginPage = require("../login/LoginPage");
const inventoryPage = require("../inverntoryPage/inventoryPage");
const checkNumberOfItme = require("../checkNumberOfItem/checkNumber");

test.use({
  headless: false,
});

test("test", async ({ page }) => {
  //code here

  await page.goto("https://www.saucedemo.com/");
  const LoginPage = new loginPage(page);
  await LoginPage.login("standard_user", "secret_sauce");

  //   add to cart items
  const InventoryPage = new inventoryPage(page);
  await InventoryPage.addToCart();

  //check the number of item
  const CheckNumberOfItem = new checkNumberOfItme(page);
  await CheckNumberOfItem.checkNumbe();
});
