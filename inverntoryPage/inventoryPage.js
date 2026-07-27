class inventory_list {
  constructor(page) {
    this.page = page;
    this.backpackAddToCart = '[name = "add-to-cart-sauce-labs-backpack"]';
    this.lightBag = '[name= "add-to-cart-sauce-labs-bike-light"]';
  }

  async addToCart() {
    await this.page.click(this.backpackAddToCart);
    await this.page.click(this.lightBag);
  }
}
module.exports = inventory_list;
