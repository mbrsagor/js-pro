// Spread operator
let books = ['python', 'JavaScript', 'java']

let my_book = [...books, 'Dart', 'Swift']
console.log(my_book);

let info = { name: 'Sagor', age: 26 }
let address = { ...info, house: 'Dhaka, Bangladesh' }
console.log(address);

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
const produce = [...fruits, ...vegetables];
console.log(produce);

console.log('\n');

// Rest parameter
const unlimitedParameter = (...args) => {
  return args;
};

console.log(unlimitedParameter(10, 20, 30));
