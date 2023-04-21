// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))




// var p = new Promise((resolve, reject) => {
//     return Promise.reject(Error('The Fails!'))
//   })
// var p =Promise.reject(Error('the Fails'))
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))




// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
// p.catch(error => console.log(error.message))
//   .then(error => console.log(error))



// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   .catch(error => console.log(error.message))
//   .catch(error => console.log(error.message))


// new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return "actually, that worked"
//   })
//   .catch(error => console.log(error.message))


// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);
//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);
//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
//     return 'error';
// });


// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
// let promise = job(true);
// promise
// .then(function(data) {
//     console.log(data);
//     return job(true);
// })
// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }
//     return job(true);
// })
// .then(function(data) {
//     console.log(data);
// })
// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })
// .then(function(data) {
//     console.log(data);

//     return job(true);
// })
// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })
// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })
// .then(function(data) {
//     console.log('Success:', data.message);
// })
// .catch(function(data) {
//     console.log('Error:', data.message);
// });

// var p = new Promise(function() {
//     return "OK";
// });

// var p2 = p.then(function(data) {
//     return data;
// });

// var p3 = p2.then(function(data) {
//     return data + " Bye";
// });


// var p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("OK");
//     }, 2000);
// });

// p.then().then(function(data) {
//     console.log(data);
// });

var p = new Promise(function(resolve, reject) {
    throw "Sorry";
}).
then((data) => console.log(data), (data) => {console.log(data)});
console.log(p);

