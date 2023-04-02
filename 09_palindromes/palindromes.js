const palindromes = function (str) {
  str = str.toLowerCase();

  str = str.replace(/[^a-z]/g, "");

  console.log(str);

  let flag = true;

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] != str[j]) {
      flag = false;
    }
  }

  return flag;
};

// Do not edit below this line
module.exports = palindromes;
