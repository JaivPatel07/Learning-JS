// =================================================================
// The `for` Loop
// =================================================================
// A `for` loop repeats a block of code as long as a certain condition is true.
// It's commonly used to execute code a specific number of times.

// --- Syntax ---
// for (initialization; condition; increment) {
//   // code block to be executed
// }
// 1. **Initialization**: Executed once before the loop starts. (e.g., `let i = 0`)
// 2. **Condition**: Evaluated before each loop iteration. If it's true, the loop continues. If false, the loop ends. (e.g., `i < 10`)
// 3. **Increment**: Executed at the end of each iteration. (e.g., `i++`)

// Example: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// =================================================================
// Nested `for` Loops
// =================================================================
// You can place a loop inside another loop.
// The inner loop will be executed fully for each iteration of the outer loop.

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}

// =================================================================
// Looping through an Array
// =================================================================
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// =================================================================
// `break` and `continue` Keywords
// =================================================================

// --- `break` ---
// The `break` statement is used to exit a loop prematurely, regardless of the condition.

console.log("--- Using break ---");
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5, stopping the loop.`);
        break; // The loop will terminate immediately.
    }
    console.log(`Value of i is ${index}`);
}
// Output:
// --- Using break ---
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5, stopping the loop.

// --- `continue` ---
// The `continue` statement skips the current iteration of the loop and proceeds to the next one.

console.log("\n--- Using continue ---");
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`Detected 5, skipping this iteration.`);
        continue; // The `console.log` below will be skipped for this iteration.
    }
    console.log(`Value of i is ${index}`);
}
// Output:
// --- Using continue ---
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5, skipping this iteration.
// Value of i is 6
// Value of i is 7
// Value of i is 8
// Value of i is 9
// Value of i is 10