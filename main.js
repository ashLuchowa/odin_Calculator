//Variables
const mainDisplay = document.querySelector('.calc-display-main h2')
const subDisplay = document.querySelector('.calc-display-sub p')
const buttons = document.querySelectorAll('button');
let currentNum = '0';
let previousNum = '';
let Operator = '';

//Display
mainDisplay.textContent = currentNum;
subDisplay.textContent = '';

//--- Press Buttons Events --- //
//Variables
const num7 = document.getElementById('num7');
const num2 = document.getElementById('num2');
const keyAdd = document.getElementById('keyAdd');
const clearButton = document.getElementById('clr-btn');
const equalButton = document.getElementById('equal-btn');
//num7
num7.addEventListener('click', () => {
    mainDisplay.textContent = '7';
});
//num2
num2.addEventListener('click', () => {
    mainDisplay.textContent = '2';
});
//+
keyAdd.addEventListener('click', () => {
    subDisplay.textContent = subDisplay.textContent + mainDisplay.textContent + '+';
});
//Clear
clearButton.addEventListener('click', () => {
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
});



//--- Operators --- //
//Add
