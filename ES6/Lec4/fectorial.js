const prompt=require('prompt-sync')();
const num=prompt('enter number   :  ');
let count=0;
console.log(factorial(num));
console.log(count);

function factorial(number) {
    count++
    if (number===0) {
        return  1;
    }
    return number*factorial(number-1);
}
