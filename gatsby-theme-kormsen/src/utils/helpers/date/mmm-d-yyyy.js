import D from './d';
import MMM from './mmm';
import YYYY from './yyyy';

/**
 * @memberof utils.date
 * @description Return date as format "Feb 27 2017".
 * @param   {Date}  date Date instance
 * @returns {String}
 *
 * @example
 * const date = DMMMYYYY(new Date('2017-02-27'));
 * console.log(date); // -> Feb 27 2017
 */
function MMMDYYYY(date) {
	return `${MMM(date)} ${D(date)}, ${YYYY(date)}`;
}

export default MMMDYYYY;
