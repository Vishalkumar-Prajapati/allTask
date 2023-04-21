// class in es5
//first class citizen
// function Person1(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person1.prototype.sayHello = function () {

//     console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
// }

// var john1 = new Person1("John", 30);

// john1.sayHello();

//class in es6

// class Person {
    
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }
    
//         sayHello() {
//             console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
//         }
//     }

// let john = new Person("John", 30);
// john.sayHello(); 

// console.log(john instanceof Person); // true
// console.log(john instanceof Object); // true
// console.log(john.name)

// console.log(typeof Person); // function

//class for oop use but it is not a real class in js it is a syntactic sugar over prototypal inheritance


// let johnq = Person("John Doe");

// console.log(johnq.name); 

// Class constructor Person cannot be invoked without 'new'


// Use the JavaScript class keyword to declare a new class.
// A class declaration is syntactic sugar over prototypal inheritance with additional enhancements.



//class expression

// let Person = class {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         this._name = newName;
//     }
// }

// let john = new Person("John");

// console.log(john.name); // John


//class expression with name

// let Person = class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         this._name = newName;
//     }

//     getFullName() {
//         return this.name + " Doe";
//     }

// }

// console.log(typeof Person); // function

// let john = new Person("John");
// console.log(john.name); // John
// console.log(john.getFullName()); // John Doe

//ES6 provides you with an alternative way to defining a new class using a class expression.
// Class expressions can be named or unnamed.


//static method

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         this._name = newName;
//     }

//     getFullName() {
//         return this.name + " Doe";
//     }

//     static getFullName() {
//         return "John Doe";
//     }

// }

// console.log(typeof Person); // function

// let john = new Person("John");
// console.log(john.name); // John
// console.log(john.getFullName()); // John Doe
// console.log(Person.getFullName()); // John Doe

//Static methods are methods that are defined on the class itself, not on the prototype.
// Static methods are often used to create utility functions for an application.
// Static methods are called without instantiating their class and cannot be called through a class instance.


//static property

// class Item {
//   constructor(name, quantity) {
//     this.name = name;
//     this.quantity = quantity;
//     this.constructor.count++;
//   }
//   static count = 0;
//   static getCount() {
//     return Item.count;
//   }
// }

// // Item.count = 100;
// let pen = new Item('Pen', 5);
// let notebook = new Item('notebook', 10);
// let pencil = new Item('pencil', 15);
// console.log(Item.getCount());

// console.log(Item.getCount()); // 2


// console.log(Item.getCount()); // 100


//Static properties are properties that are defined on the class itself, not on the prototype.
// Static properties are often used to store class-level data.
// Static properties are called without instantiating their class and cannot be called through a class instance.
// Static properties are defined using the static keyword.



//inheritance

//es5


// Parent class constructor
function Animal(name) {
  this.name = name;
}

// Parent class method
Animal.prototype.sayName = function() {
  console.log("My name is " + this.name);
};

// Child class constructor
function Dog(name, breed) {
  Animal.call(this, name);//super
  this.breed = breed;
}

// Inherit parent class prototype
//create a new object with the same prototype as the parent class prototype, and assign it to the child class prototype. 
Dog.prototype = Object.create(Animal.prototype);

// Set child class constructor
Dog.prototype.constructor = Dog;

// Child class method
Dog.prototype.bark = function() {
  console.log("Woof!");
};

// Create instances of parent and child classes
var animal = new Animal("Leo");
var dog = new Dog("Buddy", "Golden Retriever");

// Call parent and child class methods
animal.sayName(); // Output: My name is Leo
dog.sayName(); // Output: My name is Buddy
dog.bark(); // Output: Woof!





// //es6
// // Parent class
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
  
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// // Child class
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }
  
//   bark() {
//     console.log("Woof!");
//   }
// }

// Create instances of parent and child classes
let animal = new Animal("Leo");
let dog = new Dog("Buddy", "Golden Retriever");

// Call parent and child class methods
animal.sayName(); // Output: My name is Leo
dog.sayName(); // Output: My name is Buddy
dog.bark(); // Output: Woof!
