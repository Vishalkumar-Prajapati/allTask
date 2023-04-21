//Template Literals / Tagged Template Literals

// Before ES6, you use single quotes (') or double quotes (") to wrap a string literal. And the strings have very limited functionality.

// To enable you to solve more complex problems, ES6 template literals provide the syntax that allows you to work with strings more safely and cleanly.

// In ES6, you create a template literal by wrapping your text in backticks (`) 


// console.log(name)


// let simple = `This is a template literal`;


// You can use the template literal to create a multiline string.

// let multiline = `This is a template literal
// dfbvsfg
// fsgs
// gsg
// that spans multiple lines`;



// You can use the template literal to embed expressions.

// let name = 'John';
// let age = 30;
// let message = `Hello ${name}, you are ${age} years old`;


// You can use the template literal to embed functions.

// function getGreeting(name) {
//     return `Hello ${name}`;
// }

// let greeting = getGreeting('John');


// You can use the template literal to embed HTML.

let post = {
    td: ['John','Doe',30],
    th: ['name','surname','age'],
};


let {td, th} = post;

let postHtml = `<table>
    <tr>
      ${th.map(heading => `<th>${heading}</th>`).join('\n      ')}
    </tr>
      <tr>
      ${td.map(cell => `<th>${cell}</th>`).join('\n      ')}
    </tr>

</table>`;

console.log(postHtml);






//  (1.26546465).toFixed(3) ->

// let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

// console.log(netPrice); // netPrice:$9.89

// Tagged Template Literals

// Tagged template literals are template literals that include a tag function. The tag function is called with the template literal's parts as arguments.

// The tag function can process the template literal's parts and return a string.

// function tag(strings, ...values) {
//     console.log(strings);
//     console.log(values);
// }

// let name="caa";
// let age=50;
// let message = tag`Hello ${name}, you are ${age} years old`;


