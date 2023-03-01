let currentOperator = ''
const nums = []
let numbers = ''
let sum = ''
let newSum = ''

let numBtns = document.querySelectorAll(".numButton")
let operBtns = document.querySelectorAll(".operButton")
let calcScreen = document.querySelector('.screen')
let equal = document.querySelector('.equal')


operBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);


numBtns.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

equal.addEventListener('click', function () {
    operate(nums)
})

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
        nums.push(Number(numbers))
        console.log(nums)
        numbers = ''
        return currentOperator = 'add'
    } else if (id === '-') {
        nums.push(Number(numbers))
        console.log(id)
        console.log(nums)
        numbers = ''
        return currentOperator = 'subtract'
    } else if (id === '*') {
        nums.push(Number(numbers))
        console.log(id)
        console.log(nums)
        numbers = ''
        return currentOperator = 'multiply'
    } else {
        nums.push(Number(numbers))
        console.log(id)
        console.log(nums)
        numbers = ''
        return currentOperator = 'division'
    }
}

function operate(array) {
    if (currentOperator === 'add') {
        array.forEach(item => {
            sum += item;
        });
        console.log(sum)
    } else if (currentOperator === 'subtract') {
        sum = array[0]
        for (let i = 1; i < array.length; i++) {
            sum -= array[i];
        }
        console.log(sum)
    } else if (currentOperator === 'multiply') {
        array.forEach(item => {
            sum *= item;
        });
        console.log(sum)
    } else {
        array.forEach(item => {
            sum /= item;
        });
        console.log(sum)
    }
}