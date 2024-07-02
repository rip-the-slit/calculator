const keyboard = document.querySelector("#keyboard")
const keys = [7, 8, 9, "+",
                4, 5, 6, "-",
                1, 2 , 3, "×",
                "C", 0, ",", "÷",
                "="];

keys.forEach((key) => {
    const button = document.createElement("button")
    button.textContent = key
    button.setAttribute("class", "key")
    if (typeof key == "number") button.classList += " number";
    button.setAttribute("id", `${key}`);
    keyboard.appendChild(button);
})

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