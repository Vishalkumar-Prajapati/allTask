// const obj = {
//   name: "John",
//   greet: function () {
//     // Here, `this` refers to the `obj` object
//     console.log(`Hello, ${this.name}!`);
    
//     // Using an arrow function
//     const greetAgain =  ()=> {
//       // Here, `this` still refers to the `obj` object
//       console.log(`Nice to see you again, ${this.name}!`);
//     };
    
//     greetAgain();
//   }
// };

// obj.greet(); // Output: "Hello, John!" followed by "Nice to see you again, John!"

// this.name='ankit'
const a={
  name:'vishal',
  greet: ()=>{
    console.log(this.name)
  },
 
}
a.greet();

