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
    this.price = Math.min(50,
      Math.max(0, this.price + this.priceFactor() * (this.sellIn >= 0 ? 1 : 2)));
  }

  // eslint-disable-next-line class-methods-use-this
  priceFactor() {
    return -1;
  }
}

module.exports = Product;
