import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import TextBox from '../text-box';
import {Image, Icon} from '../atoms';
import SelectBox from '../select-box';
import {
	Title,
	Subtext,
	BoxedContainerCard,
	PreviewContainer,
	CheckboxContainer,
	PreviewImageCard,
	PreviewContentFlex
} from './tile.styles';

const userMenuSelectBoxOptions = [
	{id: 'delete', title: 'Delete', icon: 'trash-icon'},
	{id: 'rename', title: 'Rename', icon: 'pencil-icon'}
];

const Tile = ({
	id,
	children,
	title,
	subtext,
	icon,
	imageSrc,
	imageAlt,
	editable,
	active,
	disabled,
	variant,
	onClick,
	onRename,
	onDelete,
	...rest
}) => {
	let currentState = 'default';
	const [isRenaming, setRenameMode] = useState(false);

	if (disabled) {
		currentState = 'disabled';
	} else if (active) {
		currentState = 'active';
	}

	/* eslint-disable consistent-return */
	const handleClick = () => {
		if (disabled) return null;
		if (onClick) onClick(id);
	};

	const onRenameCommit = (newTitle) => {
		setRenameMode(false);
		if (onRename) onRename(id, newTitle);
	};

	const onOptionSelect = (option) => {
		if (option.id === 'rename') {
			setRenameMode(true);
		}
		if (option.id === 'delete') {
			if (onDelete) onDelete(id);
		}
	};

	switch (variant) {
		case 'boxed':
		default:
			return (
				<BoxedContainerCard state={currentState} onClick={handleClick} {...rest}>
					{icon && <Icon icon={icon} mb={3} size="large" />}
					{imageSrc && <Image icon={icon} mb={3} src={imageSrc} width={10} ghostContainer />}
					{title && <Title mb={subtext && 2}>{title}</Title>}
					{subtext && <Subtext>{subtext}</Subtext>}
				</BoxedContainerCard>
			);

		case 'preview':
			return (
				<PreviewContainer {...rest}>
					<PreviewImageCard mb={2} onClick={handleClick} state={currentState}>
						<Image src={imageSrc} alt={imageAlt} ghostContainer />
						{currentState === 'active' && (
							<CheckboxContainer>
								<Icon icon="tick-icon" />
							</CheckboxContainer>
						)}
						{children}
					</PreviewImageCard>

					{isRenaming ? (
						<TextBox value={title} onCommit={onRenameCommit} onBlur={onRenameCommit} highlight focus />
					) : (
						<PreviewContentFlex alignItems="center">
							<Title pr={3} mr="auto" truncate>
								{title}
							</Title>
							{editable && (
								<SelectBox
									width={140}
									options={userMenuSelectBoxOptions}
									trigger={<Button color="ghost" icon="dots-icon" />}
									triggerFocus={false}
									onOptionSelected={onOptionSelect}
									axisYStart="top"
									axisXStart="right"
									axisYDirection="up"
									axisXDirection="left"
									axisYOffset={0}
									axisXOffset={0}
								/>
							)}
						</PreviewContentFlex>
					)}
				</PreviewContainer>
			);
	}
};

export default Tile;

Tile.defaultProps = {};

Tile.propTypes = {
	/**
	 * Component `id`.
	 */
	id: PropTypes.string,

	/**
	 * Extend default component classes with custom class.
	 */
	className: PropTypes.string,

	/**
	 * Active state for the Tile
	 */
	active: PropTypes.bool,

	/**
	 * Title string to display
	 */
	title: PropTypes.string,

	/**
	 * Subtext string to display
	 */
	subtext: PropTypes.string,

	/**
	 * String of icon file name to display (boxed tiles only)
	 */
	icon: PropTypes.string,

	/**
	 * Image for tile (preview tiles only)
	 */
	image: PropTypes.string,

	children: PropTypes.any,

	/**
	 * If title is editable
	 */
	editable: PropTypes.bool,

	/**
	 * Callback for when title is renamed
	 */
	onRename: PropTypes.func,

	/**
	 * Callback for when title is renamed
	 */
	onDelete: PropTypes.func
};
