const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let target = String(str);

	if (options == undefined) {
		return target;
	} 

	let obj = options;
	let res = [];
	let addStr;
	if (obj.addition !== undefined) {
		addStr = String(obj.addition);
	}
	
	let addRes = []

	if (obj.additionRepeatTimes !== undefined) {
		for (let i = 0; i < obj.additionRepeatTimes; i++) {
			addRes.push(addStr)
		} 
	} else {
		addRes.push(addStr)
	}

	if (obj.additionSeparator !== undefined) {
		addRes = addRes.join(obj.additionSeparator);
	} else {
		addRes = addRes.join('|');
	}

	
	console.log(obj.separator);

	if (obj.hasOwnProperty('repeatTimes') && obj.hasOwnProperty('addition')) {
		for (let i = 0; i < obj.repeatTimes; i++) {
			
			if (addRes.length >= 2) {
				res.push(target + addRes)
			} else {
				res.push(target + addStr)
			}		
		} 
	}else if (obj.hasOwnProperty('repeatTimes')) {
		for (let i = 0; i < obj.repeatTimes; i++) {
			res.push(target)
		} 
	} else {
		if (obj.hasOwnProperty('addition')) {
			res.push(target + addStr);
		} else {
			res.push(target);
		}
	}
		

	if (obj.separator !== undefined) {
		 res =  res.join(obj.separator)
	} else {
		 res = res.join('+');
	}

	
		return res;
}

module.exports = {
  repeater
};
