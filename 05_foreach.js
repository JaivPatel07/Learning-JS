// =================================================================
// The `forEach` Array Method
// =================================================================
// The `forEach()` method executes a provided function once for each array element.
// It's a clean and readable way to iterate over an array without needing a traditional `for` loop.
// Note: `forEach` does not return a new array; it simply executes a function on each element.

const coding = ["js", "ruby", "java", "python", "cpp"];

// =================================================================
// 1. Syntax Variations for the Callback Function
// =================================================================
// `forEach` takes a "callback" function as an argument. This function will be called for every element in the array.

// a) Using a traditional anonymous function expression
// coding.forEach(function (val) {
//     console.log(val);
// });

// b) Using a modern arrow function (most common)
// coding.forEach((item) => {
//     console.log(item);
// });

// c) Passing a pre-defined, named function
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe); // Note: You pass the function reference, you don't call it `printMe()`.

// =================================================================
// 2. Callback Parameters
// =================================================================
// The callback function can receive up to three arguments:
// 1. The current element being processed (`item`).
// 2. The index of the current element (`index`).
// 3. The array `forEach()` was called upon (`arr`).

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

// =================================================================
// 3. Iterating Over an Array of Objects
// =================================================================
// `forEach` is very useful for processing collections of data, like an array of objects.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    }, {
        languageName: "java",
        languageFileName: "java"
    }, {
        languageName: "python",
        languageFileName: "py"
    }, ];

myCoding.forEach((item) => {
    // For each object (`item`) in the array, we can access its properties.
    console.log(item.languageName);
});