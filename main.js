//------------- Selectors -------------//
let inputNum = '';
const mainDisplay = document.getElementById('display-main');
const subDisplay = document.getElementById('display-sub');

//------------- Calculator structure -------------//
const calculator = {
    firstNumber: 0,
    operator: '',
    secondNumber: 0,
}

//------------- Displays -------------//
subDisplay.textContent = '';
mainDisplay.textContent = '0';