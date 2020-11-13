document.getElementById("show_something").innerHTML = "Hello Sagor! What happened?";
document.getElementById("about_me").innerHTML = "Hello there, I'm Sagor from Dhaka-Bangaldesh";
// document.write(Date());

// let root_ele = document.getElementById('root').id;
let root_ele = document.getElementById('root');
root_ele.style.background = '#f00';
root_ele.style.color = 'white';
root_ele.style.width = '350px';
root_ele.style.margin = '0 auto';
root_ele.style.textAlign = 'center';
console.log(root_ele);

const name_class = document.getElementsByClassName('container');
console.log(name_class);

// Get query selector is a one of best selector
const query_selector = document.querySelector('.container');
console.log(query_selector);

// List styleing
const list = document.querySelector('li');
list.style.listStyleType = "none"; // Here query selector only point one simple element.

// Get elment by tag
const tag = document.getElementsByTagName('li');
document.getElementsByTagName('li')[1].style.listStyleType = "none";
console.log(tag);

// Query selector all
let items = document.querySelectorAll('li');
items.forEach(function(item){
    item.style.listStyleType = 'none';
});

// Traversing the DOM
let val;
const list_item = document.querySelector('ul.list-group');
val = list_item.children[0];
val.style.color = 'red';

console.log(val);

val = list_item.parentElement;
console.log(val);

val = list_item.parentElement.parentElement;
console.log(val);
