import { NotImplementedError } from "../extensions/index.js";

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
export default function repeater(str, options) {
  function createAddition() {
    return options.additionRepeatTimes
      ? (
          options.addition +
          (options.additionSeparator ? options.additionSeparator : "|")
        )
          .repeat(options.additionRepeatTimes)
          .slice(
            0,
            -(options.additionSeparator ? options.additionSeparator.length : 1)
          )
      : options.addition
      ? options.addition
      : "";
  }

  return options.repeatTimes
    ? (str + createAddition() + (options.separator ? options.separator : "+"))
        .repeat(options.repeatTimes)
        .slice(0, -(options.separator ? options.separator.length : 1))
    : str + createAddition();
}
