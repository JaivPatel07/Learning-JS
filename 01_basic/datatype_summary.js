//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // unique identifier
const anotherId = Symbol('123') // different from id
// console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n // n at the end to denote bigInt

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // array is object type
let myObj = {           // object literal
    name: "hitesh",
    age: 22,
}

const myFunction = function(){ // function is also object type
    console.log("Hello world");
}

console.log(typeof anotherId); // symbol
console.log(typeof heros); // object // array is of object type
console.log(typeof myFunction); // function // special type of object // function called functional object

// Summary
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// https://262.ecma-international.org/5.1/#sec-11.4.3