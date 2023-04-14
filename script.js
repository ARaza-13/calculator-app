// variables for calculator operation //
let currentNum = "";
let previousNum = "";
let operator = "";

// populate the display of the calculator when a number button is clicked //
const currentOutput = document.querySelector('.current-output');
const previousOutput = document.querySelector('.previous-output');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const negative = document.querySelector('.negative');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.delete');

numbers.forEach((number) => 
    number.onclick = (e) => getNum(e.target));
operators.forEach((operator) =>
    operator.onclick = (e) => getOperator(e.target));
decimal.onclick = () => addDecimal();
negative.onclick = () => addNegative();
clear.onclick = () => clearCalculator();
equals.onclick = () => getResult();
backspace.onclick = () => deleteNum();

// clicking '=' will return the answer as the currentNum, as long both numbers and an operator have been selected //
// we will also reset the previousNum variable so we can perform a new operation //
function getResult() {
    if (currentNum != "" && previousNum != "" && operator != "") {
        previousOutput.textContent = `${previousNum} ${operator} ${currentNum} =`;
        currentOutput.textContent = operate(+currentNum, +previousNum, operator);
        previousNum = "";
    }
}

function clearCalculator() { 
    currentOutput.textContent = "0";
    previousOutput.textContent = "";
    currentNum = "";
    previousNum = "";
    operator = "";
}

// round the number if it's too big so that it won't overflow the display //
function roundNum(num) {
    return Math.round(num * 1000) / 1000;
}

// can delete numbers from the current number //
function deleteNum() {
    currentNum = currentNum.toString();
    if (currentNum.length > 0) {
        currentNum = currentNum.slice(0, -1);
        currentOutput.textContent = currentNum;
    }
}

// add a decimal to the current number only once per operand //
function addDecimal() {
    if (!currentNum.includes(".")) {
        currentNum += "."
        currentOutput.textContent = currentNum;
    }
}

// make the number negative or positive //
function addNegative() {
    currentNum = currentNum.toString();
    if (!currentNum.includes("-")) {
        currentNum = "-" + currentNum;
        currentOutput.textContent = currentNum;
    } else {
        currentNum = currentNum.replace('-','');
        currentOutput.textContent = currentNum;
    }
}

// input the first number and store it in a variable and display it on the screen //
function getNum(event) {
    currentNum += event.textContent;
    currentOutput.textContent = currentNum;
}

// once we select an operator, we assign the current number as the previous number so that we can select a new current number //
// checking if both numbers are assigned allows to chain together operations 
// as well as ensure that we're not evaluating more than a single pair of numbers at a time //
function getOperator(event) {
    if (currentNum != "" && previousNum != "") {
        currentOutput.textContent = operate(+currentNum, +previousNum, operator)
    } 
    operator = event.textContent;
    previousNum = currentNum;
    currentNum = ""; 
    previousOutput.textContent = `${previousNum} ${operator}`;
}


// function that takes 2 numbers and an operator and returns the correct operation //
function operate(num1, num2, operator) {
    if (operator == "+") {
        currentNum = add(num1, num2);
    } else if (operator == "-") {
        currentNum = subtract(num1, num2);
    } else if (operator == "x") {
        currentNum = multiply(num1, num2);
    } else if (operator == "/") {
        if (num1 == 0) {
            alert("Can't Divide by 0");
            clearCalculator();
            return
        } else {
            currentNum = divide(num1, num2);
        }
    }
    return roundNum(currentNum);
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