// create a class with 2 or 3 method and use getter setter with and without key word and use
//  static method and static property   


class Name{
    static count=0;
    constructor(name){
        this.name=name
    }
    set name(name){
        this._name=name;
        this.constructor.count++;
    }
    get name(){
        return this._name;
    }
    static counter(){
        return this.count
    }
}
const obj=new Name('vishal');
// console.log(obj)

// obj.name='paresh';
// console.log(obj.name);

// console.log(Name.counter());  
// console.log(Name.count);  





// class Name {
//     static count = 0;
//     constructor(name) {
//         this.setName(name);
//     }
//     setName(name) {
//         this.name = name;
//         this.constructor.count++;
//     }
//     getName() {
//         return this.name;
//     }
//     static counter() {
//         return this.count
//     }
// }
// const obj = new Name('vishal');

// console.log(obj);  


// // obj.setName('paresh');
// // console.log(obj.getName())

// // console.log(Name);
// // console.log(Name.count);  
