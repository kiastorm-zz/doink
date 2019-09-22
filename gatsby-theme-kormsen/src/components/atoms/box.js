import styled from '@emotion/styled';
import {Box as RebassBox} from 'rebass';
import {grid, position, flexbox} from 'styled-system';

export const Box = styled(RebassBox)`
	${grid}
`;

export const Flex = styled(Box)`
	${flexbox}

	display: flex;
`;

export const Grid = styled(Box)`
	${grid}

	display: grid;
`;

export const Absolute = styled(Box)`
	${position}

	position: absolute;
`;

export const Fixed = styled(Box)`
	${position}

	position: fixed;
`;

Grid.defaultProps = {
	gridGap: 3,
};
