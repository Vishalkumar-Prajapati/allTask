// const vehicles = ['mustang', 'f-150', 'expedition'];

// // old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];



// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;




// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne);

// // old way
// function myVehicle(vehicle) {
//   const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
//   console.log(message);
// }

// //new  way
// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
// }



// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red',
//   registration: {
//     city: 'Houston',
//     state: 'Texas',
//     country: 'USA'
//   }
// }

// myVehicle(vehicleOne)

// function myVehicle({ model, registration: { state } }) {
//   const message = 'My ' + model + ' is registered in ' + state + '.';
// }




// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     currentAge: 28
// };

// let { firstName, lastName, middleName, currentAge: age = 18 } = person;

// console.log(middleName); // ''
// console.log(age); // 28


