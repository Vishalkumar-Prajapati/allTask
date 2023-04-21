// Create a constructor function called Person that takes a name
// and age argument and sets them as properties of the object.
// Add a method called introduce that logs a string introducing
// the person. Create two instances of the Person object and call
// the introduce method on each one.

function person(name,age) {
    this.name=name;
    this.age=age;
    this.introduce=function (){
        console.log("Hello! I am "+this.name+" and I am "+this.age+" years old");
    }
}
const vishal=new person("vishal",21);
const paresh=new person("paresh",21);

// console.log(vishal,paresh);

vishal.introduce();
paresh.introduce();
