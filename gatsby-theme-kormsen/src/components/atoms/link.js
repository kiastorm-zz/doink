import React, {forwardRef} from 'react';
import {Link as GatsbyLink} from 'gatsby';
import Text from './text';

const Link = forwardRef(({truncate, underline, bold, newTab, to, ...props}, ref) => {
	const isExternal = /^(f|ht)tps?:\/\//i.test([to]);

	return (
		<Text
			as={isExternal ? 'a' : GatsbyLink}
			href={isExternal ? to : null}
			to={!isExternal ? to : null}
			target={newTab || isExternal ? '_blank' : null}
			rel="noopener noreferrer"
			ref={ref}
			color="text"
			tx="text"
			
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
	);
});

Link.defaultProps = {
	variant: 'body',
	m: 0,
	p: 0
};

export default Link;
