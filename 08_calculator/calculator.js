const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let summ = 0;
	for (let i = 0; i < a.length; i++) {
	    summ += a[i];
	}
  return summ;
};

const multiply = function(a) {
   let times = 1;
  for (let i = 0; i < a.length; i++) {
    times *= a[i];
  }
  return times;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
    let factor = 1;
    for (let i = a; i > 0; i--) {
    factor *= i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
