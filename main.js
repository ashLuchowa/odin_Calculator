//------------- Selectors -------------//
let inputNum = '';
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');

//------------- Calculator structure -------------//
const calculator = {
    firstNumber: 0,
    operator: '',
    secondNumber: 0,
}

//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';

//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        if (button.className === 'btn number') {
            inputNum = inputNum + button.textContent;
            mainDisplay.textContent = inputNum;
        } else if (button.className === 'btn operator') {
            calculator.operator = button.textContent;
            inputNum = inputNum + calculator.operator;
            subDisplay.textContent = inputNum;
        }
    });
}

//------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {
    // Saving the input
    const result = inputNum.split(/[,+-./*]/);
    calculator.firstNumber = parseInt(result[0]);
    calculator.secondNumber = parseInt(result[1]);
    op(calculator.firstNumber, calculator.secondNumber);
    console.log(calculator);
});

//------------- op Function -------------//
function op(x, y) {
    if (calculator.operator === '+') {
        mainDisplay.textContent = x + y;
    } else {
        mainDisplay.textContent = x - y;
    }
    subDisplay.textContent = `${inputNum} =`;
}