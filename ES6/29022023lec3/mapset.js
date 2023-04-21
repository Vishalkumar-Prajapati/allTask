//Map 


// infor about map

// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

// Syntax

// new Map([iterable])

// Parameters

// iterable Optional

// An iterable object whose elements are key-value pairs (arrays with two elements, e.g. [[1, 'one'], [2, 'two']] or other iterable objects that will be converted to such arrays using Array.from()). Each key-value pair is added to the new Map. null is treated as undefined.

// Return value

// A new Map object.

// Description

// A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

// A Map object can only contain unique keys. If a key is added to a Map object more than once, the previous key-value pair is overwritten by the new one. The insertion order of the keys is preserved.

// A Map object can be iterated using a for...of loop, returning an array of [key, value] for each iteration.

// A Map object can also be iterated using forEach(), returning the same [key, value] pair for each iteration.


// ----
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


const a=1
const b=2
const c=1
const map = new Map()
map.set(a, 'a')
map.set(b, 'b')
map.set(c, 'c')

// map.set(1,a)
// map.set(1,b)

console.log(map) // a


//example of map

const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('a', 4);
console.log(map1.get('a')); // 1
console.log(map1.get('b')); // 2
console.log(map1.get('c')); // 3
console.log(map1.get('d')); // undefined
console.log(map1)
console.log(map1.has('a')); // true
console.log(map1.size)


//other example of map

//objec.entries
const map2 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

console.log(map2.get('a')); // 1
console.log(map2.get('b')); // 2
console.log(map2.get('c')); // 3
console.log(map2.get('d')); // undefined

//other example of map for of loop

const map3 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of map3) {
    console.log(key, value);
}

//other example of map for of loop with duplicate key

const map4 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['a', 4]
]);

for (const [key, value] of map4) {
    console.log(key, value);
}


console.log(map1[a])
