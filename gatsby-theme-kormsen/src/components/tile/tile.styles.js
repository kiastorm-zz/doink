import themedCss from '@styled-system/css';
import {border} from 'styled-system';
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import {Heading, Box, Text, Flex, Card, Absolute} from '../atoms'; //  <---- {Icon as IconAtom} so that 'Icon' can be used as name for styled component. Cleaner.

// Shared
const Title = styled(Heading)``;
const Subtext = styled(Text)``;

Title.defaultProps = {
	variant: 'h4'
};

// Boxed Variant
const BoxedContainerCard = styled(Card)``;
const BoxedContentFlex = styled(Flex)`
	flex-direction: column;
`;

BoxedContainerCard.defaultProps = {
	p: 6
};

// Preview Variant
const PreviewContainer = styled(Box)``;
const PreviewContentFlex = styled(Flex)``;

const CheckboxContainer = styled(Absolute)`
	${border}

	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1;
`;

const PreviewImageCard = styled(Card)`
	position: relative;

	${({state}) =>
		state === 'active' &&
		css`
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				opacity: 0.3;
				${themedCss({bg: 'turquoise'})}
			}
		`}
`;

PreviewContentFlex.defaultProps = {
	alignItems: 'center'
};

CheckboxContainer.defaultProps = {
	top: 3,
	right: 3,
	bg: 'whiteWashout',
	width: 9,
	height: 9,
	borderRadius: 4
};

export {
	Title,
	Subtext,
	BoxedContainerCard,
	BoxedContentFlex,
	PreviewContainer,
	PreviewContentFlex,
	PreviewImageCard,
	CheckboxContainer
};
