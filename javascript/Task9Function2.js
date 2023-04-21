// Create a function that returns an object with two methods: setValue and getValue. 
// setValue should set a private variable to a given value, and getValue should return that value. 
// The private variable should be accessible only to the object's methods.
function returnObj() {
    let privateVariable;
    return object = { setValue: (value) => { privateVariable = value }, getValue: () => privateVariable }
}
const obj = returnObj();
obj.setValue(50);
console.log(obj.getValue());
