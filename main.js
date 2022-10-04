//Variables
const mainDisplay = document.querySelector('.calc-display-main h2')
const subDisplay = document.querySelector('.calc-display-sub p')
const clearButton = document.getElementById('clr-btn');
const equalButton = document.getElementById('equal-btn');
let firstNum = 0;
let secondNum = 0;
let Operator = '';

//Display
mainDisplay.textContent = '0';
subDisplay.textContent = '';

//--- Press Buttons Events --- //
const btns = document.querySelectorAll('.btn');
for (const btn of btns) {
    btn.addEventListener('click', function() {
        if(typeof this.value == 'number') {
            mainDisplay.textContent = parseInt(this.value);
        } else {
            mainDisplay.textContent = this.value;
        }
    });
}

//Equal
equalButton.addEventListener('click', function (firstNum, secondNum, op) {
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
    });

//Clear
clearButton.addEventListener('click', () => {
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
});


//How do we store the old number? Prompt seems to work for now