/**
 * @memberof utils.date
 * @description Return day of month.
 * @param   {Date} date Date object
 * @returns {String}
 *
 * @example
 * const date = new Date('2017-02-05T06:35:00.0Z');
 * const day = D(date);
 * console.log(day); // -> 5
 */
function D(date) {
	return date.getDate().toString();
}

export default D;
