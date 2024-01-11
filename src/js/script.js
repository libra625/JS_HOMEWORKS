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

userNumber = +prompt("Enter a number for task 4", "9");

while (isNaN(userNumber) || userNumber === 0) {
    userNumber = +prompt("You entered something strange! Please enter a number for task 4 correctly", "9");
}

if (userNumber <= 1) {
    console.log(`Your number (${userNumber}) less or equals 1`);
} else {
    for (let i = 2; i <= userNumber; i++) {
        if (userNumber % i ===0 && userNumber === i) {
            console.log(`${userNumber} is a primary number`);
            break;
        }

        if (userNumber % i === 0) {
            console.log(`${userNumber} is not a primary number! It was divided by ${i}`);
            break;
        }
    }
}

//task5
console.log("5th TASK");

userNumber = +prompt("Enter a number for task 5", "9");

while (isNaN(userNumber) || userNumber === 0) {
    userNumber = +prompt("You entered something strange! Please enter a number for task 5 correctly", "9");
}

for (let i = 0; i <= userNumber; i++) {
    if (3 ** i > userNumber) {
        console.log("Your number can't be 3 in some degree")
        break;
    }

    if (3 ** i === userNumber) {
        console.log(`Your number can be 3 in some degree. And this degree is ${i}`)
        break;
    }
}



















