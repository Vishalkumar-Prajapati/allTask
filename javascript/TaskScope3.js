// Block Scope: Write a function that takes an array of numbers and returns the sum of all even
// numbers in the array. Use block scope to declare a variable inside the function to hold the sum,
// and only add the even numbers to the sum.
function addEven(numbers){
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2===0){
            sum+=numbers[i];
        }
    }
    return sum;
}
arr=[1,2,3,4,5,6,7,8,9];
console.log(addEven(arr));


