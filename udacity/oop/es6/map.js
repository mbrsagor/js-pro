const employees = new Map();

employees.set("james.parkes@udacity.com", {
  firstName: "James",
  lastName: "Parkes",
  role: "Content Developer",
});

employees.set("julia@udacity.com", {
  firstName: "Julia",
  lastName: "Van Cleve",
  role: "Content Developer",
});
employees.set("richard@udacity.com", {
  firstName: "Richard",
  lastName: "Kalehoff",
  role: "Content Developer",
});

console.log(employees);


for (const [key, value] of employees) {
  console.log(`${key} : ${value}`);
}


employees.delete("julia@udacity.com");
employees.delete("richard@udacity.com");
console.log(employees);
