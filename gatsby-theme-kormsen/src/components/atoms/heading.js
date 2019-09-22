import React, {forwardRef} from 'react';
import Text from './text';

const Heading = forwardRef((props, ref) =>
	<Text
		ref={ref}
		tx='text'
		color="text"
		{...props}
	/>
);

Heading.defaultProps = {

};

export default Heading;
        