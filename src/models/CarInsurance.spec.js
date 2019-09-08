const { expect, spy } = require('chai');
const CarInsurance = require('./CarInsurance');

describe('CarInsurance tests', () => {
  describe('constructor', () => {
    it('Should default products to []', () => {
      const carInsurance = new CarInsurance();
      expect(carInsurance.products).to.be.an('array').that.is.empty;
    });

    it('Should copy constructor parameters', () => {
      const product = 'product';
      const products = [product];
      const carInsurance = new CarInsurance(products);
      expect(carInsurance.products).to.eq(products);
    });
  });

  describe('updatePrice', () => {
    it('Should iterate products list', () => {
      const products = [false];
      const carInsurance = new CarInsurance(products);

      carInsurance.updatePrice();
    });

    it('Should iterate products list and check if updateProduct method exists', () => {
      const products = [{}];
      const carInsurance = new CarInsurance(products);

      carInsurance.updatePrice();
    });

    it('Should iterate products list and try to call updateProduct method', () => {
      const product = {};
      spy.on(product, 'updateProduct', () => {});
      const products = [product];
      const carInsurance = new CarInsurance(products);

      carInsurance.updatePrice();
      expect(product.updateProduct).to.have.been.called();
    });
  });
});
