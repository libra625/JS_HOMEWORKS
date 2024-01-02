'use strict';

const operation = prompt("What operation do you want\n add, sub, mult, div", "div");

const firstOperand = parseFloat(prompt("Enter first operand", "6"));
const secondOperand = parseFloat(prompt("Enter second operand", "6"));

switch (operation){
    case "add":
        alert(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`);
        break;
    case "sub":
        alert(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`);
        break;
    case "mult":
        alert(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`);
        break;
    case "div":
        alert(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`);
        break;
    default:
        alert(`What did you chose ? ${operation} -- I don't know this operation`);
}