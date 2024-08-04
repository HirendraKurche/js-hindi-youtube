
class User {
    constructor(username){
        this.username = username
    }
    //method logMe give value 
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        //super keyword by this we not need to use .call and this for to take context of other
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

// chai.addCourse()
chai.logMe()
const masalaChai = new User("masalaChai")

//  it not have access of addCourse but have logMe
masalaChai.logMe()
masalaChai.addCourse()

// console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);