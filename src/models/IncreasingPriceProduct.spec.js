const { expect } = require('chai');
const IncreasingPriceProduct = require('./IncreasingPriceProduct');

describe('IncreasingPriceProduct tests', () => {
  describe('updatePrice', () => {
    it('Should increase the current price value in 1 when sellIn is greater or equal 0', () => {
      const product = new IncreasingPriceProduct('Name', 0, 1);
      product.updatePrice();
      expect(product.price).to.eq(2);
    });

    it('Should increase the current price value in 2 when sellIn is lower than 0', () => {
      const product = new IncreasingPriceProduct('Name', -1, 5);
      product.updatePrice();
      expect(product.price).to.eq(7);
    });

    it('Should not increase the current price value above 50', () => {
      const product = new IncreasingPriceProduct('Name', -1, 49);
      product.updatePrice();
      expect(product.price).to.eq(50);
    });
  });
});
