//map example with duplicate key

const map5 = new Map([
    ['a', 1],
    ['b', 2],
    ['a', 3]
]);

for (const [key, value] of map5) {
    console.log(key, value);
}

//why map is better than object in javascript ?

//map is better than object in javascript because map can have duplicate key but object can not have duplicate key in javascript


//store any type of data in map

const map6 = new Map([
    ['a', 1],
    ['b', 2],

    [true, 3],
    [false, 4],

    [1, 5],

    [function () { }, 6],

    [{}, 7],

    [Symbol(), 8]

]);

for (const [key, value] of map6) {
    console.log(key, value);
}


//map method use

const map7 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

map7.set('a', 4);
map7.set('d', 5);


console.log(map7.get('a')); // 4


//difference map and object with example

const map8 = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

const obj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(map8.get('a')); // 1
console.log(obj.a); // 1

map8.set('a', 4);
obj.a = 4;

console.log(map8.get('a')); // 4
console.log(obj.a); // 4

console.log(map8.size)


//other difference map and object with example



const map9 = new Map()
map9.set(a,1)
map9.set(b,2)

//set new value
map9.set(a,3)


console.log(map9)

for (const [key, value] of map9) {
    console.log(key, value);
}
//same value zero

console.log({} == {})

const obj1={}

const a={x:1}
const b={x:1}

obj1[1]=1
obj1[b]=2

console.log(obj1)

for(const[key,value] of Object.entries(obj1)){
    console.log(key,value)
}

