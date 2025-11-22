// =================================================================
// Creating Objects: Literals vs. Constructor
// =================================================================

// You can create an object using the Object constructor. This is less common.
// const tinderUser = new Object() 

// The more common way is using an object literal (curly braces), which is simpler and more readable.
const tinderUser = {} // This creates an empty object.

// You can add properties to an object at any time using dot notation.
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// =================================================================
// Nested Objects
// =================================================================
// An object can contain other objects as properties.
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "jaiv",
            lastname: "patel"
        }
    }
}

// To access properties of a nested object, you chain the keys using dot notation.
// console.log(regularUser.fullname.userfullname.firstname); // Output: jaiv

// =================================================================
// Combining Objects
// =================================================================
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// This does NOT merge the objects. It creates a new object with obj1 and obj2 as its properties.
// const obj3 = { obj1, obj2 }
// console.log(obj3); // Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// --- Method 1: Object.assign() ---
// Copies the values of all enumerable own properties from one or more source objects to a target object.
// The first argument `{}` is the target object. It ensures we create a new object and don't modify obj1.
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// --- Method 2: Spread Syntax (...) ---
// This is the modern and more popular way to merge objects. It's cleaner and more readable.
const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// =================================================================
// Array of Objects
// =================================================================
// This is a very common data structure, often received from an API database.
const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },
]

// You can access an object in the array by its index, and then access its properties.
console.log(users[1].email); // Output: a@gmail.com

// =================================================================
// Useful Object Methods
// =================================================================
// console.log(Object.keys(tinderUser));   // Returns an array of a given object's own property names (keys). Output: [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // Returns an array of a given object's own property values. Output: [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // Returns an array of a given object's own [key, value] pairs. Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Returns a boolean indicating whether the object has the specified property as its own property. Output: true

// =================================================================
// Object Destructuring and JSON API Intro
// =================================================================
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "jaiv"
}

// Destructuring allows you to unpack values from objects into distinct variables.
// It makes the code cleaner and shorter.

// Here, we extract 'courseInstructor' from the 'course' object and assign it to a new variable called 'instructor'.
const {courseInstructor: instructor} = course

// console.log(courseInstructor); // This would cause an error because courseInstructor is not defined in this scope.
console.log(instructor); // Output: jaiv

// --- JSON Format ---
// APIs often return data in JSON (JavaScript Object Notation) format.
// It looks very similar to JavaScript object literals, but the keys must be strings in double quotes.
// {
//     "name": "jaiv",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Sometimes, an API will return an array of objects in JSON format.
[
    {},
    {},
    {}
]