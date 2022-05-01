const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(machineIsDirect = true) {
    this.machineIsDirect = machineIsDirect;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    let result = '';
    const upperMessage = message.toUpperCase();
    let resultKey = '';
    let encriptKey = '';
    let count = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      if (
        upperMessage.charCodeAt(i) >= 65 &&
        upperMessage.charCodeAt(i) <= 90
      ) {
        encriptKey += key[count % key.length].toUpperCase();
        count++;
      } else {
        encriptKey += ' ';
      }
    }

    for (let i = 0; i < upperMessage.length; i++) {
      if (
        upperMessage.charCodeAt(i) >= 65 &&
        upperMessage.charCodeAt(i) <= 90
      ) {
        resultKey = String.fromCharCode(
          ((upperMessage.charCodeAt(i) - 65 + (encriptKey.charCodeAt(i) - 65)) %
            26) +
            65
        );
        result += resultKey;
      } else {
        result += message[i];
      }
    }

    const reversedResult = result.split('').reverse().join('');

    return this.machineIsDirect ? result : reversedResult;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    let result = '';
    const upperMessage = message.toUpperCase();
    let resultKey = '';
    let encriptKey = '';
    let count = 0;
    for (let i = 0; i < upperMessage.length; i++) {
      if (
        upperMessage.charCodeAt(i) >= 65 &&
        upperMessage.charCodeAt(i) <= 90
      ) {
        encriptKey += key[count % key.length].toUpperCase();
        count++;
      } else {
        encriptKey += ' ';
      }
      console.log(encriptKey);
    }

    for (let i = 0; i < upperMessage.length; i++) {
      if (
        upperMessage.charCodeAt(i) >= 65 &&
        upperMessage.charCodeAt(i) <= 90
      ) {
        resultKey = String.fromCharCode(
          ((upperMessage.charCodeAt(i) -
            65 -
            (encriptKey.charCodeAt(i) - 65) +
            26) %
            26) +
            65
        );
        result += resultKey;
      } else {
        result += message[i];
      }
    }

    const reversedResult = result.split('').reverse().join('');

    return this.machineIsDirect ? result : reversedResult;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
