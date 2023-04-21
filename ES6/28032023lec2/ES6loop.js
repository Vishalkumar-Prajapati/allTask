//for of and for in loop
//over iterable object

// let scores = [80, 90, 70];

// for (let score in scores) {
//    // console.log(score);
//     score = +score + 4;
//     console.log(score);
// }

//over non-iterable object

// In JavaScript, Object s are not iterable unless they implement the iterable protocol. Therefore, you cannot use for...of to iterate over the properties of an object.

// let person = {
//     name: 'John',
//     age: 30
// };

// for (let property in person) {
//     console.log(person[property]);
// }


// let colors = ['Red', 'Green', 'Blue'];

// for (const [index, color] of colors.entries()) {
//     console.log(`${color} is at index ${index}`);
// }
//in place object destructuring

// const ratings = [
//     {user: 'John',score: 3},
//     {user: 'Jane',score: 4},
//     {user: 'David',score: 5},
//     {user: 'Peter',score: 2},
// ];

// let sum = 0;
// for (const {score} of ratings) {
//     sum += score;
// }

// console.log(`Total scores: ${sum}`);


//iterable over string


// let message = 'Hello World';

// for (const char of message) {
//     console.log(char);
// }


///for of iterable over map, set, array, string, arguments, nodelist, typedarray, generator, etc



//for ... in loop

//for ... in loop is used to iterate over the properties of an object.

// let person = {
//     name: 'John',
//     age: 30
// };
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// for(const key of Object.values(person)){
//     console.log(key)
// }

//for ... in loop is used to iterate over the properties of an object. It is not used to iterate over the elements of an array.

// let colors = ['Red', 'Green', 'Blue'];

// for (const index in colors) {
//     console.log(`${colors[index]} is at index ${index}`);
// }

// Avoid using for...in loop to iterate over elements of an array, especially when the index order is important.