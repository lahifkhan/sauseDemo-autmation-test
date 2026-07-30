class AllItemAddToCart {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = ".btn_inventory";
  }

  async addCart() {
    const allItems = await this.page.$$(this.addToCartBtn);
    console.log(allItems);

    for (const btn of allItems) {
      await btn.click();
      await this.page.waitForTimeout(1000);
    }
  }
}
module.exports = AllItemAddToCart;
