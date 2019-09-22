import D from './d';
import MMM from './mmm';
import YYYY from './yyyy';

/**
 * @memberof utils.date
 * @description Return date as format "27 Feb 2017".
 * @param   {Date}  date Date instance
 * @returns {String}
 *
 * @example
 * const date = DMMMYYYY(new Date('2017-02-27'));
 * console.log(date); // -> 27 Feb 2017
 */
function DMMMYYYY(date) {
	return `${D(date)} ${MMM(date)} ${YYYY(date)}`;
}

export default DMMMYYYY;
