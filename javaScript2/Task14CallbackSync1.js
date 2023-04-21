// Write a function that takes an array and a callback function as arguments,
// and returns a new array with each element of the original array doubled by the callback function
// function takeArray(arr, callback) {
//     const newArray = callback(arr);
//     return newArray;
// }
// const arr = [1, 2, 3, 5, 6, 4, 7, 8, 9];
// const newArray = takeArray(arr, (arr) => { return arr.concat(arr); });
// console.log(newArray);
//-------------------------------------------------------------------------------------------------------
function takeArray(arr, callback) {
    const newArray=[];
    arr.forEach(element => {
        callback(newArray,element);
    });
    return newArray;
}
const arr = [1, 2, 3, 5, 6, 4, 7, 8, 9];

const newArray = takeArray(arr, (arr,element) => {arr.push(element*2); });
console.log(newArray);
