//rest operator Example

// The rest parameter is a feature introduced in ES6 that allows a function to accept an indefinite 
// number of arguments as an array. 
// It is denoted by three dots (...) followed by the name of the parameter.

const sum = (a,b,...args) => {
    console.log(a,b,args);
}


sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


//other example

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//rest with array

// const arr = [1, 2, 3, 4, 5];

// const [a, b, ...c] = arr;

// console.log(a, b, c);

//rest with function


// const sum = (...args) => {
//     return args.reduce((acc, cur) => acc + cur, 0);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//rest with function 2

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//rest with function 3

// const sum = (a, b, ...args) => {
//     return args;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));




