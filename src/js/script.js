'use strict'

const parseJSON = function (JSONstring) {
    try {
        return JSON.parse(JSONstring)
    } catch (error) {
        return 'Invalid JSON string'
    }
}

console.log(parseJSON('{"name": "John", "age": 30}'))
console.log(parseJSON('{"name": "John", "age":'))
