const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let count = 1;
	let res = [];
	let arr = str.split('')
	console.log(arr);
	for (let i = 0; i < str.length; i++) {
		if (arr[i] == arr[i + 1]) {
			count++;
		} else if(count >= 2){
			res.push(`${count}${arr[i]}`);
			count = 1;
		} else {
			res.push(arr[i])
		}
		
	}
	return res.join('')
}

module.exports = {
  encodeLine
};
