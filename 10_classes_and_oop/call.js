
// call,bind and gitter
// screenshots
// in node this. return empty object
// in browser this return the window object

function SetUsername(username) {
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //below username is not call ( only refrence is gone)
    // SetUsername(username)
    //.CALL method to hold refrence
    // SetUsername.call(username)
    // using "this" to have context of setUsername not of createUser, i.e. passing current context of other to it 
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);