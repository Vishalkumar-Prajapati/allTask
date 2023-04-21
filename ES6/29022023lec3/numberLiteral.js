// Number Literal Extensions, unicodes

// Binary 0001 0011

let binary = 0b1010;
console.log(binary); // 10

// Octal

let octal = 0744;
console.log(octal); 

// var hexa = 0x00ff;
// console.log(hexa); // 255

// Unicode

// var unicode = "\u{1F600}";
// console.log(unicode); // 😀



//convert string to unicode

// var str = "hello world";
// var unicode = "\u{1F600}";
// console.log(str.charCodeAt(0)); // 104
// console.log(str.charCodeAt(1)); // 101
// console.log(str.charCodeAt(2)); // 108
// console.log(str.charCodeAt(3)); // 108


// what is unicode?

// Unicode is a character encoding standard that assigns unique code points (numeric values) to every character used in written languages, including characters from scripts such as Latin, Greek, Cyrillic, Arabic, Hebrew, Chinese, Japanese, and Korean, as well as symbols and punctuation marks.

// Unicode was developed to address the limitations of earlier character encoding standards, such as ASCII and ISO-8859, which only supported a limited set of characters and were not capable of representing the characters of many non-Latin scripts.

// Unicode provides a consistent and universal way of representing characters in computer systems, regardless of language or script. Each Unicode code point is represented by a unique integer value, which can be encoded in different formats such as UTF-8, UTF-16, and UTF-32.

// Unicode has become the dominant character encoding standard used in modern computing systems, and is widely supported by operating systems, programming languages, and web browsers.

// Unicode continues to evolve and expand, with new characters being added to the standard to support additional scripts, symbols, and emojis.



//binary example

// let binary = 0b1010;

//convert number to binary



// let binary1 = 10;
// console.log(binary1.toString(2)); // 1010

//octal example

// let octal = 0o744;

//convert number to octal

// 484 /8 ->0-7

let octal1 = 484;
console.log(octal1.toString(8)); // 744
console.log(octal1.toString(10)); // 484
console.log(octal1.toString(16)); // 1e8

//hexadecimal example

// let hex = 0xFF;
// console.log(hex); // 255
// console.log(hex.toString(16)); // ff
// console.log(hex.toString(10)); // 255
// console.log(hex.toString(8)); // 377

//convert number to hexadecimal

// let hex1 = 255;

// console.log(hex1.toString(16)); // ff


// const binary11 = "1010";
// const octal11 = "744";
// const hex11 = "0xFF";

// console.log(parseInt(binary11, 2)); // 10
// console.log(parseInt(octal11, 8)); // 484
// console.log(parseInt(hex11, 16)); // 255



