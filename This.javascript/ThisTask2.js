// Create a function called printThis that logs the value of this to the
// console. Call the function in the global scope and see what value is
// logged. Then, call the function inside an object's method and see what
// value is logged. Finally, call the function using call, apply, and
// bind and see what value is logged in each case.

function printThis(){
    console.log(this);
}
// printThis();

var object={
    name:'vishal',
    method:function (){
        printThis();
    }
}
// object.method();
// printThis.call(object)
// printThis.apply(object)
const obj=printThis.bind(object)
// console.log(obj);
obj();