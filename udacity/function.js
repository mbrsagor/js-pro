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