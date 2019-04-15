
const 	projectBox 	= document.querySelectorAll('.eventhold'),
		img = document.querySelector('.lightvideo'),
		lightbox = document.querySelector('.Lightbox'),
		closelightBlock = document.querySelector('.closeLightBlock');

projectBox.forEach(box => {
	box.addEventListener("click", function(e) {

		let i = this.className.split(" ")[0],
		newVideo = this.className.split(" ")[1];

		video.src = `video/${newVideo}.jpg`;

		lightbox.classList.add('show-lightBoxVideo');
	});

});


	function hideLightbox() {

		lightbox.classList.remove('show-lightBoxVideo');

	}

closelightBlock.addEventListener('click', hideLightbox);