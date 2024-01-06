'use strict';

//task1
let a = prompt("Enter a for some tasks", 0);
let result = Number(a) === 0 ? "Вірно" : "Неправильно";

console.log(`Task 1 a дорівнює нулю Result: ${result} a=${a}`);

//task2
result = Number(a) > 0 ? "Вірно" : "Неправильно";

console.log(`Task 2 a більша за нуль Result: ${result} a=${a}`);

//task3
result = Number(a) < 0 ? "Вірно" : "Неправильно";

console.log(`Task 3 a менша за нуль Result: ${result} a=${a}`);

//task4
result = Number(a) >= 0 ? "Вірно" : "Неправильно";

console.log(`Task 4 a  більша або дорівнює нулю Result: ${result} a=${a}`);

//task5
result = Number(a) <= 0 ? "Вірно" : "Неправильно";

console.log(`Task 5 a менша або дорівнює нулю Result: ${result} a=${a}`);

//task6
result = Number(a) !== 0 ? "Вірно" : "Неправильно";

console.log(`Task 6 a не дорівнює нулю Result: ${result} a=${a}`);

//task7
result = a === 'test' ? "Вірно" : "Неправильно";

console.log(`Task 7 a дорівнює 'test' Result: ${result} a=${a}`);

//task8
result = a === '1' ? "Вірно" : "Неправильно";

console.log(`Task 8 a дорівнює '1' Result: ${result} a=${a}`);

//task9
result = (Number(a) > 0 && Number(a) < 5) ? "Вірно" : "Неправильно";

console.log(`Task 9 a більша за нуль і менше 5-ти Result: ${result} a=${a}`);

//task10
result = (Number(a) === 0 || Number(a) === 2) ? Number(a) + 7 : Number(a) / 10;

console.log(`Task 10 a дорівнює нулю або дорівнює двом, додайте до неї 7, інакше поділіть її на 10: ${result}`);

const saveA = confirm(`Do you want to save a as ${result}? A now is ${Number(a)}`);

if(saveA){
    a = result;
} else {
    alert("OK It's your choise");
}

//task11
let b = prompt("Enter b", 5)

result = (Number(a) <= 1 && Number(b) >= 3) ? "Вірно" : "Неправильно";

console.log(`Task 11 a дорівнює або менше 1, а змінна b більша або дорівнює 3 Result: ${result} a=${a}  b=${b}`);

//task12
result = ((Number(a) > 2 && Number(a) < 11) || (Number(b) >= 6 && Number(b) < 14)) ? "Вірно" : "Неправильно";

console.log(`Task 12  a більше 2-х і менше 11-ти, або змінна b більша або дорівнює 6-ти і менше 14-ти Result: ${result} a=${a}`);

//task 13

const num = parseInt(prompt("Enter num for seasons 1 - winter \n 2 - spring \n 3 - summer \n 4 - autumn"));

switch (num) {
    case 1:
        result = "winter";
        break;
    case 2:
        result = "spring";
        break;
    case 3:
        result = "summer";
        break;
    case 4:
        result = "autumn";
        break;
    default:
        console.log("You entered something strange")
}

console.log(`Task 13 Result = ${result}`);













































