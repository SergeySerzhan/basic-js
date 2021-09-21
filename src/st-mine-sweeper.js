import { NotImplementedError } from "../extensions/index.js";

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
export default function minesweeper(matrix) {
  return matrix.map((arr, i) =>
    arr.map((_, j) => {
      let count = 0;
      if (i === 0) {
        if (j === 0) {
          if (matrix[i][j + 1]) count++;
          if (matrix[i + 1][j]) count++;
          if (matrix[i + 1][j + 1]) count++;
        } else if (j === matrix[0].length - 1) {
          if (matrix[i][j - 1]) count++;
          if (matrix[i + 1][j - 1]) count++;
          if (matrix[i + 1][j]) count++;
        } else {
          if (matrix[i][j - 1]) count++;
          if (matrix[i][j + 1]) count++;
          if (matrix[i + 1][j - 1]) count++;
          if (matrix[i + 1][j]) count++;
          if (matrix[i + 1][j + 1]) count++;
        }
      } else if (i === matrix.length - 1) {
        if (j === 0) {
          if (matrix[i][j + 1]) count++;
          if (matrix[i - 1][j]) count++;
          if (matrix[i - 1][j + 1]) count++;
        } else if (j === matrix[0].length - 1) {
          if (matrix[i][j - 1]) count++;
          if (matrix[i - 1][j - 1]) count++;
          if (matrix[i - 1][j]) count++;
        } else {
          if (matrix[i][j - 1]) count++;
          if (matrix[i][j + 1]) count++;
          if (matrix[i - 1][j - 1]) count++;
          if (matrix[i - 1][j]) count++;
          if (matrix[i - 1][j + 1]) count++;
        }
      } else if (j === 0) {
        if (matrix[i][j + 1]) count++;
        if (matrix[i - 1][j]) count++;
        if (matrix[i - 1][j + 1]) count++;
        if (matrix[i + 1][j]) count++;
        if (matrix[i + 1][j + 1]) count++;
      } else if (j === matrix[0].length - 1) {
        if (matrix[i][j - 1]) count++;
        if (matrix[i - 1][j]) count++;
        if (matrix[i - 1][j - 1]) count++;
        if (matrix[i + 1][j]) count++;
        if (matrix[i + 1][j - 1]) count++;
      } else {
        if (matrix[i][j - 1]) count++;
        if (matrix[i][j + 1]) count++;
        if (matrix[i - 1][j - 1]) count++;
        if (matrix[i - 1][j]) count++;
        if (matrix[i - 1][j + 1]) count++;
        if (matrix[i + 1][j - 1]) count++;
        if (matrix[i + 1][j]) count++;
        if (matrix[i + 1][j + 1]) count++;
      }

      return count;
    })
  );
}
