// Write a program that uses nested functions to demonstrate how scope chain works.
// Declare a variable in the outer function and try to access it from the inner function. 
// Then, declare a variable in the inner function and try to access it from the outer function. 
// Explain your observations.

function outerfunc(){
    let a=5;
    innerfunc();
    console.log(b); //ReferenceError: b is not defined
    function innerfunc(){
        let b =6;
        console.log(a); //5

    }
}
outerfunc();