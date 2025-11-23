// =================================================================
// Basic if-else Statement
// =================================================================
// The `if` statement executes a block of code if a specified condition is true.
// If the condition is false, the `else` block is executed.

const temperature = 41

if ( temperature === 40 ){
    console.log("Temperature is exactly 40");
} else {
    // This block will run because the condition (41 === 40) is false.
    console.log("Temperature is not 40");
}
// Output: Temperature is not 40

// This line will always run because it is outside the if-else block.
console.log("Execution continues...");
// Output: Execution continues...

// Comparison Operators: <, >, <=, >=, == (loose equality), != (loose inequality), === (strict equality), !== (strict inequality)

// =================================================================
// Block Scope in `if` statements
// =================================================================
// Variables declared with `let` or `const` inside a block `{}` are only accessible within that block.

const score = 200

if (score > 100) {
    let power = "fly" // 'power' is only defined within this if-block.
    console.log(`User power: ${power}`);
}
// Output: User power: fly

// The following line would cause a ReferenceError because 'power' is not defined in this scope.
// console.log(`User power: ${power}`);

// =================================================================
// Chaining with `else if`
// =================================================================
const balance = 1000

if (balance < 500) {
    console.log("Balance is less than 500");
} else if (balance < 750) {
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
} else {
    // This is the first block where the condition is met (1000 is not less than 500, 750, or 900).
    console.log("Balance is 900 or more");
}
// Output: Balance is 900 or more

// =================================================================
// Logical Operators `&&` (AND) and `||` (OR)
// =================================================================
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) { // With `&&`, all conditions must be true.
    console.log("Allow to buy course");
}
// Output: Allow to buy course
if (loggedInFromGoogle || loggedInFromEmail) { // With `||`, only one condition needs to be true.
    console.log("User logged in");
}
// Output: User logged in