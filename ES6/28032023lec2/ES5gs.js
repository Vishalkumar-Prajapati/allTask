//getter and setter

//this is kind of property of an object which is used to get and set the value of an object property.
//getter and setter are used to define the property of an object.
//it is used to define the property of an object.
//and also do manipulation on the property of an object.


// without key word set and get

// class Person {
//     constructor(name) {
//         this.setName(name,surname);
//     }
    // getName() {
    //     return this.name + 'ascbnakjsbca';
    // }
//     setName(newName,surname) {
//         console.log('set name')
//         newName = newName.trim();
//         if (newName === '') {
//             throw 'The name cannot be empty';
//         }
//         this.name = newName;
//     }
// }

// let person = new Person('      Jane Doe    ','asjas');
// console.log(person); // Jane Doe

// person.setName('Jane Smith');
// console.log(person.getName()); // Jane Smith


// with key word set and get

class Person {

    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        console.log('set name')
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}

let person = new Person('    Jane Doe   ');
console.log(person.name); // Jane Doe

// person.name = ' Jane Smith  ';
// console.log(person.name); // Jane Smith

// person.name = 'kaushal '
// console.log(person.name); 



// Use the get and set keywords to define the JavaScript getters and setters for a class or an object.
// The get keyword binds an object property to a method that will be invoked when that property is looked up.
// The set keyword binds an object property to a method that will be invoked when that property is assigned.
