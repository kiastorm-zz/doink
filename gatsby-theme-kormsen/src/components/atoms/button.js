import React from 'react'
import {Button as ButtonRebass} from 'rebass';
import { Link } from "gatsby"

const Button = React.forwardRef(({ variant = "primary", to, children, newTab, ...props }, ref) => {
	const isExternal = /^(f|ht)tps?:\/\//i.test([to]);
	let elementType = 'button';

	if (to) {
		if (isExternal) {
			elementType = 'a';
		} else {
			elementType = Link;
		}
	}

  return (
    <ButtonRebass
		as={elementType}
		href={isExternal ? to : null}
		to={!isExternal ? to : null}
		target={newTab || isExternal ? '_blank' : null}
		rel="noopener noreferrer"
		ref={ref}
     	sx={{
			appearance: "none",
			display: "inline-block",
			textAlign: "center",
			lineHeight: "inherit",
			textDecoration: "none",
			fontSize: "inherit",
			fontWeight: "bold",
			m: 0,
			px: 3,
			py: 2,
			border: 0,
			borderRadius: 4,
			transition: "all 0.3s ease 0s",
			variant: `variants.buttons.${variant}`,
			"::after": {
			content: '"\\00A0 \\2192"',
			},
			":hover": {
			opacity: "0.8",
			},
		}}
    >
      {children}
    </ButtonRebass>
  )
});

export default Button;