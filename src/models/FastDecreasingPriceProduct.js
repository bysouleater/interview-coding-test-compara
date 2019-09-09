const Product = require('./Product');

class FastDecreasingPriceProduct extends Product {
  // eslint-disable-next-line class-methods-use-this
  priceFactor() {
    return -2;
  }
}

module.exports = FastDecreasingPriceProduct;
