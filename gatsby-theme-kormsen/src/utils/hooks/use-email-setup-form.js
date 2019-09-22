const useEmailSetupForm = (newAssetData, setNewAssetData) => {
	const handleInputChange = (_, targetProps) => {
		setNewAssetData({ ...newAssetData, [targetProps.target.name]: targetProps.target.value });
	};

	// TODO: Im not sure if this is the best way set the defaults for the form elements.  We need these to be empty
	// strings and not have newAssetData be NULL so we can validate the form if the user does not enter in anything and
	// clicks "continue" straightaway.  Otherwise validateForm will fail without any formInupts.
	if (!newAssetData) {
		setNewAssetData({
			name: '',
			subject: '',
			preview_text: '',
			from_name: '',
			from_email: '',
			track_replies: 'off',
			track_utm: 'on',
			cc: '',
			bcc: '',
			reply_to: '',
		});
	}

	const checkEmail = (email) => {
		// Return true if blank as checkExists will cover
		// us if it is a required value
		if (!email) return true;
		if (/(.+)@(.+){1,}\.(.+){2,}/.test(email)) {
			return true;
		}
		return false;
	};

	const checkExists = (formInputs, keys, invalidFields) => {
		if (!formInputs) return null;

		keys.forEach((k) => {
			if (!(typeof formInputs[k] === 'string' && formInputs[k].length > 0)) {
        invalidFields[k] = true; // eslint-disable-line
			}
		});
		return invalidFields;
	};

	// Checks valid email fields for all keys provided
	// returns updated invalidFields hash. This mode allows
	// multiple emails separated by a comma
	const checkEmailsMultiple = (formInputs, keys, invalidFields) => {
		if (!formInputs) return null;

		keys.forEach((k) => {
			if (!checkEmail(formInputs[k])) {
        invalidFields[k] = true; // eslint-disable-line
			}
		});
		return invalidFields;
	};

	// Checks valid email fields for all keys provided
	// returns updated invalidFields hash. This mode only
	// allows a single email
	const checkEmailsSingle = (formInputs, keys, invalidFields) => {
		if (!formInputs) return null;

		keys.forEach((k) => {
			if (!checkEmail(formInputs[k])) {
        invalidFields[k] = true; // eslint-disable-line
			}
		});
		return invalidFields;
	};

	const validateForm = (formInputs) => {
		if (!formInputs) return [];
		let invalidFields = {};

		invalidFields = checkEmailsMultiple(formInputs, ['cc', 'bcc'], invalidFields);
		invalidFields = checkEmailsSingle(formInputs, ['reply_to', 'from_email'], invalidFields);
		invalidFields = checkExists(formInputs, ['name', 'subject', 'from_name', 'from_email'], invalidFields);
		return [(Object.keys(invalidFields).length === 0), invalidFields];
	};

	return {
		handleInputChange,
		validateForm
	};
};

export default useEmailSetupForm;
