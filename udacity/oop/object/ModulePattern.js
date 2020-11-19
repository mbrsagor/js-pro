// Private Properties: Literal
let developer = {
    name: "Veronika",
    age: 26,
    getInfo: function () {
        let info = `My name is: ${this.name}, My age: ${this.age}`;
        return info;
    },
};

console.log(developer.name);
console.log(developer.getInfo());
// Change name the developer property
developer.name = "Bozlur Rosid Sagor";
developer.age = 25;
console.log(developer.name);
console.log(developer.getInfo());

// Private
let person = (function () {
    let name = "Sagor";
    return {
        getName: function () {
            return name;
        },
        setName: function (myName) {
            name = myName;
        }
    }
})();

console.log(person.getName());
person.setName("Mbr-Sagor");
console.log(person.getName());
