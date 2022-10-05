
//operator functions
const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a,b) {
  return a*b;
};

const divide = function(a,b) {
  return (a/b);
};

const operate = function(operation,a,b) {
  alert(operation(a,b));
};


const inputCurrent = document.querySelector('.input-current');
const displayValue = document.createElement('div');
let operator = "";
let operand1 = "0";

const toDisplay = function(number) {
  if (operand1 === "0" && number != ".") {
    displayValue.textContent = number;
    return operand1 = displayValue.textContent; 
  }
  if (operand1.length === 18) {
    return;
  }

  if (number === "." && operand1.includes(number)) {
    return;
  }

  if (operand1 === ".") {
    displayValue.textContent = "0." + number;
    inputCurrent.appendChild(displayValue);
  return operand1 = displayValue.textContent; 
  }
  
  displayValue.textContent = operand1 + number;
  inputCurrent.appendChild(displayValue);
  return operand1 = displayValue.textContent; 
  
};

//button inputs

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('0');
});
const oneButton = document.querySelector('#one');
oneButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('1');
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('2');
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('3');
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('4');
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('5');
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('6');
});
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('7');
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('8');
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('9');
});
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener("click", () => {
  // clickIndicator();
  toDisplay('.');
});

const equalsButton = document.querySelector('#equals');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", () => {
  // clickIndicator();
  operand1 = "";
  toDisplay('');
});
//const button = document.querySelector(${})





//display_value has a 19 char limit at min width


