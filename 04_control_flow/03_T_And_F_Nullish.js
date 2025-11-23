// =================================================================
// Truthy and Falsy Values
// =================================================================
// In JavaScript, every value has an inherent boolean value. When a value is evaluated in a boolean context (like an `if` statement), it behaves as either `true` or `false`.

const userEmail = []

if (userEmail) {
    // This block runs because an empty array `[]` is a "truthy" value.
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
// Output: Got user email

// --- Falsy Values ---
// These values will always evaluate to `false` in a boolean context.
// List: false, 0, -0, BigInt 0n, "" (empty string), null, undefined, NaN

// --- Truthy Values ---
// Any value that is not falsy is truthy.
// Surprising examples: "0", 'false', " " (space in a string), [] (empty array), {} (empty object), function(){} (empty function)

// =================================================================
// Checking for Empty Arrays and Objects
// =================================================================
// Since empty arrays and objects are "truthy", you must check their contents to see if they are actually empty.
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// Output: Array is empty

const emptyObj = {}

// To check if an object is empty, get an array of its keys and check the array's length.
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Output: Object is empty

// =================================================================
// Nullish Coalescing Operator (??)
// =================================================================
// This operator is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand.
// It's a safe way to provide default values.

let val1;
val1 = 5 ?? 10              // Left side is not null/undefined, so val1 becomes 5.
console.log(val1);          // Output: 5
val1 = null ?? 10           // Left side is null, so val1 becomes 10.
console.log(val1);          // Output: 10
val1 = undefined ?? 15      // Left side is undefined, so val1 becomes 15.
console.log(val1);          // Output: 15
val1 = null ?? 10 ?? 20     // It evaluates from left to right. `null ?? 10` is 10. Then `10 ?? 20` is 10.
console.log(val1);          // Output: 10

// =================================================================
// Ternary Operator
// =================================================================
// A shortcut for an `if-else` statement. Syntax: `condition ? value_if_true : value_if_false`
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price is 80 or less") : console.log("Price is more than 80")
// Output: Price is more than 80