var x = 10;
var y = 20;

if (x > y) console.log(`Vartialbe name x is hight value`);
else console.log(`Vartialbe name y is low value`);


if (1) {
  console.log(
    "This statement will always execute because conditional is set to 1 i.e., true"
  );
}

if (0) {
  console.log(
    "This statement will NEVER execute because conditional is set to 0 i.e., false"
  );
}

var money = 100.5;
var price = 100.5;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}


var runner = "Kendyll";
var position = 2;
var medal;

if (position === 1) {
  medal = "gold";
} else if (position === 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");

if ("") {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}