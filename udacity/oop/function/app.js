function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;

  this.fullName = function () {
    return `Fullname is: ${this.first_name} ${this.last_name} `;
  };
}

const p1 = new Person('Mbr', 'Sagor');
console.log(p1.fullName());


// Scope
let name = "Sagor";
function saySomething() {
    let profession = "Software Engineer";
    
    function aboutMe() {
        console.log(`Hello, I'm ${name} and my profession is full-stack ${profession}`);
    }
    return aboutMe();

}
saySomething();
console.log(name);