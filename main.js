//Variables
const mainDisplay = document.querySelector('.calc-display-main h2')
const subDisplay = document.querySelector('.calc-display-sub p')
const clearButton = document.getElementById('clr-btn');
const operators = document.querySelectorAll('.operator');
let firstNum = 0;
let secondNum = 0;
let op = '';

//Display
mainDisplay.textContent = '0';
subDisplay.textContent = '';

//--- Press Buttons Events --- //
const btns = document.querySelectorAll('.btn');
for (const btn of btns) {
    btn.addEventListener('click', function () {
    });
}
//Operators
if (op === '+') {
    mainDisplay.textContent = firstNum + secondNum;
    subDisplay.textContent = `${firstNum} + ${secondNum}`;
} else if (op === '-') {
    mainDisplay.textContent = firstNum - secondNum;
    subDisplay.textContent = `${firstNum} - ${secondNum}`;
} else if (op === '*') {
    mainDisplay.textContent = firstNum * secondNum;
    subDisplay.textContent = `${firstNum} * ${secondNum}`;
} else if (op === '/') {
    mainDisplay.textContent = firstNum / secondNum;
    subDisplay.textContent = `${firstNum} / ${secondNum}`;
}

//Clear
clearButton.addEventListener('click', () => {
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
});