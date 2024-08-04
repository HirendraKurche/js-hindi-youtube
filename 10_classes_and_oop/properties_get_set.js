//how previousl implement getter and setter how using property

function User(email, password) {
    this._email = email;
    this._password = password

    //function can behave as both object and function   
    //definig method
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
console.log(chai.password);

//above we have implemented function based getter - setter