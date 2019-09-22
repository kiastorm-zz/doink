/**
 * The source to use to retrieve random numbers. Defaults to Math.random.
 * You can override this using setRandomSource, you would usually only do
 * this in tests.
 *
 * @private
 */
let randomSource = Math.random.bind(Math);

/**
 * @memberof utils
 * @description Generates a random string of provided length using [a-z].
 * @param   {Integer} length of the random string to be generated
 * @returns {String}
 *
 * @example
 * import { randomString } from '../utils';
 *
 * const id1 = randomString(5);
 * console.log(id1); // "cyetf"
 * const id2 = randomString(8);
 * console.log(id2); // "lesgvygw"
 */
const randomString = (length) => {
	let returnStr = '';

	while (returnStr.length < length) {
		returnStr += randomSource().toString(36).replace(/[^a-z]+/g, '');
	}

	return returnStr.substr(0, length);
};

/**
 * Overrides the source of random numbers that `randomString` will use. You
 * would usually only do this for tests where you need to control and
 * verify randomness.
 *
 * @param {Function} newRandomSource - a function to use to generate random numbers.
 * @private
 *
 * @example Overriding document during a test
 *
 *    beforeEach(() => {
 *      setRandomSource(() => 52);
 *    });
 *
 *    afterEach(() => {
 *      resetRandomSource();
 *    });
 */
export const setRandomSource = (newRandomSource) => {
	randomSource = newRandomSource;
};

/**
 * Resets the value of document that `getRandomSource` returns back to the global document.
 *
 * @private
 */
export const resetRandomSource = () => {
	randomSource = Math.random.bind(Math);
};

export default randomString;
