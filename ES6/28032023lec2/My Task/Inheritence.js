// inheritance with class and without class(Prototype inheritance) example
// class Parent{
//     constructor(pName){
//         this.pName=pName;
//     }
//     getString(){
//       console.log("this is your parent name:",this.pName);
//     }
// }
// class Child extends Parent{
//     constructor(pName,cName){
//         super(pName);
//         this.cName=cName;
//         console.log("Parent =>",this.pName);
//         console.log("Child =>",this.cName);
//     }
//     getStr(){
//       console.log("this is your child name:",this.cName);
//     }
// }
// const childObject=new Child('parent','child');
// // console.log(childObject);
// childObject.getString();
// childObject.getStr();


/**************************************************************************************** */

function Parent(pName){
    this.pName=pName;
}
Parent.prototype.getString=function(){
      console.log("this is your parent name:",this.pName);
}
function Child(pName,cName){
  Parent.call(this,pName);
  this.cName=cName;
  // console.log(this.cName,this.pName);
}

// console.log(Child.prototype);
Child.prototype=Object.create(Parent.prototype);
Child.prototype.getStr=function(){
      console.log("this is your child name:",this.cName);
};

Child.prototype.constructor=Child;
console.log(Child.prototype);
// console.log(Child.prototype.constructor);
const obj=new Child('parent','child');
// obj.getStr()
obj.getString()
console.log(Child.prototype);

