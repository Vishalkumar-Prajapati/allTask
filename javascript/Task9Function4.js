// Create a function that takes a number and returns a function that multiplies
// its argument by the number passed to the first function. For example, let timesThree = 
// multiplyBy(3); console.log(timesThree(5)); // logs 15
function multiplyBy(num){
    return (arg)=>{
        console.log(num*arg);
    }
}
var timesThree=multiplyBy(3);
timesThree(5);
