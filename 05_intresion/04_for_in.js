// =================================================================
// The `for...in` Loop
// =================================================================
// The `for...in` statement iterates over all enumerable string properties of an object,
// including inherited enumerable properties.
// Its main purpose is to loop over the *keys* (or property names) of an object.

// --- Syntax ---
// for (const key in object) {
//   // code to execute for each key
// }

// =================================================================
// 1. Looping over an Object
// =================================================================
// This is the primary and most common use case for the `for...in` loop.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
};

for (const key in myObject) {
    // 'key' will be the property name ('js', 'cpp', etc.) on each iteration.
    // We use bracket notation `myObject[key]` to access the value associated with that key.
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// =================================================================
// 2. Looping over an Array (Not Recommended)
// =================================================================
// While you can use `for...in` on an array, it's generally considered bad practice.
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    // The `key` here will be the *index* of the array element as a string ('0', '1', '2', etc.), not the value itself.
    // console.log(key); // Output: 0, 1, 2, 3, 4
    // To get the value, you still need to use `programming[key]`.
    // console.log(programming[key]);
}
// For arrays, it's better to use `for...of`, `forEach`, or a standard `for` loop.

// =================================================================
// 3. `for...in` with Maps (Does Not Work)
// =================================================================
// The `for...in` loop does not work for iterating over Map elements.
// Maps are not plain objects, and their entries are not enumerable properties in the way `for...in` expects.
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India");

// This loop will not execute because a Map has no enumerable properties for `for...in` to iterate over.
// for (const key in map) {
//     console.log(key);
// }
// To iterate over a Map, you must use the `for...of` loop.