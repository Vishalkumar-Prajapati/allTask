// what is shims and polyfills? 

//shims example code in JScript
// https://stackoverflow.com/questions/6599815/what-is-the-difference-between-a-shim-and-a-polyfill#:~:text=A%20shim%20is%20a%20library,polyfill%20installs%20its%20own%20implementation.

// Shims and polyfills are techniques used in web development to enable browser compatibility 
// for new or unsupported features of a programming language or API.

// Shims, also known as "polyfills", 
// are code libraries that simulate a missing API or functionality by 
// providing a replacement that can be used in older browsers that do not support the new feature. 
// Shims are used when a new language feature is introduced and not yet supported by all browsers,
//  so they provide a temporary workaround until support is widespread.



// Polyfills are a specific type of shim that provides a complete implementation of a new API, 
// including all required methods and properties. 
// Polyfills work by detecting if a browser supports a particular feature and,
// if not, providing a fallback implementation that works across all browsers.

// For example, let's say a developer wants to use the Promise API, 
// which is not supported in older versions of Internet Explorer.
//  They could use a Promise polyfill library that would enable Promise functionality in those browsers 
//  that do not support it. 
//  The polyfill library would provide an implementation of the Promise API that works across all browsers, 
//  allowing developers to use it regardless of whether the browser supports it natively.

// Shims and polyfills are essential tools for web developers because they allow them to use the 
// latest and greatest features of a programming language or API, even if not all browsers support them yet.
//  By using shims and polyfills, developers can provide a better user experience for their users, 
//  while still supporting older browsers that may not have the latest features.


// Let's say you want to use the Array.prototype.includes method, 
// which was introduced in ECMAScript 2016, in your JavaScript code. 
// However, you find that the method is not supported by some older browsers, 
// such as Internet Explorer 11.
// To make your code work in these browsers, you could use a shim library such as the following:



// Shim

// If you are familiar with the adapter pattern, 
// then you know what a shim is. 
// Shims intercept API calls and create an abstract layer between the caller and the target. 
// Typically shims are used for backward compatibility. 
// For instance the es5-shim npm package will let you write ECMAScript 5 (ES5) syntax and not care 
// if the browser is running ES5 or not. Take Date.now as an example. 
// This is a new function in ES5 where the syntax in ES3 would be new Date().getTime(). 
// If you use the es5-shim you can write Date.now and if the browser 
// you’re running in supports ES5 it will just run. However, if the browser is running the ES3 engine 
// es5-shim will intercept the call to Date.now and just return new Date().getTime() instead. 
// This interception is called shimming. The relevant source code from es5-shim looks like this:

// if (!Date.now) {
//     Date.now = function now() {
//         return new Date().getTime();
//     };
// }


// console.log(Date.now()); // 1396388600346
// console.log(new Date().getTime()); // 1396388600346


// Polyfill

// Polyfilling is really just a specialized version of shimming. 
// Polyfill is about implementing missing features in an API, 
// whereas a shim wouldn’t necessarily be as much about implementing missing features as 
// it is about correcting features. 
// I know these seems overly vague, but where shims are used as a more broader term, 
// polyfill is used to describe shims that provide backward compatibility for older browsers. 
// So while shims are used for covering up old sins, polyfills are used for bringing future
//  enhancements back in time. As an example there is no support for sessionStorage in IE7, 
//  but the polyfill in the sessionstorage npm package will add this feature in IE7 (and older)
//   by using techniques like storing data in the name property of the window or by using cookies.

// if(!navigator.bluetooth) { 
//     navigator.bluetooth = {
//         requestDevice: function() {
//             // shim code
//         }
//     }
// } 


// Shim: 
// a piece of code that you could add (i.e. JavaScript) that would fix some functionality, 
// but it would most often have it's own API.

// Polyfill: something you could drop in (i.e. JavaScript) and it would silently work 
// to mimic existing browser APIs that are otherwise unsupported.

const my=(function*(){
    yield 1;
    yield 2;
    yield 3;
})();

for (const iterator of my) {
    console.log(iterator);
    break;
}
console.log('vishal');
for (const iterator of my){
    console.log(iterator);
}
 
// function* g(a,b){
//     for (let i = a; i<=b; i++) yield i
// }
// let b=g(1,3);
// let one = b.next();
// let two = b.next();
// // let tw = b.next();

// console.log(one,two);
// console.log(one.value+two.value);

// try {
//     setTimeout(() => {
//         console.log(vlisha);
//     }, 3000);
// } catch (error) {
//     console.log('vihsal');
// }



// const a=new Set();
// let john = {name:"john"}
// let pete = {name:"pete"}
// let ma = {name:"ma"}

// a.add(john);
// a.add(pete);
// a.add(ma);
// a.add(john);
// a.add(pete);

// a.add({name:"john"});
// a.add({name:"john"});
// a.add({name:"pete"});
// a.add({name:"pete"});
// a.add({name:"ma"});

// console.log(a)

// function* loop(x){
//     yield loop(x+1);
// }
// const a=loop(0);
// console.log(a);
// const b=a.next().value
// console.log(b);

// console.log(b.next());
// console.log(b.next());
