'use strict';

let userAge = +prompt("Enter your age", "88");

while (isNaN(userAge) || userAge === 0 || userAge <= 0){
    userAge = +prompt("Please Enter proper number , before you entered something strange, 0 or negative number ", "88");
}

const lastDigit = userAge % 10;
let message;

if (userAge >= 11 && userAge <= 19) {
    message = userAge + " років";
} else {
    switch (lastDigit) {
        case 1:
            message = userAge + " рік";
            break;
        case 2:
        case 3:
        case 4:
            message = userAge + " роки";
            break;
        default:
            message = userAge + " років";
            }
        }

alert(message);


