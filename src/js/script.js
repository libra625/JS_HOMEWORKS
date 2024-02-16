'use strict'

const myFlat = function (...array) {
    if (array.length !== 1) throw new Error('Function accepts only 1 argument, too much arguments provided')

    const storedArray = []

    const myFlatHelper = function (array) {
        for (let i = 0; i < array.length; i += 1) {
            if (typeof array[i] === 'object') {
                myFlatHelper(array[i])
            } else storedArray.push(array[i])
        }
        return storedArray
    }

    return myFlatHelper(array)
}

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
]

console.log(myFlat(complexArray))
