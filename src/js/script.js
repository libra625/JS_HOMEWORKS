'use strict';

//task1
console.log("1st TASK");

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

//task2
console.log("2nd TASK");

const dollarCost = 27;

for (let i = 10; i <= 100; i += 10) {
    console.log(`${i}$ === ${i * dollarCost}`);
}

//task3
console.log("3rd TASK");

let userNumber = +prompt("Enter a limit number for task 3", "9");

while (isNaN(userNumber) || userNumber === 0) {
    userNumber = +prompt("You entered something strange! Please enter a limit number for task 3 correctly", "9");
}

for (let i = 1; i ** 2 <= userNumber; i++) {
    console.log(`${i} ^ 2 (${i ** 2}) <= ${userNumber}`);
}

//task4
console.log("4th TASK");

let primaryMark = false;
userNumber = +prompt("Enter a number for task 4", "9");

while (isNaN(userNumber) || userNumber === 0) {
    userNumber = +prompt("You entered something strange! Please enter a number for task 4 correctly", "9");
}

for (let i = 2; i <= userNumber; i++) {
    if (userNumber <= 1) {
        break;
    }

    if (userNumber % i ===0 && userNumber === i) {
        console.log(`${userNumber} is a primary number`);
        break;
    }

    if (userNumber % i === 0) {
        console.log(`${userNumber} is not a primary number! It was divided by ${i}`);
        break;
    }
}

























