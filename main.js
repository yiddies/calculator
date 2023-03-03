let currentOperator = ''
let nums = []
let numbers = ''
let sum = Number('')

let numBtns = document.querySelectorAll(".numButton")
let operBtns = document.querySelectorAll(".operButton")
let calcScreen = document.querySelector('.screen')
let equal = document.querySelector('.equal')
let clear = document.querySelector('.clear')


operBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
);


numBtns.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);

equal.addEventListener('click', function () {
    nums.push(Number(numbers))
    operate(nums)
})

clear.addEventListener('click', () => clearScreen())



function appendNumber(number) {
    calcScreen.innerHTML += number
    numbers += number
    console.log(numbers)
    return numbers;
}
function setOperation(id) {
    nums = []
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
        nums.push(Number(numbers))
        nums = []
        calcScreen.innerHTML = sum
        console.log(sum)
        numbers = ''
    } else if (currentOperator === 'subtract') {
        sum = array[0]
        for (let i = 1; i < array.length; i++) {
            sum -= array[i];
        }
        nums.push(Number(numbers))
        nums = []
        calcScreen.innerHTML = sum
        console.log(sum)
        numbers = ''
    } else if (currentOperator === 'multiply') {
        array.forEach(item => {
            sum *= item;
        });
        nums.push(Number(numbers))
        calcScreen.innerHTML = sum
        console.log(sum)
        nums = []
        numbers = ''
    } else {
        array.forEach(item => {
            sum /= item;
        });
        nums.push(Number(numbers))
        console.log(sum)
        nums = []
        calcScreen.innerHTML = sum
        numbers = ''

    }
}

function clearScreen() {
    currentOperator = ''
    nums = []
    numbers = ''
    sum = Number('')
    calcScreen.innerHTML = ''

    console.log(currentOperator)
    console.log(nums)
    console.log(numbers)
    console.log(sum)
}