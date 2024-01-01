'use strict';

const userHours = parseFloat(prompt("Enter amount of hours", "10"));

const userSeconds = userHours * 3600;

alert(`${userHours} hours is ${userSeconds} seconds`);