let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber);// NaN


// "33" => 33 
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = NaN

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);// false
// console.log(typeof booleanIsLoggedIn);// boolean

// 1 => true; 0 => false
// "" => false
// "hitesh" => true
// null => false
// undefined => false
// NaN => false
// [] => true
// {} => true
// " " => true
// "0" => true
// "false" => true
// 33 => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);// "33"
// console.log(typeof stringNumber);// string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);// 4
// console.log(2-2);// 0
// console.log(2*2);// 4
// console.log(2**3);// 8
// console.log(2/3);// 0.6666666666666666
// console.log(2%3);// 2

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2// concatenation
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); // 1 // unary plus operator
// console.log(+false); // 0
// console.log(+"33"); // 33
// console.log(+""); // 0
// console.log(+"hello"); // NaN
// console.log(-"33"); // -33
// console.log("true"+);// invalid syntax

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let a = 1;// true
let b = 0;

a &&= 2; // it will check the left side is true or not, if true then only assign the value on right side (a is 1, which is true so 2 will be assigned to a)
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
