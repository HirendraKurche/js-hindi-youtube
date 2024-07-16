// Immediately Invoked Function Expressions (IIFE)

// invoke after immediate start of execution
// reason as
// -> to protect from global scope polltion
// -> to invoke immediate execution
 
function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
}
chai();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // using iiffe also use semicolon to end the iiffe

(() => {
    console.log(`DB CONNECTED TWO ${name}`);
})();

// simple iiffe with parameter pass
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// 1st parenthesis () -> function defination 2nd ()-> excecution