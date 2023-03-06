let currentOperator = '';
let numbersArray = [];
let currentNumber = '';
let total = 0;

const numberButtons = document.querySelectorAll('.numButton');
const operatorButtons = document.querySelectorAll('.operButton');
const calcScreen = document.querySelector('.screen');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        setOperation(button.textContent);
    });
});

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

equalButton.addEventListener('click', () => {
    calculateTotal();
});

clearButton.addEventListener('click', () => {
    clearScreen();
});

function appendNumber(number) {
    currentNumber += number;
    calcScreen.textContent = currentNumber;
}

function setOperation(operator) {
    numbersArray.push(Number(currentNumber));
    currentNumber = '';
    currentOperator = operator;
}

function calculateTotal() {
    numbersArray.push(Number(currentNumber));
    if (currentOperator === '+') {
        total = numbersArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });
    } else if (currentOperator === '-') {
        total = numbersArray.reduce((accumulator, currentValue) => {
            return accumulator - currentValue;
        });
    } else if (currentOperator === '*') {
        total = numbersArray.reduce((accumulator, currentValue) => {
            return accumulator * currentValue;
        });
    } else if (currentOperator === '/') {
        total = numbersArray.reduce((accumulator, currentValue) => {
            return accumulator / currentValue;
        });
    }
    calcScreen.textContent = total;
    numbersArray = [total];
    currentNumber = '';
}

function clearScreen() {
    currentOperator = '';
    numbersArray = [];
    currentNumber = '';
    total = 0;
    calcScreen.textContent = '';
}