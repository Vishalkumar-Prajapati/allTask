// function checkMail() {
//     return new Promise((resolve, reject) => {
//       if (Math.random() > 0.5) {
//         resolve("Mail has arrived");
//       } else {
//         reject(new Error("Failed to arrive"));
//       }
//     });
// }
// checkMail()
// .then((mail) => {
//     console.log(mail);
// })
// .catch((err) => {
//     console.error(err);
// })
// .finally(() => {
//     console.log("Experiment completed");
// });
// function onFulfilled(val) {
//     console.log("resolved", val);
// }
// function onRejected(val) {
//     console.log("rejected", val);
// }
// function onSettled() {
//     console.log("settled", result);
//     console.log("======================");
// }
// function onSettled2() {
//     console.log("settled2", result2);
//     console.log("======================");
// }
// function onSettled3() {
//     console.log("settled3", result3);
//     console.log("======================");
// }
// function onSettled4() {
//     console.log("settled4", result4);
//     console.log("======================");
// }
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 10000, "one");
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "two");
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, "Three");
// });
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, "Four");
// });
// // const result = Promise.race([promise1, promise2, promise3, promise4]);
// // const result2 = Promise.any([promise1, promise2, promise3, promise4]);
// const result3=Promise.all([promise1, promise2, promise3, promise4]);
// // const result4=Promise.allSettled([promise1, promise2, promise3, promise4]);
// // result => promise
// // result.then(onFulfilled, onRejected).finally(onSettled); // Both resolve, but promise2 is faster
// // result2.then(onFulfilled).catch(onRejected).finally(onSettled2);
// result3.then(onFulfilled,onRejected).finally(onSettled3);
// // result4.then(onFulfilled,onRejected).finally(onSettled4);
// // Expected output: "resolved two"


// var p = new Promise(function(resolve, reject) {
//     throw "Sorry";
// }).
// then((data) => console.log(data), (data) => (data));
// console.log(p);



// var p = new Promise(function(resolve, reject) {
//     resolve("OK");
// });

// var p2 = p.then(function(data) {
//     return data;
// });

// var p3 = p.then(function(data) {
//     return data;
// });

// console.log(p2 === p3);
// let a=10;
// {
//     console.log(a);
//     let a=20;
// }
// console.log(a)

// Promise.resolve('foo').then(()=>{
//     throw new Error('bar');
// }).catch(console.log)
// let y;
// function bark(a) {
//   a=10;
//   y=10;
//     console.log('Woof!');

//   }
  
//   bark.animal = 'dog';
//   console.log(x,y)

const bird = {
  size: 'small',
};

const mouse = {
  name: 'Mickey',
  small: true,
};
mouse.bird.size=10
// mouse[bird.size]
console.log(mouse);