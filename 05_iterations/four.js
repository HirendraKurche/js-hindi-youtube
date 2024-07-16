const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//iterator for obj "in"
for (const key in myObject) {
    //console.log(key `;-` myobject[key]);
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// for in also works in array but return it's key that is index 
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(key);   //give key
}
for (const key in programming) {
    //console.log(programming[key]);   //give value
}


// for in loop not works in map as not iterable

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }