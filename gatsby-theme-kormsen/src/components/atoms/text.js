import React, {forwardRef} from 'react';
import {Box} from './box';

const Text = forwardRef(({bold, truncate, underline, ...props}, ref) => (
	<Box
		ref={ref}
		tx="text"
		color="text"
		{...props}
		sx={{
			maxWidth: truncate && '100%',
			overflow: truncate && 'hidden',
			textOverflow: truncate && 'ellipsis',
			whiteSpace: truncate && 'nowrap',
			textDecoration: underline && 'underline',
			fontWeight: bold && '700'
		}}
	/>
));

Text.defaultProps = {
};

export default Text;
