
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

const operators = {
  add,
  subtract,
  multiply,
  divide,
}


const operate = function(operator, a,b) {
  operators.operator(a,b);
}
