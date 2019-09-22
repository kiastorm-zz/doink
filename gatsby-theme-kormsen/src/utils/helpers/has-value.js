/**
 * @memberof utils
 * @description checks if passed value is not equal to `null` or `undefined`.
 * @param   {Object}    input   input object
 * @returns {Boolean}           Does it point to a value in memory?
 *
 * @example
 * import hasValue from 'some-path';
 * const hasValue = hasValue('foo');
 */
const hasValue = input => typeof input !== 'undefined' && input !== null;

export default hasValue;
