// since we can solve callback hell issue using callback itself with some refactoring why we need something
// like promise, like what major issue callback still have even after refactoring.=>Inaversion of Control.
// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   .catch(error => console.log(error.message))
//   .catch(error => console.log(error.message))
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })
// promise1.then(res => {
//   console.log(res)
// })
// console.log('end')

const promise1 = new Promise(resolve => resolve(12))
const promise2 = new Promise(( _ , reject) => reject())
const promise4 = new Promise(resolve => resolve())
const promise3 = new Promise(resolve => resolve())

const result= Promise.any([promise1,promise2,promise4,promise3]);
console.log(result);