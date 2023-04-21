// Write a function that takes a number and a callback function as arguments,
// and calls the callback function repeatedly every second, until the given number of seconds has elapsed.
function takeNumber(number,callback){
    for(let i=0;i<=number;i++){
        setTimeout(() => {
            callback(i);
        }, 1000*i);
    }
}
takeNumber(10,(i)=>{console.log(`second:${i}`)});
