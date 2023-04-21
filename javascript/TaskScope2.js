// Scoping Practice: Write a function that declares a variable inside it
// , then write a block of code outside the function that tries to access the variable
// . Have the trainees explain why the block cannot access the variable, and what they would
//  need to do to make it accessible.

function name1() {
    const a=10;
    const b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
if(true){
    name1();
    // console.log(a); //ReferenceError: a is not defined
    // console.log(b); //ReferenceError: b is not defined
    // console.log(c); //ReferenceError: c is not defined
}