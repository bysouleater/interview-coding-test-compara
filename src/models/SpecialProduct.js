const Product = require('./Product');

class SpecialProduct extends Product {
  priceFactor() {
    if (this.sellIn < 5) return 3;
    if (this.sellIn < 10) return 2;
    return 1;
  }

  updatePrice() {
    if (this.sellIn < 0) this.price = 0;
    else super.updatePrice();
  }
}

module.exports = SpecialProduct;
