'use strict';

function deleteNegativeFromArray(array) {
    const positiveArray = []

    if (!array.length) {
        return "Array is empty";
    }
    
    for (let i = 0; i <= array.length; i++) {
        if (array[i] <= 0) continue;

        positiveArray.push(array[i]);
    }
    
    return !positiveArray.length ? null : positiveArray;
}

const arr = [1, 2, 3, -1, -2, -3];

console.log(deleteNegativeFromArray(arr));
