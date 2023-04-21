// Symbols, Iterators, Generators

// Symbols

// Symbols are a new primitive type in ES6. They are immutable and unique. They are used as object property identifiers.

// Syntax

// Symbol([description])

// example of symbol

// const sym1 = Symbol('foo');
// const sym2 = Symbol('foo');
// console.log(sym1 === sym2); // false

// Symbols are not equal to each other even if they have the same description.

// Symbols are unique and immutable. They are used as object property identifiers.

// Symbols are not enumerable in for...in loops.

// Symbols are ignored by JSON.stringify().

// Symbols are not a function. They are primitive values, just like numbers and strings.

// Symbols are not directly accessible. They are created using the Symbol() function.



// Symbols can be used to create private object properties that are not accessible from outside the object. 
// Since each symbol is unique, it cannot be accidentally overwritten by another property with the same name.

const obj = {};
let privateProperty = 'private';
let abc='private'

console.log(privateProperty); // Symbol(private)
obj[privateProperty] =123
obj[abc] =111


console.log(obj);


//example of symbol

const obj1 = {};
let privateProperty1 = Symbol('private');
let abc1=Symbol('private')

console.log(privateProperty1); // Symbol(private)
obj[privateProperty1] =123
obj[abc1] =111


console.log(obj);


console.log(obj[privateProperty]); // "secret value"
console.log(Object.keys(obj)); // []

// Symbols are not enumerable in for...in loops.

for (const key in obj) {
    console.log(key); // no output
}


// Symbols are ignored by JSON.stringify().

console.log(JSON.stringify(obj)); // "{}"

// Symbols are not a function. They are primitive values, just like numbers and strings.

console.log(typeof privateProperty); // "symbol"

// Symbols are not directly accessible. They are created using the Symbol() function.
