'use strict';

function padString(string, lengthRequired, characterToChange, positionRight = true) {
        if (string.length === 0) {
            return "error no string";
        }

        if (isNaN(lengthRequired) || lengthRequired === null || typeof lengthRequired !== "number") {
            return "required length is strange";
        }



        if (typeof positionRight !== "boolean") {
            return "error not a boolean (position) of addition";
        }

        let temporaryString = string;

        if (temporaryString.length >= lengthRequired) {
            return temporaryString.slice(0, lengthRequired);
        } else if (characterToChange === undefined || characterToChange.length !== 1) {
            return "error no character for empty space";
        }
        
        if (positionRight) {
            while ( temporaryString.length < lengthRequired) {
                temporaryString += characterToChange;
            }
            
            return temporaryString;
        } else {
            let amountOfDifference = lengthRequired - temporaryString.length;
            let partOfTemporaryString = "";
            
            while (amountOfDifference) {
                partOfTemporaryString += characterToChange;
                amountOfDifference--;
            }
            
            return partOfTemporaryString + temporaryString;
        }
}

console.log(padString('привіт', 8, '') );
console.log(padString('привіт', 6, '*', false));
console.log(padString('привіт', 20));