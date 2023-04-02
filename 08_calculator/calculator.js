const add = function (var1, var2) {
  return var1 + var2;
};

const subtract = function (var1, var2) {
  return var1 - var2;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });

  return sum;
};

const multiply = function (arr) {
  let product = 1;

  arr.forEach((element) => {
    product = product * element;
  });

  return product;
};

const power = function (arg1, arg2) {
  let result;

  result = arg1 ** arg2;

  return result;
};

const factorial = function (arg1) {
  let result = 1;

  if (arg1 == 0 || arg1 == 1) {
    return 1;
  } else {
    let num = arg1 - 1;
    return arg1 * factorial(num);
  }
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
