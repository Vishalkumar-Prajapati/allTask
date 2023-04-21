//////0,1,1,2,3,5,8,13
const prompt=require("prompt-sync")();

// console.log(0,1);
// let sum =0;
// let first=0;
// let second=1;
// for (let i=1;i<10;i++){
//     sum=second+first
//     console.log(sum);
//     first =second;
//     second=sum;
// }
let first =0;
let second=1;
let count=0;

function res(p) {
    count++;
    if(p===0){
        return result;
    }
    sum=second+first
    result=first
    console.log(first);
    first =second;
    second=sum;
    return res(--p)
}
const num=prompt();
console.log(res(num));
// console.log(count);