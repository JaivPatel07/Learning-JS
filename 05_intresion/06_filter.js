// =================================================================
// `forEach` vs. `filter` - The Importance of the Return Value
// =================================================================
// The `forEach` method executes a function for each array element but it always returns `undefined`.
// It is used for performing actions (like logging to the console), not for creating a new array based on a condition.

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    // Even though we return `item`, forEach ignores it.
    return item
} )

console.log(values); // Output: undefined

// =================================================================
// The `filter` Method
// =================================================================
// The `filter()` method creates a **new array** with all elements that pass the test implemented by the provided callback function.
// The callback function must return a boolean value (`true` or `false`).
// - If it returns `true`, the element is included in the new array.
// - If it returns `false`, the element is excluded.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Here, `filter` will create a new array containing only the numbers greater than 4.
const newNums = myNums.filter( (num) => {//IF we use these {} so we must need to write return else it we be return undefined.
    return num > 4 // The condition that must be met.
} )

console.log(newNums); // Output: [ 5, 6, 7, 8, 9, 10 ]

// --- The same logic using `forEach` (for demonstration) ---
// This shows what `filter` does internally. You have to create an empty array and manually push elements into it.
const newNumsManual = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNumsManual.push(num)
    }
} )
console.log(newNumsManual); // Output: [ 5, 6, 7, 8, 9, 10 ]

// =================================================================
// Filtering an Array of Objects
// =================================================================
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Example 1: Get all books with the genre 'History'.
let userBooks = books.filter( (bk) => bk.genre === 'History')
// Example 2: Get all books published after 1995 AND are in the 'History' genre.
userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History" // You can combine multiple conditions.
})
console.log(userBooks);
// Output: [ { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 } ]