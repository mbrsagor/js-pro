// Lesson: 1 => video: 6

/**
  document.body.addEventListener("click", function () {
  var myParent = document.getElementsByTagName("h1")[0];
  var myImage = document.createElement("img");
  myImage.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
  myParent.appendChild(myImage);
  myImage.style.marginLeft = "160px";
});
 */

// console.log('hello'+2030*2);

var my_string = "ABC";
var ASCII_value = my_string.charCodeAt(0);

// var my_string = "Udacity";
// for (var i = 0; i < my_string.length; i++){
//   console.log(my_string.charCodeAt(i));
// }

/*
var answer = "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal";
console.log(answer);

var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

var is_active = false;
if (is_active) {
  console.log('He is active');
}
*/

/**
 * 
var x = 10;
var y = 20;

if (x > y)
  console.log(`Vartialbe name x is hight value`)
else
  console.log(`Vartialbe name y is low value`);


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


var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib =
  "The Intro to JavaScript course is " +
  adjective1 +
  ". James and Julia are so " +
  adjective2 +
  ". I cannot wait to work through the rest of this " +
  adjective3 +
  " content!";
console.log(madLib);

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

 */

/**
 * 
var tier = "nsfw deck";
var output = "You’ll receive ";

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output +=
      "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
 */

/**
 * 
var num = 5.567899776;
var n = num.toFixed(3);
console.log(n);
 */

// var education = "no high school diploma";
// var salary = 0;

//  switch (education) {
//     case "no high school diploma":
//         salary = 25636;
//         break;
//     case "a high school diploma":
//         salary = 35256;
//         break;
//     case "an Associate's degree":
//         salary = 41496;
//         break;
//     case "a Bachelor's degree":
//         salary = 59124;
//         break;
//     case "a Master's degree":
//         salary = 69732;
//         break;
//     case "a Professional degree":
//         salary = 89960;
//         break;
//     case "a Doctoral degree":
//         salary = 84396;
//         break;
// }

// console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");

// var x = 10;
// while (x <= 25) {
//   console.log("Printing out x = " + x);
//   x = x + 2;
// }
// var x = 30;
// while (x >= 0) {
//   if (x === 30) {
//     console.log("30 days")
//   } else if (x === 26) {
//     console.log('Independent day');
//   } else {
//     console.log('Hello world');
//   }
//   x = x + 1;
// }


// for (var x = 0; x <= 10; x++){
//   for (var y = 0; y <= 10; y++){
//     console.log(`X: ${x} Y: ${y}`);
//   }
// }


/**
 function reverse_string(revarseMe) {
  var revared = "";
  for (var i = revarseMe.length - 1; i >= 0; i--){
    revared += revarseMe[i];
  }
  return revared;
}
console.log(reverse_string('sagor'));

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}

let x = { name: "Richard" };
let y = { name: "Richard" };
console.log(x === y);
 */

 