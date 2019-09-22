import { useCallback, useState} from 'react';

/**
 * @memberof utils
 * @description  Receives millisecond amount and function,
 *               Returns throttled function.
 * @param   {Number}    input   input object
 * @param   {Function}  fn      function to be throttled
 * @returns {Function}          delay throttled function
 *
 * @example
 * import * as utils from 'some-path'
 * const useThrottle = throttle(handleScroll, 500);
 */

const useThrottle = (fn, delay = 1000) => {
	const [lastCall, setLastCall] = useState(0);

	return useCallback((...args) => {
		const now = (new Date()).getTime();
		if (now - lastCall < delay) {
			return;
		}

		setLastCall(now);
		// eslint-disable-next-line consistent-return
		return fn.apply(...args);
	}, [fn, delay, lastCall]);
};


export default useThrottle;
