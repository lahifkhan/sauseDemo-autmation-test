import { test } from "@playwright/test";
const loginPage = require("../login/LoginPage");
const checkAllAddToCart = require("../checkAllAddToCartWork/checkAllAddToCart");

test("test", async ({ page }) => {
  //code here

  await page.goto("https://www.saucedemo.com/");
  const LoginPage = new loginPage(page);
  await LoginPage.login("standard_user", "secret_sauce");

  const chekAllAddCart = new checkAllAddToCart(page);
  await chekAllAddCart.checkCartBtn();
});
