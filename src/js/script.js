'use strict'

Function.prototype.myApply = function (context, argsArray) {
    let validContext = context

    if (context === null || context === undefined) {
        validContext = globalThis // In a browser, 'window' can be used instead of 'globalThis'
    }

    const uniqueKey = Symbol('temporaryFunction')
    validContext[uniqueKey] = this

    const args = []

    for (let i = 0; i < argsArray.length; i++) {
        args.push('argsArray[' + i + ']')
    }

    const functionCall = 'context[uniqueKey](' + args.join(',') + ')'

    const result = eval(functionCall)

    delete context[uniqueKey]

    return result
}

const someObject = {
    name: 'Alice',
    surname: 'Doe'
}

const someObject2 = {
    name: 'John',
    surname: 'Doe'
}

const someArrayOfArgs = [200, 100, 500]

const example = function (a, b) {
    console.log(this, a, b)
}
//  apply
example.apply(someObject, someArrayOfArgs)
//  myApply
example.myApply(someObject2, someArrayOfArgs)
console.log(someObject2)
// console.log(someObject)
