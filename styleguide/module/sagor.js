let person = require('./index');

const _new_person = new person.person('mbr-sagor', 26, 'male', 'Dhaka-Bangladesh');

console.log(_new_person.aboutPerson());
console.log(person.say_hello('Ohi'));
