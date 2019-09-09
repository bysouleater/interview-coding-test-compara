const Product = require('./models/Product');
const IncreasingPriceProduct = require('./models/IncreasingPriceProduct');
const CarInsurance = require('./models/CarInsurance');
const LegendaryProduct = require('./models/LegendaryProduct');
const SpecialProduct = require('./models/SpecialProduct');

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new IncreasingPriceProduct('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new LegendaryProduct('Mega Coverage', 0, 80),
  new LegendaryProduct('Mega Coverage', -1, 80),
  new SpecialProduct('Special Full Coverage', 15, 20),
  new SpecialProduct('Special Full Coverage', 10, 49),
  new SpecialProduct('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 0; i <= 30; i += 1) {
  console.log(`-------- day ${i} --------`);
  console.log('name, sellIn, price');
  carInsurance.products.forEach(productPrinter);
  carInsurance.updatePrice();
  console.log('');
}
