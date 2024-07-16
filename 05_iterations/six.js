// const coding = ["js", "ruby", "java", "python", "cpp"]


//foreach in variable
// foreach not return value
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )
// console.log(values);




const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter operation ( takes function callback)
// filter operation return value
// const newNums = myNums.filter( (num) =>num>4)
// console.log(newNums);  //return value which satisfy given condition

// if curly bracket than to write return as started scope
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);


// same thing with foreach operation 
// in this codition is to give additional 
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

// book array with object
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((bk) => bk.genre === 'History')
//assigned to constant error
let userBooks = books.filter((bk) => bk.genre === 'History')
console.log(userBooks);

//return keyword with scope
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"
})
console.log(userBooks);