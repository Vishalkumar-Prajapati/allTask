// // global scop
// console.log('global scope this----->', this)
this.table = 'window table'
// console.log('global scope this after assigning---->', this)



/*
    - 'this' behaves differently in javascript compared to other languages and also differently
    in the class,object,function
    - 'this' also behaves differently in strict and non-strict mode.
*/


// //this in function
/*
    - in function value of 'this' depends on how function is called.
 */

// this.table="vishal";
// let yudizOffice = {
//     table: 'xtz table',
// }
// function cleanTable(soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }
// cleanTable.call(this, 'xyz soap')
// cleanTable.call(yudizOffice, 'xyz soap')


// this also behaves differently in the arrow function and normal function

// this inside an arrow function 
const foo = {
    // lang: 'JS',
    arrowFunc: () => `${this.table} is simple!`,
    fooMethod: function () {
        return `${this.lang} is awesome!`
    }
}

console.log(foo.arrowFunc());
console.log(foo.fooMethod());

// this inside an arrow function with function
// this.lang="vishal";
// function foo() {
//     // lang = 'JS';
//     // console.log(this);
//     const arrowFunc = _ => `${this.lang} is simple!`;
//     return { arrowFunc }
// }

// console.log(foo().arrowFunc());


// this in object 
// let yudiz = {
//     table: 'yudiz table',
//     // this.table:'yudiz table' ,
//     // we can not assign 'this'  like this in the private function because let is a private function
//     cleanTable() {
//         console.log(`cleaning ${this.table}`);
//     }
// }
// console.log('object this ------>', yudiz.table);
// yudiz.cleanTable()

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function () {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
// var pokemonName =  (snack, hobby)=> {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };
// pokemonName.call(pokemon, 'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon, ['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


/*
    call() and apply() serve the exact same purpose.
    The only difference between how they work is that call() expects all parameters to be passed in individually,
    whereas apply() expects an array of all of our parameters.
*/

// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function () {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function () {
//     console.log(this.getPokeName() + 'I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'

