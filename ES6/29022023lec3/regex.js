//what is regex?

//regex is a way to match a pattern in a string

//information about regex

// Regular expressions are patterns used to match character combinations in strings. 
// In JavaScript, regular expressions are also objects. 
// These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. 
// This chapter describes JavaScript regular expressions. 

// flag in regex

// g - global match
// i - case-insensitive match
// m - multi-line match
// u - unicode match (ES6)

//regex methods

//exec() method

// The exec() method executes a search for a match in a specified string. Returns a result array, or null.

// Syntax

// regex.exec(string)

// example of exec() method

// const str = 'hello world';
// const regex1 = new RegExp('hello', 'i'); // matches 'hello' case-insensitively
// const regex2 = /world/; // matches 'world' exactly
// console.log(regex1.exec(str)); // ["hello", index: 0, input: "hello world", groups: undefined]
// console.log(regex2.exec(str)); // ["world", index: 6, input: "hello world", groups: undefined]


//validation
//user email name surname 
// gmail -> .gmail .yahoo .hotmail

//test() method

// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

// Syntax

// regex.test(string)

// example of test() method

// const str = 'hello world';
// const regex1 = new RegExp('Hello', 'i'); // matches 'hello' case-insensitively
// const regex2 = /world/; // matches 'world' exactly
// console.log(regex1.test(str)); // true
// console.log(regex2.test(str)); // true

// const re = /\w+\s/gi;
// const str1 = `fee fi fo fum `;
// const myArray = str1.match(re);
// const str2 = re.exec(str1);
// const str3 =  re.test(str1);
// // console.log(str3);
// // console.log(str2);
// console.log(myArray);



//flags in regex with exec() method example

// const str = 'hello world hello';
// const regex1 = new RegExp('hello', 'g'); // matches 'hello' case-insensitively
// const regex2 = /world/; // matches 'world' exactly
// console.log(regex1.exec(str)); // ["hello", index: 0, input: "hello world", groups: undefined]
// console.log(regex2.exec(str)); // ["world", index: 6, input: "hello world", groups: undefined]



//flags in regex with test() method example

// const str = 'hello world hello';
// const regex1 = new RegExp('hello', 'g'); // matches 'hello' case-insensitively
// const regex2 = /world/; // matches 'world' exactly
// console.log(regex1.test(str)); // true
// console.log(regex2.test(str)); // true


//regex special characters

// . - dot
// \ - backslash
// * - asterisk
// + - plus
// ? - question mark
// ^ - caret
// $ - dollar sign
// { - opening curly brace
// } - closing curly brace
// [ - opening square bracket
// ] - closing square bracket
// ( - opening parenthesis
// ) - closing parenthesis
// | - pipe
// : - colon
// - - dash

//example of regex special characters with exec() method

// regex for match any character

// const str = 'hello world hello';

// const regex1 = new RegExp('.', 'g'); // matches 'hello' case-insensitively
// const regex2 = /./; // matches 'world' exactly
// console.log(regex1.exec(str)); // ["h", index: 0, input: "hello world hello", groups: undefined]
// console.log(regex2.exec(str)); // ["h", index: 0, input: "hello world hello", groups: undefined]

// regex for match any character except new line

// const str = 'hello world hello';

// const regex1 = new RegExp('.+', 'gi'); // matches 'hello' case-insensitively
// const regex2 = /.+/; // matches 'world' exactly
// console.log(regex1.exec(str)); // ["hello world hello", index: 0, input: "hello world hello", groups: undefined]
// console.log(regex2.exec(str)); // ["hello world hello", index: 0, input: "hello world hello", groups: undefined]



//regex quantifiers

// * - zero or more
// + - one or more
// ? - zero or one
// {n} - exactly n times
// {n,} - at least n times
// {n,m} - at least n but not more than m times

//example of regex quantifiers with exec() method

// const str = 'hello world hello';

// const regex1 = new RegExp('h*', 'g'); // matches 'hello' case-insensitively
// const regex2 = /h*/; // matches 'world' exactly
// console.log(regex1.exec(str)); // ["h", index: 0, input: "hello world hello", groups: undefined]
// console.log(regex2.exec(str)); // ["h", index: 0, input: "hello world hello", groups: undefined]


//regex character classes

// \d - digit
// \D - non-digit
// \w - word character
// \W - non-word character
// \s - whitespace character
// \S - non-whitespace character

//example of regex character classes with exec() method

// const str = 'hello world hello';

// const regex1 = new RegExp('\d', 'g'); // matches 'hello' case-insensitively
// const regex2 = /\d/; // matches 'world' exactly
// console.log(regex1.exec(str)); // ["h", index: 0, input: "hello world hello", groups: undefined]
// console.log(regex2.exec(str)); // ["h", index: 0, input: "hello world hello", groups: undefined]


// const myRe = /d(b+)d/g;
// const myArray = myRe.exec("cdbbdbsbz");
// console.log(myArray); // ["dbbd", "bb", index: 1, input: "cdbbdbsbz", groups: undefined]
// console.log(`The value of lastIndex is ${myRe.lastIndex}`);



// const regex = /\p{Emoji}/u; // matches any emoji character
// console.log(regex.test('😀')); // true
// console.log(regex.test('👩‍👩‍👧‍👧')); // true
// console.log('\u{1F600}- \u{1F64F}')

// //get unicode value of a character in javascript

// // const str = '😀';
// // console.log(str.codePointAt(0).toString(16)); // 1f600

// const str = '👩‍👩‍👧‍👧';

// console.log(str.codePointAt(0).toString(16)); // 1f469

// console.log(str.codePointAt(1).toString(16)); // 200d

// console.log(str.codePointAt(2).toString(16)); // 1f469

// console.log(str.codePointAt(3).toString(16)); // 200d

// console.log(str.codePointAt(4).toString(16)); // 1f467

// console.log(str.codePointAt(5).toString(16)); // 200d

// console.log(str.codePointAt(6).toString(16)); // 1f467

// console.log(str.codePointAt(7).toString(16)); // 200d

// console.log(str.codePointAt(8).toString(16)); // 1f467

// console.log(str.codePointAt(9).toString(16)); // 200d

// console.log(str.codePointAt(10).toString(16)); // 1f467

// const a=/match this (?:match that)/g;
// console.log(a.exec('match this match that'));