import D from './d';
import MMMDYYYY from './mmm-d-yyyy';
import MMM from './mmm';
import YYYY from './yyyy';

const MMMD = date => `${MMM(date)} ${D(date)}`;
const isSameMonth = (date1, date2) => MMM(date1) === MMM(date2);
const isSameYear = (date1, date2) => YYYY(date1) === YYYY(date2);

/**
 * @memberof utils.date
 * @description Return a formatted string between two dates.
 * @param   {Date}  date1 Earlier date
 * @param   {Date}  date2 Later date
 * @returns {String}
 *
 * @example
 * const date1 = new Date(2017, 12, 31);
 * const date2 = new Date(2018, 1, 6);
 * const dateRange = getDateRange(date1, date2);
 * console.log(dateRange); // -> Dec 31 2017 - Jan 06 2018
 *
 * @example
 * const date1 = new Date(2017, 2, 28);
 * const date2 = new Date(2017, 3, 6);
 * const dateRange = getDateRange(date1, date2);
 * console.log(dateRange); // -> Feb 28 - Mar 6, 2017
 *
 * @example
 * const date1 = new Date(2017, 2, 17);
 * const date2 = new Date(2017, 2, 23);
 * const dateRange = getDateRange(date1, date2);
 * console.log(dateRange); // -> Feb 17 - 23,2017
 */
function getDateRange(date1, date2) {
	if (!isSameYear(date1, date2)) {
		return `${MMMDYYYY(date1)} - ${MMMDYYYY(date2)}`;
	}

	if (!isSameMonth(date1, date2)) {
		return `${MMMD(date1)} - ${MMMD(date2)}, ${YYYY(date1)}`;
	}

	return `${MMM(date1)} ${D(date1)} - ${D(date2)}, ${YYYY(date1)}`;
}

export default getDateRange;
