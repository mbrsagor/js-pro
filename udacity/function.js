// Revarse name function
function reverse_string(revarseMe) {
  var revared = "";
  for (var i = revarseMe.length - 1; i >= 0; i--) {
    revared += revarseMe[i];
  }
  return revared;
}
console.log(reverse_string("sagor"));

// Find Average
function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
}
console.log(findAverage(5, 9));


// Triangle
// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
// triangle
function buildTriangle(length) {
    var triangle = "";
    var lineNumber = 1;

    for(lineNumber=1; lineNumber<=length; lineNumber++){
        triangle = triangle + makeLine(lineNumber);
    }
    return triangle;
}
console.log(buildTriangle(10));


var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}
console.log(laugh(6));


function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}
console.log(subtractFour(5));