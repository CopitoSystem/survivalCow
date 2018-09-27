;(function() {

	(function loop() {
		var timer = Math.round(Math.random() * (3000 - 500)) + 8000;
		window.setTimeout(function() {
			loop();
		}, timer);
	})();

	// init magnific gallery
	$('.gallery').magnificPopup({
		delegate: 'a',
		type: 'inline',
		tLoading: 'loading',
		mainClass: 'mfp-img',
		showCloseBtn: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: 'Oops, <a href="%url%">image %curr%</a> isn\'t loading...',
			titleSrc: 'title',
		},
		callbacks: {
			change: function() {
				var parent = this.currItem.inlineElement[0];
				var video = parent.getElementsByTagName('video');
				video[0].play();
			},
		}
	});

	$('a[href="#linux"]').magnificPopup({
		type: 'inline',
		preloader: false,
		closeBtnInside: false,
	});

})();