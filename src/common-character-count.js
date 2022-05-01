const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let firstString = s1.split('');
  let secondString = s2.split('');
  let count = 0;
  for (let i = 0; i < firstString.length; i++){
    for (let j = 0; j < secondString.length; j++){
      if (firstString[i] === secondString[j]){
        firstString.splice(i, 1);
        secondString.splice(j, 1);
        count++;
        i--;
        j--;
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
