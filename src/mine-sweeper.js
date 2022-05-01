const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineSweeperArray = [];
  for (let i = 0; i < matrix.length; i++ ){
    mineSweeperArray.push([]);
    for (let j = 0; j < matrix[i].length; j++){
      mineSweeperArray[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i++ ){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === true){

        for (let n = (i-1); n <= (i+1); n++){
          for (let m = (j-1); m <= [j+1]; m++){
            if ((n >= 0) && (m >=0) && (n < matrix.length) && (m < matrix.length)){
              if (!((n === i) && (m === j))){
                mineSweeperArray[n][m]++;
              }
            }
          }
        }

      }
    }
  }
  return mineSweeperArray;
}

module.exports = {
  minesweeper
};
