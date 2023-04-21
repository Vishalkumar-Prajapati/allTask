// Write a program that uses the "let" keyword to create a block-scoped variable.
//  Demonstrate how this variable is inaccessible outside of the block it was declared in.

// let a=1000;
// const b=1000;
{
    let a=10;
    const b=10;
    console.log(a,b);
}
console.log(a,b);//ReferenceError: a is not defined
