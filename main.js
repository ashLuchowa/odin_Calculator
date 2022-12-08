//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clr-btn');


//------------- Calculator structure -------------//
const calculator = {
    previousNum: '',
    currentNum: '',
    operator: '',
    finalNumber: '',
};


//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';


//------------- Input Numbers -------------//
function inputNum(inputVariation) {
    if (calculator.currentNum.length > 13) {
        return calculator.currentNum;
    } else {
        calculator.currentNum = calculator.currentNum + inputVariation;
    }
    mainDisplay.textContent = calculator.currentNum;
}


//------------- Input Operators -------------//
function inputOperator(inputVariation) {
    if (calculator.previousNum !== '' && calculator.currentNum === '' && calculator.operator !== '') {
        calculator.previousNum != calculator.currentNum;
        calculator.operator = inputVariation;
    } else {
        op(parseFloat(calculator.previousNum), parseFloat(calculator.currentNum), calculator.operator);
        calculator.previousNum = calculator.currentNum;
        calculator.operator = inputVariation;
        calculator.currentNum = '';
    }
    //Execute finalNumber without using equal operator
    if (calculator.finalNumber !== '') {
        calculator.previousNum = calculator.finalNumber;
        mainDisplay.textContent = '0';
    }
}


//------------- Input Decimal -------------//
function inputDecimal(inputVariation) {
    if (!calculator.currentNum.includes('.')) {
        calculator.currentNum = calculator.currentNum + inputVariation;
        mainDisplay.textContent = mainDisplay.textContent + '.';
    } else {
        return;
    }
}


//------------- Error when divide by 0 -------------//
function divideByZero() {
    mainDisplay.textContent = 'error';
}


//------------- Backspace -------------//
function backspace() {
    calculator.currentNum = calculator.currentNum.slice(0, -1);
    mainDisplay.textContent = calculator.currentNum;
}


//---------------------------- Click Input ----------------------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {

        if (button.className === 'btn number') {
            inputNum(button.textContent);
        } else if (button.className === 'btn operator') {
            inputOperator(button.textContent);
        } else if (button.className === 'btn decimal') {
            inputDecimal(button.textContent);
        }

        if (calculator.currentNum === '0' && calculator.operator === '÷') {
            divideByZero();
        }

        if (calculator.previousNum === Infinity && button.className === 'btn operator') {
            reset();
        } else if (calculator.previousNum === Infinity && button.className === 'btn equal') {
            reset();
        }

        subDisplay.textContent = calculator.previousNum + calculator.operator;

        if (button.id === 'equal') {
            subDisplay.textContent = calculator.finalNumber;
        }

        if (button.id === 'del-btn') {
            backspace();
        }

        //------------- Cannot input operator first -------------//
        if (calculator.currentNum === '' && button.className === 'btn operator' && calculator.previousNum === '') {
            reset();
        }

        console.log(calculator);
    });
};


//------------- op Function -------------//
function op(x, y, op) {
    if (op === '+') {
        calculator.finalNumber = x + y;
    } else if (op === '−') {
        calculator.finalNumber = x - y;
    } else if (op === '÷') {
        calculator.finalNumber = x / y;
    } else if (op === '×') {
        calculator.finalNumber = x * y;
    }
};


//------------- Click Clear -------------//
clearBtn.addEventListener('click', () => {
    reset();
    clearBtn.blur();
});


//------------- Reset -------------//
function reset() {
    calculator.previousNum = '';
    calculator.currentNum = '';
    calculator.operator = '';
    calculator.finalNumber = '';
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
}


//---------------------------- Keyboard Input ----------------------------//
addEventListener('keydown', (e) => {

    //operator converter
    if (calculator.operator === '-') {
        calculator.operator = '−';
    } else if (calculator.operator === '*') {
        calculator.operator = '×';
    } else if (calculator.operator === '/') {
        calculator.operator = '÷';
    }

    if ((e.key >= 0 && e.key <= 9)) {
        inputNum(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        inputOperator(e.key);
        subDisplay.textContent = calculator.previousNum + calculator.operator;
    } else if (e.key === 'Enter') {
        inputOperator(e.key);
        subDisplay.textContent = calculator.previousNum;
    } else if (e.key === 'Escape') {
        reset();
    } else if (e.key === 'Backspace') {
        backspace();
    } else if (e.key === '.') {
        inputDecimal('.');
    } else {
        e.preventDefault();
    }

    if (calculator.currentNum === '0' && calculator.operator === '÷') {
        divideByZero();
    }

    if (calculator.previousNum === Infinity && (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')) {
        reset();
    } else if (calculator.previousNum === Infinity && e.key === 'Enter') {
        reset();
    }

    //------------- Cannot input operator first -------------//
    if (calculator.currentNum === '' && (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') && calculator.previousNum === '') {
        reset();
    }

    console.log(calculator);
});