//set

// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.


// const array = [{name:"abc"},{name:"abc"},{name:"abc"}];

// const set = new Set(array);
// console.log(set)

// console.log({} === {})

// console.log([] === [])

// // console.log(typeof +"1")


// console.log(set.size)
// console.log(set.has(11))
// console.log(set.has(12))
// console.log(set.delete(11))
// console.log(set.delete(11))
// console.log(set)


// for(const value of set){
//     console.log(value)
// }



//Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number