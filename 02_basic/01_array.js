// =================================================================
// Array Creation
// =================================================================

const myArr = [0, 1, 2, 3, 4, 5];  //  Using array literal syntax (most common).
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);  //  Using the Array constructor.

console.log(myArr[1]);  //  Accessing an element by its index. Output: 1


// =================================================================
// Array Modification Methods
// =================================================================

myArr.push(6);  //  Adds one or more elements to the end of an array.
myArr.push(7);  //  myArr is now [0, 1, 2, 3, 4, 5, 6, 7]
console.log(myArr);

myArr.pop();  //  Removes the last element from an array. myArr is now [0, 1, 2, 3, 4, 5, 6]
console.log(myArr);

myArr.unshift(9);  //  Adds one or more elements to the beginning of an array. myArr is now [9, 0, 1, 2, 3, 4, 5, 6]
console.log(myArr);

myArr.shift();  //  Removes the first element from an array. myArr is now [0, 1, 2, 3, 4, 5, 6]
console.log(myArr);

// =================================================================
// Adding Multiple Elements at Once
// =================================================================

//  You can add multiple elements at once by passing them as separate arguments to push() or unshift().
const multiArr = [10, 20, 30];
console.log("Initial array:", multiArr);  //  [10, 20, 30]

//  Using push() to add multiple elements to the end.
multiArr.push(40, 50, 60);
console.log("After push(40, 50, 60):", multiArr);  //  [10, 20, 30, 40, 50, 60]

//  Using unshift() to add multiple elements to the beginning.
multiArr.unshift(0, 5);
console.log("After unshift(0, 5):", multiArr);  //  [0, 5, 10, 20, 30, 40, 50, 60]


// =================================================================
// Array Querying & Conversion Methods
// =================================================================

console.log(myArr.includes(9));  //  Checks if an array includes a certain value. Output: false
console.log(myArr.indexOf(3));  //  Returns the first index at which a given element can be found. Output: 3

const newArr = myArr.join();  //  Joins all elements of an array into a string.

console.log(myArr);  //  [0, 1, 2, 3, 4, 5, 6]
console.log(newArr);  //  "0,1,2,3,4,5,6"
console.log(typeof newArr);  //  string


// =================================================================
// slice vs. splice
// =================================================================

const originalArr = [0, 1, 2, 3, 4, 5];
console.log("A (Original): ", originalArr);  //  "A (Original):  [0, 1, 2, 3, 4, 5]"

// --- slice ---
//  Returns a shallow copy of a portion of an array into a new array object.
//  It does NOT modify the original array.
const myn1 = originalArr.slice(1, 3);  //  Extracts elements from index 1 up to (but not including) index 3.

console.log("Slice Result: ", myn1);  //  "Slice Result:  [1, 2]"
console.log("B (After Slice): ", originalArr);  //  "B (After Slice):  [0, 1, 2, 3, 4, 5]"

// --- splice ---
//  Changes the contents of an array by removing or replacing existing elements.
//  It MODIFIES the original array.
const myn2 = originalArr.splice(1, 3);  //  Removes 3 elements starting from index 1.

console.log("C (After Splice): ", originalArr);  //  "C (After Splice):  [0, 4, 5]"
console.log("Splice Result: ", myn2);  //  "Splice Result:  [1, 2, 3]" (This is the array of removed elements)