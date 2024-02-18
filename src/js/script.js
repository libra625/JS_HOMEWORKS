'use strict'

Function.prototype.myBind = function (context, ...args) {
    const fn = this

    return function (...newArgs) {
        if (context === null || context === undefined) {
            context = globalThis
        }

        return fn.apply(context, [...args, ...newArgs])
    }
}

const someObj = {
    name: 'John',
    surname: 'Doe'
}

const example = function (a, b) {
    console.log(this, a, b)
}

const exampleWithContext = example.bind(someObj, 'string1', 'string2')
const exampleWithContext2 = example.myBind(someObj, 'string1', 'string2')

exampleWithContext(10, 20)
exampleWithContext2(10, 20)
example(10, 20)

console.log(exampleWithContext === exampleWithContext2)
