//------------- Selectors -------------//
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');
const allBtn = document.querySelectorAll('.btn');
const equalBtn = document.querySelector('.equal');
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


//------------- Press buttons Numbers -------------//
for (const button of allBtn) {
    button.addEventListener('click', () => {
        if (button.className === 'btn number') {
            calculator.currentNum = parseInt(calculator.currentNum + button.textContent);
            mainDisplay.textContent = calculator.currentNum;
        } else if (button.className === 'btn operator') {
            op(calculator.previousNum, calculator.currentNum, calculator.operator);
            calculator.previousNum = calculator.currentNum;
            calculator.operator = button.textContent;
            calculator.currentNum = '';

            //Press operator button again without equal
            if (calculator.finalNumber !== '') {
                calculator.previousNum = calculator.finalNumber;
                mainDisplay.textContent = '0';
            }
        } else if (button.className === 'btn equal') {
            op(calculator.previousNum, calculator.currentNum, calculator.operator);
            calculator.previousNum = calculator.finalNumber;
            calculator.currentNum = '';
            mainDisplay.textContent = '0';
        }

        //Error when dividing by 0
        if (calculator.currentNum === 0 && calculator.operator === '÷') {
            mainDisplay.textContent = 'error';
        }

        if(calculator.previousNum === Infinity && button.className === 'btn operator') {
            reset();
        }

        subDisplay.textContent = calculator.previousNum + calculator.operator;
        console.log(calculator);
    });
};

// ------------- Press Equal -------------//
equalBtn.addEventListener('click', () => {

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