// =================================================================
// The `while` Loop
// =================================================================
// A `while` loop executes a block of code as long as a specified condition is true.
// The condition is checked *before* the loop body is executed.

// --- Syntax ---
// while (condition) {
//   // code to execute
//   // It's crucial to include logic that will eventually make the condition false (e.g., an incrementer).
// }

console.log("--- Basic while loop ---");
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2; // Increment to avoid an infinite loop.
}
// Output:
// --- Basic while loop ---
// Value of index is 0
// Value of index is 2
// Value of index is 4
// Value of index is 6
// Value of index is 8
// Value of index is 10

console.log("\n--- while loop with an array ---");
let myArray = ['flash', "batman", "superman"];
let arr = 0;
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1;
}
// Output:
// --- while loop with an array ---
// Value is flash
// Value is batman
// Value is superman

// =================================================================
// The `do-while` Loop
// =================================================================
// A `do-while` loop is a variant of the `while` loop.
// The key difference is that the loop body will always be executed **at least once**,
// because the condition is checked *after* the body has been executed.

// --- Syntax ---
// do {
//   // code to execute
// } while (condition);

console.log("\n--- do-while loop ---");
let score = 11; // Note: The initial value does not meet the condition `score <= 10`.
do {
    console.log(`Score is ${score}`); // This block will run once before the condition is checked.
    score++;
} while (score <= 10);
// Output:
// --- do-while loop ---
// Score is 11