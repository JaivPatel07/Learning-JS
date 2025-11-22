
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