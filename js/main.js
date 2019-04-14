(function(){
	"use strict";
	
	console.log("fired!!!");


	const sigils	= document.querySelectorAll('.sigilContainer'),
	lightbox 		= document.querySelector('.lightbox'),
	video 			= document.querySelector('video'),
	closeButton		= document.querySelector('.lightbox-close'),

	function playVideo(){
		lightbox.classList.add('lightbox-on');
		video.load();
		video.play();
	}

	video.src = `video/traa_video${targetVidoe}..mov`; 

	setTimeout(playVideo, 1000);

	function closeLightbox() {
		lightbox.classList.remove('lightbox-on');
		video.currentTime = 0;
		video.pause();
}



	var button = document.querySelector("#button");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function closeMenu() {

		if (window.matchMedia("(min-width: 1024px)").matches && burgerCon.classList.contains('slideToggle') ) {
		console.log("media query fired");
		burgerCon.classList.remove('slideToggle');
		button.classList.remove('expanded');
		}

	}

	button.addEventListener("click", hamburgerMenu, false);

	window.addEventListener("resize", closeMenu);

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox));
	video.addEventListener('ended', closeLightbox);
	closeButton.addEventListener('click', closeLightbox);

		
})();