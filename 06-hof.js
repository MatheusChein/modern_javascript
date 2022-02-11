const products = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'Macbook', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

const find = products.find(product => product.price > 1000); // iPhone
const findIndex = products.findIndex(product => product.price > 1000); // 0
const some = products.some(product => product.price > 1000); // true
const every = products.every(product => product.price > 1000); // false
const map = products.map(product => (
  {
    ...product,
    subTotal: product.quantity * product.price
  }
));
const filter = products.filter(product => product.price > 1000);
const totalPrice = products.reduce((acc, current) => {
  return acc + current.price * current.quantity;
}, 0)

console.log(find);
console.log(findIndex);
console.log(some);
console.log(every);
console.log(map);
console.log(filter);
console.log({ totalPrice });