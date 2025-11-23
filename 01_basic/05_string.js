// =================================================================
// String Declaration and Template Literals
// =================================================================

const name = "hitesh";
const repoCount = 50;

// Outdated way of concatenating strings. It's less readable and more cumbersome.
// console.log(name + repoCount + " Value");

// Modern way using Template Literals (backticks ``).
// This allows for embedding expressions directly into the string, which is called string interpolation.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to declare a string is using the String constructor.
// This creates a String object, not a primitive. It's less common and generally not recommended.
const gameName = new String('hitesh-hc-com');

// =================================================================
// Accessing String Characters and Properties
// =================================================================

// Accessing characters by index (zero-based).
// console.log(gameName[0]);

// In JavaScript, strings have a prototype that contains all the string methods.
// console.log(gameName.__proto__);

// --- Common String Methods ---

// .length is a property that returns the number of characters in the string.
// console.log(gameName.length);

// .toUpperCase() returns a new string with all characters converted to uppercase.
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2)); // Returns the character at the specified index ('t').
console.log(gameName.indexOf('t')); // Returns the index of the first occurrence of 't' (2).

// =================================================================
// Extracting Substrings
// =================================================================

// .substring(startIndex, endIndex) extracts a part of the string.
// The character at endIndex is NOT included.
const newString = gameName.substring(0, 4); // Extracts characters from index 0 to 3.
console.log(newString);

// .slice(startIndex, endIndex) is similar to substring but can also use negative indices.
// A negative index counts from the end of the string.
const anotherString = gameName.slice(-8, 4); // Starts at index 5 (13 - 8) and tries to go to index 4. Since start > end, it returns an empty string.
console.log(anotherString);

// =================================================================
// Cleaning and Modifying Strings
// =================================================================

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Removes whitespace from both ends of the string.

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace('%20', '-')); // Finds the first occurrence of '%20' and replaces it with '-'.

console.log(url.includes('sundar')); // Checks if the string contains the substring 'sundar' and returns a boolean (false).

console.log(gameName.split('-')); // Splits the string into an array of substrings based on the '-' delimiter.