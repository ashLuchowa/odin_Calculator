console.log('x:5' + ' ' + 'y:10')


////
function operate(x,y,op) {
    if (op === '+') {
        return x + y;
    } else if(op === '-') {
        return x - y;
    } else if(op === '*') {
        return x * y;
    } else if(op === '/') {
        return x / y;
    }
}

console.log(operate(5,10,'/'))