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

    console.assert(
      items.includes("Sauce Labs Backpack"),
      "Backpack is missing",
    );
    console.assert(
      items.includes("Sauce Labs Bike Light"),
      "sauce labs bike is missing",
    );
  }
}
module.exports = CartPage;
