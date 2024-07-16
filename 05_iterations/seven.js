const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// using map(callback function) like filter
// map is used to return automatically a new array
// const newNums = myNumers.map( (num) => { return num + 10})
// console.log(newNums);

// chaining method (using multiple operation may be different or same)
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);