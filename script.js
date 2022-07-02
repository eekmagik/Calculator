
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

const operate = function(operator,a,b) {
  alert(operator(a,b));
};

const input_current = document.querySelector('.input-current');

const display_value = document.createElement('div');

//display_value has a 19 char limit at min width
display_value.textContent = "3.14159265358979323";

input_current.appendChild(display_value);