/* This is from http://stackoverflow.com/a/2901298 */

/**
 * @memberof utils
 * @description Separates thousands using a `,`
 * @param       {Number}      number      Input number
 * @returns     {String}      string representation of provided number and
 *                            thousands are separated by ,
 * @example
 * import thousandsSeparator from 'some-path';
 * const input = 1234567890;
 * const result = thousandsSeparator(input)
 * console.log(result); // -> 123,4567,890
 */
const thousandsSeparator = (number) => {
	if (typeof number === 'undefined' || number === null) {
		return '';
	}
	if (typeof number === 'number') {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
	return number;
};

export default thousandsSeparator;
