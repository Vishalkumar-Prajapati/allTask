// Create a function that takes an array of strings and returns a new array with the same strings, 
// but in reverse order. Use a closure to keep track of the index of the current string as you iterate through
// the array.

function takeFunction(arrString) {
    const newArray = [];
    function reverseArray(){
        const lengthOfString=arrString.length;
        for (let index = lengthOfString-1; index >= 0; index--) {
            const element = arrString.pop();
            currentIndex(index);
            newArray.push(element);
        }
        function currentIndex(i) {
            console.log(`current index is ${i}`);
        }
        return newArray;
    }
    return reverseArray;
    
}
const obj=takeFunction(["vishal","prajapati","paresh","jaydeep"])
console.log(obj());