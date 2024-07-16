const coding = ["js", "ruby", "java", "python", "cpp"]

// foreach loop for callback function

// coding.forEach( function (val){
//     console.log(val);
// } )

// foreach using arrow function declaration
// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }
//giving refrence of function
// coding.forEach(printMe)

// other parameter that come with functions are
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


// obj insid array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )