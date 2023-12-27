'use strict';

// task1
const student = {
    name: "John",
    age: 25,
    grade: 2
};

student.grade = prompt("What grade are you in", "5");
alert(student.grade);

student.course = prompt(`Enter course name to student with name ${student.name}`);
alert(student.course);

//task2
const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 2008,
    publisher: {
        name: "Alphabet",
        location: "Odessa"
    }
};

//task3
const movie = {
    title: "Mummy 5",
    director: "Someone well known",
    year: 2003,
    genre: "horror"
}

for (let movieKey in movie) {
    console.log(movieKey + " = " + movie[movieKey]);
    alert(`${movieKey} = ${movie[movieKey]}`);
}

//task4
const person1 = {
    name: "John",
    surname: "Sydorow",
    age: 25,
    hobby: "Collecting"
};

const person2 = {
    name: "John",
    surname: "Sydorow",
    age: 25,
    hobby: "Collecting"
};

const comparatorFor2Objects = JSON.stringify(person1) === JSON.stringify(person2);

alert(`Objects have the same structure ? ${comparatorFor2Objects}`);

//task5
const animals = [];

const  rabbit = {
    type: "rodent",
    name: "Bubble"
};

const  hamster = {
    type: "rodent",
    name: "Hammond"
};

const  dog = {
    type: "mammals",
    name: "Jack"
};

animals.push(rabbit);
animals.push(hamster);
animals.push(dog);

// alert(animals);
//
// console.log(animals);













