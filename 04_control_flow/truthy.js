const userEmail = "hk@gmaail.com"
//steing is assumed to be true but what if empty string or empty bracs
// const userEmail = ""
// const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {} //( empty object), function(){} //( empty function )

//to check array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//to check empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { //checking length by converting object to array 
    console.log("Object is empty");
}


//console
/*
false == 0 is true
false ='' is true
0 == '' is true
*/



// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 //return 10
// val1 = undefined ?? 15  //return 15
val1 = null ?? 10 ?? 20
//for safety from null and undefined value
console.log(val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")