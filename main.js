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
    previousNum: 0,
    currentNum: '',
    operator: '',
    finalNumber: '',
};


//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';


//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        if (button.className === 'btn number') {


        } else if (button.className === 'btn operator') {


        } else if (calculator.checkForSecondOp === true && button.className !== 'btn equal') {


            // if (calculator.currentNum === 0 && calculator.operator === '÷') {
            //     mainDisplay.textContent = 'error';
            //     calculator.previousNum = 0;
            // }
        }

        console.log(calculator);
    });
};

// ------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {});


//------------- op Function -------------//
function op(x, y, op) {
    if (op === '+') {
        calculator.finalNumber = x + y;
    } else if (op === '−') {
        calculator.finalNumber = x - y;
    } else if (op === '÷') {
        calculator.finalNumber = x / y;
    } else if (op === '×') {
        if (calculator.previousNum === 0) {
            let x = -1;
            calculator.finalNumber = x * y
        } else {
            calculator.finalNumber = x * y
        }
    }
};

//------------- Clear -------------//
clearBtn.addEventListener('click', () => {
    calculator.previousNum = 0;
    calculator.currentNum = '';
    calculator.operator = '';
    calculator.checkForSecondOp = false;
    calculator.finalNumber = '';
    subDisplay.textContent = '';
    mainDisplay.textContent = '0';
    console.log(calculator);
});