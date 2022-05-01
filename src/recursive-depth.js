const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
/*
class DepthCalculator {
  calculateDepth(arr) {
    function recursiveCalc(checkArray){
      if (Array.isArray(checkArray)){
        return 1 + Math.max(0, ...checkArray.map(recursiveCalc));
      }
        return 0;
    } 
    return recursiveCalc(arr);
  }
}
*/
class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(checkArray) {
      if (Array.isArray(checkArray)){
        return 1 + Math.max(0, ...checkArray.map(this.calculateDepth));
      }
      return 0;
  } 
}
module.exports = {
  DepthCalculator
};
