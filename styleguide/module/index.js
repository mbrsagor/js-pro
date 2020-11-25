class Person {
  constructor(name, age, gender, address) {
    this.name = name,
    this.age = age;
    this.gender = gender,
    this.address = address
  }
  
  aboutPerson() {
    return `Person Name: ${this.name}\nAge: ${this.age}\nGender:${this.gender}\nAddress: ${this.address}`
  }

}

function sahHello(name) {
  return `Hello, ${name}`;
}


module.exports = {
  person: Person,
  say_hello: sahHello,
};
