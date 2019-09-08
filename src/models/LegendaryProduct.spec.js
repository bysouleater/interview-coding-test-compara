const { expect } = require('chai');
const LegendaryProduct = require('./LegendaryProduct');

describe('LegendaryProduct tests', () => {
  describe('updatePrice', () => {
    it('Should not change the current price value', () => {
      const product = new LegendaryProduct('Name', 0, 1);
      product.updatePrice();
      expect(product.price).to.eq(1);
    });
  });

  describe('updateSellIn', () => {
    it('Should not change the sellIn value', () => {
      const product = new LegendaryProduct('Name', 0, 1);
      product.updateSellIn();
      expect(product.sellIn).to.eq(0);
    });
  });
});
