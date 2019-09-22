export default (a, b) => {
	if (!a && !b) return false;
	if ((!a && b) || (a && !b)) return true;
	return a.valueOf() !== b.valueOf();
};
