import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import hasValue from 'ap3-helpers-ui/lib/has-value';
import {
	ButtonElement,
	ButtonIcon,
	ButtonIconRight,
	ButtonText,
	ButtonRipple,
	RippleBg,
	LinkWrapper,
	LinkComponent,
	ButtonContainer,
	Loader
} from './button-styles';

const Button = React.forwardRef(({
	id,
	loading,
	absolute,
	color,
	icon,
	iconRight,
	iconOnlyAt,
	to,
	className,
	fullWidth,
	disabled,
	onClick,
	onKeyPress,
	focus,
	children,
	leftAlignContent,
	rightAlignContent,
	styleAs,
	error,
	style,
	center, 
	underline,
	tabIndex,
	linkTargetBlank,
	...props
}, ref) => {
	const rippleBg = useRef(null);
	const ripple = useRef(null);

	const onButtonClick = (e) => {
		const x = Math.round(e.pageX - rippleBg.current.getBoundingClientRect().left);
		const y = Math.round(e.pageY - rippleBg.current.getBoundingClientRect().top);

		if (!disabled) {
			ripple.current.style.left = `${x}px`;
			ripple.current.style.top = `${y}px`;
		}

		if (onClick && !loading && !disabled) onClick(e, props);
	};

	const onButtononKeyPress = (e) => {
		if (onKeyPress && !loading) onKeyPress(e, props);
	};

	const dynamicAs = to ? 'div' : 'button';

	const buttonContent = () => {
		return (
			<ButtonElement
				ref={ref}
				absolute={absolute}
				color={color}
				icon={icon}
				iconRight={iconRight}
				iconOnlyAt={iconOnlyAt}
				className={!to ? className : null}
				fullWidth={fullWidth}
				onClick={onButtonClick}
				onKeyPress={onButtononKeyPress}
				id={id}
				type="button"
				disabled={disabled || loading}
				focus={focus}
				buttonHasText={hasValue(children)}
				to={to}
				as={dynamicAs}
				leftAlignContent={leftAlignContent}
				rightAlignContent={rightAlignContent}
				styleAs={styleAs}
				error={error}
				style={style}
				tabIndex={tabIndex}
				{...props}
			>
				{!disabled && <RippleBg ref={rippleBg} />}
				<ButtonContainer loading={loading ? 'true' : undefined} fullWidth={fullWidth} center={center}>
					{icon && <ButtonIcon icon={icon} color={color} styleAs={styleAs} size="small" />}
					{children && (
						<ButtonText
							disabled={disabled || loading}
							icon={icon}
							iconRight={iconRight}
							underline={underline}
						>
							{children}
						</ButtonText>
					)}
					{iconRight && (
						<ButtonIconRight fullWidth={fullWidth} icon={iconRight} color={color} size="small" />
					)}
				</ButtonContainer>
				{!disabled && <ButtonRipple buttonHasText={hasValue(children)} color={color} ref={ripple} />}
				{loading && <Loader color={color} />}
			</ButtonElement>
		);
	};

	/**
	 * Generate the appropriate link element.  If external, use <a>, otherwise use <Link> component
	 */
	const renderProperLink = (url) => {
		let anchor;

		if (/(http(s?)):\/\//i.test(url)) {
			anchor = (
				<a
					className={!to ? className : null}
					href={url}
					target={linkTargetBlank ? '_blank' : '_self'}
					rel="noopener noreferrer"
				>
					{buttonContent()}
				</a>
			);
		} else {
			anchor = (
				<LinkComponent
					to={url}
					className={!to ? className : null}
					target={linkTargetBlank ? '_blank' : null}
					// @TODO: We need to work out if this needs to be here or not.
					// It was the case that most of our buttons were having onButtonClick
					// called twice because of this. The onButtonClick above in the button
					// was called and so was this, leading to duplicates. We either need
					// an onLinkClick, remove this entirely, or if both do need to be called
					// we need to find a way not to call the same method twice if the button
					// doesn't want it.
					// onClick={onButtonClick}
					disabled={disabled || loading}
				>
					{buttonContent()}
				</LinkComponent>
			);
		}

		// Need to wrap the rendered <a> to pass props to, otherwise it'll attempt to put the prop as an HTML attribute
		return (
			<LinkWrapper className={className} leftAlignContent={leftAlignContent}>
				{anchor}
			</LinkWrapper>
		);
	};
	return to ? renderProperLink(to) : buttonContent();
});

Button.propTypes = {
	/**
	 * Id for <Button />
	 */
	id: PropTypes.string,

	/**
	 * CSS className for <Button />
	 */
	className: PropTypes.string,

	/**
	 * Renders <Button /> with provided color theme.
	 */
	color: PropTypes.oneOf([
		'primary',
		'secondary',
		'destructive',
		'ghost',
		// This color is used to emulate form elements
		// e.g. The select box uses a button, and we want that button to have the same color as the textbox
		'form',
		// TODO: this is temporary, until we update the `secondary` color
		'circle'
	]),

	/**
	 * Renders <Button /> with an active theme.
	 */
	active: PropTypes.bool,

	/**
	 * Render <Button /> with focus state
	 */
	focus: PropTypes.bool,

	/**
	 * Renders <Button /> at full width of container
	 */
	fullWidth: PropTypes.bool,

	/**
	 * Using one of the available icon names this will add an icon to the left of the button text
	 */
	icon: PropTypes.string,

	/**
	 * Using one of the available icon names this will add an icon to the right of the button text
	 */
	iconRight: PropTypes.string,

	/**
	 * Component children
	 */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

	/**
	 * Action to perform when clicked
	 */
	onClick: PropTypes.func,

	/**
	 * Action to perform onKeyPress
	 */
	onKeyPress: PropTypes.func,

	/**
	 * URL to where the button will redirect to if set
	 */
	to: PropTypes.string,

	/**
	 * Flag to move the button to the left to keep it in alignment with content
	 * Note: This is mainly for the ghost button to keep the content aligned due to the design of the ghost button
	 */
	leftAlignContent: PropTypes.bool,

	/**
	 * Flag to set the button to position: absolute; otherwise it will be position: relative
	 */
	absolute: PropTypes.bool,

	/**
	 * <Button /> disabled
	 */
	disabled: PropTypes.bool,

	/**
	 * Loading spinner state for button
	 */
	loading: PropTypes.bool,

	/**
	 * Style the button to behave like a different element. I.E. button or input
	 */
	styleAs: PropTypes.oneOf(['button', 'input']),

	/**
	 * Flag to show error state of component
	 */
	error: PropTypes.bool,

	/**
	 * Button inline styles
	 */
	style: PropTypes.object,

	/**
	 * Open link in new tab/window
	 */
	linkTargetBlank: PropTypes.bool,

	/**
	 * HTML attribute "tabindex" for the button
	 */
	tabIndex: PropTypes.string,

	/**
	 * Underlines the text in the button
	 */
	underline: PropTypes.bool
};

Button.defaultProps = {
	color: 'primary',
	active: false,
	focus: false,
	loading: false,
	icon: null,
	leftAlignContent: false,
	iconRight: null,
	onClick: null,
	styleAs: 'button',
	linkTargetBlank: false,
	underline: false
};

Button.displayName = 'Button';

export default Button;
