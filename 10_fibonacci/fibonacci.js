const fibonacci = function (num) {
  let result = 0;

  num = Number(num);

  if (num < 0) {
    return "OOPS";
  } else {
    if (num == 0 || num == 1) {
      return num;
    }
    let num1 = 0;
    let num2 = 1;
    for (let i = 2; i <= num; i++) {
      result = num1 + num2;
      num1 = num2;
      num2 = result;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = fibonacci;
