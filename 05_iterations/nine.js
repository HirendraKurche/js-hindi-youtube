
// reduce js mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const myNums = [1, 2, 3]
// reduce (callback function)
// if curly brac then return is there
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  // there 0 value is pass as intial value
// console.log(myTotal);

// life example in shopping cart

// no need to write return here 
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);