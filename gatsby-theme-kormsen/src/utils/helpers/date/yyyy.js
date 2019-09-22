/**
 * @memberof utils.date
 * @description Return 4 digit year.
 * @param   {Date} date Date object
 * @returns {String}
 *
 * @example
 * const date = new Date('2017-02-05T06:35:00.0Z');
 * const year = YYYY(date);
 * console.log(year); // -> 2017
 */
function YYYY(date) {
	return date.getFullYear().toString();
}

export default YYYY;
