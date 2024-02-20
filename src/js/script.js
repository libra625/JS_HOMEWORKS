'use strict'

// function 1
const sum = (a, b) => a + b

console.log(sum(5, -25))

// function 2
const stringLength = (string) => string.length

console.log(stringLength('abracadabra'))

// function 3
const add1ToArray = (array) => {
    const arrayIncreased = array

    for (let i = 0; i < array.length; i++) {
        arrayIncreased[i] += 1
    }

    return arrayIncreased
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(add1ToArray(arr))
