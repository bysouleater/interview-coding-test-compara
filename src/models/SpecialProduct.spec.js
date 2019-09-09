const { expect } = require('chai');
const SpecialProduct = require('./SpecialProduct');

describe('SpecialProduct tests', () => {
  describe('updatePrice', () => {
    it('Should reset price to 0 when past sell date', () => {
      const product = new SpecialProduct('Name', -1, 400);
      product.updatePrice();
      expect(product.price).to.eq(0);
    });

    it('Should increase the current price value in 3 when sellIn is less than 5', () => {
      const product = new SpecialProduct('Name', 2, 1);
      product.updatePrice();
      expect(product.price).to.eq(4);
    });

    it('Should increase the current price value in 2 when sellIn is less than 10', () => {
      const product = new SpecialProduct('Name', 6, 5);
      product.updatePrice();
      expect(product.price).to.eq(7);
    });

    it('Should increase the current price value in 1 when sellIn is more than 10', () => {
      const product = new SpecialProduct('Name', 15, 5);
      product.updatePrice();
      expect(product.price).to.eq(6);
    });
  });
});
