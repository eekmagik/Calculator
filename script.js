
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
  if (b === 0){
    return "No. No you may not.";
  }
  return (a/b);
  
};

const inputHistory = document.querySelector('.input-history');
const inputCurrent = document.querySelector('.input-current');
const displayValue = document.createElement('div');
const histValue = document.createElement('div');


const toDisplay = function(number) {
  displayValue.textContent = number;
  inputCurrent.appendChild(displayValue);
};

const toHistory = function(calculation) {
  histValue.textContent = calculation;
  inputHistory.appendChild(histValue);
};


const operate = function(a,b) {
  
  if (typeof(operator) !== 'function'){
    return;
  }
  if ((isNaN(operand) !== true) && (isNaN(operand2))) {
    result = operand1;
    toDisplay(result)
    operand1 = result;
    lastpress = "operate";
    return;
  }
  operand = "";
  
  result = operator(a,b);
  toDisplay(result);
  toHistory(operand1 + " " + operatorChar + " " + operand2 + " = " + result)
  operand1 = result;
  lastpress = "operate";
};

let operator = null;
let operand = "";
let operand1 = NaN;
let operand2 = NaN;
let result = NaN;
let lastpress = "";
let operatorChar = "";

const numbers = function(number){
  if (number === "backspace") {
    operand = operand.slice(0, -1)
    toDisplay(operand);
    lastpress = "numbers";
    return;
  }
  if (number === "." && operand.includes(".")) {
    return;
  }
  if ((number === ".") && (operand === "")) {
    toDisplay("0" + number);
    lastpress = "numbers";
    operand = ("0" + number);
    return;
  }
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
  
  if((operand === "0") && (number != ".")){
    operand = number
    lastpress = "numbers";
    toDisplay(operand);
    return operand;
  }
  operand = operand + number;
  lastpress = "numbers";
  toDisplay(operand);
  return operand;
  
};

const setOperand = function(number) {
  if (operand.includes(".")){
    if (isNaN(operand1) === false){
      operand2 = parseFloat(number);
      toHistory(operand1 + " " + operatorChar + " " + operand2);
      toDisplay("");
      lastpress = "operand2";
      return;
    };
  
    operand1 = parseFloat(number);
    toHistory(operand1 + " " + operatorChar);
    operand = "";
    lastpress = "operand";
  }
  if (operand === ""){
    return;
  }
  if (isNaN(operand1) === false){
    operand2 = parseInt(number);
    toHistory(operand1 + " " + operatorChar + " " + operand2);
    toDisplay("");
    lastpress = "operand2";
    return;
  };

  operand1 = parseInt(number);
  toHistory(operand1 + " " + operatorChar);
  toDisplay("");
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
    toHistory(operand1 + " " + operatorChar)
    toDisplay("");
    lastpress = "setOperator";
  };
  
};


//number buttons

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener("click", () => {
  
  numbers('0');
});
const oneButton = document.querySelector('#one');
oneButton.addEventListener("click", () => {
  
  numbers('1');
});
const twoButton = document.querySelector('#two');
twoButton.addEventListener("click", () => {
  
  numbers('2');
});
const threeButton = document.querySelector('#three');
threeButton.addEventListener("click", () => {
  
  numbers('3');
});
const fourButton = document.querySelector('#four');
fourButton.addEventListener("click", () => {
  
  numbers('4');
});
const fiveButton = document.querySelector('#five');
fiveButton.addEventListener("click", () => {
  
  numbers('5');
});
const sixButton = document.querySelector('#six');
sixButton.addEventListener("click", () => {
  
  numbers('6');
});
const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener("click", () => {
  
  numbers('7');
});
const eightButton = document.querySelector('#eight');
eightButton.addEventListener("click", () => {
  
  numbers('8');
});
const nineButton = document.querySelector('#nine');
nineButton.addEventListener("click", () => {
  
  numbers('9');
});
const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener("click", () => {
  //clickIndicator();
  numbers('.');
});

const backButton = document.querySelector('#backspace');
backButton.addEventListener("click", () => {
  
  numbers('backspace');
});

//operator buttons

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener("click", () => {
  
  setOperand(operand);
  operate(operand1,operand2);
});

const addButton = document.querySelector('#add');
addButton.addEventListener("click", () => {
  operatorChar = "+";
  setOperator(add);
  });

const subtractButton = document.querySelector('#subtract');
subtractButton.addEventListener("click", () => {
  operatorChar = "-";
  setOperator(subtract);
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener("click", () => {
  operatorChar = "*";
  setOperator(multiply);
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener("click", () => {
  operatorChar = "/";
  setOperator(divide);
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener("click", () => {
  
  operand = "";
  operand1 = NaN;
  operand2 = NaN;
  operator = null;
  result = NaN;
  toDisplay("");
  toHistory("");
});

document.addEventListener('keydown', (event) => {
    console.log(event);
    if (((event.code).includes('Digit')) && (isNaN(event.key) === false)){
      numbers(event.key);
    };
    if (event.key=== "."){
      numbers(event.key);
    }
    if ((event.key) === '+'){
      operatorChar = "+";
      setOperator(add);
    }
    if ((event.key) === '-'){
      operatorChar = "-";
      setOperator(subtract);
    }
    if ((event.key) === '*'){
      operatorChar = "*";
      setOperator(multiply);
    }
    if ((event.key) === '/'){
      operatorChar = "/";
      setOperator(divide);
    }
    if (((event.key) === '=') || ((event.key) === 'Enter')){
      setOperand(operand);
    operate(operand1,operand2);
    }
    if ((event.key) === 'Backspace'){
      numbers('backspace');
    };
});





//display_value has a 19 char limit at min width
