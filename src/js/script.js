'use strict';

let userNumber = +prompt("Enter your number to check for lowest divisor ", "8");

while (isNaN(userNumber) || userNumber === 0){
    userNumber = +prompt("Please Enter your number to check for lowest divisor , before you entered something strange", "8");
}

if(userNumber === 1) {
    console.log("number is 1")
}

if (userNumber > 1){
        for (let i = 2; i <= userNumber; i++ ) {
            if (userNumber % i === 0) {
                console.log(`Divisor for ${userNumber} was found it is ${i}`);
                break;
            }
        }
} else {
    console.log("Ba_NaN");
}


