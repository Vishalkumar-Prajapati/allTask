// Object Property Assignment Pattern
// ES5 Getter/Setter
// Classes
// Template Literals / Tagged Template Literals
// Arrow Functions
// for..of Loops/ for..in


//Object Property Assignment Pattern

// what is Object Property Assignment Pattern?

// Object Property Assignment Pattern is a way to assign the value of an object property to a variable.

// The object literal is one of the most popular patterns for creating objects in JavaScript because of its simplicity. ES6 makes the object literal more succinct and powerful by extending the syntax in some ways.

// ES6 Object Property Assignment Pattern

` 1 Object property initializer shorthand`

//prior es6


function createMachine(name, status) {
    return {
        name: name,
        status: status
    };
}

//return {name: name, status: status} The name and status properties take the values of the name and status parameters. This syntax looks redundant because name and status mentioned twice in both the name and value of properties.

// ES6 allows you to eliminate the duplication when a property of an object is the same as the local variable name by including the name without a colon and value.

function createMachine(name, status) {
    return {
        name,
        status
    };
}


// {
//     name:'fadf',
//     status:'asdgasdg'
// }

`2 Computed property names`

// prior es6

// you could use the square brackets( [])  to enable the computed property names for the properties on objects.


// let obj={}
// obj.name="adcvav";

// let name = 'machine name';
// let machine = {
//     [name]: 'server',
//     'machine hours': 10000
// };

// console.log(machine[name]); // server
// console.log(machine['machine hours']); // 10000

//es6

let prefix = 'machine';
let machine = {
    'machine  name': 'server',
    [prefix +' hours']: 10000
};

console.log(machine['machine  name']); // server
console.log(machine['machine hours']); // 10000

// Concise method syntax


// prior es6

// let server = {
// 	name: "Server",
// 	restart: function () {
// 		console.log("The" + this.name + " is restarting...");
// 	}
// };

// server.restart(); // The Server is restarting...

//es6

// let server = {
//     name: "Server",
//     restart() {
//         console.log("The" + this.name + " is restarting...");
//     }
// };

// server.restart(); // The Server is restarting...

//remove the function keyword and colon, and add parentheses after the method name.


// concise method syntax

// It’s valid to have spaces in the property name and method name.

let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['starting up']();
