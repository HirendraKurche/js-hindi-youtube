
// creating object
// object literal

const user = {
    // properties
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    // methods
    getUserDetails: function(){
        //console.log("Got user details from database");
        
        // console.log(`Username: ${this.username}`);
        // to tell the current context for above username 
        // console.log(this);
        
        // if only printing this value will print the current context 
        // console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());

// global context this value
// console.log(this); // result empty value in node environment but in browser window object


// new is keyword of constructor function
// to make multiple instances from same object
// to make new context
const promiseOne = new promise()
const Date = new date()

// constructor function
function User(username, loginCount, isLoggedIn){
    //this for same name variable use 
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    //methods
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this //not needed as such as implicitly define 
}

const userOne = new User("hitesh", 12, true)
//console.log(userOne); //extra values are also printed

// problem comes when taking userTwo it override the value
//therefore using new keyword which give new instances  
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne);
//console.log(userTwo);

console.log(userOne.constructor); //returns the refreunce of self

// instanceof keyword
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

// new keyword
// creates a new object
// call constructor function to pack all arguments
// this keyword inject in arguments
// return in a function