import hasValue from './has-value';

/**
 * @memberof utils
 * @description Test param (value) is a string.
 * @param   {Object} value Value to test
 * @returns {Boolean}
 *
 * @example
 * const str = isString({});
 * console.log(str); // false
 *
 * const str = isString('hello');
 * console.log(str); // true
 */
function isString(value) {
	return hasValue(value) && typeof value === 'string';
}

export default isString;
