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

//------------- Press button -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {

        //------------- Input Numbers -------------//
        if (button.className === 'btn number') {
            if (calculator.currentNum.length > 13) {
                return calculator.currentNum;
            } else {
                calculator.currentNum = calculator.currentNum + button.textContent;
            }
            mainDisplay.textContent = calculator.currentNum;

        //------------- Input Operators -------------//
        } else if (button.className === 'btn operator') {
            if (calculator.previousNum !== '' && calculator.currentNum === '' && calculator.operator !== '') {
                calculator.previousNum != calculator.currentNum;
                calculator.operator = button.textContent;
            } else {
                op(parseFloat(calculator.previousNum), parseFloat(calculator.currentNum), calculator.operator);
                calculator.previousNum = calculator.currentNum;
                calculator.operator = button.textContent;
                calculator.currentNum = '';
            }
            //Execute finalNumber without using equal operator
            if (calculator.finalNumber !== '') {
                calculator.previousNum = Math.round(calculator.finalNumber * 10000) / 10000;
                mainDisplay.textContent = '0';
            }

        //------------- Input Decimal -------------//  
        } else if (button.className === 'btn decimal') { //Decimal
            if (!calculator.currentNum.includes('.')) {
                calculator.currentNum = calculator.currentNum + button.textContent;
                mainDisplay.textContent = mainDisplay.textContent + '.';
            } else {
                return;
            }
        }

        //------------- Error when divide by 0 -------------//
        if (calculator.currentNum === '0' && calculator.operator === '÷') {
            mainDisplay.textContent = 'error';
        }

        if (calculator.previousNum === Infinity && button.className === 'btn operator') {
            reset();
        } else if (calculator.previousNum === Infinity && button.className === 'btn equal') {
            reset();
        }

        subDisplay.textContent = calculator.previousNum + calculator.operator;

        if (button.id === 'equal') {
            subDisplay.textContent = Math.round(calculator.finalNumber * 10000) / 10000;
        }

        //------------- Press backspace -------------//
        if (button.id === 'del-btn') {
            calculator.currentNum = calculator.currentNum.slice(0, -1);
            mainDisplay.textContent = calculator.currentNum;
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

//------------- Clear Button -------------//
clearBtn.addEventListener('click', () => {
    reset();
});

//------------- Reset -------------//
function reset() {
    calculator.previousNum = '',
    calculator.currentNum = '',
    calculator.operator = '',
    calculator.finalNumber = '',
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
    console.log(calculator);
}

//------------- Keyboard Input -------------//
addEventListener('keydown', (e) => {
    if(e.key >= 0 && e.key <= 9) {
        if (calculator.currentNum.length > 13) {
            return calculator.currentNum;
        } else {
            calculator.currentNum = calculator.currentNum + e.key;
        }
        mainDisplay.textContent = calculator.currentNum;
        console.log(calculator);
    }
});