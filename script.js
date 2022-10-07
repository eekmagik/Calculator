
//operator functions
const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a - b);
  
};

const multiply = function(a,b) {
  return (a*b);
 
};

const divide = function(a,b) {
  return (a/b);
  
};

const operate = function(a,b) {
  result = operator(a,b);
  toDisplay(result)
  histOperand1 = operand1;
  histoperand2 = operand2;
  operand1 = result;
  return result;
};


const inputCurrent = document.querySelector('.input-current');
const displayValue = document.createElement('div');

let operator = NaN;
let operand = NaN;
let operand1 = NaN;
let operand2 = NaN;
let result = NaN;

const numbers = function(number){
  
  if (isNaN(operand)) {
    toDisplay(number);
    return (operand = number);
  };


  if (operand.length === 18) {
    return;
  }
  
  else {
    operand = parseInt("" + operand + number);
    toDisplay(operand);
    return operand;
  };
};

const setOperand = function(number) {
  if (isNaN(operand1) === false){
    operand2 = number;
  };
  operand1 = number;
  operand = NaN;
};

const setOperator = function(variable) {
  if (typeof operator != 'function') {
    operator = variable;
    setOperand(operand);
    operand = NaN;
    toDisplay('');
  };
  if ((typeof operator === 'function') && (isNaN(operand1) === false)) {
    operator = variable;
  };
  if ((typeof operator === 'function') && (isNaN(operand) === false)) {
    result = operate();
  };
};

const toDisplay = function(number) {
    displayValue.textContent = number
    inputCurrent.appendChild(displayValue)
};

//button inputs

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(0);
});
const oneButton = document.querySelector('#one');
oneButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(1);
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(2);
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(3);
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(4);
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(5);
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(6);
});
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(7);
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(8);
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener("click", () => {
  // clickIndicator();
  numbers(9);
});
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener("click", () => {
  // clickIndicator();
  
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener("click", () => {
  // clickIndicator();
  operand2 = operand;
  operate(operand1,operand2);
});

const addButton = document.querySelector('#add');
addButton.addEventListener("click", () => {
  // clickIndicator();
  setOperator(add);
});

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener("click", () => {
  // clickIndicator();
  setOperator(subtract);
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener("click", () => {
  // clickIndicator();
  setOperator(multiply);
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener("click", () => {
  // clickIndicator();
  setOperator(divide);
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", () => {
  // clickIndicator();
  operand = NaN;
  operator = NaN;
  result = NaN;
  toDisplay('');
});
//const button = document.querySelector(${})





//display_value has a 19 char limit at min width
