const removeFromArray = function (array, ...args) {
  const resultArray = [];

  return array.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
