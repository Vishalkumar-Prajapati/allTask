// function takeTimer(timer) {
//     return new Promise((resolve, reject) => {
//         console.log("we are in promise function");
//         setTimeout(() => { if (typeof resolve == 'function') reject();/* this is not run any way*/ }, timer);
//     });
// }
// const obj = takeTimer(5000);
// function onFulFilled() {
//     console.log("Hi ! I am Vishalkumar Prajapati");
// }
// function onRejected() {
//     console.log("error !!!!!");
// }
// obj.then(onFulFilled).catch(onRejected);
function takeTimer(timer) {
    return new Promise((resolve, reject) => {
        console.log("we are in promise function");
        setTimeout(() => { if (typeof resolve == 'function') reject();/* this is not run any way*/ }, timer);
    });
}
(async function () {
    try {
    await takeTimer(5000)
    await onFulFilled();
        
    } catch (error) {
        await onRejected();
    }
})();
function onFulFilled() {
    console.log("Hi ! I am Vishalkumar Prajapati");
}
function onRejected() {
    console.log("error !!!!!");
}
