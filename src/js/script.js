'use strict';

//task1
let message = "";

for (let i = 10; i <= 20; i++) {
    message += i + ",";
}

message = message.substring(0, message.length - 1);

console.log("TASK1 : " + message + ";");

//task2
for (let i = 10; i <= 20; i++) {
    console.log(`TASK2 : ${i ** 2}`);
}

//task3
for (let i = 1; i <= 10; i++) {
    console.log(`TASK3 : ${i} * 7 = ${i * 7}`);
}

//task4
let sumOfNumbers = 0;

for (let i = 1; i <= 15; i++) {
    sumOfNumbers += i;
}
console.log(`TASK4 : Sum(1 - 15) === ${sumOfNumbers}`);

//task5
let multiplyOfNumbers = 1n;

for (let i = 15; i <= 35; i++) {
    multiplyOfNumbers *= BigInt(i);
}

console.log(`TASK5 : Multiply (15 - 35) === ${multiplyOfNumbers}`);

//task6
let counts = 0;
sumOfNumbers = 0;

for (let i = 1; i <= 500; i++) {
    sumOfNumbers += i;
    counts++;
}

console.log(`TASK6 : Average === ${sumOfNumbers / counts}`);

//task7
sumOfNumbers = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 !== 0) continue
    
    sumOfNumbers += i;
}

console.log(`TASK7 : Sum (30 - 80,just even) === ${sumOfNumbers}`);

//task8

for (let i = 100; i <= 200; i++) {
    if (i % 3 !== 0) continue

    console.log(`TASK8 : Element (100 - 200, % 3) === ${i}`); 
}

//task9
let amountOfEvenDivisors = 0;
let sumOfEvenDivisors = 0;
let userNumber = +prompt("Enter a limit number for task 3", "9");

while (isNaN(userNumber) || userNumber === 0 || userNumber < 0 || userNumber % 1 !== 0) {
    userNumber = +prompt("You entered something strange! Please enter natural number(not negative and not fractional) for task 9 correctly", "9");
}

for (let i = 1; i <= userNumber; i++) {
    if (userNumber % i === 0) {
        console.log(`TASK9 : Divisors of natural ${userNumber} === ${i}`);

        if (i % 2 === 0) {
            amountOfEvenDivisors++; //task10
            sumOfEvenDivisors += i; //task11
        }
    }
}
console.log(`TASK10 : Amount of even divisors of natural ${userNumber} === ${amountOfEvenDivisors}`);
console.log(`TASK11 : Sum of even divisors of natural ${userNumber} === ${sumOfEvenDivisors}`);

//task12
console.log("Table of multiplication:")

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} === ${i * j}`);
    }
    console.log(" ");
}