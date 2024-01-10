'use strict';

const array = [1, 2, 3, 4, 5];

//task1
let sumOfArray = 0;

for (let i = 0; i < array.length; i++) {
    sumOfArray += array[i];
}
console.log(`Sum of the array = ${sumOfArray}`);

//task2
let sumOfArraySquareElements = 0;

for (let i = 0; i < array.length; i++) {
    sumOfArraySquareElements += array[i] ** 2;
}
console.log(`Sum of the square elements of the array = ${sumOfArraySquareElements}`);