// Create an object called person with two properties: name and age.
// Add a method to the person object called greet that returns a string greeting the person by their name.
// Call the greet method using person.greet().
//  The value of this inside the greet method should be the person object, so you should be able to access the name property using this.name.
// Now, create a new object called friend with the same properties as person, but with a different name.
// Call the greet method using friend.greet(). The value of this inside the greet method should be the friend object, so you should be able to access the name property using this.name.


const person={
    name:'vishal',
    age:21,
    greet:function (){
        return 'greeting from '+this.name;
    }
}
const friend={
    name:'jaydeep',
    age:22,
    greet:function (){
        return 'greeting from '+this.name;
    }
}
// person.greet();
console.log(person.greet())
console.log(friend.greet())