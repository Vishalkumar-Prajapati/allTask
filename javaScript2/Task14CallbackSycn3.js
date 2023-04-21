// Write a function that takes an array and a callback function to check even number as arguments,
//  and returns a new array with only the elements of the original array that satisfy the callback function.
function takeFunction(arr,callback) {
    const newArray=[];
    arr.forEach(element => {
        callback(newArray,element);
    });
    return newArray;
}
arr=[1,2,3,4,5,6,7,8,9,10]
const objMain=takeFunction(arr,(arr,element)=>{if(element%2==0){arr.push(element)}});
console.log(objMain);
//==========================================================================================
// function takeFunction(arr,callback) {
//     const newArray=callback(arr);
//     return newArray;
// }
// arr=[1,2,3,4,5,6,7,8,9,10]
// const objMain=takeFunction(arr,(arr)=>{
//     const newArray=[];
//     arr.forEach(element => {
//             if(element%2==0){newArray.push(element)}});
//     return newArray});
// console.log(objMain);