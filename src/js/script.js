'use strict'

// task1

const getFactorial = function (number) {
    if (number < 0) throw new Error('lower than zero')
    if (number === 0) throw new Error('equals zero')
    if (number === 1) return number
    if (number % 1 !== 0) return 1
    if (number > 1) return number * getFactorial(number - 1)

    return 0
}

console.log(getFactorial(5))

// task2

const pow = function (num, degree) {
    if (degree === 0) return 1
    if (degree >= 1) return num * pow(num, degree - 1)
}

console.log(pow(3, 2))

// task3

const sum = function (number1, number2) {
    if (number2 > 0) return sum(++number1, --number2)
    return number1
}

console.log(sum(8, 25))
