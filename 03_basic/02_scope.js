// =================================================================
// Global Scope vs. Block Scope
// =================================================================
// Anything declared outside of any function or block ({}) is in the Global Scope.
// Variables in the global scope can be accessed from anywhere in the code.

// 'var' has function scope, not block scope, which can lead to unexpected behavior. It's generally avoided in modern JS.
// var c = 300; 

let a = 300; // This 'a' is in the global scope.

// A block is defined by curly braces `{}`, such as in an `if` statement, `for` loop, or a standalone block.
if (true) {
    // 'let' and 'const' are block-scoped. They only exist within this block.
    let a = 10;       // This 'a' is different from the global 'a'. It "shadows" the global one.
    const b = 20;   // 'b' is only accessible inside this if-block.
    // console.log("INNER a: ", a); // Output: 10
}



// console.log(a); // Output: 300. The global 'a' was not affected by the 'a' inside the block.
// console.log(b); // Throws ReferenceError: b is not defined. 'b' is not accessible outside its block.
// console.log(c); // Output: 300. If 'var' was used, it would be accessible here.


// =================================================================
// Nested Scope (Closures)
// =================================================================
// Inner functions have access to the variables and scope of their outer (parent) functions.
// This is known as Lexical Scoping or Closure.

function one(){
    const username = "hitesh";

    function two(){
        const website = "youtube";
        // The 'two' function can access 'username' from its parent function 'one'.
        console.log(username); // Output: hitesh
    }

    // console.log(website); // Throws ReferenceError: website is not defined.
                           // The parent function cannot access variables from the child function.

    two(); // We call 'two' from within 'one' to execute it.
}

// one(); // Calling 'one' will execute it, which in turn executes 'two'.

// =================================================================
// Scope in Conditional Blocks
// =================================================================
if (true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website); // Throws ReferenceError: website is not defined.
                           // 'website' is only available in the inner 'if' block.
}

// console.log(username); // Throws ReferenceError: username is not defined.
                         // 'username' is only available in the outer 'if' block.


// =================================================================
// Hoisting: Function Declarations vs. Expressions
// =================================================================
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

// --- Function Declaration ---
// Function declarations are fully hoisted. This means you can call the function before it is defined in the code.
console.log(addone(5)); // Output: 6. This works because 'addone' is hoisted.

function addone(num) {
    return num + 1;
}


// --- Function Expression ---
// Function expressions are not fully hoisted. If assigned to 'let' or 'const', they are not initialized until their definition is evaluated.
// Calling them before the assignment results in a ReferenceError.

// addTwo(5); // Throws ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
};