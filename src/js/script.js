'use strict';

//global 2nd method
let messageToUser = '';
//part1
const userBirthYear = parseInt(prompt("Enter your year of birth", "1999"));
const userCity = prompt("What city do you live?", "London");
const userFavoriteSport = prompt("What is your favorite sport", "football");

let userAge = Number.MIN_SAFE_INTEGER;

if (isNaN(userBirthYear)){
} else userAge = 2023 - userBirthYear;


switch (userCity) {//switch for city
    case null:
        if(isNaN(2023 - userBirthYear)){
            alert("Sorry but you didn't enter your city and birth year");
            // messageToUser += "Sorry but you didn't enter your city and birth year";
        } else {
            alert(`Sorry but you didn't enter your city but You are ${2023 - userBirthYear}`);
            // messageToUser += `Sorry but you didn't enter your city but You are ${2023 - userBirthYear}`;
        }
        break;

    case 'London':
        if (userAge < 0) {
            alert("You live in the capital city of Great Britain");
            messageToUser += "You live in the capital city of Great Britain";
        } else {
            alert(`You are ${userAge} and you live in the capital city of Great Britain`);
            messageToUser += `\n You are ${userAge} and you live in the capital city of Great Britain. `;
        }
        break;
        
    case 'Kiev':
        if (userAge < 0) {
            alert("You live in the capital city of Ukraine");
            messageToUser += "You live in the capital city of Ukraine";
        } else {
            alert(`You are ${userAge} and you live in the capital city of Ukraine`);
            messageToUser += `\n You are ${userAge} and you live in the capital city of Ukraine. `;
        }
        break;
        
    case 'Washington':
        if (userAge < 0) {
            alert("You live in the capital city of USA");
            messageToUser += "You live in the capital city of USA";
        } else {
            alert(`You are ${userAge} and you live in the capital city of USA`);
            messageToUser += `\n You are ${userAge} and you live in the capital city of USA. `;
        }
        break;
        
    default:
        if (userAge < 0) {
            alert(`You live in the city called ${userCity}, a great city`);
            messageToUser += `You live in the city called ${userCity}, a great city`;
        } else {
            alert(`You are ${userAge} and you live in city called ${userCity}, a great city`);
            messageToUser += `\n You are ${userAge} and you live in city called ${userCity}, a great city. `;
        }
}

//part2
alert("Part 2 starts");

if(isNaN(userBirthYear)) {
    alert(" Unfortunate you didn't enter your year of birth");
    messageToUser += "\n Unfortunate you didn't enter your year of birth";
}

if (userCity === null) {
    alert("Unfortunate you didn't enter your city");
    messageToUser += "\n Unfortunate you didn't enter your city";
}

if (userFavoriteSport === null) {
    alert("Unfortunate you didn't enter your favourite sport");
    messageToUser += "\n Unfortunate you didn't enter your favourite sport";
}

// console.log("Something went wrong in validation of user data ");
// console.log("userBirthYear " + userBirthYear + typeof(userBirthYear));
// console.log("userCity " + userCity + typeof(userCity));
// console.log("userFavoriteSport " + userFavoriteSport + typeof(userFavoriteSport));

switch (userFavoriteSport) {//switch for sport
    case null:
        alert("Unfortunate you didn't enter your favourite sport so there is nothing else next");
        // messageToUser += "Unfortunate you didn't enter your favourite sport";
        break;

    case 'football':
        alert("Cool! You want to become like Leonel Messi");
        messageToUser += "\n Cool! You want to become like Leonel Messi";
        break;
        
    case 'basketball':
        alert("Cool! You want to become like Lebron James");
        messageToUser += "\n  Cool! You want to become like Lebron James";
        break;
        
    case 'tennis':
        alert("Cool! You want to become like Serena Williams");
        messageToUser += "\n Cool! You want to become like Serena Williams";
        break;

    default:
        alert(`Cool! You want to become champion in ${userFavoriteSport}`);
        messageToUser += `\n Cool! You want to become champion in ${userFavoriteSport}`;
}

//second method

alert("II method \n" + messageToUser);