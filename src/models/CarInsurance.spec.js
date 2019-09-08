const { expect } = require('chai');
const CarInsurance = require('./CarInsurance');

describe('CarInsurance tests', () => {
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
