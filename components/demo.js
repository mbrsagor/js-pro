"use strict";

let dict = {
  name: "Md.Bozlur Rosid Sagor",
  age: 26,
    address: "Dhaka Bangladesh",
  languges: ['Python', 'JavaScript', 'Swift', 'Dart']
};

console.log(dict);

for (const [key, val] of Object.entries(dict)) {
  console.log(`${key} : ${val}`);
}

dict.name = "mbr-sagor";

console.log(dict);

const items = ["one", "two", "three", "four", "five"];
console.log(items[4]);

for (const item of items) {
  console.log(item);
}

const welcome = (name) => `Wecome ${name} to our website`;
console.log(welcome("sagor"));

let is_active = true;
let p = new Promise((resolve, reject) => {
  if (is_active === true) {
    setTimeout(() => {
      resolve("Active");
      console.log("Hello world");
    }, 5000);
  } else {
    reject("Deactive");
  }
})
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  });


let num = 10;
new Promise((reslove, reject) => {
    if (num === 5) {
        reslove();
    } else {
        reject();
    }
}).then(() => {
    console.log(`${num}  is equal`);
    
}).catch(() => {
    console.log(`${num}  is not equal`);
})


