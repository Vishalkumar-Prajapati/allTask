// use the destructuring  to extract values from an array and assign them to variables
// const array=[1,2,3,4,5];
// const [vishal,paresh,jay,deep]=array;
// console.log(vishal,paresh,jay,deep);

/*********************************************************************************** */
// use the destructuring to extract values from an object and assign them to variables
// const fullname={name:"vishal",lastname:"sureshbhai",surname:"prajapati"}
// const {name,lastname,surname}=fullname;
// console.log(name,lastname,surname);
/*********************************************************************************** */
// use the destructuring to provide default values for variables
// const fullname={name:"vishal",lastname:"sureshbhai",surname:"prajapati"}
// const {name,lastname,id=2017,at='sidhpur',surname}=fullname;
// console.log(name,lastname,surname,at,id);
/*********************************************************************************** */
// use the destructuring to extract values from nested data structures like objects inside arrays or vice versa

//  const nestedArray=[{name:'vishal'},{surname:'prajapati'},{address:{at:'sidhpur',dist:'patan',state:'GJ'}}];

// const [oName,oSurname,oAddress]=nestedArray

// const {name}=oName;
// const {surname}=oSurname;
// const {address:{at,dist,state}}=oAddress;
// console.log(name,surname,at,dist,state);

/*********************************************************************************** */

const oArray={number1:[1,2,3,4,5],number2:[6,7,8,9,10],number3:[11,12]}

const {number1,number2,number3}=oArray
