const lodash = require('lodash')


// Criando um array de números
const numbers = [1, 2, 3, 4, 5];

// Filtrando números pares
const evenNumbers = lodash.filter(numbers, (num) => num % 2 === 0);

// Somando todos os números
const sum = lodash.sum(numbers);

// Criando um objeto a partir de um array
const users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
const userObjects = lodash.map(users, (o) => lodash.pick(o, 'user'));

console.log(userObjects);
console.log(evenNumbers, sum);

