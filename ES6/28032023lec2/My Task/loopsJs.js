// make a one array with range of 1 to 100 with length of 1000(duplicate value allowed)
//and iterate over array using for,while,do while,for of,for in,forEach,for each with arrow function


const array=[]
for(let i=0;i<100000000;i++){
    array.push(Math.floor(Math.random(0,100)*100))
}
/********** */
let for1 = Date.now();
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
let timeTakenfor = Date.now() - for1;
console.log("Total for time taken : " + timeTakenfor + " milliseconds");

/******************** */
let while1 = Date.now();
let index = 0
while (index < array.length) {
    const element = array[index];
    index++;
}
let timeTakenwhile = Date.now() - while1;
console.log("Total while time taken : " + timeTakenwhile + " milliseconds");
/**************************** */
let do1 = Date.now();
let ind = 0
do {
    const a=array[ind];
    ind++;
} while (ind < array.length);
let timeTakendo = Date.now() - do1;
console.log("Total do time taken : " + timeTakendo + " milliseconds");



let foreach1 = Date.now();
array.forEach(element => {
    const c=element
});
let timeTakenforeach = Date.now() - foreach1;
console.log("Total each time taken : " + timeTakenforeach + " milliseconds");


let forin = Date.now();
for (const index in array) {
    const element = array[index];
}
let timeTakenforin = Date.now() - forin;
console.log("Total in time taken : " + timeTakenforin + " milliseconds");

let forof = Date.now();
for (const iterator of array) {
    const element=iterator;
}
let timeTakenforof = Date.now() - forof;
console.log("Total of time taken : " + timeTakenforof + " milliseconds");
