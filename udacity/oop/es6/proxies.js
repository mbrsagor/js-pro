var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
    }
}

console.log(obj._age);

// Example 2
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});
console.log(proxyObj.age); // logs 'getting the age property' & 5
console.log(proxyObj.height); // logs 'getting the height property' & 4

//Generators & Iterators
function* bar() {
  yield "hello";
  yield "world";
  yield "sagor";
  yield "OKK";
}
let b = bar();
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
