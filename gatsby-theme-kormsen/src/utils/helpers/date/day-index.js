/**
 * @memberof utils.date
 * @description Returns index of provided date within
 * the week. Javascript Date object treats Sunday as
 * first day of week and Saturday as last day.
 * However, Coogee considers Monday as first day and
 * Sunday as last day. This function returns index
 * based on Coogee
 *
 * @param   {Date}    date - An arbitary Date object
 * @returns {Number}
 *
 * @example
 * import dayIndex from 'coogee/shared/utils/date/day-index';
 * const date = new Date('Wed Mar 22 2017 12:16:09 GMT+1100 (AEDT)');
 * const index = dayIndex(date);
 * console.log(index); // -> 2
 */
const dayIndex = (date) => {
	const index = date.getDay();

	return index === 0
		? 6
		: index - 1;
};


export default dayIndex;
