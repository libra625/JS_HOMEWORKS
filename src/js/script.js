'use strict';

let sumOfOddNumbers = 0;

loop: for (let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        continue loop;
    }

    sumOfOddNumbers += i;
    console.log(`Sum of odd numbers in range from 1 to 20. At moment of ${i} = ${sumOfOddNumbers}`);
}

console.log(`Sum of odd numbers in range from 1 to 20 = ${sumOfOddNumbers}`);