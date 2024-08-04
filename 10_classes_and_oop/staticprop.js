

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    // attaching a unique id to each user
    // static avoid to give the createId context to others i.e. restricte the inheritance
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.logMe())
// console.log(hitesh.createId()) //createId dosen't excess by 

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());