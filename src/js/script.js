'use strict';

const averagePotatoWeight = 75;
const potatoesRequiredFor1Liter = 4;
const potato1KilogramCost = 13;

let litersOfSoup = +prompt("How many liters of soup do you want to cook?", "48");

while (isNaN(litersOfSoup) || litersOfSoup === 0){
    litersOfSoup = +prompt("Please Enter How many liters of soup do you want to cook? ,It must be a number", "48");
}

const amountOfPotatoToCook = ((litersOfSoup * potatoesRequiredFor1Liter * averagePotatoWeight) / 1000);

console.log(`You need ${amountOfPotatoToCook} kg to cook ${litersOfSoup} liters but you can buy just ${Math.ceil(amountOfPotatoToCook)} and it will cost you ${Math.ceil(amountOfPotatoToCook) * potato1KilogramCost} UAH`);

alert(`You need ${amountOfPotatoToCook} kg to cook ${litersOfSoup} liters but you can buy just ${Math.ceil(amountOfPotatoToCook)} and it will cost you ${Math.ceil(amountOfPotatoToCook) * potato1KilogramCost} UAH`);