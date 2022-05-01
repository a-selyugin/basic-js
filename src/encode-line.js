const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ans = '';
  let checkSymbol = '';
  let count = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] == checkSymbol){
      count++;
    }
    else {
      if (count > 1){
        ans += String(count) + checkSymbol;
      }
      else {
        ans += checkSymbol;
      }
      count = 1;
      checkSymbol = str[i];
    }
  }
  if (count > 1){
    ans += String(count) + checkSymbol;
  }
  else {
    ans += checkSymbol;
  }
  return ans;

}

module.exports = {
  encodeLine
};
