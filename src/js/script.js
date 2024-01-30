'use strict'

// EXAMPLE: 1
console.log(a)
var a = 10
// RESULT: undefined
// EXPLANATION: Declaring a variable anywhere in the code, especially with var, is
// equivalent to declaring it at the top. Since it was declared but not defined,
// it explains the reason behind the UNDEFINED output.

// EXAMPLE: 2
myFunction()

function myFunction () {
    console.log('Hello, world!')
}
// RESULT: Hello, world!
// EXPLANATION: functions declared using FUNCTION-DECLARATION method can be called
// anywhere because they are  processed before any code within the script is executed.
// this means that this function can be called anywhere in the code.

// EXAMPLE: 3
console.log(b)
const b = 5
// RESULT: Uncaught ReferenceError: Cannot access 'b' before initialization
// EXPLANATION: the same as var but it goes to temporal  dead zone that's why
// we're occurring this error

// EXAMPLE: 4
const myArrowFunction = () => {
    console.log('Hello from arrow function')
}

myArrowFunction()

// RESULT: Hello from arrow function
// EXPLANATION: works just because it was called after it was initialized otherwise there
// would be an ERROR: Uncaught ReferenceError: Cannot access 'myArrowFunction'
// before initialization

// MY_EXAMPLE: 5(success)
alertAboutError()

function alertAboutError () {
    console.log('Error has occurred')
}

// RESULT: success (worked)

// MY_EXAMPLE: 6(failure)
console.log(`User's name is = ${userName}`)

const userName = 'Boris'

// RESULT: failed (failure)
