import prefixZero from '../prefix-zero';

/**
 * @memberof utils.date
 * @description Return hours with leading zero in 24 hour format.
 * @param   {Date} date Date object
 * @returns {String}
 *
 * @example
 * const date = new Date('2017-02-17T06:35:00.0Z');
 * const hours = HH(date);
 * console.log(hours); // -> 06
 */
/* istanbul ignore next */
function HH(date) {
	return prefixZero(date.getHours());
}

export default HH;
