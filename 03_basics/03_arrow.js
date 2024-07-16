const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // welcome message will only pass for user comming inside user
        
        // console.log(`${username} , welcome to website`); // not declared like this

        // referring current context using this keyword
        console.log(`${this.username} , welcome to website`);
        console.log(this);// it talk of current context value
    }

}

// user.welcomeMessage()
// USERNAME value change that is current context value is change
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //this talks about current context but here  current context is empty as in node environment
//but in console it gives some value ( window object) ( browser-> global object is window object)


// arrow object

// function chai(){
//     console.log(this);
//     let username = "hitesh"
//     console.log(this);// running this will give you alot of value
//     console.log(this.username); // give undefined as not work as "this" only work indside object not function
// }
// chai()// alone running this will give you alot of value


// declaring function in another way
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// function declaration using arrow function 
const chai = () => {
    let username = "hitesh"
    console.log(this); // empty parenthesis
    console.log(this.)username; //undefined 
}
// chai()


// arrow function 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
console.log(addTwo(3, 4))

// implicit return declaration
// const addTwo = (num1, num2) =>  num1 + num2


// implicit return declaration in curly bracket
//but if use curly bracket then to use return keyword
// const addTwo = (num1, num2) => ( num1 + num2 )

// returning object
const addTwo = (num1, num2) => {username: "hitesh"}
console.log(addTwo(3, 4)) // give undefined

// const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(3, 4)) //to return object enclose in a parenthesis    


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
// myArray.forEach(function () { })
// myArray.forEach( () => { })
// myArray.forEach( () => () )