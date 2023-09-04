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

// need listeners for nums, signs, equals, clear, +/-, %
numBtns.forEach(btn => btn.addEventListener("click", () => {
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
      display.textContent = answer;
      firstNum = answer;
      secondNum = '';
      operator = btn.textContent;
    }
}));

equalBtn.addEventListener('click', () => {
  if (secondNum !== '') {
    answer = operate(+firstNum, operator, +secondNum);
    display.textContent = answer;
    firstNum = answer;
    secondNum = '';

  }
});

clearBtn.addEventListener('click', () => {
  firstNum = '';
  operator = '';
  secondNum = '';
  display.textContent = '';
})



