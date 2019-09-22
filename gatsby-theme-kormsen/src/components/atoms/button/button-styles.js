import React from 'react';
import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {Box, Icon} from '../atoms';
import helpers from '../../helpers';

const buttonPadding = ({icon, iconRight, color, buttonHasText}) => {
	const isGhost = color === 'ghost';
	let padding = '0rem';

	// button without icon
	if (!icon && !isGhost) {
		padding = '1.0rem 1.1rem 1.0rem 1.1rem';
	} else if (isGhost) {
		padding = '1.0rem 0.8rem 1.0rem 0.8rem';
	}

	// button with icon
	if (icon && buttonHasText && !isGhost) {
		padding = '0.9rem 0.9rem 0.7rem 1.1rem';
	}

	// button with icon and iconRight
	if (iconRight && buttonHasText && !isGhost) {
		padding = '0.9rem 0.6rem 0.7rem 1.1rem';
	}

	// button with only icon
	if (icon && !buttonHasText) {
		padding = '0.9rem 0.9rem 0.7rem 0.9rem';
	}

	return padding;
};

const buttonWidth = ({iconOnlyAt, buttonHasText, color}) => {
	let width = 'auto';

	if (buttonHasText && color !== 'ghost' && color !== 'form' && !iconOnlyAt) {
		width = '8rem';
	}

	return width;
};

const buttonMarginLeft = ({leftAlignContent}) => {
	let marginLeft = null;

	if (leftAlignContent) {
		marginLeft = '-0.9rem';
	}

	return marginLeft;
};

const buttonMarginRight = ({rightAlignContent}) => {
	let marginRight = null;

	if (rightAlignContent) {
		marginRight = '-0.9rem';
	}

	return marginRight;
};

const buttonColor = ({theme, color}) => {
	switch (color) {
		case 'primary':
			return theme.colors.whiteWashout;
		case 'secondary':
			return theme.colors.tarmac;
		case 'destructive':
			return theme.colors.whiteWashout;
		default:
			return theme.colors.lightTarmac;
	}
};

const buttonHoverColor = ({theme, disabled, color}) => {
	if (disabled) return null;

	switch (color) {
		case 'primary':
			return theme.colors.whiteWashout;
		case 'secondary':
			return theme.colors.tarmac;
		case 'destructive':
			return theme.colors.whiteWashout;
		case 'ghost':
			return theme.colors.tarmac;
		default:
			return null;
	}
};

const buttonBackgroundColor = ({theme, color}) => {
	switch (color) {
		case 'primary':
			return theme.colors.tarmac;
		case 'secondary':
			return theme.colors.whiteWashout;
		case 'destructive':
			return theme.colors.red;
		case 'ghost':
			return 'transparent';
		case 'circle':
			return theme.colors.whiteWashout;
		default:
			return theme.colors.whiteWashout;
	}
};

const buttonHoverBackgroundColor = ({theme, disabled, styleAs, buttonHasText, color}) => {
	if (disabled) return null;

	if (styleAs === 'input') {
		return theme.colors.whiteWashout;
	}

	switch (color) {
		case 'ghost':
			return !buttonHasText ? 'transparent' : theme.colors.lightWashout;
		case 'secondary':
			return theme.colors.lightWashout;
		case 'circle':
			return theme.colors.lightWashout;
		default:
			return null;
	}
};

const buttonFocusBackgroundColor = ({theme, styleAs, color, buttonHasText}) => {
	if (styleAs === 'input') {
		return 'transparent';
	}

	switch (color) {
		case 'primary':
			return theme.colors.tarmac;
		case 'secondary':
			return theme.colors.washout;
		case 'destructive':
			return theme.colors.red;
		case 'ghost':
			return !buttonHasText ? 'transparent' : theme.colors.lightWashout;
		case 'circle':
			return theme.colors.washout;
		default:
			return null;
	}
};

const buttonFocusBoxShadow = ({theme, focus}) => {
	let boxShadow = 'none';
	if (focus) {
		boxShadow = `inset 0px 0px 0px .1rem ${theme.colors.turquoise}`;
	}
	return boxShadow;
};

const borderColor = ({theme, color, error}) => {
	switch (color) {
		default:
		case 'primary':
			return theme.colors.tarmac;
		case 'secondary':
			if (error) return theme.colors.red;
			return theme.colors.storm;
		case 'destructive':
			return theme.colors.red;
		case 'ghost':
			return 'transparent';
		case 'circle':
			return theme.colors.tarmac;
		case 'form':
			return theme.colors.extraLightStorm;
	}
};

const borderHoverColor = ({theme, disabled, color}) => {
	if (disabled) return null;

	switch (color) {
		case 'primary':
			return theme.colors.tarmac;
		case 'secondary':
			return theme.colors.tarmac;
		case 'destructive':
			return theme.colors.red;
		case 'ghost':
			return 'transparent';
		default:
			return theme.colors.tarmac;
	}
};

