class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    this.products.forEach((product) => product && typeof product.updateProduct === 'function' && product.updateProduct());
  }
}

module.exports = CarInsurance;
