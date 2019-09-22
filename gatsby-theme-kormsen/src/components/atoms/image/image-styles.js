import styled from '@emotion/styled';
import {Flex, Box} from '../box';

export const ImageContainer = styled(Box)``;

export const GhostImageContainer = styled(Flex)``;

export const GhostImageDiv = styled.div`
	pointer-events: none;
	display: inline-block;
	width: 100%;
	position: relative;
	padding-bottom: ${(props) => `${props.paddingOffset}%`};
`;

export const ImageTag = styled.img`
	width: ${({ghostContainer, fullWidth}) => (ghostContainer || fullWidth ? '100%' : 'auto')};
`;
