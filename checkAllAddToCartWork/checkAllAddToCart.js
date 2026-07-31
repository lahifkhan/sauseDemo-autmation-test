const { expect } = require("@playwright/test");
class CheckAllAddToCart {
  constructor(page) {
    this.page = page;
    this.addCartBtn = ".btn_inventory";
  }

  async checkCartBtn() {
    const allbtn = this.page.locator(".btn_inventory");

    const count = await allbtn.count();

    for (let i = 0; i < count; i++) {
      await allbtn.nth(i).click();

      await expect(allbtn.nth(i)).toHaveText("Remove");
    }

    // if (failedItems.length === 0) {
    //   console.log("all items added to the cart");
    // } else {
    //   console.log("Failed to add the folling items on cart ", failedItems);
    // }

    // expect(failedItems.length).toBe(0);
  }
}
module.exports = CheckAllAddToCart;
