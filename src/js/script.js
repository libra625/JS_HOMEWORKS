'use strict'

const array = [2, 5, 9]
const numbers = [2, 5, 9, 2]
const arrForFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const indexOf = function (array, searchElement, fromIndex = 0) {
    if (fromIndex >= array.length) {
        return -1
    }

    if (fromIndex < -1 * array.length) {
        return -1
    }

    let startIndex = typeof fromIndex === 'number' ? fromIndex : array.length

    if (fromIndex < 0) {
        startIndex += array.length
    }

    for (let i = startIndex; i < array.length; i += 1) {
        if (array[i] === searchElement) {
            return i
        }
    }

    return -1
}

const lastIndexOf = function (array, searchValue, fromIndex) {
    let startIndex = typeof fromIndex === 'number' ? fromIndex : array.length

    if (fromIndex < -1 * array.length) {
        return -1
    }

    if (fromIndex < 0) {
        startIndex += array.length
    }

    for (let i = startIndex; i >= 0; i -= 1) {
        if (array[i] === searchValue) {
            return i
        }
    }

    return -1
}

const find = function (array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            return array[i]
        }
    }

    return undefined
}

const findIndex = function (array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            return i
        }
    }

    return -1
}

const includes = function (array, searchElement, fromIndex = 0) {
    if (fromIndex >= array.length) {
        return false
    }

    let startIndex = fromIndex

    if (fromIndex < 0) {
        startIndex += array.length
    }

    if (fromIndex < -1 * array.length) {
        startIndex = 0
    }

    if (isNaN(searchElement)) {
        for (let i = startIndex; i < array.length; i++) {
            if (isNaN(array[i])) {
                return true
            }
        }
    }

    for (let i = startIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true
        }
    }

    return false
}

const every = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false
        }
    }

    return true
}

function isBigEnough (element, index, array) {
    return element >= 10
}

const some = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true
        }
    }

    return false
}

function isBiggerThan10 (element, index, array) {
    return element > 10
}

const findResult = find(arrForFind, element => element > 5)
const findIndexResult = findIndex(arrForFind, element => element > 8)

// CHECK SECTION

console.log('indexOf')
// console.log(indexOf(array, 2) + ' ' + array.indexOf(2))
// console.log(indexOf(array, 7) + ' ' + array.indexOf(7))
// console.log(indexOf(array, 9, 2) + ' ' + array.indexOf(9, 2))
// console.log(indexOf(array, 2, -1) + ' ' + array.indexOf(2, -1))
// console.log(indexOf(array, 2, -3) + ' ' + array.indexOf(2, -3))
console.log(indexOf(array, 2))
console.log(indexOf(array, 7))
console.log(indexOf(array, 9, 2))
console.log(indexOf(array, 2, -1))
console.log(indexOf(array, 2, -3))
console.log('lastIndexOf')
// console.log(lastIndexOf(numbers, 2) + ' ' + numbers.lastIndexOf(2))
// console.log(lastIndexOf(numbers, 7) + ' ' + numbers.lastIndexOf(7))
// console.log(lastIndexOf(numbers, 2, 3) + ' ' + numbers.lastIndexOf(2, 3))
// console.log(lastIndexOf(numbers, 2, 2) + ' ' + numbers.lastIndexOf(2, 2))
// console.log(lastIndexOf(numbers, 2, -2) + ' ' + numbers.lastIndexOf(2, -2))
// console.log(lastIndexOf(numbers, 2, -1) + ' ' + numbers.lastIndexOf(2, -1))
console.log(lastIndexOf(numbers, 2))
console.log(lastIndexOf(numbers, 7))
console.log(lastIndexOf(numbers, 2, 3))
console.log(lastIndexOf(numbers, 2, 2))
console.log(lastIndexOf(numbers, 2, -2))
console.log(lastIndexOf(numbers, 2, -1))
console.log('find')
// console.log(findResult + ' ' + arrForFind.find(element => element > 5))
console.log(findResult)
console.log('findIndex')
// console.log(findIndexResult + ' ' + arrForFind.find(element => element > 8))
console.log(findIndexResult)
console.log('includes')
// console.log(includes([1, 2, 3], 2) + ' ' + [1, 2, 3].includes(2))
// console.log(includes([1, 2, 3], 4) + ' ' + [1, 2, 3].includes(4))
// console.log(includes([1, 2, 3], 3, 3) + ' ' + [1, 2, 3].includes(3, 3))
// console.log(includes([1, 2, 3], 3, -1) + ' ' + [1, 2, 3].includes(3, -1))
// console.log(includes([1, 2, NaN], NaN) + ' ' + [1, 2, NaN].includes(NaN))
// console.log(includes(['1', '2', '3'], 3) + ' ' + ['1', '2', '3'].includes(3))
console.log(includes([1, 2, 3], 2))
console.log(includes([1, 2, 3], 4))
console.log(includes([1, 2, 3], 3, 3))
console.log(includes([1, 2, 3], 3, -1))
console.log(includes([1, 2, NaN], NaN))
console.log(includes(['1', '2', '3'], 3))
console.log('every')
// console.log(every([12, 5, 8, 130, 44], isBigEnough) + ' ' + [12, 5, 8, 130, 44].every(isBigEnough))
// console.log(every([12, 54, 18, 130, 44], isBigEnough) + ' ' + [12, 54, 18, 130, 44].every(isBigEnough))
console.log(every([12, 5, 8, 130, 44], isBigEnough))
console.log(every([12, 54, 18, 130, 44], isBigEnough))
console.log('some')
// console.log(some([2, 5, 8, 1, 4], isBiggerThan10) + ' ' + [2, 5, 8, 1, 4].some(isBiggerThan10))
// console.log(some([12, 5, 8, 1, 4], isBiggerThan10) + ' ' + [12, 5, 8, 1, 4].some(isBiggerThan10))
console.log(some([2, 5, 8, 1, 4], isBiggerThan10))
console.log(some([12, 5, 8, 1, 4], isBiggerThan10))
