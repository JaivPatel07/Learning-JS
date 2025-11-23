// =================================================================
// The `reduce` Method
// =================================================================
// The `reduce()` method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.

// --- Syntax ---
// array.reduce(callback(accumulator, currentValue), initialValue)
// - `accumulator` (acc): The value resulting from the previous callback invocation. On the first call, it is the `initialValue` if provided.
// - `currentValue` (curr): The current element being processed in the array.
// - `initialValue`: An ***optional*** value to use as the first argument to the first call of the callback. If not supplied, the ***first element in the array will be used as the initial accumulator value***, and iteration will start from the next element.

const myNums = [1, 2, 3]

// --- Example 1: Summing numbers (long-form with logs) ---
const myTotalVerbose = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0) // Here, `0` is the initial value for the accumulator.

// Iteration 1: acc is 0, currval is 1. Returns 0 + 1 = 1.
// Iteration 2: acc is 1, currval is 2. Returns 1 + 2 = 3.
// Iteration 3: acc is 3, currval is 3. Returns 3 + 3 = 6.

console.log(`Final total (verbose): ${myTotalVerbose}`); // Output: Final total (verbose): 6

// --- Example 2: Summing numbers (concise arrow function) ---
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(`Final total (concise): ${myTotal}`); // Output: Final total (concise): 6

// =================================================================
// `reduce` with an Array of Objects
// =================================================================
// This is a very common use case, such as calculating the total price of items in a shopping cart.
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    }, {
        itemName: "py course",
        price: 999
    }, {
        itemName: "mobile dev course",
        price: 5999
    }, {
        itemName: "data science course",
        price: 12999
    },
]

// The accumulator `acc` starts at 0. For each `item` in the cart, we add its `price` to the accumulator.
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(`Total price to pay: ${priceToPay}`); // Output: Total price to pay: 22996