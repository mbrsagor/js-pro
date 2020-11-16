"use strict";

class Animal {
  constructor(name) {
    this.name = name;
  }

  speek() {
    console.log(`${this.name} make noise`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speek() {
    console.log(`${this.name} barks.`);
  }

  full_name(_name) {
    console.log(`Hello, my full name is ${_name}`);
  }
}

// let d1 = new Dog('My dog');
// d1.speek();

// d1.full_name("Md.Bozlur Rosid Sagor");

class Tiger extends Dog {
  constructor(name, age) {
    super(name, age);
    this.age = age;
  }

  aboutMe() {
    return `Hello there, I'm ${this.name}\nMy age is: ${this.age}`;
  }

  full_name(f_name, l_name) {
    console.log(`My fullname is: ${f_name} ${l_name}`);
  }
}

const t1 = new Tiger("Bangaldesh", 26);
// console.log(typeof t1);
console.log(t1.aboutMe());
t1.full_name('Big', 'Tiger');
