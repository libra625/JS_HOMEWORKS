'use strict'

// task 1

const products = [
    { name: 'Apple', price: 1.5 },
    { name: 'Orange', price: 17.5 },
    { name: 'Peach', price: 39.5 },
    { name: 'Apricot', price: 24.5 },
    { name: 'Banana', price: 5.5 }]

// const products1 = [
//     { name: 'Apple', price: 2.5 },
//     { name: 'Orange', price: 15.5 },
//     { name: 'Peach', price: 37.5 },
//     { name: 'Apricot', price: 22.5 },
//     { name: 'Banana', price: 4.5 }]

// try 1
// const decreasePrice = (products) => {
//     products.forEach((element) => element.price *= 0.9)
//     return products
// }
// Result: no
// Reason: changes array of objects (change objects properties)

// try 2
// const decreasePrice = (products) => {
//     return products.map(product => ({
//         name: product.name,
//         price: product.price * 0.9
//     }))
// }
// Result: yes|no
// Reason: Ethernet result

const decreasePrice = (products) => {
    const updatedProducts = []
    for (let i = 0; i < products.length; i++) {
        const updatedProduct = {
            name: products[i].name,
            price: products[i].price * 0.9
        }
        updatedProducts.push(updatedProduct)
    }
    return updatedProducts
}

console.log(decreasePrice(products))
// console.log(decreasePrice(products1))
console.log(products)
// console.log(products1)

// task 2

const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 95 },
    { name: 'Tom', grade: 92 },
    { name: 'Alice', grade: 98 },
    { name: 'Bob', grade: 90 }
]

// const students2 = [
//     { name: 'John', grade: 95 },
//     { name: 'Jane', grade: 85 },
//     { name: 'Tom', grade: 87 },
//     { name: 'Alice', grade: 90 },
//     { name: 'Bob', grade: 98 }
// ]

const filteredStudents = students.filter(student => student.grade > 90)

// as function
const studentsFilter = (students) => {
    return students.filter(student => student.grade > 90)
}

console.log(filteredStudents)
console.log(studentsFilter(students))
// console.log(studentsFilter(students2))
console.log(students)
// console.log(students2)
