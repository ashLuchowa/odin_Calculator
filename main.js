//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');

//------------- Calculator structure -------------//
const calculator = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    checkSecondNumber: false,
}


//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';


//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        let result;
        if (button.className === 'btn number' && calculator.checkSecondNumber === false) {
            result = calculator.firstNumber + button.textContent;
            calculator.firstNumber = parseInt(result);
        } else if (button.className === 'btn operator') {
            calculator.operator = button.textContent;
            calculator.checkSecondNumber = true;
        } else if (calculator.checkSecondNumber === true && button.className !== 'btn equal') {
            result = calculator.secondNumber + button.textContent;
            calculator.secondNumber = parseInt(result);
        }
        console.log(calculator);
    });
}


//------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {
    op(calculator.firstNumber, calculator.secondNumber, calculator.operator);
    // mainDisplay.textContent = calculator.finalNumber;
    // subDisplay.textContent = `${calculator.inputNum} =`;
});


//------------- op Function -------------//
function op(x, y, op) {
    if (op === '+') {
        console.log(x + y);
    } else {
        console.log(x - y);
    }
}