"use strict";
class Employee {

    /**
     *  Here is a `Employee` class constructor
     *  construcotor automatically when create class instance or object
     */

    constructor(first_name, last_name, company_name, salary) {
        this.first_name = first_name
        this.last_name = last_name
        this.company_name = company_name
        this.salary = salary
    }

    getFullName() {
        return `Full Name: ${this.first_name} ${this.last_name}`
    }

    aboutEmployee() {
        let temp = `${this.getFullName()}\nEmail: ${this.first_name}.${this.last_name}@${this.company_name}.com\nCompany Name: ${this.company_name}\nSalary: ${this.salary}`;
        console.log(temp);
    }
}

// Create instance `Employee class`
const sagor = new Employee('mbr', 'sagor', 'google', 45000);
const ohi = new Employee('istaik', 'ohi', 'fiverr', 55000);

sagor.aboutEmployee();


// Another class
class Person extends Employee {
    constructor(first_name, last_name, company_name, salary, address, phn_num, position) {
        super(first_name, last_name, company_name, salary);
        this.address = address
        this.phn_num = phn_num
        this.position = position
    }

    aboutPerson() {
        return `Address: ${this.address}\nPhone Number: ${this.phn_num}\nPoisition: ${this.position}`
    }
}

// Create instance/object
let p1 = new Person('mbr', 'sagor', 'google', 45000,'Dhaka-Bangladesh', '+8801773474709', 'Software engineer');
console.log(p1.aboutPerson());
