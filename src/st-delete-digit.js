import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = [];
  let strArr = n.toString().split("");

  for (let i = 0; i < strArr.length; i++) {
    let strArrCopy = strArr.slice(0);
    strArrCopy.splice(i, 1);
    arr.push(Number(strArrCopy.join("")));
  }

  return Math.max(...arr);
}
