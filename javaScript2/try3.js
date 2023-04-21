// Passing an array of promises that are already resolved,
// to trigger Promise.all as soon as possible
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p = Promise.all(resolvedPromisesArray);
// // Immediately logging the value of p
// console.log(p.then((val)=>{console.log(val)}));

// Using setTimeout, we can execute code after the queue is empty
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });

// Logs, in order:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
//================================================================================
// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p = Promise.all(mixedPromisesArray);
// console.log(p.catch(()=>{}));
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });

// Logs:
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "rejected", <reason>: 44 }
//*****************************************************************************************/
// const p = Promise.all([]); // Will be immediately resolved
// const p2 = Promise.all([1337, "hi"]); // Non-promise values are ignored, but the evaluation is done asynchronously
// console.log(p);
// console.log(p2);
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p2);
// });

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// the queue is now empty
// Promise { <state>: "fulfilled", <value>: Array[2] }
///****************************************************************************************** */
// Promise.resolve("foo")
//   // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
//   .then(
//     (string) =>
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           string += "bar";
//           resolve(string);
//         }, 1);
//       }),
//   )
//   // 2. receive "foobar", register a callback function to work on that string
//   // and print it to the console, but not before returning the unworked on
//   // string to the next then
//   .then((string) => {
//     setTimeout(() => {
//       string += "baz";
//       console.log(string); // foobarbaz
//     }, 1);
//     return string;
//   })
//   // 3. print helpful messages about how the code in this section will be run
//   // before the string is actually processed by the mocked asynchronous code in the
//   // previous then block.
//   .then((string) => {
//     console.log(
//       "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
//     );

//     // Note that `string` will not have the 'baz' bit of it at this point. This
//     // is because we mocked that to happen asynchronously with a setTimeout function
    // console.log(string); // foobar
//   });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
/************************************************************************************* */
// const p2 = new Promise((resolve, reject) => {
//     resolve(1);
//   });
  
//   p2.then((value) => {
//     console.log(value); // 1
//     return value + 1;
//   }).then((value) => {
//     console.log(value, " - A synchronous value works"); // 2 - A synchronous value works
//   });
  
//   p2.then((value) => {
//     console.log(value); // 1
//   });
//****************************************************** */
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");

  // 1. Execution gets here almost instantly
  const slow = await resolveAfter2Seconds();
  console.log(slow); // 2. this runs 2 seconds after 1.

  const fast = await resolveAfter1Second();
  console.log(fast); // 3. this runs 3 seconds after 1.
}

async function concurrentStart() {
  console.log("==CONCURRENT START with await==");
  const slow = resolveAfter2Seconds(); // starts timer immediately
  const fast = resolveAfter1Second(); // starts timer immediately

  // 1. Execution gets here almost instantly
  console.log(await slow); // 2. this runs 2 seconds after 1.
  console.log(await fast); // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
}

function concurrentPromise() {
  console.log("==CONCURRENT START with Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // slow
      console.log(messages[1]); // fast
    },
  );
}

async function parallel() {
  console.log("==PARALLEL with await Promise.all==");

  // Start 2 "jobs" in parallel and wait for both of them to complete
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(concurrentStart, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000); // same as concurrentStart

// wait again
setTimeout(parallel, 10000); // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow
  