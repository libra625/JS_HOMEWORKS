'use strict';

//task1
let number1 = +prompt("Enter x for task 1", "10");
while (isNaN(number1) || number1 === 0) {
    number1 = +prompt("You entered something strange! Please enter proper number correctly", "9");
}

let number2 = +prompt("Enter y for task 1", "7");
while (isNaN(number2) || number2 === 0) {
    number2 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

 console.log(number1 > number2 ? "TASK1: x more than y (x > y)" : "TASK1: x is not more than y (x !> y)")

//task3
let numberForLength = +prompt("Enter a number for task 3", "8");
while (isNaN(numberForLength) || numberForLength === 0) {
    numberForLength = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

let amountOfDigits = numberForLength.toString().length;

let message = "TASK3: ";
message += `Number ${numberForLength} is `;

if (numberForLength < 0) {
    message += "negative";
    amountOfDigits--;
} else {
    message += "positive ";
}

switch (amountOfDigits) {
    case 1:
        message += ` It is 1 digit number (однозначне)`;
        break;
    case 2:
        message += ` It is 2 digit number (двозначне)`;
        break;
    case 3:
        message += ` It is 3 digit number (трьохзначне)`;
        break;
    case 4:
        message += ` It is 4 digit number (чотирьохзначне)`;
        break;
    case 5:
        message += ` It is 5 digit number (п'ятизначне)`;
        break;
    default:
        message += `It is ${amountOfDigits} (n-значне)`
}

console.log(message);

//task4
number1 = +prompt("Enter number1 for task 4 ", "10");
while (isNaN(number1) || number1 === 0) {
    number1 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

number2 = +prompt("Enter number2 for task 4 ", "7");
while (isNaN(number2) || number2 === 0) {
    number2 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

let number3 = +prompt("Enter number3 for task 4 ", "7");
while (isNaN(number3) || number3 === 0) {
    number3 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

if (number1 > number2) {
    if (number1 > number3) {
        console.log(`TASK4 : number 1 (${number1}) is the biggest`)
    } else {
        console.log(`TASK4 : number 3 (${number3}) is the biggest`)
    }
} else if (number2 > number3) {
    console.log(`TASK4 : number 2 (${number2}) is the biggest`)
} else {
    console.log(`TASK4 : number 3 (${number3}) is the biggest`)
}

//task5

let side1 = +prompt("Enter side 1 for task 5 ", "7");
while (isNaN(side1) || side1 === 0) {
    side1 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

let side2 = +prompt("Enter side 2 for task 5 ", "7");
while (isNaN(side2) || side2 === 0) {
    side2 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

let side3 = +prompt("Enter side 3 for task 5 ", "7");
while (isNaN(side3) || side3 === 0) {
    side3 = +prompt("You entered something strange!  Please enter proper number correctly", "9");
}

if (side1 + side2 < side3 || side1 + side2 === side3) {
    console.log("TASK5: Triangle doesn't exist");
} else if (side1 + side3 < side2 || side1 + side3 === side2) {
    console.log("TASK5: Triangle doesn't exist");
} else if (side2 + side3 < side1 || side2 + side3 === side1) {
    console.log("TASK5: Triangle doesn't exist");
} else {
    console.log("TASK5: Triangle exists");
}