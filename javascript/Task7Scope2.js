//Write a program that uses const to declare an array or object and modifies it.
//Explain why the program does or does not throw an error.
const arr=[1,2,3,4,5,6,7,8,9];
// arr=[3,2,5,6,4];    //TypeError: Assignment to constant variable.
arr[0]=0;
arr[3]=12;
console.log(arr); //[ 0, 2, 3, 12, 5, 6, 7, 8,  9]
const obj={1:"v",2:"i",3:"s",4:"h",5:"a",6:"l"};
// obj={1:"a",2:"n",3:"a",4:"n",5:"d"}; //TypeError: Assignment to constant variable.
obj[1]="a";
obj[3]="l";
console.log(obj);//{ '1': 'a', '2': 'i', '3': 'l', '4': 'h', '5': 'a', '6': 'l' }
