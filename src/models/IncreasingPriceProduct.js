const Product = require('./Product');

class IncreasingPriceProduct extends Product {
  // eslint-disable-next-line class-methods-use-this
  priceFactor() {
    return 1;
  }
}

module.exports = IncreasingPriceProduct;
