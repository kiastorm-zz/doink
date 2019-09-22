export default function isEmail(email) {
	// Return true if blank as checkExists will cover
	// us if it is a required value
	if (!email) return true;
	if (/(.+)@(.+){1,}\.(.+){2,}/.test(email)) {
		return true;
	}
	return false;
};
