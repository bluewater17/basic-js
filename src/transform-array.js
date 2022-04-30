const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const newArr = [...arr];
  const res = [];
  const controls = [
    `--discard-next`,
    `--discard-prev`,
    `--double-next`,
    `--double-prev`,
  ];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === undefined) {
      continue;
    } else if (newArr[i] === controls[0]) {
      delete newArr[i + 1];
    } else if (newArr[i] === controls[1]) {
      if (newArr[i - 1] !== undefined) res.pop();
    } else if (newArr[i] === controls[2]) {
      if (newArr[i + 1] !== undefined) res.push(newArr[i + 1]);
    } else if (newArr[i] === controls[3]) {
      if (newArr[i - 1] !== undefined) res.push(arr[i - 1]);
    } else {
      res.push(newArr[i]);
    }
  }
  return res;
}

module.exports = {
  transform,
};
