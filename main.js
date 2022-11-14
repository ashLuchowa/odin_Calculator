//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.getElementById('clr-btn');


//------------- Calculator structure -------------//
const calculator = {
    firstNumber: '',
    secondNumber: '',
    operator: '',
    checkForOp: false,
    finalNumber: '',
}


//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';


//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        let result = 0;
        if (button.className === 'btn number' && calculator.checkForOp === false) {
            result = calculator.firstNumber + button.textContent;
            calculator.firstNumber = parseInt(result);
        } else if (button.className === 'btn operator') {
            calculator.operator = button.textContent;
            calculator.checkForOp = true;

            if (calculator.firstNumber !== '' && calculator.secondNumber !== '' && calculator.operator !== '' && calculator.checkForOp === true) {
                generalOp();
                subDisplay.textContent = calculator.firstNumber;
            }
        } else if (calculator.checkForOp === true && button.className !== 'btn equal') {
            result = calculator.secondNumber + button.textContent;
            calculator.secondNumber = parseInt(result);
        }

        //------------- op converter -------------//
        button.textContent === '&divide' ? '/' :
            button.textContent === '&times' ? '*' :
            button.textContent === '&minus;' ? '-' :
            button.textContent === '&plus;' ? '+' :
            '';

        //------------- Sub Display -------------//    
        if (button.className !== 'btn equal') {
            subDisplay.textContent += `${button.textContent}`;
        }

        console.log(calculator);
    });


}

// ------------- Pressing general operators -------------//
function generalOp() {
    op(calculator.firstNumber, calculator.secondNumber, calculator.operator);
    calculator.firstNumber = calculator.finalNumber;
    calculator.secondNumber = 0;
    mainDisplay.textContent = calculator.finalNumber;
    console.log(calculator);
}


// ------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {
    generalOp();
    calculator.checkForOp = false;
    subDisplay.textContent += '=';
});


//------------- op Function -------------//
function op(x, y, op) {
    op === '+' ? calculator.finalNumber = x + y :
        op === '−' ? calculator.finalNumber = x - y :
        op === '×' ? calculator.finalNumber = x * y :
        op === '÷' ? calculator.finalNumber = x / y :
        calculator.finalNumber;
}

//------------- Clear -------------//
clearBtn.addEventListener('click', () => {
    calculator.firstNumber = '';
    calculator.secondNumber = '';
    calculator.operator = '';
    calculator.checkForOp = false;
    calculator.finalNumber = '';
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
})