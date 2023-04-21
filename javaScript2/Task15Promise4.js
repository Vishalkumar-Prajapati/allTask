function addWater() {
    console.log("Adding water....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Water has been added");
            resolve();
        }, 2000);
    });
}
function addSugar() {
    console.log("Adding sugar....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sugar has been added.");
            resolve();
        }, 1500);
    });
}
function addTeaLeaf() {
    console.log("Adding teaLeaf....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("TeaLeaf is added");
            // resolve();
            reject(new Error("TeaLeaf is Over"));
        }, 1500);
    });
}
function addMilk() {
    console.log("Adding Milk....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Milk has been added");
            resolve();
        }, 2000);
    });
}
function teaMaking(){
    return new Promise((resolve,reject)=>{
        resolve();
});
}
teaMaking()
    .then(addWater)
    .then(addSugar)
    .then(addTeaLeaf).catch((err)=>{console.error(err);})
    .then(addMilk)
    .then(()=>{setTimeout(() => {console.log("Tea is ready..");}, 2000);})
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{console.log("Chai is Readyyyy")})
console.log("Tea Making...");
// teaMaking();


// function teaMaking(){
//   addWater(addSugarFunction);
// }
// function addSugarFunction(){
//   addSugar(addTeaLeafFunction);
// }
// function addTeaLeafFunction(){
//   addTeaLeaf(addMilkFunction);
// }
// function addMilkFunction(){
//   addMilk();
//   setTimeout(() => {
//     console.log("Tea is ready..");
// }, 2000);
// }