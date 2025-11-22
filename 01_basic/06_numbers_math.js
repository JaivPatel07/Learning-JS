// =================================================================
// Numbers
// // =================================================================

const score = 400;  //  A number primitive.
console.log(score);  //  400

const balance = new Number(100);  //  Creates a Number object. It's less common to create numbers this way.
console.log(balance);  //  [Number: 100]

// --- Number Methods ---

console.log(balance.toString());  //  Converts the number to a string. "100"
console.log(balance.toString().length);  //  3

console.log(balance.toFixed(2));  //  Formats the number to have a specific number of digits after the decimal point. "100.00"

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4));  //  Formats the number to a specified total length (precision). "123.9"
console.log(otherNumber.toPrecision(3));  //  "124" (rounds up)

const hundreds = 1000000;
console.log(hundreds.toLocaleString());  //  Formats the number according to locale-specific conventions (US default). "1,000,000"
console.log(hundreds.toLocaleString('en-IN'));  //  Formats for India. "10,00,000"

// --- Static Number Properties & Methods ---
// These are called on the Number constructor itself, not an instance.

console.log(Number.MAX_VALUE);  //  The largest possible number in JavaScript.
console.log(Number.MIN_VALUE);  //  The smallest positive number representable.
console.log(Number.parseInt('123.45'));  //  Parses a string and returns an integer. 123
console.log(Number.isInteger(score));  //  Checks if the value is an integer. true

// =================================================================
// Maths
// =================================================================

//  The Math object is static, meaning you always use it directly (e.g., Math.random()) without creating an instance.

console.log(Math.abs(-4));  //  Returns the absolute (positive) value. 4

console.log(Math.round(4.6));  //  Rounds to the nearest integer. 5

console.log(Math.ceil(4.2));  //  Rounds UP to the nearest integer. 5

console.log(Math.floor(4.9));  //  Rounds DOWN to the nearest integer. 4

console.log(Math.sqrt(25));  //  Returns the square root of a number. 5

console.log(Math.pow(2, 3));  //  Returns the base to the exponent power (2 to the power of 3). 8

console.log(Math.min(4, 3, 6, 8));  //  Returns the smallest of the given numbers. 3

console.log(Math.max(4, 3, 6, 8));  //  Returns the largest of the given numbers. 8

// --- Random Number Generation ---

console.log(Math.random());  //  Returns a random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log((Math.random() * 10) + 1);  //  Returns a random number between 1 and 11 (but not including 11).

console.log(Math.floor(Math.random() * 10) + 1);  //  Returns a random integer between 1 and 10.

//  Formula to get a random integer within a specific range (e.g., between min and max).
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //  Returns a random integer between 10 and 20 (inclusive).