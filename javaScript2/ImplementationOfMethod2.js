function onFulfilled(val) {
    console.log("resolved", val);
}
function onRejected(val) {
    console.log("rejected", val);
}
function onSettled() {
    console.log("settled");
    console.log("======================");
}
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1500, "two");
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1500, "Three");
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 2500, "Four");
});
function race1(array){
    return new Promise((resolve, reject) => {
        array.forEach(element => {
           element.then(resolve).catch(reject);
            });
    });
}

const array1=[promise1, promise2, promise3, promise4];
race1(array1).then(onFulfilled, onRejected).finally(onSettled); 