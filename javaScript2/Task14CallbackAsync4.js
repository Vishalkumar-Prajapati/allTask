// Simulate any real-life task using callback, first do nesting which should resembles pyramid of doom. 
// Then remove the callback hell using callback itself(dont use promise).
function addWater(callback){
    console.log("Adding water....");
    setTimeout(() => {
    console.log("Water has been added");
    callback();
  }, 2000);
}
function addSugar(callback){
    console.log("Adding sugar....");
    setTimeout(() => {
    console.log("Sugar has been added.");
    callback();
  }, 1500);
}
function addTeaLeaf(callback){
    console.log("Adding teaLeaf....");
    setTimeout(() => {
    console.log("TeaLeaf is added");    
    callback();
  }, 1500);
}
function addMilk(){
    console.log("Adding Milk....");
    setTimeout(() => {
    console.log("Milk has been added");
  }, 2000);
}
// function teaMakig(){
//     addWater(()=>{
//         addSugar(()=>{
//             addTeaLeaf(()=>{
//                 addMilk();
//                 setTimeout(() => {
//                     console.log("Tea is ready..");
//                 }, 2000);
//             });
//         });
//     });
// }
console.log("Tea Making...");
teaMakig();


function teaMakig(){
  addWater(addSugarFunction);
}
function addSugarFunction(){
  addSugar(addTeaLeafFunction);
}
function addTeaLeafFunction(){
  addTeaLeaf(addMilkFunction);
}
function addMilkFunction(){
  addMilk();
  setTimeout(() => {
    console.log("Tea is ready..");
}, 2000);
}