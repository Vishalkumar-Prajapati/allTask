//spread operator example with object and array

// The spread operator is a feature introduced in 
// ES6 that allows an iterable (e.g. an array or a string) to be expanded or spread into individual elements. 
// It is denoted by three dots (...) followed by the iterable.


// const person = {
//     name: 'John',
//     age: 25,
//     count:1
// };

// const person2 = {
//     name: 'Bob',
//     ...person
// };

// console.log(person2);

// const arr = [1, 2, 3];
// const arr2 = [2,...arr];

// console.log(arr2);


//nested object and array example

// const person = {
//     name: 'John',
//     age: 25,
//     address: {
//         city: 'New York',
//         state: 'NY'
//     }
// };

// const person2 = {
//     name: 'Bob',
//     ...person,
//     address: {
//         city: 'Los Angeles',
//         ...person.address
//     }
// };

// console.log({...person2});



// spread nested for array

// const arr = [1, 2, 3, [4, 5]];
// const arr2 = [...arr, 6, [7, 8]];

// console.log(arr2);


//spread operator with function

// const sum = (a, b, c) => a + b + c;

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));



//flat array using spread operator

// const arr = [1, 2, 3, [4,[8], 5]];

// const arr2 = [...arr, 6, [7, 8]];

// console.log(arr2.flat(2));


//flat polyfill for older browser using spread operator and reduce method


// if (!Array.prototype.flat1) {
//     Array.prototype.flat1 = function(depth = 1) {
//         return this.reduce((acc, val) => {
//             if (Array.isArray(val) && depth > 0) {
//                 acc.push(...val.flat1(depth - 1));
//             } else {
//                 acc.push(val);
//             }
//             return acc;
//         }, []);
//     };
// }


// const arr = [1, 2, 3, [4, 5]];

// const arr2 = [...arr, 6, [7, 8]];

// console.log(arr2.flat1(2));


//flat polyfill for older browser using spread operator and with for loop

// if (!Array.prototype.flat2) {
//     Array.prototype.flat2 = function(depth = 1) {
//         let arr = this;
//         for (let i = 0; i < depth; i++) {
//             arr = [].concat(...arr);
//         }
//         return arr;
//     };
// }

// const arr = [1, 2, 3, [4, 5]];

// const arr2 = [...arr, 6, [7, 8]];

// console.log(arr2.flat2(2));



//spread operator with string

// const str = 'Hello';
// const str2 = [...str];
// console.log(str2);
