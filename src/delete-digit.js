const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let strNum = n.toString();
  let tmpArr = [];
  let tmpStr;
  for (let i = 0; i < strNum.length; i++){
    tmpStr = '';
    for (let j = 0; j < strNum.length; j++){
      if (!(i===j)){
        tmpStr += strNum[j];
      }
    }
    tmpArr.push(Number(tmpStr));
  }
  return Math.max(...tmpArr);
}

module.exports = {
  deleteDigit
};
