'use strict'

// task1
const runCallbacks = function (callBackArray, element) {
    return callBackArray.reduce((item, callbacks) =>
        callbacks(item), element)
}

const addOne = x => x + 1
const square = x => x * x
const callbacks = [addOne, square, addOne, square]
const result = runCallbacks(callbacks, 155)
console.log(result)

// task2
const composeFunctions = function (...functions) {
    return function (value) {
        return functions.reduceRight((currentValue, currentFunction) => {
            return currentFunction(currentValue)
        }, value)
    }
}

const double = x => x * 2
const squareNumber = x => x * x
const negate = x => -x
const composedFunction = composeFunctions(double, squareNumber, negate)
console.log(composedFunction(2))
