import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let curEl = str[0];
  let count = 0;
  let result = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === curEl) count++;
    else {
      result += (count === 1 ? "" : count) + curEl;
      count = 1;
      curEl = str[i];
    }
  }

  return result;
}
