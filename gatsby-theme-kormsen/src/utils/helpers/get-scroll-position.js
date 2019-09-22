/**
 * @memberof utils
 * @description Returns scroll position of DOM element
 * @param {Object} element - DOM element to track
 * @returns {Object}
 *
 * @example
 * const position = getScrollPosition(containerRef.current);
 * console.log(position); // -> { x: 532, y: 32 }
 */

export default function getScrollPosition(element) {
	const target = element || document.body;
	const position = target.getBoundingClientRect();

	return { x: position.left, y: position.top };
}
