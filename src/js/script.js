'use strict'

const createUser = function (name, age) {
    const user = {
        name,
        age,
        greet () {
            console.log(`Hello my name is ${user.name}`)
        }
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

const user1 = createUser('Іван', 25)
const user2 = createUser('Марія', 30)

user1.greet()
user1.greet1()
user1.greet2()

user2.greet()
user2.greet1()
user2.greet2()
