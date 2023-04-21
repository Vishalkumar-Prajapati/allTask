//iterator generator

//iterator example

const arr = [0, 0, 0, 4, 5];

const iterator = arr[Symbol.iterator]();

// console.log(iterator); // Array Iterator {}

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }




//generator example

// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return `q`
// }

// const iterator = generator();

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: 4, done: false }
// console.log(iterator.next()); // { value: 5, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }


// console.log(yield 1); // 2

// console.log(generator())

// for(let i of generator()) {
//   console.log(i)
// }


//generator example with for loop

// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
//   return `q`
// }

// const iterator = generator();

// for(let i of iterator) {
//   console.log(i)
// }


// let i=0;

// function* generator1() {
//     while(true) {
//         if(i==2) return i
//         yield i++;
//     }
// }

// const iterator1 = generator1();
// console.log(iterator1.next()); // { value: 0, done: false }
// console.log(iterator1.next()); // { value: 0, done: false }
// console.log(iterator1.next()); // { value: 0, done: false }
// console.log(iterator1.next()); // { value: 0, done: false }





// function randomNumbers1(){
//     const arr = []
//     while(true) {
//         arr.push(Math.random())
//         if(arr.length==10) return arr
//     }
// }

// const iter1 = randomNumbers1();
// console.log(iter1); // prints a random number



//generator

// Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
// Generators are a special type of function that simplifies the task of writing iterators. A generator is a function that returns an object (called a generator object), which we can iterate over (one value at a time).
// Implementing lazy sequences: Iterators can be used to implement lazy sequences, which are sequences of values that are generated on the fly, as they are needed. This can be useful for generating large sequences of data without having to generate all the data upfront.

//iterator

// An iterator is an object that provides a sequence of values, either finite or infinite. An iterator is an object that conforms to the iterator protocol, which states that an iterator must have a next() method that returns an object with two properties: done and value. The done property is a boolean that indicates whether the iterator is done producing values. The value property is the next value produced by the iterator.

// The iterator protocol is used by for...of loops, the spread operator, and other ES6 constructs that require iteration.

// The iterator protocol is also used by the destructuring assignment syntax, which requires that the right-hand side be an iterable object.

// The iterator protocol is also used by the Array.from() method, which requires that the object being converted be iterable.

// The iterator protocol is also used by the yield* expression, which requires that the right-hand side be an iterable object.

// The iterator protocol is also used by the Map and Set constructors, which require that the iterable objects passed to them be iterable.



//difference between return and yield

// The yield keyword is used to pause and resume a generator function (function* or legacy generator function). Each time a yield expression is evaluated, the generator yields a value back to its caller, and the generator's execution is paused. When the generator's execution is paused, the generator's state (including local variables) is saved internally. When the generator's execution is resumed, its state is restored and code execution continues from the location of the previous yield expression.

// The return keyword is used to return a value from a generator function (function* or legacy generator function). When a return statement is executed, the generator stops executing immediately and returns the given value to its caller. The return value is an IteratorResult object with the given value as the value property and true as the done property. If the return statement does not specify a value, the returned IteratorResult object's value property is undefined.
