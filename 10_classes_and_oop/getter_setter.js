class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //to return what if demand for email
    //getter and setter need to define simultaneously
    //constructor and setter setting value at same time => race between two so call stack limit exceed therefore to use _ for both get and set as both will undergo problem
    //get set name is same as property
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){

        // return this._password.toUpperCase() 
        // or can use
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);