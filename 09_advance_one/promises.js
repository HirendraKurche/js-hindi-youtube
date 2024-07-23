// promises
// 1. promise is an object that represents the eventual completion or failure of an asynchronous operation
// 2. promise is a placeholder for the future result of an asynchronous operation
// 3. promise is a way to handle asynchronous operations in a synchronous way
// fetch keyword's behind the scene comes from promises
// java mostly have object not classes like in c/c++

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

// https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we
// mostly we consume promise ( already prepare one)

// 1st we learn creating promise
// new keyword give new instances of object  
// promise function have two function 
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is compelete');
        // calling resolve to connect .then 
        resolve()
    }, 1000)
})

//consuming promise by using variable and .then(function) 
promiseOne.then(function () {
    console.log("Promise consumed");
})

// declaring new promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        // calling resolve to connect .then 
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject) {

    setTimeout(function () {
        // passing value in resolve as a parameter 
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})
// calling function by user
promiseThree.then(function (user) {
    console.log(user);//print the data inside resolve
})



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // passing error 
        let error = true //if error = false
        if (!error) {
            resolve({ username: "hitesh", password: "123" }) //if there is no error
        } else {
            //rejection give error 
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})


// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username //where return goes to variable? 
// })
// console.log(username)//not to be done this type error

// using arrow function and multiple .then function
// chaining / multiple .then 
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //finally a default that executes whether a promise is resolved or reject



//promise 5 same as above
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//async function using rather than .then function ( alternate )
async function consumePromiseFive() {
    // await promiseFive() // promise is object we will not handle it like this
    try {
        const response = await promiseFive //keyword await
        console.log(response);
    } catch (error) { //catch block is needed here as there is also chances of coming error so to give try - catch block to handle gracefully  
        console.log(error);
    }
}
consumePromiseFive() 

// async function method for getting all user from json

// async function getAllUsers(){
//     try { //raping in try and catch block for error handling
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // converting to json also we have to use await here as it need time to cinvert it to json
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
//getAllUsers() // this still not work as


// doing same above using fetch

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => { //this then is used as handle the response.json of above .then
        console.log(data);
    })
    .catch((error) => console.log(error))
//fetch execute first then the all above thing , why?

// promise.all
// yes this is also available, kuch reading aap b kro.