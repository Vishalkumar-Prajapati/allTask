// Function Scope: Write a function that declares a variable inside it,
// then calls another function that also declares a variable with the same name.
// Have the trainees explain what happens to the variable inside the first function,
// and why.
function a() {
    const x=10;
    const y=20;
    const z=30;
    b();
    console.log(x,y,z);
}
function b(){
    const x=40;
    const y=50;
    const z=60;
    console.log(x,y,z);
}
a();