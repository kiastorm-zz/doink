const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

/**
 * @private
 * @description Return first 3 characters of a string.
 * @param   {String} str String to shorten.
 * @returns {String}
 */
const shorten = str => str.slice(0, 3);

/**
 * @memberof utils.date
 * @description Get an array of month name strings.
 * @param {Undefined} [format=long] Which format should months be
 * returned.
 * @returns {Array}   Array of months
 *
 * @example
 * const months = getMonths();
 * console.log(months); // -> ['January', 'February', ...]
 *
 * const months = getMonths('short');
 * console.log(months); // -> ['Jan', 'Feb', ...]
 */
function getMonths(format = 'long') {
	if (format === 'short') return months.map(shorten);
	return months;
}

export default getMonths;
