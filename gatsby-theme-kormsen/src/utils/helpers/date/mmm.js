import getMonths from './get-months';

const shortMonths = getMonths('short');

/**
 * @memberof utils.date
 * @description Return abbreviated month name.
 * @param   {Date} date Date object
 * @returns {String}
 *
 * @example
 * const date = new Date('2017-02-05T06:35:00.0Z');
 * const shortMonth = MMM(date);
 * console.log(shortMonth); // -> Feb
 */
function MMM(date) {
	return shortMonths[date.getMonth()];
}

export default MMM;
