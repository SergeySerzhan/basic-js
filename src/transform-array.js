import { NotImplementedError } from "../extensions/index.js";

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (Object.prototype.toString.call(arr) !== "[object Array]")
    throw Error("'arr' parameter must be an instance of the Array!");

  let arrCopy = arr.slice(0);

  arrCopy.map((el, i) => {
    if (el === "--discard-next" && i + 1 < arrCopy.length - 1)
      arrCopy.splice(i, 2);
    else if (el === "--discard-next" && i + 1 >= arrCopy.length - 1)
      arrCopy.splice(i, 1);

    if (el === "--discard-prev" && i - 1 > 0) arrCopy.splice(i - 1, 2);
    else if (el === "--discard-prev" && i - 1 < 0) arrCopy.splice(i, 1);

    if (el === "--double-next" && i + 1 < arrCopy.length - 1)
      arrCopy.splice(i, 1, arrCopy[i + 1]);
    else if (el === "--double-next" && i + 1 >= arrCopy.length - 1)
      arrCopy.splice(i, 1);

    if (el === "--double-prev" && i - 1 > 0)
      arrCopy.splice(i, 1, arrCopy[i - 1]);
    else if (el === "--double-prev" && i - 1 < 0) arrCopy.splice(i, 1);
  });

  return arrCopy;

  // for (let i = 0; i < arrCopy.length; i++) {
  //   if (arrCopy[i] === "--discard-next" && i + 1 < arrCopy.length - 1)
  //     arrCopy.splice(i, 2);
  //   else if (arrCopy[i] === "--discard-next" && i + 1 >= arrCopy.length - 1)
  //     arrCopy.splice(i, 1);

  //   if (arrCopy[i] === "--discard-prev" && i - 1 > 0) arrCopy.splice(i - 1, 2);
  //   else if (arrCopy[i] === "--discard-prev" && i - 1 < 0) arrCopy.splice(i, 1);

  //   if (arrCopy[i] === "--double-next" && i + 1 < arrCopy.length - 1)
  //     arrCopy.splice(i, 1, arrCopy[i + 1]);
  //   else if (arrCopy[i] === "--double-next" && i + 1 >= arrCopy.length - 1)
  //     arrCopy.splice(i, 1);

  //   if (arrCopy[i] === "--double-prev" && i - 1 > 0)
  //     arrCopy.splice(i, 1, arrCopy[i - 1]);
  //   else if (arrCopy[i] === "--double-prev" && i - 1 < 0) arrCopy.splice(i, 1);
  // }

  // return arrCopy;
}
