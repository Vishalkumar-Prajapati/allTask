// Write a function that takes two numbers and a callback function which perform addition as arguments,
// and returns the result of applying the callback function to the two numbers.
function takeTwoNumber(num1, num2, callback) {
const result=callback(num1,num2);
return result;
}
const objMain=takeTwoNumber(10, 30, (num1, num2) => { return num1 + num2; });
console.log(objMain);
