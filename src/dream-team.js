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
	let dreaTeam = '';
	let arrNames = [];
	if (!Array.isArray(members)) {
		return false;
	} else {
		members.forEach(name => {
			if (typeof name == 'string') {
	
				if (name.split('').includes(' ')) {
	
					let noSpace = [];
					name.split(' ').forEach(el => {
						if (el !== '') {
							noSpace.push(el);
						}
					});
					let noFamily = noSpace[0];
					 arrNames.push(noFamily[0].toUpperCase() + noFamily.slice(1));
				} else {
					arrNames.push(name[0].toUpperCase() + name.slice(1));
				}
			}
		})
	}
		
	let nameSort = arrNames.sort();

	nameSort.forEach(name => {
		dreaTeam += name[0];
	})
	return dreaTeam;
}

module.exports = {
  createDreamTeam
};
