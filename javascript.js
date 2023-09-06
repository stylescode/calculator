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

const allBtns = document.querySelectorAll('.button');
const numBtns = document.querySelectorAll('.number');
const signBtns = document.querySelectorAll('.sign');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const changeBtn = document.querySelector('.change');
const percentBtn = document.querySelector('.percent');
const bsBtn = document.querySelector('.backspace');

// make sure number isn't too long
function tooLong() {
  if (operator === '' && firstNum.toString().length > 10) {
    if (firstNum !== answer) {
      return true;
    }
  } else if (secondNum.toString().length > 10) {
    return true;
  } else {
    return false;
  }
}

numBtns.forEach(btn => btn.addEventListener("click", () => {
  if (tooLong()) {
    return;
  }

  // make sure only one decimal per number
  if (btn.textContent === '.') {
    if (operator === '') {
      if (firstNum === '' || firstNum === answer) {
        firstNum = '0';
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
    if (firstNum === answer) {
      firstNum = '';
    }
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
    lastCalc = +secondNum;
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
      firstNum = (firstNum.toString().slice(0, -1));
    }
    display.textContent = firstNum;
  } else if (secondNum !== '') {
    if (secondNum.toString().length === 1) {
      secondNum = '';
    } else {
      secondNum = (secondNum.toString().slice(0, -1));
    }
    display.textContent = secondNum;
  }
})

// keyboard support

window.addEventListener('keydown', (e) => {
  allBtns.forEach(btn => {
    if ((btn.textContent === e.key) ||
        (btn.textContent === 'x' && e.key === '*') ||
        (btn.textContent === '<-' && e.key === 'Backspace') ||
        (btn.textContent === 'A/C' && e.key === 'Escape') ||
        (btn.textContent === '+/-' && e.key === ' ') ||
        (btn.textContent === '=' && e.key === 'Enter')) {
      btn.click();
    }
})
})

// create function to highlight active sign btns



/*
window.addEventListener('keydown', (e) => {
  console.log(e);
})

*/