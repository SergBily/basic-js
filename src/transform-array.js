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
	let resArr = [];
	if (!(Array.isArray(arr))) {
		throw new Error("'arr' parameter must be an instance of the Array!")
		}
		
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '--discard-next') {
				i++;
			} else if ((arr[i] === '--double-next')) {
				resArr.push(arr[i + 1]);
			} else if ((arr[i] === '--discard-prev')) {
				if (resArr.includes(arr[i - 1]) && resArr[resArr.length - 1] == arr[i - 1]) {
					resArr.pop();
				}
			} else if ((arr[i] === '--double-prev')) {
				if (resArr.includes(arr[i - 1]) && resArr[resArr.length - 1] == arr[i - 1]) {
					resArr.push(arr[i - 1]);
				}
			} else if(arr[i] !== undefined){
				resArr.push(arr[i])
			}
			
	}
	return resArr
}

module.exports = {
  transform
};
