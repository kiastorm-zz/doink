/**
 * @memberof utils
 * @description  Sorts by key.
 * @param   {String}    a   first key
 * @param   {String}    b   second key
 * @returns {Integer}
 */

const sortByKey = (a, b) => {
	if(a.key < b.key) { return -1; }
	if(a.key > b.key) { return 1; }
	return 0;
};

export default sortByKey;

