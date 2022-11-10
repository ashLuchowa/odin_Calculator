//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');

//------------- Calculator structure -------------//
const calculator = {
    firstNumber: '',
    secondNumber: '',
    finalNumber: '',
    inputNum: '',
}

//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';

//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        calculator.inputNum = calculator.inputNum + button.textContent;
        console.log(button.textContent);
    });
}

//------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {
    // Saving the input
    const result = calculator.inputNum.split(/[,+-./*=]/);
    calculator.firstNumber = parseInt(result[0]);
    calculator.secondNumber = parseInt(result[1]);
    calculator.finalNumber = result[2];
    op(calculator.firstNumber, calculator.secondNumber);
    // mainDisplay.textContent = calculator.finalNumber;
    // subDisplay.textContent = `${calculator.inputNum} =`;
    console.log(calculator);
    calculator.inputNum = calculator.finalNumber;
});

//------------- op Function -------------//
function op(x, y) {
    if (calculator.inputNum.includes('+')) {
        return calculator.finalNumber = x + y;
    } else {
        return calculator.finalNumber = x - y;
    }
}