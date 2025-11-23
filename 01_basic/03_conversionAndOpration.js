// =================================================================
// Type Conversion
// =================================================================
// JavaScript often automatically converts values from one data type to another (coercion),
// but you can also explicitly convert them.

let score = "hitesh"

// --- 1. Conversion to Number ---
// The `Number()` function can be used to convert other types to a number.

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); // Output: number
// console.log(valueInNumber);      // Output: NaN (Not a Number), because "hitesh" cannot be parsed as a number.

// Conversion results for Number():
// "33"      => 33
// "33abc"   => NaN
// true      => 1; false => 0
// null      => 0
// undefined => NaN

// --- 2. Conversion to Boolean ---
// The `Boolean()` function converts a value to `true` or `false`.

let isLoggedIn = "hitesh";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // Output: true

// "Falsy" values (convert to `false`):
// - 0
// - "" (empty string)
// - null
// - undefined
// - NaN

// All other values are "Truthy" (convert to `true`), including:
// - "0" (string containing zero)
// - " " (string containing a space)
// - "false" (the string "false")
// -*** [] (empty array)***
// -*** {} (empty object)***

// --- 3. Conversion to String ---
// The `String()` function can convert other types to a string.

let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber);      // Output: "33"
// console.log(typeof stringNumber); // Output: string

// =================================================================
// Operations
// =================================================================

// --- Basic Arithmetic ---
let value = 3;
let negValue = -value;
// console.log(negValue); // Output: -3

// console.log(2 + 2);  // Addition
// console.log(2 - 2);  // Subtraction
// console.log(2 * 2);  // Multiplication
// console.log(2 ** 3); // Exponentiation (2 to the power of 3)
// console.log(2 / 3);  // Division
// console.log(2 % 3);  // Modulo (remainder)

// --- String Concatenation ---
let str1 = "hello";
let str2 = " hitesh";
let str3 = str1 + str2; // The + operator concatenates strings.
// console.log(str3); // Output: "hello hitesh"

// --- Tricky Coercion with + Operator ---
// If any operand is a string, the + operator performs concatenation.
// The evaluation happens from left to right.
// console.log("1" + 2);      // "12" (2 is converted to string)
// console.log(1 + "2");      // "12" (1 is converted to string)
// console.log("1" + 2 + 2);  // "122" ("1" + 2 -> "12"; "12" + 2 -> "122")
// console.log(1 + 2 + "2");  // "32"  (1 + 2 -> 3; 3 + "2" -> "32")

// --- Unary Plus Operator ---
// The unary plus operator (+) attempts to convert an operand to a number.
// console.log(+true);    // 1
// console.log(+"");      // 0
// console.log(+"33");    // 33
// console.log(+"hello"); // NaN

// --- Assignment and Increment Operators ---
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // Chained assignment

let gameCounter = 100;
gameCounter++; // Post-increment operator (increments value after use)
 ++gameCounter; // Pre-increment operator (increments value before use)
// console.log(gameCounter); // Output: 102

// --- Logical Assignment Operators (ES2021) ---
// These combine a logical operation with an assignment.

let a = 1;
let b = 0;

// Logical AND assignment (`&&=`)
// Assigns the right-hand side value only if the left-hand side is truthy.
a &&= 2; // a is truthy (1), so a becomes 2.
console.log(a); // Output: 2

b &&= 2; // b is falsy (0), so the assignment is skipped.
console.log(b); // Output: 0
