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
