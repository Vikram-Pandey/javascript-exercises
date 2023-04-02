const sumAll = function (arg1, arg2) {
  if (Number.isInteger(arg1) == false || Number.isInteger(arg2) == false) {
    return "ERROR";
  }

  if (arg1 < 0 || arg2 < 0) {
    return "ERROR";
  }

  let large = arg1 > arg2 ? arg1 : arg2;
  let small = arg1 > arg2 ? arg2 : arg1;

  let sum = 0;
  for (let i = small; i <= large; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
