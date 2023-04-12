// variables for calculator operation //
let currentNum = "";
let previousNum = "";
let operator = "";

// populate the display of the calculator when a number button is clicked //
const output = document.querySelector('.output');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.delete');

numbers.forEach((number) => 
    number.onclick = (e) => getNum(e.target));
operators.forEach((operator) =>
    operator.onclick = (e) => getOperator(e.target));
decimal.onclick = () => addDecimal();
clear.onclick = () => clearCalculator();
equals.onclick = () => getResult();
backspace.onclick = () => deleteNum();

// clicking '=' will return the answer as the currentNum, as long both numbers and an operator have been selected //
// we will also reset the previousNum variable so we can perform a new operation //
function getResult() {
    if (currentNum != "" && previousNum != "" && operator != "") {
        output.textContent = operate(+currentNum, +previousNum, operator);
        previousNum = "";
    }
}

function clearCalculator() { 
    output.textContent = "0";
    currentNum = "";
    previousNum = "";
    operator = "";
}

// can delete numbers from the current number //
function deleteNum() {
    currentNum = currentNum.toString();
    if (currentNum.length > 0) {
        currentNum = currentNum.slice(0, -1);
        output.textContent = currentNum;
    }
}

// add a decimal to the current number only once per operand //
function addDecimal() {
    if (!currentNum.includes(".")) {
        currentNum += "."
        output.textContent = currentNum;
    }
}

// input the first number and store it in a variable and display it on the screen //
function getNum(event) {
    currentNum += event.textContent;
    output.textContent = currentNum;
}

// once we select an operator, we assign the current number as the previous number so that we can select a new current number //
// checking if both numbers are assigned allows to chain together operations 
// as well as ensure that we're not evaluating more than a single pair of numbers at a time //
function getOperator(event) {
    if (currentNum != "" && previousNum != "") {
        output.textContent = operate(+currentNum, +previousNum, operator)
    } 
    operator = event.textContent;
    previousNum = currentNum;
    currentNum = ""; 
}


// function that takes 2 numbers and an operator and returns the correct operation //
function operate(num1, num2, operator) {
    if (operator == "+") {
        currentNum = add(num1, num2);
        return currentNum;
    } else if (operator == "-") {
        currentNum = subtract(num1, num2);
        return currentNum;
    } else if (operator == "x") {
        currentNum = multiply(num1, num2);
        return currentNum;
    } else if (operator == "/") {
        if (num1 == 0) {
            alert("Can't Divide by 0");
            clearCalculator();
        } else {
            currentNum = divide(num1, num2);
            return currentNum;
        }
    }
}

// returns the respective sum, difference, product, and quotient //
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 / num1;
}