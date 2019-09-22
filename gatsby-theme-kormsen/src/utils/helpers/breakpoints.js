const breakpoints = () => {
	// const windowWidth = getWindow().innerWidth;
	const mobile = window.matchMedia('(max-width: 600px)').matches;
	const tabletportrait = window.matchMedia('(max-width: 900px)').matches;
	const tabletlandscape = window.matchMedia('(max-width: 1200px)').matches;
	const desktop = window.matchMedia('(max-width: 1800px)').matches;

	let breakpoint = 'desktop';

    if (desktop) {
		breakpoint = 'desktop';
    }
    
    if (tabletlandscape) {
		breakpoint = 'tablet-landscape';
    }

    if (tabletportrait) {
		breakpoint = 'tablet-portrait';
    }

	if (mobile) {
		breakpoint = 'mobile';
    } 
    
	return breakpoint;
};

export default breakpoints;