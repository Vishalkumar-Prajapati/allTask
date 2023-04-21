// Create a function that takes an object with two properties, value and callback.
// The function should return a new object with two methods: getValue, which returns the value property,
// and runCallback, which calls the callback property with the value as an argument.
function takeFunction(object){
    function getValue(){
        return object.value;
    }
    function call() {
        const value=getValue();
        object.callback(value);
    }
    return {getValue,call};
}
const object={value:40,callback:(value)=>{console.log(value)}}
const objOfMain=takeFunction(object);
// objOfMain.getValue();
objOfMain.call();