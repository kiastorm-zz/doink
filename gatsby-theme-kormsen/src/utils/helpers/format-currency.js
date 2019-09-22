/**
 * @memberof utils
 * @description Format integer in cents to display amount in USD
 * @param   {Object} amountInCents Amount in cents
 * @returns {string}
 *
 * @example
 * const totalPrice = formatCurrency(4900);
 * console.log(totalPrice); // "$49.00"
 *
 * const discount = formatCurrency(2554);
 * console.log(totalPrice); // "$25.54"
 */


function formatCurrency(amountInCents) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(amountInCents / 100);
}

export default formatCurrency;