const borderFocusColor = ({theme, color, disabled, focus}) => {
	if (disabled) return null;
	if (focus) return theme.colors.turquoise;

	switch (color) {
		case 'primary':
			return theme.colors.tarmac;
		case 'secondary':
			return theme.colors.tarmac;
		case 'destructive':
			return theme.colors.tarmac;
		case 'ghost':
			return 'transparent';
		default:
			return null;
	}
};

const rippleColor = ({theme, disabled, color}) => {
	if (disabled) return null;
	switch (color) {
		case 'primary':
			return theme.colors.whiteWashout;
		case 'secondary':
			return theme.colors.lightStorm;
		case 'destructive':
			return theme.colors.whiteWashout;
		case 'ghost':
			return theme.colors.lightStorm;
		default:
			return null;
	}
};

const buttonTextPadding = ({icon, children, iconRight}) => {
	let margin = '0rem';

	// button with icon
	if (icon && children) {
		margin = '0.1rem 0.2rem 0 0.8rem';
	}

	// button with only right icon
	if (iconRight && !icon && children) {
		margin = '0.1rem 0.2rem 0 0rem';
	}

	return margin;
};

const buttonTextUnderline = ({theme, disabled, underline}) => {
	if (disabled) return 'none';

	if (underline) {
		return css`
			position: relative;

			&:after {
				content: '';
				position: absolute;
				bottom: -0.4rem;
				left: 0;
				width: 100%;
				height: 0.1rem;
				background-color: ${theme.colors.extraLightStorm};
			}
		`;
	}

	return null;
};

const buttonHoverOpacity = ({disabled, color}) => {
	if (disabled) return null;
	return color === 'primary' || color === 'destructive' ? '0.8' : '1';
};

const buttonFocusOpacity = ({disabled, color}) => {
	if (disabled) return null;
	return color === 'primary' || color === 'destructive' ? '0.8' : '1';
};

const fontWeight = ({color}) => {
	switch (color) {
		case 'primary':
			return '700';
		case 'secondary':
			return '500';
		case 'destructive':
			return '700';
		case 'form':
			return '400';
		case 'ghost':
			return '400';
		default:
			return '500';
	}
};

const iconFillColor = ({theme, color}) => {
	switch (color) {
		case 'primary':
			return theme.colors.whiteWashout;
		case 'secondary':
			return theme.colors.storm;
		case 'destructive':
			return theme.colors.whiteWashout;
		case 'ghost':
			return theme.colors.storm;
		case 'circle':
			return theme.colors.tarmac;
		default:
			return theme.colors.storm;
	}
};

const iconHoverFillColor = ({theme, color, disabled, styleAs}) => {
	if (disabled) return null;

	if (styleAs === 'input') {
		return theme.colors.storm;
	}

	switch (color) {
		case 'primary':
			return theme.colors.whiteWashout;
		case 'secondary':
			return theme.colors.tarmac;
		case 'destructive':
			return theme.colors.whiteWashout;
		case 'ghost':
			return theme.colors.tarmac;
		default:
			return theme.colors.tarmac;
	}
};

const spinnerFillColor = ({theme, color}) => {
	switch (color) {
		case 'primary':
			return theme.colors.whiteWashout;
		case 'secondary':
			return theme.colors.storm;
		case 'destructive':
			return theme.colors.whiteWashout;
		case 'ghost':
			return theme.colors.storm;
		default:
			return null;
	}
};

const spinnerFillBgColor = ({color}) => {
	switch (color) {
		case 'primary':
			return 'rgba(255,255,255,.3)';
		case 'secondary':
			return 'rgba(0,0,0,.1)';
		case 'destructive':
			return 'rgba(255,255,255,.3)';
		case 'ghost':
			return 'rgba(0,0,0,.1)';
		default:
			return null;
	}
};

const iconCss = css`
	fill: ${(props) => iconFillColor(props)};
	transition: all 150ms ease-out;
	margin-left: ${({fullWidth}) => fullWidth && 'auto'};
`;

export const ButtonIcon = styled(props => <Icon {...props} />)`
	${iconCss}
`;

export const ButtonIconRight = styled(props => <Icon {...props} />)`
	${iconCss}
`;

export const ButtonText = styled.span`
	margin: ${(props) => buttonTextPadding(props)};
	display: inline-block;
	vertical-align: top;
	${(props) => buttonTextUnderline(props)};

	&:first-letter {
		text-transform: uppercase;
	}
`;

export const LinkComponent = styled(Link)`
	color: inherit;
	position: relative;
	display: inline-block;
	pointer-events: ${({disabled}) => (disabled ? 'none' : 'auto')};
	:focus {
		outline: none;
	}
`;

export const LinkWrapper = styled.div`
	display: inline-block;
	${LinkComponent} {
		:focus {
			&:after {
				left: ${({leftAlignContent}) => (leftAlignContent ? '-0.8rem' : 0)};
			}
		}
	}
`;

