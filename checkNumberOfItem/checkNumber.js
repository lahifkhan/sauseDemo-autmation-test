const { expect } = require("@playwright/test");

class checkNumber {
  constructor(page) {
    this.page = page;
    this.shoppingCartBadge = ".shopping_cart_badge";
  }

  async checkNumbe() {
    const badge = this.page.locator(".shopping_cart_badge");

    await expect(badge).toBeVisible();

    const count = parseInt(await badge.textContent(), 10);

    expect(count).toBeGreaterThan(0);
  }
}
module.exports = checkNumber;
