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
	constructor(method) {
		this.method = method;
		this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
		'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z']
	}
	encrypt(message, key) {
		if (message == undefined || key == undefined) {
			throw new Error('Incorrect arguments!')
		}
		let messageA = message.toUpperCase();
		let keyA = key.toUpperCase();
		let lengthMessage = 0;
		let res = '';
		
		for (let i = 0; i < message.length; i++) {
			if (this.alphabet.includes(messageA[i])) {
				lengthMessage++;
			}
		}

		keyA = keyA.padEnd(lengthMessage, keyA);

		let indexMessage = []
		for (let i = 0; i < message.length; i++) {
			if (this.alphabet.includes(messageA[i])) {
				indexMessage.push(this.alphabet.indexOf(messageA[i]))
				
				let step = indexMessage[indexMessage.length - 1]
					+ this.alphabet.indexOf(keyA[indexMessage.length - 1]);

				if (step < 26) {
					res += this.alphabet[step];
				} else {
					res += this.alphabet[step - 26];
				}
			} else {
				res += message[i];
			}
		}
		if (this.method == false) {
			return res.split().reverse().join('');
		} else {
			return res;
		}
		
	}


	decrypt(message, key) {
		if (message == undefined || key == undefined) {
			throw new Error('Incorrect arguments!')
		} 
		let messageA = message.toUpperCase();
		let keyA = key.toUpperCase();
		let lengthMessage = 0;
		let res = '';
		
		for (let i = 0; i < message.length; i++) {
			if (this.alphabet.includes(messageA[i])) {
				lengthMessage++;
			}
		}
		keyA = keyA.padEnd(lengthMessage, keyA);

		let indexMessage = []
		for (let i = 0; i < message.length; i++) {
			if (this.alphabet.includes(messageA[i])) {
				indexMessage.push(this.alphabet.indexOf(messageA[i]))
				
				let step = indexMessage[indexMessage.length - 1]
					- this.alphabet.indexOf(keyA[indexMessage.length - 1]);

				if (step < 0) {
					res += this.alphabet[26 + step];
				} else {
					res += this.alphabet[step];
				}
			} else {
				res += message[i];
			}
		}
		if (this.method == false) {
			return res.split().reverse().join('');
		} else {
			return res;
		}
	}
}

module.exports = {
  VigenereCipheringMachine
};
