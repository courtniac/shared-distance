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
	scrollOverflow: false,
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
	responsiveWidth: 0,
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
	afterLoad: function(origin, destination, direction){
		var loadedSection = this;

		if (origin.anchor == 'home'){
			let greenBlobAnimation = anime({
				targets: '#landing__green-white-blob',
				delay: 500,
				translateX: [-500, 0],
				opacity: ['0%', '100%'],
				duration: 1000,
				easing: 'linear',
				direction: 'normal',
				autoplay: true
			  }); 

			let pinkBlobAnimation = anime({
				targets: '#landing__pink-white-blob',
				translateX: [500, 0],
				delay: 500,
				opacity: ['0%', '100%'],
				duration: 1000,
				easing: 'linear',
				direction: 'normal',
				autoplay: true
			  });  
		}

		// if ((origin == 1 || origin == 3) && destination == 2){
		// 	let iconsAnimation = anime({
		// 		targets: '#icons',
		// 		translateX: [500, 0],
		// 		opacity: ['0%', '100%'],
		// 		duration: 1000,
		// 		easing: 'linear',
		// 		direction: 'normal',
		// 		autoplay: true
		// 	  });  
		// }

		// if (origin.anchor == 'stories'){
		// 	console.log("Stories ended loading");
		// }
	},
	afterRender: function () {},
	afterResize: function (width, height) {},
	afterReBuild: function () {},
	afterResponsive: function (isResponsive) {},
	afterSlideLoad: function( section, origin, destination, direction){},
	onSlideLeave: function (section, origin, destination, direction) {}
});

function myFunction(x) {
	if (x.matches) { // If media query matches
		new InstagramFeed({
			'username': 'shareddistance',
			'container': document.getElementById("instagram-feed"),
			'display_profile': false,
			'display_biography': false,
			'display_gallery': true,
			'callback': null,
			'styling': true,
			'items': 9,
			'items_per_row': 3,
			'margin': 0.5
		});
	} else {
		new InstagramFeed({
			'username': 'shareddistance',
			'container': document.getElementById("instagram-feed"),
			'display_profile': false,
			'display_biography': false,
			'display_gallery': true,
			'callback': null,
			'styling': true,
			'items': 8,
			'items_per_row': 4,
			'margin': 0.5
		});
	}
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
