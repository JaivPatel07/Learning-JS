// =================================================================
// Variable Declaration in JavaScript
// =================================================================
// Variables are containers for storing data values.
// JavaScript has three main keywords for declaring variables: `const`, `let`, and `var`.

// -----------------------------------------------------------------
// `const`: Constant Variables
// -----------------------------------------------------------------
// `const` declares a block-scoped variable whose value cannot be changed through reassignment.
// It must be initialized at the time of declaration.
const accountId = 144553;

// -----------------------------------------------------------------
// `let`: Block-Scoped Variables
// -----------------------------------------------------------------
// `let` declares a block-scoped variable that can be reassigned.
// This is the modern, preferred way to declare a variable whose value might change.
let accountEmail = "hitesh@google.com";

// -----------------------------------------------------------------
// `var`: Function-Scoped Variables (Legacy)
// -----------------------------------------------------------------
// `var` was the original way to declare variables. It is function-scoped, not block-scoped.
// This can lead to unexpected behavior, so it is generally avoided in modern JavaScript.
var accountPassword = "12345";

// -----------------------------------------------------------------
// Undeclared Variables (Implicit Globals)
// -----------------------------------------------------------------
// It's possible to assign a value to a variable without declaring it first.
// This is considered bad practice as it automatically creates a global variable.
accountCity = "Jaipur";

// -----------------------------------------------------------------
// Uninitialized Variables
// -----------------------------------------------------------------
// A variable declared with `let` or `var` without being assigned a value is automatically given the value `undefined`.
let accountState;

// -----------------------------------------------------------------
// Reassignment Rules
// -----------------------------------------------------------------

// Trying to reassign a `const` will result in a TypeError.
// accountId = 2; // This is not allowed and will throw an error.

// `let` and `var` variables can be updated with new values.
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// -----------------------------------------------------------------
// Outputting Variable Values
// -----------------------------------------------------------------

// `console.log()` is used to print a single value to the console.
// console.log(accountId);

// `console.table()` is a useful way to display multiple variables in a tabular format.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
