// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true, "2" is converted to number 2
// console.log("02" > 1); // true, "02" is converted to number 2

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true // null is converted to 0 while comparing with >= or <=

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false // undefined is converted to NaN while comparing with <, >, <=, >=

// console.log(NaN == NaN); // false
// console.log(NaN > 0); // false
// console.log(NaN < 0); // false

// console.log("hitesh" > "Hitesh"); // true (based on unicode values)

// === 
console.log('2' == 2); // true (loose equality, type conversion happens)
console.log("2" === 2); // false (strict equality, no type conversion)
console.log(undefined === null); // false
console.log(undefined == null); // true // only null and undefined are loosely equal to each other
