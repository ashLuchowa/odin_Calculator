//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const clearBtn = document.getElementById('clr-btn');
const delBtn = document.getElementById('del-btn');

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

//------------- Press button Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        if (button.className === 'btn number') {
            if (calculator.currentNum.length > 13) {
                return calculator.currentNum;
            } else {
                calculator.currentNum = calculator.currentNum + button.textContent;
            }

            mainDisplay.textContent = calculator.currentNum;

        } else if (button.className === 'btn operator') {
            op(parseFloat(calculator.previousNum), parseFloat(calculator.currentNum), calculator.operator);
            calculator.previousNum = calculator.currentNum;
            calculator.operator = button.textContent;
            calculator.currentNum = '';

            //Press operator button again without equal
            if (calculator.finalNumber !== '') {
                calculator.previousNum = calculator.finalNumber;
                mainDisplay.textContent = '0';
            }
        } else if (button.className === 'btn decimal') {
            calculator.currentNum = calculator.currentNum + button.textContent;
        }

        //Error when dividing by 0
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
            subDisplay.textContent = calculator.finalNumber;
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