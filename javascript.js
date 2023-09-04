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

}


let firstNum = '';
let operator = '';
let secondNum = '';
let answer = '';

const display = document.querySelector('.display');

const numBtns = document.querySelectorAll('.number');

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