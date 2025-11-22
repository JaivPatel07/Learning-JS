// =================================================================
// The 'this' Keyword and Arrow Functions
// =================================================================
// 'this' refers to the object that is currently executing the function. Its value is determined by how a function is called.

const user = {
    username: "hitesh",
    price: 999,

    // 1. 'this' in an Object Method
    // When a function is part of an object (a method), 'this' refers to the object itself.
    welcomeMessage: function() {
        // Here, 'this.username' correctly refers to the 'username' property of the 'user' object.
        console.log(`${this.username}, welcome to the website`);
        // console.log(this); // 'this' will log the entire 'user' object.
    }
};

// user.welcomeMessage(); // Output: hitesh, welcome to the website
user.username = "sam"; // The context of 'this' is dynamic; it depends on the object's current state.
// user.welcomeMessage(); // Output: sam, welcome to the website

// 2. 'this' in the Global Scope
// Outside of any function, 'this' refers to the global object.
// In a Node.js environment, 'this' in the global scope is an **empty object `{}`**.
// ***In a web browser, it would be the **`window`** object.***
// console.log(this);

// 3. 'this' in a Regular Function
// When a regular function is called, it gets its own 'this' context.
// In strict mode (default in modules), 'this' will be 'undefined' if the function is called directly (not as a method).
function chaiRegular() {
    let username = "hitesh";
    // 'this.username' is undefined because 'this' inside this function does not refer to the 'user' object.
    // Its context is not lexically bound.
    console.log(this.username); // Output: undefined
    // console.log(this); // Will log 'undefined' or the global object depending on the environment and mode.
}

// chaiRegular();

// 4. 'this' in an Arrow Function (Lexical 'this')
// Arrow functions are different: they do NOT have their own 'this' context.
// Instead, they inherit 'this' from the surrounding (lexical) scope.
const chaiArrow = () => {
    let username = "hitesh";
    // Since this arrow function is defined in the global scope, its 'this' is the same as the global 'this'.
    console.log(this); // In Node, this will be `{}`.
};

// chaiArrow();


// =================================================================
// Arrow Function Syntax
// =================================================================

// a) Explicit Return: Requires curly braces `{}` and the `return` keyword.
const addTwoExplicit = (num1, num2) => {
    return num1 + num2;
};


// b) Implicit Return: For single-line expressions, you can omit the curly braces and the `return` keyword.
const addTwoImplicit = (num1, num2) => num1 + num2;

// c) Implicitly Returning an Object: To implicitly return an object literal, you must wrap it in parentheses `()`.
// This prevents the `{}` from being interpreted as the start of a function body.
const createObject = (num1, num2) => ({ username: "hitesh" });

console.log(addTwoImplicit(3, 4)); // Output: 7
console.log(createObject(3, 4));   // Output: { username: 'hitesh' }


// =================================================================
// Arrow Functions in Practice (e.g., Array Methods)
// =================================================================
const myArray = [2, 5, 3, 7, 8];

// Arrow functions provide a concise syntax for methods like .forEach, .map, .filter, etc.
myArray.forEach((number) => console.log(number));