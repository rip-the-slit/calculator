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
        if (display.textContent === "Syntax ERROR") display.textContent= "";
        if (this.className.includes("number") && operand2.length < 18) {
            if (operand2 === "") display.textContent = "";
            if (operator === "") operand1 = "";
            operand2 += this.id
            display.textContent += this.id
        } else if (operators.includes(this.id)) {
            if (operand1 === "") {
                operator = this.id
                operand1 = operand2
                operand2 = ""
            } else if (operand2 != "") {
                let result = operate(operand1, operand2, operator)
                if (!Number.isNaN(result) && Number.isFinite(result)) {
                    operand1 = `${result}`
                    operand2 = ""
                    display.textContent = operand1
                } else display.textContent = "Syntax ERROR"
                operator = this.id
            } else operator = this.id
        } else if (this.id == "=") {
            if (!(operand1 === "") && !(operand2 === "")) {
                let result = operate(operand1, operand2, operator)
                if (!Number.isNaN(result) && Number.isFinite(result)) {
                operand1 = `${result}`
                operand2 = operator = ""
                display.textContent = operand1
                } else display.textContent = "Syntax ERROR"
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
    return operand1 / operand2
}

function operate(operand1, operand2, operator) {
    let result = null;
    if (operator === '+') result = add(operand1, operand2)
    if (operator === '-') result = substract(operand1, operand2)
    if (operator === '×') result = multiply(operand1, operand2)
    if (operator === '÷') result = divide(operand1, operand2)
    let overflow = `${result}`.length - 18
    if (overflow > 0) {
        result = Math.round((result) * (18 - overflow)) / (18 - overflow)
    }
    return result;
}