const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let finalArray = [];
  if (arr instanceof Array){
    for (i = 0; i < arr.length; i++){
      if (arr[i] === '--discard-next'){
        i++;
      }
      else if (arr[i] == '--discard-prev'){
        if (arr[i-1]) {
          if (!(arr[i-2] === '--discard-next')){
            finalArray.pop();
          }
        }
      } 
      else if (arr[i] == '--double-next') {
        if (arr[i+1]){
          finalArray.push(arr[i+1]);
        }
      }
      else if (arr[i] == '--double-prev'){
        if (arr[i-1]) {
          if (!(arr[i-2] === '--discard-next')){
            finalArray.push(arr[i-1]);
          }
        }
      }
      else {
        finalArray.push(arr[i]);
      }
    }
  }
  else {
    throw new Error (`'arr' parameter must be an instance of the Array!`);
  }
  return finalArray;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
