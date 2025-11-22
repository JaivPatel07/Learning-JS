// =================================================================
// Immediately Invoked Function Expressions (IIFE)
// =================================================================
// An IIFE is a JavaScript function that runs as soon as it is defined.
// It's a design pattern also known as a Self-Executing Anonymous Function.

// Why use an IIFE?
// 1. **Avoid Global Scope Pollution**: Variables declared inside an IIFE are not accessible from the outside world.
//    This is crucial for preventing variable name conflicts between different scripts.
// 2. **Immediate Execution**: It executes a function immediately, which is useful for one-time setup tasks like initializing a database connection.

// --- Syntax Breakdown ---
// (function(){ ... })();
//  ^            ^   ^
//  |            |   |
//  1            2   3
// 1. The first parenthesis `(` wraps the function, turning it into a function expression.
// 2. The closing parenthesis `)` ends the function expression.
// 3. The final parenthesis `()` is what immediately calls (invokes) the function.


// 1. Named IIFE
// This is an IIFE that has a name ("chai"). The name is mostly useful for debugging.
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// it will cricial

// 2. Arrow Function IIFE with Parameters
// You can also use modern arrow functions for IIFEs.
// Note the ****semicolon `;`**** above. It is crucial to explicitly end the previous IIFE. Without it, JavaScript might misinterpret the code and throw an error.
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')