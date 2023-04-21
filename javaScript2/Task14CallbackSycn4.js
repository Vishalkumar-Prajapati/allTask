// Write a function that takes a string and a callback function which logs character to console 
// as arguments, and calls the callback function for each character in the string
function takeString(string, callback) {
    for (let index = 0; index < string.length; index++) {
        const character = string[index];
        callback(character);
    }
}
const string = "Hello! I am Vishal Prajapati";
const objMain = takeString(string, (character) => { console.log(character) });