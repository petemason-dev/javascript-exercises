const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (array) {
  return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  return num === 0 ? 1 : multiply([...Array(num).keys()].map((i) => i + 1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
