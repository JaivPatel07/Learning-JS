// =================================================================
// The `map` Method
// =================================================================
// The `map()` method creates a **new array** by calling a provided function on every element in the calling array.
// Unlike `filter` (which returns a subset of the original array), `map` returns an array of the same length, but with each element transformed.

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Example: Add 10 to each number.
const numsPlusTen = myNumers.map( (num) => { return num + 10})
// console.log(numsPlusTen); // Output: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


// =================================================================
// Chaining Array Methods
// =================================================================
// One of the most powerful features of methods like `map`, `filter`, and `reduce` is that they can be "chained" together.
// Because each method returns a new array, you can immediately call another array method on the result.
// The data flows from one method to the next.
const newNums = myNumers
                .map((num) => num * 10 )    // Step 1: Multiply each number by 10.
                                            // Result of this step: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

                .map( (num) => num + 1)     // Step 2: Take the result from step 1 and add 1 to each number.
                                            // Result of this step: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

                .filter( (num) => num >= 40) // Step 3: Take the result from step 2 and keep only the numbers greater than or equal to 40.
                                            // Final Result: [41, 51, 61, 71, 81, 91, 101]

console.log(newNums);
// Output: [ 41, 51, 61, 71, 81, 91, 101 ]