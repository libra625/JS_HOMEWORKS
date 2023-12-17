'use strict';

//all variables can be const

// let number10 = prompt("Enter first number ");
// let number20 = prompt("Enter second number ");

const number1 = parseFloat(prompt("Enter first number "));
const number2 = parseFloat(prompt("Enter second number "));

// console.log("You entered " + number10 + " and " + number20);
console.log("You entered " + number1 + " and " + number2);

const resultOfSum = number1 + number2;
const resultOfSubtract = number1 - number2;
const resultOfMultiply = number1 * number2;
const resultOfDivide = number1 / number2;

console.log(number1 + " + " + number2 + " = " + resultOfSum);
console.log(number1 + " - " + number2 + " = " + resultOfSubtract);
console.log(number1 + " * " + number2 + " = " + resultOfMultiply);
console.log(number1 + " / " + number2 + " = " + resultOfDivide);