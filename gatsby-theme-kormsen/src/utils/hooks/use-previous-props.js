import { useRef, useEffect } from 'react';

const usePreviousProps = (value) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export default usePreviousProps;
