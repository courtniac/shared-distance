var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'B0E530F8-0B8A4153-91BE1E37-7F6A6A9C',
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors: ['home', 'about', 'stories'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['Home', 'About', 'Stories'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: true,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	scrollOverflow: true,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor: ['#263850', '#263850', '#263850', '#263850'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 576,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {
		type: 'reveal',
		percentage: 62,
		property: 'translate'
	},
	cards: false,
	cardsOptions: {
		perspective: 100,
		fadeContent: true,
		fadeBackground: true
	},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function (origin, destination, direction) {},
	afterLoad: function (origin, destination, direction) {},
	afterRender: function () {},
	afterResize: function (width, height) {},
	afterReBuild: function () {},
	afterResponsive: function (isResponsive) {},
	afterSlideLoad: function (section, origin, destination, direction) {},
	onSlideLeave: function (section, origin, destination, direction) {}
});