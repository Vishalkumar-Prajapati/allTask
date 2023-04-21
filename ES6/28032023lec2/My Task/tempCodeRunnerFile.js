const array=[]
for(let i=0;i<100000;i++){
    array.push(Math.floor(Math.random(0,100)*100))
}
let for1 = Date.now();
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
let timeTakenfor = Date.now() - for1;
console.log("Total time taken : " + timeTakenfor + " milliseconds");