export const ButtonElement = styled(Box)`
	position: ${({absolute}) => (absolute ? 'absolute' : 'relative')};
	overflow: hidden;
	display: ${({fullWidth}) => (fullWidth ? 'flex' : 'inline-block')};
	vertical-align: top;
	cursor: ${({disabled}) => (disabled ? 'default' : 'pointer')};
	-webkit-appearance: none;
	padding: ${(props) => buttonPadding(props)};
	min-width: ${(props) => buttonWidth(props)};
	margin-left: ${(props) => buttonMarginLeft(props)};
	margin-right: ${(props) => buttonMarginRight(props)};
	white-space: nowrap;
	font-weight: ${(props) => fontWeight(props)};
	font-size: 1.4rem;
	line-height: 1.4rem;
	outline: none;
	background: ${(props) => buttonBackgroundColor(props)};
	color: ${(props) => buttonColor(props)};
	border-radius: ${({color}) => (color === 'circle' ? '50%' : '0.4rem')};
	box-shadow: ${({theme, color}) => (color === 'circle' ? theme.shadows.element : 0)};
	border-width: 0.1rem;
	border-style: solid;
	border-color: ${(props) => borderColor(props)};
	opacity: ${({disabled}) => (disabled ? '0.5' : '1.0')};
	transition: all 150ms ease-out;
	height: 3.6rem;
	${({fullWidth}) =>
		fullWidth &&
		`
    width: 100%;
    text-align: left;
  `}
	${ButtonText} {
		text-decoration: ${(props) => buttonTextUnderline(props)};
	}
	&::-moz-focus-inner {
		border: 0;
		padding: 0;
	}
	:hover {
		transition: all 150ms ease-out;
		color: ${(props) => buttonHoverColor(props)};
		opacity: ${(props) => buttonHoverOpacity(props)};
		border-color: ${(props) => borderHoverColor(props)};
		background-color: ${(props) => buttonHoverBackgroundColor(props)};
		outline: none;
		${ButtonIcon} {
			fill: ${iconHoverFillColor};
		}
	}
	:focus {
		outline: none;
		transition: none;
		opacity: ${(props) => buttonFocusOpacity(props)};
		border-color: ${(props) => borderFocusColor(props)};
		background-color: ${(props) => buttonFocusBackgroundColor(props)};
		box-shadow: ${(props) => buttonFocusBoxShadow(props)};
	}
	${({buttonHasText, color}) =>
		!buttonHasText &&
		color === 'ghost' &&
		`
    :after {
      content: '';
      position: absolute;
      pointer-events: none;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 3.6rem;
      background: rgba(0,0,0, 0);
      border-radius: 50%;
      transition: all 150ms ease-out;
      transform: scale(0.8);
    }
  `}
	:hover:after {
		background: rgba(99, 116, 128, 0.06);
		transform: scale(1);
	}
	:focus:after {
		background: rgba(99, 116, 128, 0.12);
		transform: scale(1);
	}
	@media (max-width: ${({iconOnlyAt}) => iconOnlyAt}) {
		padding-left: 1rem;
		padding-right: 1rem;
		${ButtonText},
		${ButtonIconRight} {
			display: none;
		}
	}
	${helpers.below.tl`
    &:hover {
      opacity: 1;
    }
  `}
`;

export const ButtonRipple = styled.span`
	display: ${({buttonHasText, color}) => (!buttonHasText && color === 'ghost' ? 'none' : 'block')};
	pointer-events: none;
	position: absolute;
	border-radius: 50%;
	left: 50%;
	top: 50%;
	width: 7.2rem;
	height: 7.2rem;
	background-color: ${(props) => rippleColor(props)};
	opacity: 0;
	transform: translate(-50%, -50%) scale(1);
	transition: opacity 900ms, transform 300ms;
	${ButtonElement}:active & {
		opacity: 0.22;
		transform: translate(-50%, -50%) scale(0);
		transition: transform 0s;
	}
`;

export const RippleBg = styled.span`
	pointer-events: none;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

const spinAnimation = css`
	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;

export const Loader = styled.span`
	${spinAnimation}
	position: absolute;
	top: 50%;
	left: 50%;
	width: 1.6rem;
	margin-top: -0.8rem;
	margin-left: -0.8rem;
	height: 1.6rem;
	border: 0.2rem solid ${(props) => spinnerFillBgColor(props)};
	border-top-color: ${(props) => spinnerFillColor(props)};
	border-radius: 50%;
	animation: spin 500ms ease-in-out infinite;
	-webkit-animation: spin 500ms ease-in-out infinite;
`;

export const ButtonContainer = styled.div`
	display: ${({fullWidth}) => fullWidth && 'flex'};
	opacity: ${({loading}) => (loading ? '0' : '1')};
	${({center}) => (center ? 'justify-content: center' : 'text-align: center')};
	width: ${({fullWidth}) => fullWidth && '100%'};
`;

ButtonElement.defaultProps = {
	as: 'button'
};
