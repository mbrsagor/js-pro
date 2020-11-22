// Example: 1
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

// Example: 3 A simple promise that resolves after a given time
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


// Example 4
async function example2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

example2();


// Example 5
async function featch_data() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    console.log(posts);
  } catch (err) {
    console.log(err);
    alert(err);
  }
}
featch_data();

// Example 6
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 10;
}
function fetch() {
  // shows 10 after 1 second
  wait().then((result) => alert(result));
}
fetch();

// Example 7 nasted then
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

// Example 8
function loadGithubUser(name) {
  return fetch(`https://api.github.com/users/${name}`).then((response) =>
    response.json()
  );
}
loadGithubUser("mbrsagor");


// Example 9
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

promise.then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result * 3;
  });


// Example 10
function generateNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 3 * 1000);
  });
}
generateNumber(10)
  .then((result) => {
    console.log(result);
    return generateNumber(result * 2);
  }).then((result) => {
    console.log(result);
    return generateNumber(result * 3);
  }).then((result) => console.log(result));
  