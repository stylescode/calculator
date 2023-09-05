function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, op, b) {
  if (op === '+') {
    return add(a, b);
  } else if (op === '-') {
    return subtract(a, b)
  } else if (op === 'x') {
    return multiply(a, b)
  } else if (op === '/') {
    return divide(a, b);
  }

}

let firstNum = '';
let operator = '';
let secondNum = '';
let answer = '';

const display = document.querySelector('.display');

const numBtns = document.querySelectorAll('.number');
const signBtns = document.querySelectorAll('.sign');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const changeBtn = document.querySelector('.change');
const percentBtn = document.querySelector('.percent');
const bsBtn = document.querySelector('.backspace');

numBtns.forEach(btn => btn.addEventListener("click", () => {
  // add if statement to make sure number isn't too long
  if (operator === '') {
    if (firstNum.toString().length > 10) {
      return;
    }
  } else if (secondNum !== '') {
    if (secondNum.toString().length > 10) {
      return;
    }
  }
  // add if statement so digits aren't appended to last answer

  if (btn.textContent === '.') {
    if (operator === '') {
      if (firstNum === '') {
        firstNum += '0';
        display.textContent = firstNum;
      } else if (firstNum.toString().includes('.')) {
        return;
      }
    } else {
      if (secondNum === '') {
        secondNum += '0';
        display.textContent = secondNum;
      } else if (secondNum.toString().includes('.')) {
        return;
      }
    }
  }

  if (operator === '') {
    firstNum += btn.textContent;
    display.textContent = firstNum;
  } else {
    secondNum += btn.textContent;
    display.textContent = secondNum;
  }
  }
));

signBtns.forEach(btn => btn.addEventListener('click', () => {
    if (operator === '' || secondNum === '') {
      operator = btn.textContent;
    } else {
      answer = operate(+firstNum, operator, +secondNum);
      display.textContent = Math.round(answer * 100000) / 100000;
      firstNum = answer;
      secondNum = '';
      operator = btn.textContent;
    }
}));

// make equal btn capable of continuing past calculations
equalBtn.addEventListener('click', () => {
  // not continuing calcs like it should
  if (display.textContent === Math.round(answer * 100000) / 100000) {
    answer = operate(+firstNum, lastOp, +lastCalc);
    display.textContent = Math.round(answer * 100000) / 100000;
  } else if (secondNum !== '') {
    answer = operate(+firstNum, operator, +secondNum);
    display.textContent = Math.round(answer * 100000) / 100000;
    firstNum = answer;
    lastOp = operator;
    lastCalc = secondNum;
    operator = '';
    secondNum = '';
  } 
});

clearBtn.addEventListener('click', () => {
  firstNum = '';
  operator = '';
  secondNum = '';
  display.textContent = '';
})

changeBtn.addEventListener('click', () => {
  if (firstNum === '') {
    return;
  }
  if (secondNum === '') {
    operator = '';
    firstNum = (0 - firstNum);
    display.textContent = firstNum;
  } else {
    secondNum = (0 - secondNum);
    display.textContent = secondNum;
  }
});

percentBtn.addEventListener('click', () => {
  if (secondNum === '' && firstNum !== '') {
    firstNum = firstNum / 10;
    display.textContent = firstNum;
  } else if (secondNum !== '') {
    secondNum = secondNum / 10;
    display.textContent = secondNum;
  }
});

bsBtn.addEventListener('click', () => {
  if (firstNum !== '' && secondNum === '') {
    if (firstNum.toString().length === 1) {
      firstNum = '';
    } else {
      firstNum = +(firstNum.toString().slice(0, -1));
    }
    display.textContent = firstNum;
  } else if (secondNum !== '') {
    if (secondNum.toString().length === 1) {
      secondNum = '';
    } else {
      secondNum = +(secondNum.toString().slice(0, -1));
    }
    display.textContent = secondNum;
  }
})