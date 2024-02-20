'use strict'

const arrayOfStrings = ['hello', 'world', 'palm', 'banana', 'word', 'apple', 'orange', 'computer', 'guitar', 'table', 'chair', 'book']
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// task1

const sortedArray = arrayOfStrings.filter((string) => string.length >= 5)

console.log(sortedArray)

// task2

const sumOfEvenNumbersOfArray = arrayOfNumbers.reduce((total, currentValue) => {
    if (currentValue % 2 === 0) {
        return total + currentValue
    }

    return total
}, 0)

console.log(sumOfEvenNumbersOfArray)

// task3

const averageOfArray = arrayOfNumbers.reduce((total, currentValue) => total + currentValue, 0) / arrayOfNumbers.length

console.log(averageOfArray)
