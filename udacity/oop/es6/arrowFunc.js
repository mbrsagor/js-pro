// Without arrow function
const languages = ['python', 'javascript', 'dart', 'swift'].map(function (name) {
    return (name.toUpperCase());
})
console.log(languages);

// With arrow function
const names = ['Sagor', 'Ohi', 'Meg', 'Dhurbo', 'Shanto'].map((name) => {
    return (name.toUpperCase());
})
console.log(names);

// Filter
const logName = names.filter(name => name.length === 5);
console.log(logName);

// Exampe
const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((square) => {
  return square * square;
});

console.log(...squares);

// Function paramitter deault value
function defaultValue(num = 10, num2=20) {
    return num + num2;
}
console.log(defaultValue(40));
