// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// At position 2, remove 2 items: 
// console.log(fruits.splice(2, 5));
// console.log(fruits);

// function outerFunction() {
//     var outerVariable = "Hello, ";
  
//     function innerFunction(name) {
//       console.log(outerVariable + name);
//     }
  
//     return innerFunction;
//   }
  
//   var greet = outerFunction();
// // outerFunction(5);

// greet("John"); // logs "Hello, John"
  
// var v=10;

//   var v=100;
//   console.log(v)
// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined
// const a=10;
// const a=10;//SyntaxError: Identifier 'a' has already been declared
// const a=10;
// a=10;//TypeError: Assignment to constant variable.
// const a=10;
// let a=10; //SyntaxError: Identifier 'a' has already been declared

// const arr = [1,2,3,4,5]
// function fc(){
//     let b = 0;
//     function fc2(arr){
//         let a = []
//         return arr.map((ele,index)=> {
//         b = b+ele
//         a[index] = b}
//         ,a)
//         // return a;
//     }
//     return fc2;
// }
// let z = fc();
// console.log(z(arr))
// const a=10
// function sum(b){
//     return function sum1(c){
//         return function sum2(d){
//             return function sum3(e){
//                 return a+b+c+d+e;

//             }
//         }
//     }

// }
// // console.log(sum(10)(10)(10)(10));
// let s=sum(10);
// let s1=s(10);
// let s2=s1(10);
// let s3 = s2(10);
// console.log(s3);
// function createIncrement() {
//     var count = 0;
//     function increment() { 
//       count++;
//     }
//     var message = `Count is ${count}`;      
//     function log() {
//       console.log(message);
//     }
    
//     return {increment, log};
//   }
//   const vishal= createIncrement();
//   vishal.increment()
//   vishal.increment(); 
//   vishal.increment(); 
//   vishal.log();
// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// console.log(numbers,roots);
// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
