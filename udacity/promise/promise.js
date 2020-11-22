// Example: 1

/*
var promise = new Promise(function (resolve, reject) {
    resolve(1);
    reject(0);
});
promise.then((val) => {
    console.log(val); // 1
    return val + 2;
}).then((val) => {
    console.log(val); // 3
}).catch((error) => {
    console.log(error);
});
*/

// Example: 2
const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);

// A simple promise that resolves after a given time
const timeOut = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (t === 2000) {
        reject(`Rejected in ${t}`);
      } else {
        resolve(`Completed in ${t}`);
      }
    }, t);
  });
};
const durations = [1000, 2000, 3000];

promises = durations.map((duration) => {
  return timeOut(duration).catch((e) => e); // Handling the error for each promise.
});

Promise.all(promises)
  .then((response) => console.log(response)) // ["Completed in 1000", "Rejected in 2000", "Completed in 3000"]
    .catch((error) => console.log(`Error in executing ${error}`));

