// Error Handling, try catch finally

// use case 
// 1. try catch finally
// 2. throw
// 3. custom error
// 4. error object

// try catch finally

// try {
//     // code
// } catch (error) {
//     // error handling
// } finally {
//     // code
// }

// function divide(a, b) {
//   try {
//     if (b === 0) {
//     throw new Error('Cannot divide by zero');

//     // throw 'Cannot divide by zero'

//     }
//     return a / b;
//   } catch (error) {
//     console.error(error);

//     return null;
//   } finally {
//     console.log('Division operation complete');
//   }
// }

// console.log(divide(10, 2)); // Output: 5
// console.log(divide(10, 0)); // Output: null

// function parseJSON(jsonString) {
//   try {
//     const parsed = JSON.parse(jsonString);
//     // throw new Error('Invalid JSON');
//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// }

// const validJSON = '{"name": "John", "age": 30}';
// const invalidJSON = '{name: "John", age: 30}';

// console.log(parseJSON(validJSON)); // Output: {name: "John", age: 30}
// console.log(parseJSON(invalidJSON)); // Output: null



//nested try catch


    // try {
    //     try {
    //         throw new Error('oops'); 
    //         console.log("vishal");
    //     } catch (ex) {
    //         console.error('inner', ex.message);//1
    //         throw new Error('oops1');
    //     } finally {
    //         console.log('finally',vishal);//2
    //         throw new Error('from finally');
    //     }
    // } catch (ex) {
    //     console.error('outer', ex.name);//3
    // }

    



    //throw is used to throw any value as an exception, such as a string or a number. It does not necessarily have to be an Error object. 


    //throw new Error() is used to throw an Error object, which provides more information about the error that occurred. The Error object contains a message property that describes the error, and a stack trace that shows where the error occurred in the code. 

//     try {
//         if (-1 < 0) {
//         // throw "x cannot be negative";
//       throw new SyntaxError('x cannot be negative');
// }

//     } catch (error) {
//     console.log(error);        
//     console.log(error.message);
//     console.log(error.name);
//     console.log(error.stack);
//     console.log(error instanceof Error);
//     }



//     try {
//   // some code that might throw a TypeError
//   // const arr = [];

//   // console.log(typeof arr);

//   //  const a =eval(+"asdfav" + +"fafafaf");
//   // console.log(a);

//    console.log(a);

// } catch (error) {
//   if (error instanceof TypeError) {
//     console.error("There was a TypeError:", error);

//   }
//   if(error instanceof ReferenceError) {
//     console.error("There was a ReferenceError:", error);
//   }
//   if(error instanceof EvalError) {
//     console.error("There was a EvalError:", error);
// }
// if(error instanceof SyntaxError) {
//     console.error("There was a SyntaxError:", error);
// }
// //   else {
// //     console.error("An error occurred:", error);
// //   }
// }
