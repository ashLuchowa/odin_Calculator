//Variables
const mainDisplay = document.querySelector('.calc-display-main h2')
const subDisplay = document.querySelector('.calc-display-main p')
const buttons = document.querySelectorAll('button');
const num7 = document.getElementById('num7');

//Display
//Main Display
mainDisplay.textContent = '0';

//Press Buttons Events
num7.addEventListener('click', () => {
    mainDisplay.textContent = '7';
})


////
function operate(x,y,op) {
    if (op === '+') {
        return x + y;
    } else if(op === '-') {
        return x - y;
    } else if(op === '*') {
        return x * y;
    } else if(op === '/') {
        return x / y;
    }
}

