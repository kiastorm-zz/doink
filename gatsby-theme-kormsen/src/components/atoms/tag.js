import React from 'react';
import styled from '@emotion/styled';
import themedCss from '@styled-system/css';
import Text from './text';

const {yellow, turquoise, red, purple} = {
	washout: '#E9EDF0',
	yellow: '#F8D277',
	turquoise: '#71F4DB',
	red: '#FF9293',
	blue: '#99B5E6',
	purple: '#C89EDE'
};

const Tag = styled(({children, theme, ...props}) => {
	let config;

	switch (theme) {
		case 'live':
			config = {bg: turquoise, text: 'Live'};
			break;
		case 'stopped':
			config = {bg: red, text: 'Stopped'};
			break;
		case 'unpublishedchanges':
			config = {bg: red, text: 'Unpublished changes'};
			break;
		case 'sent':
			config = {bg: purple, text: 'Unpublished changes'};
			break;
		default:
		case 'draft':
			config = {bg: yellow, text: 'Draft'};
			break;
	}

	return (
		<Text tx="text" bg={config.bg} variant="micro" color="lightTarmac" {...props}>
			{config.text}
		</Text>
	);
})`
	${themedCss({
		pt: 1,
		px: 2,
		borderRadius: 10
	})}
`;

Tag.defaultProps = {
	theme: 'draft'
};

export default Tag;
