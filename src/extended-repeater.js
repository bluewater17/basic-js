const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  const additionArr = [];
  if (typeof str === 'object') {
    str = String(str);
  }
  if (options.additionRepeatTimes === undefined && options.repeatTimes > 0) {
    additionArr.push(options.addition);
  }
  if (
    options.repeatTimes === undefined &&
    options.additionRepeatTimes === undefined
  ) {
    return str + options.addition;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 0;
  }
  // addition
  if (options.addition === undefined) {
    options.addition = '';
  } else {
    options.addition = String(options.addition);
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 0;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(options.addition);
  }
  const additionStr = additionArr.join(options.additionSeparator);
  const subStr = str + additionStr;
  const res = Array(options.repeatTimes).fill(subStr).join(options.separator);
  return res;
}

module.exports = {
  repeater,
};
