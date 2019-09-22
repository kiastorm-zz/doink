const rems = [
	0, // 0
	'.4rem', // 1
	'.8rem', // 2
	'1.2rem', // 3
	'1.6rem', // 4
	'2.0rem', // 5
	'2.4rem', // 6
	'2.8rem', // 7
	'3.2rem', // 8
	'3.6rem', // 9
	'4.0rem', // 10
	'4.4rem', // 11
	'4.8rem', // 12
	'5.2rem', // 13
	'5.6rem', // 14
	'6.0rem', // 15
	'6.4rem', // 16
	'6.8rem', // 17
	'7.2rem', // 18
	'7.6rem', // 19
	'8.0rem' // 20
];

const breakpoints = ['600px', '900px', '1200px', '1800px'];

const mediaQueries = {
	p: `@media screen and (min-width: ${breakpoints[0]})`,
	tp: `@media screen and (min-width: ${breakpoints[1]})`,
	tl: `@media screen and (min-width: ${breakpoints[2]})`
};

const theme = {
	"colors": {
		"text": "#fff",
		"background": "#060606",
		"primary": "#3cf",
		"secondary": "#e0f",
		"muted": "#191919",
		"highlight": "#29112c",
		"gray": "#999",
		"purple": "#c0f"
	  },
	space: rems,
	sizes: rems,
	borders: {
		1: '0.1rem',
		2: '0.2rem',
		3: '0.3rem',
		4: '0.4rem',
		5: '0.5rem'
	},
	fontSizes: {
		0: 0,
		1: '4rem',
		2: '3.2rem',
		3: '2.4rem',
		4: '1.8rem',
		5: '2.4rem',
		6: '2.1rem',
		7: '1.4rem',
		8: '1.3rem',
		9: '1.2rem'
	},
	fonts: {
		heading: "'Aileron'",
		body: "'Source Sans Pro', sans-serif",
	},
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700
	},
	lineHeights: {
		0: 0,
		1: '4rem',
		2: '3.2rem',
		3: '2.8rem',
		4: '2rem',
		5: '2.8rem',
		6: '2.4rem',
		7: '2.0rem',
		8: '1.6rem'
	},
	borderWidths: [0, '.1rem', '.2rem'],
	breakpoints,
	mediaQueries,
	radii: [0, '.1rem', '.2rem', '.3rem', '.4rem'],
	shadows: {
		default: '0 0 0.8rem 0.2rem rgba(26, 34, 37, 0.07)',
		focused: '0 0 0.8rem 0.2rem rgba(26, 34, 37, 0.2)'
	},
	zIndices: {
		0: 0,
		z1: 1,
		z2: 2,
		z3: 3
	},
	variants: {
		code: {
			display: 'block',
			bg: 'lightWashout',
			p: 5,
			fontFamily: 'monaco,Consolas,Lucida Console,monospace',
			fontSize: 7,
			lineHeight: 6,
			borderRadius: '.4rem',
			width: '100%'
		}
	},
	text: {
		body: {
			color: 'text',
			fontFamily: 'body',
			fontSize: 7,
			lineHeight: 7
		},
		h1: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: [2, 1],
			lineHeight: [2, 1],
			fontWeight: 'bold'
		},
		h2: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: 2,
			lineHeight: 2,
			fontWeight: 'normal'
		},
		h3: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: 3,
			lineHeight: 3,
			fontWeight: 'normal'
		},
		h4: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: 4,
			lineHeight: 4,
			fontWeight: 'normal'
		},
		large: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: [6, 3],
			lineHeight: [6, 3],
			fontWeight: 'regular'
		},
		medium: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: 6,
			lineHeight: 6,
			fontWeight: 'normal'
		},
		micro: {
			color: 'text',
			fontFamily: 'heading',
			fontSize: 8,
			lineHeight: 8,
			textTransform: 'uppercase'
		},
		label: {
			color: 'text',
			display: 'inline-flex',
			px: 2,
			pt: '.4rem',
			pb: '0',
			borderRadius: 100,
			color: 'lightTarmac',
			fontFamily: 'heading',
			fontSize: 8,
			lineHeight: 8,
			textTransform: 'uppercase'
		},
		helper: {
			color: 'storm',
			fontWeight: 400,
			fontFamily: 'body',
			fontSize: 7,
			lineHeight: 7
		},
		error: {
			color: 'red',
			fontFamily: 'body',
			fontSize: 7,
			lineHeight: 7
		},
		legal: {
			color: 'storm',
			fontFamily: 'body',
			fontSize: 9,
			lineHeight: 8
		},
		bodyunderlined: {
			color: 'lightTarmac',
			fontFamily: 'body',
			lineHeight: 7,
			textDecoration: 'underline'
		},
		bodyhighlight: {
			color: 'tarmac',
			fontFamily: 'body',
			fontWeight: '700',
			fontSize: 7,
			lineHeight: 7
		},
		bodyhighlightinverted: {
			color: 'whiteWashout',
			fontFamily: 'body',
			fontWeight: '700',
			fontSize: 7,
			lineHeight: 7
		}
	}
};

theme.breakpoints.p = theme.breakpoints[0];
theme.breakpoints.tp = theme.breakpoints[1];
theme.breakpoints.tl = theme.breakpoints[2];
theme.breakpoints.lg = theme.breakpoints[3];

export default theme;
