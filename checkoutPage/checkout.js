class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.completeBtn = "#continue";
    this.overviewItem = ".inventory_item_name";
  }

  async completeForm() {
    await this.page.fill(this.firstName, "Lahif");
    await this.page.fill(this.lastName, "khan");
    await this.page.fill(this.postalCode, "1234556");

    await this.page.click(this.completeBtn);

    await this.page.waitForSelector("#checkout_summary_container");
    const isvisible = await this.page.isVisible("#checkout_summary_container");
    console.log(isvisible);
    console.log("checkout-complete");
  }

  // varify the items in checkouts
  async varifyItem() {
    await this.page.waitForSelector("#checkout_summary_container");
    const overviewItems = await this.page.$$eval(this.overviewItem, (itmes) => {
      return itmes.map((item) => item.textContent);
    });

    console.log(overviewItems);

    console.assert(
      overviewItems.includes("Sauce Labs Bike Light"),
      "Sauce Labs Bike Light is missing",
    );

    console.assert(
      overviewItems.includes("Sauce Labs Backpack"),
      "Sauce Labs Backpack is missing",
    );
  }
}
module.exports = CheckoutPage;
