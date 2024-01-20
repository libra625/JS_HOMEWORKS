'use strict';

const array = [];

const uniqueNumber = function () {
    let randomNumber = Math.floor(Math.random()*100 + 1);

    if (!array.includes(randomNumber)) {
        array.push(randomNumber);
        return randomNumber;
    } else while (array.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random()*100 + 1);
    }
    
    array.push(randomNumber);
    
    return randomNumber;
}

for (let i = 1; i <= 100; i++) {
    console.log(uniqueNumber());
}