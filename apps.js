// Object
let info = {
    
    username: 'mbrsagor',
    age: 26,
    address: 'Dhaka, Bangladesh'
}
// console.log(info);
for (const [key, val] of Object.entries(info)) {
    console.log(`${key} : ${val}`);
}

let new_info = { ...info, name: 'Bozlur Rosid Sagor' };
console.log(new_info);

// Arrow function
const say_hello = name => {
    console.log(`Hello, ${name}\n`);
}
say_hello('Sagor');

const informaiton = () => {
    for (const [x, y] of Object.entries(new_info)) {
        console.log(`${x} : ${y}`);
    }
}

informaiton();
console.log('\n');

// Array 
let list = [{ tech: ['laptop', 'mobile', 'desktop', 'TV'] }, 'programming', { languages: ['python', 'javascript'] }, 20, 5]
console.log(list);

let new_list = [...list, 'Sagor', 'ohi', 'meg']
// console.log(new_list);
let _new_item = []
const item_list = list.map(_item => _new_item.push(_item));
console.log(item_list);
