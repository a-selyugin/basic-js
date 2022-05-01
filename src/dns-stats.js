const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

// код вышел громоздкий и не очень понятный, поэтому напишу комментарии
function getDNSStats(domains) {
  let tmpArr = [];
  let domObj = {};
  let tmpStr;

  // формируем массив с частями доменных имен, разбивая каждую строку с разделением по точке
  for (let i = 0; i < domains.length; i++){
    tmpArr = domains[i].split('.').reverse();
    let domainNamesArr = [];

    // формируем массив доменных имен для каждого элемента входного массива 
    for (let j = 0; j < tmpArr.length; j++){
      tmpStr = '';
      for (let n = 0; n <= j; n++){
        tmpStr += ('.' + tmpArr[n]);
      }
      domainNamesArr[j] = tmpStr;
    }

    // добавляем свойства в объект с доменными именами или увеличиваем счетчик, если такое свойство уже есть 
    for (j = 0; j < domainNamesArr.length; j++){
      if (domObj[domainNamesArr[j]]){
        domObj[domainNamesArr[j]]++;
      }
      else{
        domObj[domainNamesArr[j]] = 1;
      }
    }
  }
  return domObj;
}

module.exports = {
  getDNSStats
};
