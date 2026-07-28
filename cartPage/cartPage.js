class CartPage {
  constructor(page) {
    this.page = page;
    this.inventory_item_name = ".inventory_item_name";
  }

  async checkCartItem() {
    const items = await this.page.$$eval(this.inventory_item_name, (items) => {
      return items.map((item) => item.textContent);
    });
    console.log(items);
  }
}
module.exports = CartPage;
