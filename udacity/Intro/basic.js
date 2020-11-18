// var my_string = "ABC";
// var ASCII_value = my_string.charCodeAt(0);

var my_string = "Udacity";
for (var i = 0; i < my_string.length; i++){
  console.log(my_string.charCodeAt(i));
}

let x = { name: "Richard" };
let y = { name: "Richard" };
console.log(x === y);


var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = "The Intro to JavaScript course is " + adjective1 +  ". James and Julia are so " +  adjective2 +
  ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);

var num = 5.567899776;
var n = num.toFixed(3);
console.log(n);
