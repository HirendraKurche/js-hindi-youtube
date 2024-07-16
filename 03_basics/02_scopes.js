//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // VAR C=30
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);
// GLOBAL SCOPE is different for console and code environment



// nested scopes

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // username scope also there in two but website scope not in one
    two()

}
// if one execute than two also execute
// one()


 
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); 
    }
    // console.log(website); //not run as website scope only inside inner  loop
}

// console.log(username); // username not access outside if scope





// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // give result 6 as declared as function

function addone(num){
    return num + 1
}
(addone(5)) //returning not printing
console.log(addone(5))



addTwo(5) // not give result as not yet declared
const addTwo = function(num){  // also sometime call as expression
    return num + 2
}

addTwo(5)

// "hosting concept"