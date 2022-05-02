const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let num = [];
	let str = n.toString().split('');
	for (let i = 0; i < str.length; i++) {
		str.splice(i, 1);
		num.push(+str.join(''));
		str.splice(i, 0, n.toString()[i]);


		console.log(+str.join(''));
	}
	return num.sort((a, b) => { return b - a })[0];
}

module.exports = {
  deleteDigit
};
