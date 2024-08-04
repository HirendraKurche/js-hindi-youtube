

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.length);

//declaring a true length method below we have implemented
// console.log(myName.trim().length; //an alternate for above
//but below is method for all 
// console.log(myName.trueLength);

//array
let myHeros = ["thor", "spiderman"]

//object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// #screenshot
// any prototype declare in object are present in all object

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

//therefore myHero array and heroPower object also can access object prototype property of object
// heroPower.hitesh()
// myHeros.hitesh()

// can object also access the prototype property of array 
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
//array do have access but object don't have access
// myHeros.heyHitesh() //array
// heroPower.heyHitesh() //object



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    //keyword to access the prototype of TeachingSupport
    __proto__: TeachingSupport
}
//doing silly as above prototyple inheritance 
//teacher can access user property 
Teacher.__proto__ = User

// modern syntax prototype inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)


//METHOD for trueLength of a string 
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
//for above string
anotherUsername.trueLength()
//for another else string
"hitesh".trueLength()
"iceTea".trueLength()