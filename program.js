let operand1 = "";
let operand2 = "";
let operator = "";
 
const display = document.querySelector("#display")
const keyboard = document.querySelector("#keyboard")
const keys = [7, 8, 9, "+",
                4, 5, 6, "-",
                1, 2 , 3, "×",
                "C", 0, ".", "÷",
                "="];
const operators = ['+', '-', '×', '÷']

keys.forEach((key) => {
    const button = document.createElement("button")
    button.textContent = key
    button.setAttribute("class", "key")
    if (typeof key == "number") button.classList += " number";
    button.setAttribute("id", `${key}`);
    button.addEventListener("click", function (e) {
        if (this.className.includes("number") && operand2.length < 18) {
            if (operand2 === "") display.textContent = "";
            operand2 += this.id
            display.textContent += this.id
        } else if (operators.includes(this.id)) {
            if (operand1 === "") {
                operator = this.id
                operand1 = operand2
                operand2 = ""
            } else if (operand2 != "") {
                let result = operate(operand1, operand2, operator)
                operand1 = `${result}`
                operand2 = ""
                operator = this.id
                display.textContent = operand1
            } else operator = this.id
        } else if (this.id == "=") {
            if (!(operand1 === "") && !(operand2 === "")) {
                let result = operate(operand1, operand2, operator)
                operand1 = `${result}`
                operand2 = ""
                display.textContent = operand1
            }
        } else if (this.id == "C") {
            operand1 = operand2 = operator = ""
            display.textContent = ""
        } else if (this.id == ".") {
            if (operand2 === "") display.textContent = "";
            if (operand2 != "" && !operand2.includes("0.")) {
                operand2 += this.id
                display.textContent += this.id
            } else {
                operand2 = "0."
                display.textContent = operand2
            }
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
    if (+operand2 == 0) return "Syntax ERROR"
    return operand1 / operand2
}

function operate(operand1, operand2, operator) {
    if (operator === '+') return add(operand1, operand2)
    if (operator === '-') return substract(operand1, operand2)
    if (operator === '×') return multiply(operand1, operand2)
    if (operator === '÷') return divide(operand1, operand2)
}