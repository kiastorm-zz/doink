import getDateRange from './date/get-date-range';
import MMMDYYYY from './date/mmm-d-yyyy';
import hasValue from './has-value';

/**
 * @memberof utils
 * @description Returns readable date format.
 * - When passed single date param returns "27 Feb 2017"
 * - When passed two date params returns a ranged format "20 - 27, Feb 2017"
 * @param {Date} date1 - First Date instance
 * @param {Date} [date2] - Second Date instance
 * @returns {String}
 *
 * @example
 * const date = getReadableDate(new Date('2016-10-1'));
 * console.log(date); // -> 1 Feb 2016
 *
 * @example
 * const date = getReadableDate(new Date('2016-10-1'), new Date('2016-10-8'));
 * console.log(date); // -> 1 - 8, Oct 2016
 */
function getReadableDate(date1 = new Date(), date2) {
	if (hasValue(date2)) return getDateRange(date1, date2);
	return MMMDYYYY(date1);
}

export default getReadableDate;
