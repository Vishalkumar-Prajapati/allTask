// Create a function that takes a string and returns a function that logs the string to the console. 
// The returned function should also take a number and repeat the string that many times before logging it.
function takeString(str){
    return (num)=>{
        let string='';
        for(let i=0;i<num;i++){
            string=string+str+" ";
        }
        return string;
    }
}
let string=takeString("Hello!");
console.log(string(3));