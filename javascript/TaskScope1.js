// Create a variable named x outside of any function or block and set its value to 10.
// Create a function named printX() that logs the value of x to the console.
// Create a block using curly braces {} and declare a variable named y inside the block with a value of 20.
// Call the printX() function inside the block.
// Log the value of y to the console inside the block.
// Log the value of y to the console outside the block.
// Try to log the value of x inside the block.

const x=10;
function printX() {
    console.log(x);
}
if (true) {
    const y=20;
    printX();
    console.log(y);
    console.log(x);
}
// console.log(y); //ReferenceError: y is not defined
