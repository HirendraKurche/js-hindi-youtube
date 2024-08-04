
//screenshot 

// console.log(Math.PI);
//overwriting the value but didn't change 
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
//writtable property is false
//we can also change this property

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));//undefine as whose property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));// name property

//defining property of our form object 
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true, //if false then name property is not iterable
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//for of loops for object
// for (let [key, value] of chai) {
//     console.log(`${key} : ${value}`);

// }

//since object is not iterable therefore using object.entries
//if condition is function then not print 
//if enumerable is false then it is not iterable
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}