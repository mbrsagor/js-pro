const sym1 = Symbol("apple");
const sym2 = Symbol("apple");
const result = sym1 === sym2
console.log(result);

// 
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

// Sets
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
console.log(games.size);
console.log(games.has("Banjo-Kazooie"));

for (const game of games) {
    console.log(game);
}

// WeakSet
let student1 = { name: "James", age: 26, gender: "male" };
let student2 = { name: "Julia", age: 27, gender: "female" };
let student3 = { name: "Richard", age: 31, gender: "male" };

const roster = new WeakSet([student1, student2, student3]);
console.log(roster);
