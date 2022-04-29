const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
    const sorted = members
      .filter((item) => typeof item === 'string')
      .map((item) => item.replace(/^[ ]+/g, ''));
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
      result.push(sorted[i][0]);
    }
    const res = result.map((elem) => elem.toUpperCase());
    return res.sort().join('');
  }
}

module.exports = {
  createDreamTeam,
};
