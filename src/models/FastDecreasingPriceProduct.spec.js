const { expect } = require('chai');
const FastDecreasingPriceProduct = require('./FastDecreasingPriceProduct');

describe('FastDecreasingPriceProduct tests', () => {
  describe('updatePrice', () => {
    it('Should decrease the current price value in 2 when sellIn is greater or equal 0', () => {
      const product = new FastDecreasingPriceProduct('Name', 10, 10);
      product.updatePrice();
      expect(product.price).to.eq(8);
    });

    it('Should increase the current price value in 4 when sellIn is lower than 0', () => {
      const product = new FastDecreasingPriceProduct('Name', -1, 5);
      product.updatePrice();
      expect(product.price).to.eq(1);
    });
  });
});
