'use strict'

const createUser = function (name, age) {
    const greet3 = function () {
        console.log(`Hello I am ${this.name}!`)
    }

    const user = {
        name,
        age,
        greet3,
        greet0 () {
            console.log(`Hello my name is ${user.name}`)
        },
        greet4
    }

    user.greet1 = function () {
        console.log(`Hello my name is ${this.name}`)
    }

    const greet2 = function () {
        console.log(`hello from ${this.name}`)
    }

    user.greet2 = greet2

    return user
}

const greet4 = function () {
    console.log(`Hello from ${this.name}`)
}

const user1 = createUser('Іван', 25)
const user2 = createUser('Марія', 30)

user1.greet0()
user1.greet1()
user1.greet2()
user1.greet3()
user1.greet4()

user2.greet0()
user2.greet1()
user2.greet2()
user2.greet3()
user2.greet4()

console.log(user1.greet0 === user2.greet0)
console.log(user1.greet1 === user2.greet1)
console.log(user1.greet2 === user2.greet2)
console.log(user1.greet3 === user2.greet3)
console.log(user1.greet4 === user2.greet4)
