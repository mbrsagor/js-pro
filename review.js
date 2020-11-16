let items = ["one", "two", "three", "four", "five"];
// console.log(items[4]);
items.push('Sagor');
console.log(items);

items.unshift("showrove");
console.log(items);
items.pop();
console.log(items);
items.shift();
console.log(items);

for (const item of items) {
    console.log(item);
}