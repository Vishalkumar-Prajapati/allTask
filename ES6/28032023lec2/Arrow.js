//arrow function

//normal function

// function add(a,b){
//     return a+b;
// }

// add(1,2); //3

//arrow function

// let add = (a,b) => a+b;

// add(1,2); //3



//arrow function with one parameter

// let square = x => x*x;

// square(2); //4


//arrow function with no parameter

// let sayHello = () => console.log("Hello");

// sayHello(); //Hello


//arrow function with multiple parameters

// let add = (a,b) => a+b;

// add(1,2); //3

//arrow function with multiple statements

// let add = (a,b) => {
//     let sum = a+b;
//     return sum;
// }

// add(1,2); //3

//arrow function with object literal

// let getPerson = () => ({name: 'John', age: 30});

// getPerson(); //{name: 'John', age: 30}


//arrow function with destructuring

// let getPerson = () => {
//     return {
//         name: 'John',
//         age: 30
//     }
// }

// let {name, age} = getPerson();

// console.log(name); //John


//arrow function with destructuring and default values

// let getPerson = () => {
//     return {
//         name: 'John',
    
//     }
// }

// let { name = 'John', age = 30 } = getPerson();

// console.log(name);



// let numbers = [4,2,6];
// numbers.sort(function(a,b){ 
//     return b - a; 
// });
// console.log(numbers); // [6,4,2]


//arrow function

// let numbers = [4,2,6];
// numbers.sort((a,b) => b - a);
// console.log(numbers); // [6,4,2]



//arrow function with this
//lexical scope

// let person = {
//     name: 'John',
//     age: 30,
//     greet: function(){
//         setTimeout(function() {
//             console.log(this.name,this.age);
//         }.bind({
//             name: 'Jane',
//             age:50
//         }), 1000);
//     }
// }

// person.greet();


//function with this

// let person = {
//     name: 'John1',
//     age: 30,
//     greet: function(){
//         setTimeout(function(){
//             console.log(this.name);
//         }.bind(this),1000);
//     }
// }

// person.greet();




// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);


// const obj = {
//   name: "John",
//   greet: function() {
//     // Here, `this` refers to the `obj` object
//     console.log(`Hello, ${this.name}!`);
    
//     // Using an arrow function
//     const greetAgain = () => {
//       // Here, `this` still refers to the `obj` object
//       console.log(`Nice to see you again, ${this.name}!`);
//     };
    
//     greetAgain();
//   }
// };

// obj.greet(); // Output: "Hello, John!" followed by "Nice to see you again, John!"

