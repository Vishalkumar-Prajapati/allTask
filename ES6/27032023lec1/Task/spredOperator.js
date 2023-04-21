// use the spread operator to combine two or more arrays into a single array
//************************************************************************************ */
// const arr1=[1,2,3,4];
// const arr2=[5,6,7,8];
// const arr3=[...arr1,...arr2];
// console.log(arr3);
//********************************************************************************** */
// spread operator to create a copy of an array
//********************************************************************************** */
// const arr1=[1,2,3,4];
// const aCopy=[...arr1];
// console.log(aCopy);

//********************************************************************************** */

// use the spread operator to convert a string to an array of characters
//********************************************************************************** */
// const sName="vishalkumar";
// const aName=[...sName];
// console.log(aName);
//********************************************************************************** */

// use the spread operator to pass multiple arguments to a function.
//********************************************************************************** */
// function add(a,b,c,d,e,f,g,h,i){
//     console.log(a+b+c+d+e+f+g+h+i);
// }
// const aNumbers=[1,2,3,4,5,6,7,8,9];
// add(...aNumbers);
//********************************************************************************** */

// use the spread operator to merge two or more objects into a single object
//********************************************************************************** */
const fName={fName:'vishal'};
const lName={lName:'Prajapati'};
const name={...fName,...lName};
console.log(name);
//********************************************************************************** */
