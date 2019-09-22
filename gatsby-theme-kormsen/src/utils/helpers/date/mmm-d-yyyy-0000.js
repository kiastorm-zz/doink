import D from './d';
import MMM from './mmm';
import YYYY from './yyyy';

/**
 * @memberof utils.date
 * @description Return date as format "Apr 30, 2019 11:26AM".
 * @param   {Date}  date Date instance
 * @returns {String}
 *
 * @example
 * const date = DMMMYYYY(new Date('2017-02-27'));
 * console.log(date); // -> Apr 30, 2019 11:26AM
 */
function MMMDYYYY(date) {
	return `${MMM(date)} ${D(date)}, ${YYYY(date)} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}`;
}

export default MMMDYYYY;
