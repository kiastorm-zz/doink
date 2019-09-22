import styled from '@emotion/styled';
import {shadow, compose, border, variant} from 'styled-system';
import css from '@styled-system/css';
import {Box} from './box';

const Card = styled(Box)(
	{
		boxSizing: 'border-box',
		cursor: 'pointer',
		transition: '.15s ease all' // <---- 	Normal CSS. Can NOT access theme variables
	},
	css({
		// <---- 	CSS that CAN access theme variables
		'&:hover': {
			borderWidth: 1,
			borderColor: 'tarmac',
			boxShadow: 'default'
		}
	}),
	compose(
		// <-----  	Adds multiple styled-system functions.
		border, //			Basically it makes border="" & shadow="" available to Tile components
		shadow // 			https://styled-system.com/table
	),
	variant({
		// <-----	Allow complex style variations using variant=""
		prop: 'state',
		variants: {
			active: {
				// <-----	<Tile variant="selected" />
				boxShadow: '0 0 0 .1rem turquoise',
				borderColor: 'turquoise',

				'&:hover': {
					boxShadow: '0 0 0 .1rem turquoise',
					borderColor: 'turquoise'
				}
			}
		}
	})
);

export default Card;

Card.defaultProps = {
	// <-----	Use defaultProps to set default styled-system values to components
	bg: 'white', // <-----	This should contain the styles shared by ALL of the components variants
	borderWidth: 1,
	borderColor: 'extraLightStorm',
	borderStyle: 'solid',
	borderRadius: '4'
};
