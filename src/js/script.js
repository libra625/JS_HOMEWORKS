'use strict';

function calculateCostOfRequiredPotato(litersOfSoup) {

    if (isNaN(litersOfSoup) || litersOfSoup === 0) {
        return "error";
    }

    const averagePotatoWeight = 75;
    const potatoesRequiredFor1Liter = 4;
    const potato1KilogramCost = 13;

    const amountOfPotatoToCook = ((litersOfSoup * potatoesRequiredFor1Liter * averagePotatoWeight) / 1000);

   return `You need ${amountOfPotatoToCook} kg to cook ${litersOfSoup} liters but you can buy just ${Math.ceil(amountOfPotatoToCook)} and it will cost you ${Math.ceil(amountOfPotatoToCook) * potato1KilogramCost} UAH`;
}

const litersOfSoup = +prompt("How many liters of soup do you want to cook?", "48");

console.log(calculateCostOfRequiredPotato(litersOfSoup));

alert(calculateCostOfRequiredPotato(litersOfSoup));