let operand1 = "";
let operand2 = "";
let operator = "";

const display = document.querySelector("#display")
const keyboard = document.querySelector("#keyboard")
const keys = [7, 8, 9, "+",
                4, 5, 6, "-",
                1, 2 , 3, "×",
                "C", 0, ",", "÷",
                "="];
const operators = ['+', '-', '×', '÷']

keys.forEach((key) => {
    const button = document.createElement("button")
    button.textContent = key
    button.setAttribute("class", "key")
    if (typeof key == "number") button.classList += " number";
    button.setAttribute("id", `${key}`);
    button.addEventListener("click", function (e) {
        if (this.className.includes("number")) {
            if (operator === "") operand1 += this.id;
            else operand2 += this.id;
            display.textContent += this.id;
        } else if (operators.includes(this.id)) {
            operator += this.id
            if (operator.length == 1 && operand2 != "") {
                let result = operate(operand1, operand2, operator)
                operand1 = "" + result
                display.textContent = result + this.id
            }
        } else if (this.id === "=") {
            if (operand2 === "") {
                if (operator.length >= 1) {
                    display.textContent = "Syntax ERROR"
                    operand1 = ""
                } else display.textContent = operand1;
            } else {
                let result = operate(operand1, operand2, operator)
                operand1 = "" + result
                display.textContent = result
            }
            operand2 = operator = ""
        } else if (this.id === "C") {
            operand1 = operand2 = operator = display.textContent = "";
        }
    })
    keyboard.appendChild(button);
})

function add(operand1, operand2) {
    return +operand1 + +operand2
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

function operate(operand1, operand2, operator) {
    if (operator === '+') return add(operand1, operand2)
    if (operator === '-') return substract(operand1, operand2)
    if (operator === '×') return multiply(operand1, operand2)
    if (operator === '÷') return divide(operand1, operand2)
}