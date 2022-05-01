const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const reversed = [];

  for (let i = 0; i < domains.length; i++) {
    reversed.push(domains[i].split('.').reverse());
  }

  reversed.forEach((el) => {
    let DNS = '';
    for (let i = 0; i < el.length; i++) {
      DNS += '.' + el[i];
      if (result[DNS]) {
        result[DNS] += 1;
      } else {
        result[DNS] = 1;
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
