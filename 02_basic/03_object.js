
// =================================================================
// JavaScript Objects
// =================================================================
// Objects are fundamental data structures in JavaScript. They are collections of key-value pairs (properties).
// The "keys" are strings (or Symbols), and the "values" can be any data type, including other objects, functions, and arrays.
// Objects are used to group related data and functionality. For example, a 'JsUser' object can store a user's name, email, and login status.

// There are two main ways to create objects:

// 1. Object Literals (most common)
// An object literal is a comma-separated list of key-value pairs wrapped in curly braces {}.

// 2. Object.create (creates a new object, using an existing object as the prototype)
// When an object is created this way, it's often referred to as a singleton because it ensures only one instance is created.

// =================================================================
// Creating an Object and its Properties
// =================================================================

// Using a Symbol as a unique object key. This is an important concept in interviews.
const mySym = Symbol("key1")

// This is an object literal.
const JsUser = {
    name: "jaiv",                       // key: "name", value: "jaiv"
    "full name": "jaiv patel",          // key with space must be a string
    [mySym]: "mykey1",                  // To use a symbol as a key, use square brackets.
    age: 18,                            // key: "age", value: 18
    location: "xyz",                    // key: "location", value: "xyz"
    email: "xyz@google.com",            // key: "email", value: "hitesh@google.com"
    isLoggedIn: false,                  // key: "isLoggedIn", value: false
    lastLoginDays: ["Monday", "Saturday"] // value can be an array
}

// =================================================================
// Accessing Object Properties
// =================================================================

// 1. Dot Notation: object.key
console.log(JsUser.email) // Output: xyz@google.com

// 2. Bracket Notation: object["key"]
console.log(JsUser["email"]) // Output: xyz@google.com

// Bracket notation is required for keys that are not valid identifiers (e.g., contain spaces) or are Symbols.
console.log(JsUser["full name"]) // Output: jaiv patel
console.log(JsUser[mySym]) // Output: mykey1

// =================================================================
// Modifying Objects
// =================================================================

// You can change the value of a property.
JsUser.email = "xyz@chatgpt.com"

// To prevent an object from being modified, you can use Object.freeze().
// Object.freeze(JsUser) 

// Any attempts to change properties after freezing will fail silently.
// JsUser.email = "xyz@microsoft.com"
// console.log(JsUser); // If not frozen, email will be "hitesh@microsoft.com"

// =================================================================
// Adding Methods to Objects
// =================================================================

// You can add functions (methods) to an object.
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// The 'this' keyword refers to the object the method is called on.
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // 'this.name' accesses the 'name' property of JsUser. Output will now use 'jaiv'.
}

JsUser.greeting(); // Output: Hello JS user
                               

JsUser.greetingTwo(); // Output: Hello JS user, Hitesh    
                        // After change, Output: Hello JS user, jaiv