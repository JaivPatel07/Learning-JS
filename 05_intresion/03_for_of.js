// =================================================================
// The `for...of` Loop
// =================================================================
// The `for...of` statement creates a loop that iterates over iterable objects.
// Iterable objects include Array, Map, Set, String, TypedArray, arguments object, etc.
// It provides a simpler and more modern syntax for looping over the *values* of an iterable.

// --- Syntax ---
// for (const variable of iterable) {
//   // code to execute for each value
// }

// =================================================================
// 1. Looping over an Array
// =================================================================
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
// 5

// =================================================================
// 2. Looping over a String
// =================================================================
// Strings are also iterable, and a `for...of` loop will iterate over each character.
const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
// Output:
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d
// Each char is !

// =================================================================
// 3. Looping over a Map
// =================================================================
// A `Map` is a collection of key-value pairs where keys can be of any data type.
// Importantly, a `Map` remembers the original insertion order of the keys and keys are unique.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // This will not add a new entry, as the key 'IN' already exists. The value remains "India".

// console.log(map); // Output: Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

// When you use `for...of` on a Map, it returns an array `[key, value]` for each iteration.
// We can use array destructuring `[key, value]` to directly assign these to variables.
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// Output:
// IN :- India
// USA :- United States of America
// Fr :- France

// =================================================================
// 4. `for...of` with Objects (and why it doesn't work)
// =================================================================
// Plain JavaScript objects are NOT iterable by default.
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// The following code will cause a TypeError because `myObject` is not iterable.
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// To iterate over an object's properties, you should use the `for...in` loop or methods like `Object.keys()`.