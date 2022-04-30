const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let activity = +sampleActivity;
  if ((typeof sampleActivity === 'string') && (activity) && (activity < MODERN_ACTIVITY) && (activity > 0)){
    return Math.ceil(Math.abs(HALF_LIFE_PERIOD * Math.log2 ( activity / MODERN_ACTIVITY )));
  }
  else {
    return false;
  }
}


module.exports = {
  dateSample
};
