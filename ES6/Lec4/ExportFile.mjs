export default class Person{
    constructor(name,surname){
        this.name=name;
        this.surname=surname;
    }
    get fullname(){
        return `${this.name} ${this.surname}`;
    }
}

export function name(name){
    console.log(name);
}
export const a=123;
export const b=123456789;

