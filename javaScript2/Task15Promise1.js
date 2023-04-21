// Write a function that takes a number and a callback function as arguments,
// and calls the callback function after the given number of milliseconds.
// function takeNumber(number,callback){
//     setTimeout(() => {
//         callback();
//     }, number);
// }
// takeNumber(3000,()=>{console.log("Hi ! I am Vishalkumar Prajapati")});

function takeTimer(timer){
    return new Promise((resolve,reject)=>{
        console.log("we are in promise function");
        setTimeout(() => { if(typeof resolve=='function')resolve();reject();/* this is not run any way*/ },timer);
    });
}
const obj=takeTimer(5000);
function onFulFilled(){
    console.log("Hi ! I am Vishalkumar Prajapati");
}
function onRejected(){
    console.log("error !!!!!");
}
obj.then(onFulFilled,onRejected);