// Create an object called calculator with two properties:
// num1 and num2, and three methods: add, subtract, and multiply.
// In each method, use the this keyword to access the num1 and num2
// properties and perform the corresponding mathematical operation.
// Call each method and log the result to the console.
const calculator={
    num1:10,
    num2:20,
    add:function(){
        return this.num1+this.num2;
    },
    subtract:function(){
        return this.num1-this.num2;
    },
    multiply:function(){
        return this.num1*this.num2;
    }
}
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());