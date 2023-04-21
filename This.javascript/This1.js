
const vishal={
    name:"vishal",
    lastName:"Prajapati",
}
const paresh={
    name:"paresh",
    lastName:"Prajapati",
}
function Mix(home,state){
    console.log(this.name+this.lastName+home+state);
}
Mix.call(vishal,'sidhpur+','gujarat');
// Mix.call(paresh,'nodotra+','gujarat');
// Mix.apply(vishal ,['sidhpur+','gujarat']);
// Mix.apply(paresh,['nodotra+','gujarat']);
const a=Mix.bind(vishal,'sidhpur+','gujarat');
a()
// const b=Mix.bind(paresh,'nodotra+','gujarat');
// // console.log(a);
// // console.log(b);
// a();b();


// const counter=counterFunction();
// const counter1=counterFunction();

// function counterFunction(){
//     return {
//         count:0,
//         increment:function (){
//             this.count++
//         }
//     }
// }
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.increment();

// console.log(counter.count);
// console.log(counter1.count);

// var a=10;
// function increment(){
//    console.log(this.a--);
// }
// increment();
// increment();
// increment();
// increment();
// this.vishal="vishal";
// const obj={
//     name:'vishal',
//     surname:this,
//     fun: ()=>{
//         console.log("sureshbhai")
//         return this
//     },
//     fun2:function (){
//         return this
//     }

// }
// console.log(this);
// console.log(obj.fun());
// console.log(obj.fun2());

// var vishal=100;
// function a(){
//     // this.vishal=1000000;
//     console.log(++this.vishal);
//     console.log(this)
// }
// a();
// console.log(this.vishal);

// let a=100
// console.log(this);
// const obj={
//     name:'vishal'
// }
// console.log(obj.name)
// this.v=10
// const a={
//     name:'vishal',
//     surname:this,
//     obj:()=>{
//         // console.log(this)
//         return{
//             name : this.name,
//         }
//     },
// }
// console.log(a.obj());
// const b={
//     name:'paresh',
//     surname:'prajapati',  
// }
// function fun(x,y){
//     console.log(this.name+' '+this.surname+x+y)
// }
// // a.fun()
// const l=fun.bind(b);
// const k=fun.bind(a,45,45);
// l(12,12);k(12,12);

// this.name=100;
// const vishal={
//     name:'vishal',
//     v:this.name,
//     surname: ()=>{
//         console.log(this.name)
//     }
// }
// console.log(vishal.surname());
// console.log(vishal);


// function display(){
//     this.name="vishal";
//     // console.log(this.name);
//     let vishal=()=>console.log(this.name)
//     vishal();
// }
// display();
// var table = {
//     table:'window table'
// }
// const foo = {
//     // lang: 'JS',
//     // table:'vishal',
//     arrowFunc: () => `${this.table} is simple!`,
    
// }
//  function fooMethod() {
//     return `${this.table} is awesome!`
// }

// console.log(foo.arrowFunc());
// console.log(fooMethod());




// let yudizOffice = {
//     table: 'xtz table',
// }
// function cleanTable(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// cleanTable.call(this, 'xyz soap')
// cleanTable.call(yudizOffice, 'xyz soap')