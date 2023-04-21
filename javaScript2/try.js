// function a(callback){
//     console.log(callback);
//     callback();
// }
// function x(){
//     console.log("vishal");
// }
// a(x);
// function orderPizza(type) {
//     function fun(resolve, reject) {
//       const types = ["french", "chicago", "white"];
//       if (!types.includes(type)) return reject("not in stock");

//       setTimeout(() => {
//         switch (type) {
//           case "french":
//             resolve("french 🍕");
//             break;
//           case "chicago":
//             resolve("chicago 🍕");
//             break;
//           case "white":
//             resolve("white 🍕");
//             break;
//         }
//       }, 0);
//     }
//     return new Promise(fun);
//   }

//   function onFulfilled(val) {
//     console.log("resolved", val);
//   }
//   function onError(err) {
//     console.log("rejected", err);
//   }
//   const promise = orderPizza("white").then(onFulfilled, onError);


// function prepareDough(callback) {
//     console.log("Preparing dough...");
//     setTimeout(() => {
//       console.log("Dough is ready!");
//       callback();
//     }, 2000);
//   }

//   function addSauce(callback) {
//     console.log("Adding sauce...");
//     setTimeout(() => {
//       console.log("Sauce has been added!");
//       callback();
//     }, 1000);
//   }

//   function addToppings(callback) {
//     console.log("Adding toppings...");
//     setTimeout(() => {
//       console.log("Toppings have been added!");
//       callback();
//     }, 1500);
//   }

//   function bakePizza() {
//     console.log("Baking pizza...");
//     setTimeout(() => {
//       console.log("Pizza is ready!");
//     }, 3000);
//   }

//   //

//   function makePizza() {
//     prepareDough(vishal);
//   }

//   function vishal() {
//     addSauce(dhyey);
//   }

//   function dhyey() {
//     addToppings(bakePizzaAndFinish);
//   }

//   function bakePizzaAndFinish() {
//     bakePizza();
//   }

//   console.log("Making pizza...");
//   makePizza();
// log = console.log;
// new Promise(function (resolve, reject) {
//   resolve(1);
// })
//   .then(function (result) {
//     log(result); // 1
//     return result * 2;
//     // return Promise.resolve(result * 2);
//     // return new Promise((res, rej) => res(result * 2));
//     // return new Promise((res, rej) => res(result * 2)).then(function (result) {
//     //   log(result); // 2
//     //   return result * 2;
//     // }); // doing so will result in promise hell
//   })
//   .then(function (result) {
//     log(result); // 2
//     return result * 2;
//   })
//   .then(function (result) {
//     log(result); // 4
//     return result * 2;
//   })
//   .then((res) => log(res));
// function orderPizza(type) {
//   function fun(resolve, reject) {
//     const types = ["french", "chicago", "white"];
//     if (!types.includes(type)) return reject("not in stock");

//     setTimeout(() => {
//       switch (type) {
//         case "french":
//           resolve("french 🍕");
//           break;
//         case "chicago":
//           resolve("chicago 🍕");
//           break;
//         case "white":
//           resolve("white 🍕");
//           break;
//       }
//     }, 5000);
//   }
//   return new Promise(fun);
// }

// function onFulfilled(val) {
//   console.log("resolved", val);
// }
// function onError(err) {
//   console.log("rejected", err);
// }
// const promise = orderPizza("white").then(onFulfilled, onError);



////////////////////////////////////////////////////////// Important part in promise............
function prepareDough() {
  return new Promise((resolve, reject) => {
    console.log("Preparing dough...");
    setTimeout(() => {
      console.log("Dough is ready!");
      resolve('vishal');
    }, 5000);
  })

}

function addSauce(a) {
  console.log("Adding sauce...");
  console.log(a);
  setTimeout(() => {
    console.log("Sauce has been added!");
  }, 5000);
  return 'jaydeep';
}
function addToppings(a) {
  console.log(a);
  return new Promise((resolve, reject) => {
      console.log("Adding toppings...");
      setTimeout(() => {
          console.log("Toppings have been added!");
          resolve();
      }, 5000);
  });
}
prepareDough().then(addSauce).then(addToppings)