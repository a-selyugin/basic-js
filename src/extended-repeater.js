const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str,options) {
  let ans = '';
  let tempStr = '';
  let addition = '';
  let tmpAddition = '';
  if (!(str === undefined)){

    tempStr = String(str);
    ans = tempStr;

    if (!(options.addition === undefined)){
      tmpAddition = String(options.addition);
      addition = String(options.addition);

      if (options.additionRepeatTimes){

        if (!(options.additionSeparator === undefined)){
          tmpAddition = String(options.additionSeparator) + tmpAddition; 
        }
        else{
          tmpAddition = '|' + tmpAddition;
        }
        for (let n = 0; n < (options.additionRepeatTimes - 1); n++){
          addition += tmpAddition;
        }
      }

      tempStr += addition;
      ans += addition;

    }

    if (options.repeatTimes){

      if (!(options.separator === undefined)){
        tempStr = String(options.separator) + tempStr;
      }
      else {
        tempStr = '+' + tempStr;
      }

      for (let i = 0; i < (options.repeatTimes - 1); i++){
        ans += tempStr;
      }
    }
    return ans;
  }
}

module.exports = {
  repeater
};
