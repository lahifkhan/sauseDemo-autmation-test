const { chromium } = require("playwright");
const LoginPage = require("../login/LoginPage");
const InventoryPage = require("../inverntoryPage/inventoryPage");
const CartPage = require("../cartPage/cartPage");
const CheckoutPage = require("../checkoutPage/checkout");
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

  await page.waitForSelector(".shopping_cart_badge");
  const isvisible = await page.isVisible(".shopping_cart_badge");
  console.log(isvisible);

  // open cart
  await page.click(".shopping_cart_link");
  await page.waitForURL("https://www.saucedemo.com/cart.html");
  console.log("cart open");

  const cartPage = new CartPage(page);
  cartPage.checkCartItem();

  // // check all the item in cart
  // const items = await page.$$eval(".inventory_item_name", (items) => {
  //   return items.map((item) => item.textContent);
  // });

  // console.log(items);

  // go to checkout
  await page.click("#checkout");
  await page.waitForSelector(".checkout_info_container");

  //completing the chekcout
  const checkoutPage = new CheckoutPage(page);
  checkoutPage.completeForm();
  checkoutPage.varifyItem();

  // finish the checkout
  await page.click("#finish");

  await page.waitForURL("https://www.saucedemo.com/checkout-complete.html");
  const url = await page.url();
  if (url.includes("checkout-complete.html")) {
    console.log("checkout done all are complete");
  } else {
    console.log("checkout not complete");
  }
})();
