const calcScreen = document.querySelector('.screen')

const numBtns = document.querySelectorAll(".numButton")

numBtns.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)
function appendNumber(number) {
    console.log(number)
}