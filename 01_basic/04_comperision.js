// =================================================================
// Comparison Operators
// =================================================================

// --- 1. Basic Comparisons ---
// These operators compare two values and return a boolean (`true` or `false`).
// console.log(2 > 1);   // true
// console.log(2 >= 1);  // true
// console.log(2 < 1);   // false
// console.log(2 == 1);  // false
// console.log(2 != 1);  // true

// --- 2. Comparisons with Type Coercion (Loose Comparison) ---
// When comparing values of different types, JavaScript will attempt to convert one of the values.
// This can lead to non-intuitive results.

// console.log("2" > 1);   // true, because the string "2" is converted to the number 2.
// console.log("02" > 1);  // true, because the string "02" is converted to the number 2.

// --- 3. Tricky Comparisons with `null` ---
// The behavior of `null` in comparisons is inconsistent and a common source of bugs.
// The reason is that an equality check (==) and a relational comparison (>, <, >=, <=) work differently.

// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// In the relational comparison (`>=`), `null` is converted to `0`. So, `0 >= 0` is `true`.
// However, in the equality check (`==`), `null` is not converted to `0`.

// --- 4. Tricky Comparisons with `undefined` and `NaN` ---
// `undefined` and `NaN` consistently result in `false` when compared with numbers.

// Comparisons with `undefined`:
// console.log(undefined == 0); // false
// console.log(undefined > 0);  // false
// console.log(undefined < 0);  // false

// Comparisons with `NaN` (Not a Number):
// `NaN` is not equal to anything, including itself.
// console.log(NaN == NaN); // false
// console.log(NaN > 0);    // false
// console.log(NaN < 0);    // false

// =================================================================
// Strict Equality (`===`) vs. Loose Equality (`==`)
// =================================================================
// It is highly recommended to always use strict equality (`===`) to avoid unexpected type coercion.

console.log('2' == 2);   // true (Loose equality: converts the string '2' to a number before comparing)
console.log("2" === 2);  // false (Strict equality: types are different (string vs. number), so it's false)

console.log(undefined == null);  // true (This is a special case where loose equality is true)
console.log(undefined === null); // false (Strict equality: types are different)
