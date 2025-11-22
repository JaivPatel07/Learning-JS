// =================================================================
// Merging & Flattening Arrays
// =================================================================

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// --- push() ---
// Special Case: Pushing an array results in a nested array.
marvel_heros.push(dc_heros)
console.log(marvel_heros); // Output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); // Output: 'flash'

// --- concat() ---
// Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
const allHeros = marvel_heros.concat(dc_heros)
console.log("Using concat():", allHeros); // Output: Using concat(): [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// --- Spread Operator (...) ---
// A modern way to merge arrays. It expands an iterable (like an array) into individual elements.
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log("Using Spread Operator:", all_new_heros); // Output: Using Spread Operator: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// --- flat() ---
// Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
console.log("Flattened array:", real_another_array); // Output: Flattened array: [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]


// =================================================================
// Array Creation & Type Checking
// =================================================================

// --- Array.isArray() ---
// Checks if the passed value is an Array.
console.log("Is 'jaiv' an array?", Array.isArray("jaiv")) // Output: Is 'jaiv' an array? false
console.log("Is all_new_heros an array?", Array.isArray(all_new_heros)) // Output: Is all_new_heros an array? true

// --- Array.from() ---
// Creates a new Array instance from an array-like or iterable object.
console.log("Array from string 'Jaiv':", Array.from("Jaiv")) // Output: Array from string 'Jaiv': [ 'J', 'a', 'i', 'v' ]

// Special Case: Array.from() on a plain object without a length property or iterability returns an empty array.
console.log("Array from an object:", Array.from({name: "hitesh"})) // Output: Array from an object: []

let score1 = 100
let score2 = 200
let score3 = 300

// --- Array.of() ---
// Creates a new Array instance from a variable number of arguments, regardless of number or type.
console.log("Array from variables:", Array.of(score1, score2, score3)); // Output: Array from variables: [ 100, 200, 300 ]


// =================================================================
// Other Useful Array Methods
// =================================================================

// --- includes() ---
// Checks if an array contains a certain value, returning true or false.
console.log("Does marvel_heros include 'Ironman'?", marvel_heros.includes("Ironman")); // Output: Does marvel_heros include 'Ironman'? true

// --- indexOf() ---
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("Index of 'batman' in dc_heros:", dc_heros.indexOf("batman")); // Output: Index of 'batman' in dc_heros: 2

// --- join() ---
// Joins all elements of an array into a string. You can specify a separator.
// const allHerosString = all_new_heros.join(', ');
// console.log(allHerosString); // Output: thor, Ironman, spiderman, superman, flash, batman

// --- slice() ---
// Returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
// const firstTwoHeros = all_new_heros.slice(0, 2);
// console.log("First two heros:", firstTwoHeros); // Output: First two heros: [ 'thor', 'Ironman' ]
