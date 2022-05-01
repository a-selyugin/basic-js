const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minIndex;
  let thirdGlass;
  for (let i = 0; i < arr.length; i++){
    while (arr[i] === -1){
      i++;
    }
    minIndex = i;
    for (let j = i; j < arr.length; j++){
      while (arr[j] === -1){
        j++;
      }
      if (arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    if (i !== minIndex){
      thirdGlass = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = thirdGlass;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
