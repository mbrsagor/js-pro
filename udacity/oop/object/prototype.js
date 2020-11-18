function Dog(age, weight, name) {
    this.age = age;
    this.weight = weight;
    this.name = name;
}

Dog.prototype.brek = function () {
    console.log(`${this.name} says woof`);
}

const dog = new Dog(5, 5.5, 'Suntan');
dog.brek();


// Prototypal Inheritance: Subclasses
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(`${this.name} walks`);
}

function Cat(name) {
    Animal.call(this.name);
    this.lives = 9;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

