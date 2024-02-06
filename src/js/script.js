'use strict'

const reduce = function (array, callbackFn, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue
    const initValue = initialValue === undefined ? 1 : 0

    for (let i = initValue; i < array.length; i += 1) {
        accumulator = callbackFn(accumulator, array[i], i, array)
    }

    return accumulator
}

const runCallbacksMyReduce = function (callBackArray, element) {
    return reduce(callBackArray, (item, callbacks) =>
        callbacks(item), element)
}

const runCallbacks = function (callBackArray, element) {
    return callBackArray.reduce((item, callbacks) =>
        callbacks(item), element)
}

const addOne = x => x + 1
const square = x => x * x
const callbacks = [addOne, square, addOne, square]
const result = runCallbacks(callbacks, 155)
const result2 = runCallbacksMyReduce(callbacks, 155)
console.log(result + ' ' + result2)
