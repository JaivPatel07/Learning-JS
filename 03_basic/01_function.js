
// =================================================================
// Defining and Calling Functions
// =================================================================
// A function is a block of code designed to perform a particular task.
// It is executed when "something" invokes it (calls it).

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// To execute the function, you "call" it by its name followed by parentheses.
// sayMyName()

// =================================================================
// Parameters and Return Values
// =================================================================
// Functions can accept parameters (inputs) and return a value (output).

// This version of the function only logs the result to the console, it doesn't return a value.
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// This function calculates the sum and uses the 'return' keyword to send the result back.
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2; // A more concise way to return the value.
}

// The returned value can be stored in a variable for later use.
const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);


// =================================================================
// Default Parameters and Conditional Logic
// =================================================================

// You can provide a default value for a parameter. If no argument is passed for 'username', it will default to "sam".
function loginUserMessage(username = "sam") {
    // It's good practice to check if a required parameter is provided.
    // An empty string or undefined will evaluate to false.
    if (!username) {
        console.log("Please enter a username");
        return; // This exits the function early.
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh")); // Output: hitesh just logged in
// console.log(loginUserMessage());       // Output: sam just logged in


// =================================================================
// Rest Parameters
// =================================================================
// The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array.

// Here, the first argument goes to val1, the second to val2, and all remaining arguments are gathered into an array called 'num1'.
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [ 500, 2000 ]

// =================================================================
// Passing Objects to Functions
// =================================================================
const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    // You can access the object's properties inside the function.
    // It's important to ensure the property exists (e.g., anyobject.price) to avoid 'undefined'.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// You can pass an existing object variable.
// handleObject(user); // Output: Username is hitesh and price is 199

// You can also pass an object literal directly as an argument.
handleObject({
    username: "sam",
    price: 399
}); // Output: Username is sam and price is 399

// =================================================================
// Passing Arrays to Functions
// =================================================================
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1]; // Accessing the element at index 1.
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

// =================================================================
// Function Expressions
// =================================================================
// You can also define a function inside an expression and assign it to a variable.
// This is known as a function expression. Unlike function declarations, these are not hoisted.

const add = function(num) {
    return num + 2;
}

// You call it just like a regular function.
// console.log(add(5)); // Output: 7


// =================================================================
// Arrow Functions (ES6)
// =================================================================
// Arrow functions provide a more concise syntax for writing function expressions.

// Basic arrow function with an explicit return
const addTwo = (num1, num2) => {
    return num1 + num2;
}

// Arrow function with an "implicit return" (for single-line expressions)
// The value of the expression is returned automatically without the `return` keyword.
const addThree = (num1, num2, num3) => num1 + num2 + num3;

// console.log(addThree(1, 2, 3)); // Output: 6


// =================================================================
// Immediately Invoked Function Expressions (IIFE)
// =================================================================
// An IIFE is a function that is defined and executed immediately.
// This is a common pattern to create a local scope and avoid polluting the global namespace.

(function() {
    // This is a private scope. Variables defined here are not accessible outside.
    const privateVar = "I am private";
    console.log("This IIFE ran immediately!");
    // console.log(privateVar);
})();

// The syntax looks like: (functionDefinition)(executionCall);

// =================================================================
// The `this` Keyword and Arrow Functions
// =================================================================
// The behavior of the `this` keyword is one of the most important differences between regular functions and arrow functions.

const userProfile = {
    username: "sam",
    price: 999,

    // Method using a regular function
    welcomeMessage: function() {
        // In a regular function, `this` refers to the object that called the method.
        // Here, `this` is the `userProfile` object.
        console.log(`${this.username}, welcome to the website`);
    },

    // Method using an arrow function
    goodbyeMessage: () => {
        // An arrow function does not have its own `this`. It inherits `this` from its parent scope.
        // In this case, the parent scope is the global scope (e.g., the `window` object in a browser), where `this.username` is undefined.
        console.log(`${this.username}, thank you for visiting`);
    }
};

// userProfile.welcomeMessage(); // Output: sam, welcome to the website
// userProfile.goodbyeMessage(); // Output: undefined, thank you for visiting

// Key takeaway: Use regular functions for object methods when you need to access the object's properties with `this`.