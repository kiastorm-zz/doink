import prefixZero from '../prefix-zero';

/**
 * @memberof utils.date
 * @description Return minutes with leading zero.
 * @param   {Date} date Date object
 * @returns {String}
 *
 * @example
 * const date = new Date('2017-02-17T13:09:00.0Z');
 * const mintues = mm(date);
 * console.log(minutes); // -> 09
 */
function mm(date) {
	return prefixZero(date.getMinutes());
}

export default mm;
