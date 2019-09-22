import React from 'react';
import PropTypes from 'prop-types';
import {ImageContainer, GhostImageContainer, GhostImageDiv, ImageTag} from './image-styles';

const Image = ({id, className, src, style, alt, intrinsic, fullWidth, ghostContainer, ...rest}) => {
	// This is still experimental, hopefully we can automagically get the right offset based on dimensions
	// TODO: need to add border if there is one to the size.  Need to rethink if border should live on <Image> or wrapper
	const paddingOffset = intrinsic ? (intrinsic.height / intrinsic.width) * 100 : null;

	return (
		<ImageContainer id={id} className={className} {...rest}>
			{/* This is to prevent the image container from "popping" in after the image loads. */}
			<GhostImageContainer>
				<GhostImageDiv paddingOffset={paddingOffset} />
			</GhostImageContainer>
			<ImageTag style={style} src={src} alt={alt} fullWidth={fullWidth} ghostContainer={ghostContainer} />
		</ImageContainer>
	);
};

Image.propTypes = {
	/**
	 * Component `id`.
	 */
	id: PropTypes.string,

	/**
	 * Extend default component classes with custom class.
	 */
	className: PropTypes.string,

	/**
	 *
	 */
	intrinsic: PropTypes.shape(),

	/**
	 * Inline style to be added to image
	 */
	style: PropTypes.object,

	/**
	 * If image is set to be 100% of container
	 */
	fullWidth: PropTypes.bool,

	/**
	 * If image is to be rendered with a ghostcontainer
	 */
	ghostContainer: PropTypes.bool
};

Image.displayName = 'Image';

Image.defaultProps = {
	fullWidth: false,
	ghostContainer: false
};

export default Image;
