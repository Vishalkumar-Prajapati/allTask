// Create a function that returns another function that adds a given number to a counter.
//  The counter should be a private variable that's accessible only to the returned function.
// function a(){
//     let counter =10;
//     return b;

// function b(number){
    
//     console.log(counter+number);
// }
// }
// var vishal=a();
// // console.log(vishal);
// vishal(30);
const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  })();
  // console.log(counter);
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.
