function add(operand1, operand2) {
    return operand1 + operand2
}

function substract(operand1, operand2) {
    return operand1 - operand2
}

function multiply(operand1, operand2) {
    return operand1 * operand2
}

function divide(operand1, operand2) {
    return operand1 / operand2
}

let operand1 = null;
let operand2 = null;
let operator = null;

function operate(operand1, operand2, operator) {
    if (operator === '+') return add(operand1, operand2)
    if (operator === '-') return substract(operand1, operand2)
    if (operator === '*') return multiply(operand1, operand2)
    if (operator === '/') return divide(operand1, operand2)
}