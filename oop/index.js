function Person(name) {
    this.name = name;

    this.show_name = function () {
        console.log(`Hello there, This is: ${this.name}.`);
    }
}

// Create an object in person class
sagor = new Person('mbr-sagor');
sagor.show_name();
