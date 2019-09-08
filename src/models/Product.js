class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updateProduct() {
    this.updateSellIn();
    this.updatePrice();
  }

  updateSellIn() {
    this.sellIn -= 1;
  }

  updatePrice() {
    this.price = Math.max(0, this.price - (this.sellIn >= 0 ? 1 : 2));
  }
}

module.exports = Product;
