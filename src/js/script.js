"use strict";

//task1
const string1Time = prompt("What is the time now?", "moorning");
const string2UserName = prompt("Who are you?", "John");
const string3UserFeeling = prompt("How do you feel " + string2UserName + "?", "Good");

console.log(string3UserFeeling + " " + string1Time + " " + string2UserName);
alert(string3UserFeeling + " " + string1Time + " " + string2UserName);

//without additional strings
console.log(string3UserFeeling + string1Time + string2UserName);
alert(string3UserFeeling + string1Time + string2UserName);

//task2
let userNumber = parseFloat(prompt("\t Enter a number for task 2, \n It must have 5 digit", "12345"));
let userNumberStored = userNumber;

userNumber /= 10_000;
userNumberStored %= 10_000;
const firstDigit = Math.floor(userNumber);

userNumber = userNumberStored;
userNumber /= 1_000;
userNumberStored %= 1_000;
const secondDigit = Math.floor(userNumber);

userNumber = userNumberStored;
userNumber /= 100;
userNumberStored %= 100;
const thirdDigit = Math.floor(userNumber);

userNumber = userNumberStored;
userNumber /= 10;
userNumberStored %= 10;
const forthDigit = Math.floor(userNumber);

const fifthDigit =userNumberStored;

alert(firstDigit + " " + secondDigit + " " + thirdDigit + " " + forthDigit + " " + fifthDigit);