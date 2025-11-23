// =================================================================
// "use strict" Directive
// =================================================================
// This directive enables "Strict Mode" for the entire script.
// Strict mode makes several changes to normal JavaScript semantics, such as
// preventing the use of undeclared variables and making code more secure and optimized.
"use strict"; // treat all JS code as a newer version

// =================================================================
// Environment Differences (Node.js vs. Browser)
// =================================================================
// The 'alert' function is part of the browser's Window API and is not available in Node.js.
// alert( 3 + 3); // This would work in a browser but will cause a ReferenceError in Node.js.

// =================================================================
// Code Readability
// =================================================================
// While JavaScript allows for flexible formatting, prioritizing readability is crucial for maintainable code.
console.log(3 
    +
     3); // This works, but `console.log(3 + 3)` is much cleaner.

console.log("Hitesh");

// =================================================================
// JavaScript Data Types
// =================================================================
// JavaScript variables can hold different data types. There are two main categories: Primitive and Non-Primitive (Object).

// --- Primitive Data Types ---
// Primitives are immutable (they cannot be changed) and are not objects.

let name = "hitesh";      // 1. String: A sequence of characters. Must be in quotes.
let age = 18;             // 2. Number: Represents both integer and floating-point numbers. (Range: up to 2^53)
let isLoggedIn = false;   // 3. Boolean: Represents logical entities, can be `true` or `false`.
let state;                // 4. Undefined: A variable that has been declared but not assigned a value has the value `undefined`.

// 5. null: Represents the intentional absence of any object value. It's a standalone value.
let temperature = null;

// 6. BigInt: For integers of arbitrary length, larger than what the Number type can hold.
const bigNumber = 1234567890123456789012345678901234567890n; // Note the 'n' at the end.

// 7. Symbol: A unique and immutable primitive value, often used as an identifier for object properties.
const id = Symbol('123');

// --- Non-Primitive Data Type ---
// Object: A collection of key-value pairs. Arrays and Functions are also types of objects in JavaScript.

// =================================================================
// The `typeof` Operator
// =================================================================
// The `typeof` operator returns a string indicating the type of the unevaluated operand.

console.log(typeof undefined); // Output: "undefined"
console.log(typeof null);      // Output: "object" (This is a well-known historical quirk in JavaScript)