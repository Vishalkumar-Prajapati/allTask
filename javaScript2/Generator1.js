// Today's Tasks
// - Complete yesterday's tasks
// - Convert all then/catch code demo to async/await
// - Explore more about generators
//         - Generator Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
//         - Async Generator Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator
//  - Create a demo of generators
// 	- Create a generator function to generate 20 random numbers
// 	- Create a generator function to generate 20 random numbers in a range
// 	- Create an async generator with same pizza making example


function * random20(range=100){
    const array=[];
    for (let i=0;i<20;i++){array.push(Math.floor((Math.random() * range) + 1))}
    yield array
}
console.log(random20(20).next().value);
console.log(random20(50).next().value);
console.log(random20(60).next().value);
console.log(random20(50).next().value);
console.log(random20().next().value);
console.log(random20().next().value);