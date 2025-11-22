255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)

const score = 400.01
// console.log(score);
console.log(score.toPrecision(7))
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//100.0
// console.log(balance.toFixed(2));//100.00
// console.log(balance.toFixed(3));//100.000

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));//123.9
const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(2));//1.2e+2

const hundreds = 1000000
// console.log(hundreds.toLocaleString());//1,000,000 according to USA
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// more Methods of Number are given in 06_numbers.png


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// more Metthos of Math are given in 06_Math.jpg

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());// give val between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)