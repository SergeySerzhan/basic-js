import { NotImplementedError } from "../extensions/index.js";

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
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j >= key.length) j = 0;

      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) < 91) {
        result += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(j)) % 26) + 65
        );
        j++;
      } else result += message[i];
    }

    return this.direct ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      if (j >= key.length) j = 0;

      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) < 91) {
        result += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(j)) % 26) + 65
        );
        j++;
      } else result += message[i];
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}
