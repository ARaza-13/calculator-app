// variables for calculator operation //
let num1, num2, operator;

// populate the display of the calculator when a number button is clicked //
const output = document.querySelector('.output');
const numbers = document.querySelector('.numbers');

// numbers.onclick = (e) => {
//     if (e.target.tagName === 'BUTTON') {
//         output.textContent = e.target.innerText;
//     }
// }
numbers.onclick = (e) => e.target.tagName === 'BUTTON' ? output.textContent = e.target.innerText: null;

// function that takes 2 numbers and an operator and returns the correct operation //
function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
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