// Create a function that takes an array of numbers and returns the sum of all the numbers.
// Use a closure to keep track of the running total as you iterate through the array.
const arr = [1, 2, 3, 4, 5]
function outerFunc(arr) {
    let sum = 0;
    function innerFunc() {
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
            console.log(sum);
        }
    }
    return innerFunc;
}

let result = outerFunc(arr);
result();
