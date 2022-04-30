const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  if (date){
    if ((Object.prototype.toString.call(date) === '[object Date]') && !(date[Symbol.toStringTag] == 'Date'))
    {
      class Season {
        constructor(name, months){
          this.name = name;
          this.months = months;
        }
      }
      const winter = new Season ('winter',[0, 1, 11]);
      const spring = new Season ('spring',[2, 3, 4]);
      const summer = new Season ('summer',[5, 6, 7]);
      const autumn = new Season ('autumn',[8, 9, 10]);
    
      const seasonsArray = [winter, spring, summer, autumn];
    
      let month = date.getMonth();
    
      for (let season of seasonsArray){
        if (season.months.includes(month)) {
          return season.name;
        }
      }
    }
    else {
      throw new Error ('Invalid date!');
    }
  }
  else {
    return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};
