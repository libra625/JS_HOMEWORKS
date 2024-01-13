'use strict';

function riseNumberToDegree(number, degree = 1) {

    if (isNaN(number) || isNaN(degree)) {
        return "error incorrect data";
    }

    const temporaryNumber = BigInt(+number);
    const temporaryDegree = BigInt(+degree);

    return BigInt(temporaryNumber ** temporaryDegree);
}

const number = +prompt("Enter number which need to be risen to a certain power", "2");
const degree = +prompt("Enter a degree for your number", "8");

alert(`Result : ${riseNumberToDegree(number, degree)}`);