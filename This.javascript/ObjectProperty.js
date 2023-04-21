// const a={
//     name:"vishal",
//     surname:"prajapati",
//     lastName:"sureshbhai",
//     age:21,
// }
// const b=Object.getOwnPropertyDescriptor(a,'name');

// Object.defineProperty(a, "qux", {
//     value: 8675309,
//     writable: false,
//     enumerable: true,
//     configurable:false,
//   });
//   const v=Object.getOwnPropertyNames(a);
//   const v1=Object.keys(a);
// console.log(v);
// console.log(v1);
// console.log(a);
const a={
  name:"vishal",
  surname:"prajapati",
  lastName:"sureshbhai",
  age:21,
}
for (const iterator in a) {
  console.log(a[iterator]);
}

