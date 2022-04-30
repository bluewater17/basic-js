const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    value !== undefined
      ? this.chain.push(`( ${value} )`)
      : this.chain.push('( )');
    return this;
  },
  removeLink(position) {
    // [2, 3, 4]
    if (
      typeof position !== 'number' ||
      position !== Math.trunc(position) ||
      !this.chain[position - 1]
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const stringChain = this.chain.map((chain) => `${chain}`).join('~~');
    this.chain = [];
    return stringChain;
  },
};

module.exports = {
  chainMaker,
};
