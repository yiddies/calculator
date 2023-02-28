let currentOperator = ''

let numBtns = document.querySelectorAll(".numButton")
let operBtns = document.querySelectorAll(".operButton")
let calcScreen = document.querySelector('.screen')


operBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);


numBtns.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

function appendNumber(number) {

    if (currentOperator != '') {
        calcScreen.innerHTML += number
        let num2 = calcScreen.innerHTML;
        console.log("num2 " + num2)
        return num2;
    } else {
        calcScreen.innerHTML += number
        let num1 = calcScreen.innerHTML;
        console.log("num1 " + num1)
        return num1;
    }
}

function setOperation(id) {

    calcScreen.innerHTML = ''
    if (id === '+') {

        console.log(id)
        return currentOperator = 'add'
    } else if (id === '-') {
        console.log(id)
        return currentOperator = 'subtract'
    } else if (id === '*') {
        console.log(id)
        return currentOperator = 'multiply'
    } else {
        console.log(id)
        return currentOperator = 'division'
    }
}