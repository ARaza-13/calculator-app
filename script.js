// variables for calculator operation //
let num1 = "";
let num2 = "";
let operator = "";

// boolean variable to check if an operator has been clicked, if so we stop updating the number //
let operatorSelected = false; 

// populate the display of the calculator when a number button is clicked //
const output = document.querySelector('.output');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const equals = document.querySelector('.equals');

numbers.onclick = (e) => getNums(e.target);
operators.onclick = (e) => getOperator(e.target);
equals.onclick = () => output.textContent = operate(+num1, +num2, operator);

// once we select an operator, we finish storing the first number and then begin selecting the second number //
function getNums(evt) {
    if (!operatorSelected) {
        num1 += evt.innerText;
        output.textContent = num1;
    } else {
        num2 += evt.innerText;
        output.textContent = num2;
    }
    return [num1, num2];
}

function getOperator(evt) {
    operatorSelected = true;
    operator = evt.innerText;
    return operator;
}

// function that takes 2 numbers and an operator and returns the correct operation //
function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "x") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    } else {
        return "Invalid Operation";
    }
}

// functions that takes in multiple values and returns the respective sum, difference, product, and quotient //
function add(...args) {
    return args.reduce((total, current) => {
        return total + current;
    });
}

function subtract(...args) {
    return args.reduce((total, current) => {
        return total - current;
    });
}

function multiply(...args) {
    return args.reduce((total, current) => {
        return total * current;
    });
}

function divide(...args) {
    return args.reduce((total, current) => {
        return total / current;
    });
}