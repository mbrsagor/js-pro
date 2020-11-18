// new Promise((resolver, reject) => {
//   resolver("Hi,");
//   reject("Hello");
// })
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

new Promise(function (resolve) {
  console.log("first");
  resolve();
  console.log("second");
}).then(function () {
  console.log("third");
});


// Promise forEach
getJson('/api/posts/').then(function (response) {
    response.results.forEach(function (url) {
        getJson(url).then(CreatePlanteThumb); 
    });
})

// 