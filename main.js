//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.getElementById('clr-btn');
const delBtn = document.getElementById('del-btn');
let result = '0';


//------------- Calculator structure -------------//
const calculator = {
    firstNumber: 0,
    secondNumber: '',
    operator: '',
    checkForSecondOp: false,
    finalNumber: '',
};


//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';


//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        if (button.className === 'btn number' && calculator.checkForSecondOp === false) {
            result = calculator.firstNumber + button.textContent;
            calculator.firstNumber = parseInt(result);

        } else if (button.className === 'btn operator') {
            calculator.operator = button.textContent;
            calculator.checkForSecondOp = true;
            if (calculator.firstNumber !== '' && calculator.secondNumber !== '' && calculator.operator !== '' && calculator.checkForSecondOp === true) {
                generalOp();
                subDisplay.textContent = calculator.firstNumber;
            }

        } else if (calculator.checkForSecondOp === true && button.className !== 'btn equal') {
            result = calculator.secondNumber + button.textContent;
            calculator.secondNumber = parseInt(result);
        }

        //------------- Sub Display -------------//    
        if (button.className !== 'btn equal' && button.id !== 'del-btn' && button.className !== 'btn decimal') {
            subDisplay.textContent += button.textContent;
        }

        //------------- Decimal -------------//    
        if (button.className === 'btn decimal') {
            //find a way to add decimals
        }

        console.log(calculator);
    });
};


// ------------- Pressing general operators -------------//
function generalOp() {
    op(calculator.firstNumber, calculator.secondNumber, calculator.operator);
    calculator.firstNumber = Math.floor(calculator.finalNumber * 1000) / 1000;
    calculator.secondNumber = '';
    mainDisplay.textContent = Math.floor(calculator.finalNumber * 1000) / 1000;
};


// ------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {
    generalOp();
    calculator.checkForSecondOp = false;
    subDisplay.textContent = calculator.firstNumber;
    console.log(calculator);
});


//------------- op Function -------------//
function op(x, y, op) {
    if (op === '+') {
        calculator.finalNumber = x + y;
    } else if (op === '−') {
        calculator.finalNumber = x - y;
    } else if (op === '÷') {
        calculator.finalNumber = x / y;
    } else if (op === '×') {
        if (calculator.firstNumber === 0) {
            let x = -1;
            calculator.finalNumber = x * y
        } else {
            calculator.finalNumber = x * y
        }
    }
};

//------------- Clear -------------//
clearBtn.addEventListener('click', () => {
    calculator.firstNumber = 0;
    calculator.secondNumber = '';
    calculator.operator = '';
    calculator.checkForSecondOp = false;
    calculator.finalNumber = '';
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
    console.log(calculator);
});