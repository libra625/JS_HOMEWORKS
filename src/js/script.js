'use strict';

const array1 = [];
const array2 = [];

const uniqueNumber = function () {
    let randomNumber = Math.floor(Math.random()*100 + 1);

    if (!array1.includes(randomNumber)) {
        array1.push(randomNumber);
        return randomNumber;
    }

    while (array1.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random()*100 + 1);
    }

    array1.push(randomNumber);
    
    return randomNumber;
}

const uniqueNumber2 = function () {
    let randomNumber = Math.floor(Math.random()*100 + 1);

    if (!array2.includes(randomNumber)) {
        array2.push(randomNumber);
        return randomNumber;
    }

    return uniqueNumber2();
}

for (let i = 1; i <= 100; i++) {
    console.log(uniqueNumber());
}

for (let i = 1; i <= 100; i++) {
    console.log(uniqueNumber2());
}