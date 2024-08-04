// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// V8 ENGINE
// https://v8.dev/blog/array-prototype-some
//GIT REPOSITORY
//D8 IN GIT V8

//jsvu reader downloading

const myArr = []
%DebugPrint(myArr)

// continuous (packed) array and Holey array ( having hole)

//optimisation in js

// SMI
// packed Element
// double ( float, string, function)

//array element and object property

// optimisation is differ based on main and subtype

const arrTwo = [1, 2, 3, 4, 5]
//packed_smi_element
// best optimise type of array
// but only for numbers also not for decimals

arrTwo.push(6.0)
// Packed_Double_Element

arrTwo.push('7')
// Packed_Element

//once array is degraded than it cannot be further reform to packed_smi

arrTwo[10] = 11
//Holey_Elements
//as multiple type also have gape in between

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);//empty postiton i.e. undefine
console.log(arrTwo[19]); //result undefine, also this are costly operation

//bound check are easier if out of bound then say undefine

// but if holy then it check it sequence
//boundcheck
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(object)

//this hasOwnPropert are costlier property check

//if hole than above check is take place

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

//SIM > DOUBLE > PACKED (OF PACKED)(OPTIMISATION)
//H_SMI > H_DOUBLE > H_PACKED

//ONCE DEGRADE THAN NOT FURTHER UPGRADE ALSO USING BY DELETE OPERATION

const arrFour = new Array(3)
//just 3 holes HOLY_SMI_ELEMENT

arrFour[0] = '1'
arrFour[1] = '2'
arrFour[2] = '3'
//HOLY_ELEMENT ( downgrade)
//if already wanted to fill intial index than this can be done better by using

const arrFive = []
arrFive.push('11')//PACKED_ELEMENT
arrFive.push('12')//PACKED_ELEMENT
arrFive.push('13')//PACKED_ELEMENT


const arrSix = [1, 2, 3, 4, 5]


// arrSix.push(NaN)//become packed double
arrSix.push(Infinity)//become packed double once entered nan or infinity

//recommendation to use methods
//for , for_of , forEach
// as there are optimise for large number of cases internally by js 


