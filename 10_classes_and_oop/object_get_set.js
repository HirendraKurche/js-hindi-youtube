//object based implementation
//_ is considered as defining private property
const User = {
    _email: 'h@hc.com',
    _password: "abc",

    //get set works above the memory for getting and setting 
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

//factory function object.create
const tea = Object.create(User) //object is created based on user 
console.log(tea.email);