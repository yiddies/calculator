let currentOperator = ''
let nums = []
let numbers = ''

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
    calcScreen.innerHTML += number
    numbers += number
    console.log(numbers)
    return numbers;
}
function setOperation(id) {

    calcScreen.innerHTML = ''
    if (id === '+') {
        console.log(id)
        nums.push(numbers)
        console.log(nums)
        numbers = ''
        return currentOperator = 'add'
    } else if (id === '-') {
        nums.push(numbers)
        console.log(id)
        numbers = ''
        return currentOperator = 'subtract'
    } else if (id === '*') {
        nums.push(numbers)
        console.log(id)
        numbers = ''
        return currentOperator = 'multiply'
    } else {
        nums.push(numbers)
        console.log(id)
        numbers = ''
        return currentOperator = 'division'
    }
}