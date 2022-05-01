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
  constructor(value){
    this.IsReversed = value;
  }

  createKeyArray(key){
    let keyArray = [];
    let tmpKey = key.toLowerCase();
    for (let i = 0; i < tmpKey.length; i++){
      keyArray.push(tmpKey[i].charCodeAt(0) - 97);
    }
    return keyArray;
  }

  createDecryptArray(key){
    let decryptArray = [];
    let tmpKey = key.toLowerCase();
    for (let i = 0; i < tmpKey.length; i++){
      decryptArray.push(-1 * (tmpKey[i].charCodeAt(0) - 97));
    }
    return decryptArray;
  }

  getEncryptedArray(message, keyArray){
    let symbol = 0;
    let encryptedArray = [];
    let n = 0;
    let tmpMessage = message.toLowerCase();
    for (let i = 0; i < tmpMessage.length; i++){
      symbol = tmpMessage[i].charCodeAt(0);
      if ((symbol > 96) && (symbol < 123)){
        symbol += keyArray[n];
        n++
        if (symbol > 122){
          symbol -= 26;
        }
        if (symbol < 97){
          symbol += 26;
        }
        if (n > (keyArray.length - 1)){
          n = 0;
        }
      }
      
      encryptedArray.push(symbol);
    }
    return encryptedArray;
  }

  encrypt(message, key) {
    if (message && key){
      let tmpMessage = message;
      let keyArray = this.createKeyArray(key);
      let encryptedArray = this.getEncryptedArray(tmpMessage, keyArray);
      if (this.IsReversed === false){
        encryptedArray = encryptedArray.reverse();
      }
      return String.fromCharCode(...encryptedArray).toUpperCase();
    }
    else {
      throw new Error ('Incorrect arguments!');
    }
  }
  decrypt(message, key) {
    if (message && key){
      let tmpMessage = message;
      let keyArray = this.createDecryptArray(key);
      let decryptedArray = this.getEncryptedArray(tmpMessage, keyArray);
      if (this.IsReversed === false){
        decryptedArray = decryptedArray.reverse();
      }
      return String.fromCharCode(...decryptedArray).toUpperCase();
    }
    else {
      throw new Error ('Incorrect arguments!');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
