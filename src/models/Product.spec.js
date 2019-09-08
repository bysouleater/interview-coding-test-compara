const { expect } = require('chai');
const Product = require('./Product');

describe('Product tests', () => {
  it('Should copy constructor parameters', () => {
    const name = 'Name';
    const sellIn = 1;
    const price = 10;
    const product = new Product(name, sellIn, price);
    expect(product.name).to.eq(name);
    expect(product.sellIn).to.eq(sellIn);
    expect(product.price).to.eq(price);
  });
});
