
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

const inputCurrent = document.querySelector('.input-current');
const displayValue = document.createElement('div');

const operate = function(a,b) {
  operand = "";
  
  result = operator(a,b);
  toDisplay(result)
  operand1 = result;
  lastpress = "operate";
};

let operator = null;
let operand = "";
let operand1 = NaN;
let operand2 = NaN;
let result = NaN;
let lastpress = "";

const numbers = function(number){
  if (lastpress === "operate") {
    operand1 = NaN;
    operand2 = NaN;
    operator = null;
    result = NaN;
    lastpress = "numbers";
  }
  if (operand === "") {
    toDisplay(number);
    lastpress = "numbers";
    return (operand = number);
  };

  if (operand.length === 18) {
    return;
  };
  
  operand = operand + number;
  lastpress = "numbers";
  toDisplay(operand);
  return operand;
  
};

const setOperand = function(number) {
  if (operand === ""){
    return;
  }
  if (isNaN(operand1) === false){
    operand2 = parseInt(number);
    lastpress = "operand2";
    return;
  };

  operand1 = parseInt(number);
  operand = "";
  lastpress = "operand";
  
};

const setOperator = function(variable) {
  if ((lastpress === "numbers") && (operator != null)) {
    lastpress= "setOperator";
    setOperand(operand);
    result = operate(operand1,operand2);
    operator = variable;
  }
  if (typeof operator != 'function' || operator === null) {
    operator = variable;
    setOperand(operand);
    operand = "";
    lastpress = "setOperator";
    
  };
  if ((typeof operator === 'function') && (lastpress != "operand2")) {
    operator = variable;
    lastpress = "setOperator";
  };
  
};

const toDisplay = function(number) {
    displayValue.textContent = number
    inputCurrent.appendChild(displayValue)
};

//number buttons

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('0');
});
const oneButton = document.querySelector('#one');
oneButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('1');
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('2');
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('3');
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('4');
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('5');
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('6');
});
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('7');
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('8');
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener("click", () => {
  // clickIndicator();
  numbers('9');
});
//const decimalButton = document.querySelector('#decimal');
//decimalButton.addEventListener("click", () => {
  // clickIndicator();
//});

//operator buttons

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener("click", () => {
  // clickIndicator();
  setOperand(operand);
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
  operand = "";
  operand1 = NaN;
  operand2 = NaN;
  operator = null;
  result = NaN;
  toDisplay('');
});
//const button = document.querySelector(${})





//display_value has a 19 char limit at min width
