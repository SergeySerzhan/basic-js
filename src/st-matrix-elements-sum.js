import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i <= matrix[0].length - 1; i++) {
    let flag = false;
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[j][i] === 0) flag = true;
      else if (flag === true) flag = false;
      else sum += matrix[j][i];
    }
  }

  return sum;
}
