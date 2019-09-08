const { expect, spy } = require('chai');
const Product = require('./Product');

describe('Product tests', () => {
  describe('constructor', () => {
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

  describe('updateProduct', () => {
    it('Should call updateSellIn and updatePrice', () => {
      const product = new Product('Name', 1, 1);
      spy.on(product, ['updateSellIn', 'updatePrice']);
      product.updateProduct();
      expect(product.updateSellIn).to.have.been.called();
      expect(product.updatePrice).to.have.been.called();
    });
  });

  describe('updateSellIn', () => {
    it('Should lower the current sellIn value in 1', () => {
      const product = new Product('Name', 1, 1);
      product.updateSellIn();
      expect(product.sellIn).to.eq(0);
    });
  });

  describe('updatePrice', () => {
    it('Should lower the current price value in 1 when sellIn is greater or equal 0', () => {
      const product = new Product('Name', 0, 1);
      product.updatePrice();
      expect(product.price).to.eq(0);
    });

    it('Should lower the current price value in 2 when sellIn is lower than 0', () => {
      const product = new Product('Name', -1, 5);
      product.updatePrice();
      expect(product.price).to.eq(3);
    });

    it('Should not lower the current price value under 0', () => {
      const product = new Product('Name', -1, 1);
      product.updatePrice();
      expect(product.price).to.eq(0);
    });
  });
});
