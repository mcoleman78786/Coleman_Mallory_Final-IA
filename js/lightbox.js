
const 	projectBox 	= document.querySelectorAll('.eventHold'),
		img = document.querySelector('.lightimage'),
		lightbox = document.querySelector('.lightboxImages'),
		closelightBlock = document.querySelector('.closeLightBlock');

projectBox.forEach(box => {
	box.addEventListener("click", function(e) {

		let i = this.className.split(" ")[0],
		newImage = this.className.split(" ")[1];

		img.src = `images/${newImage}.jpg`;

		lightbox.classList.add('show-lightboxImage');
	});

});


	function hideLightbox() {

		lightbox.classList.remove('show-lightboxImage');

	}

closelightBlock.addEventListener('click', hideLightbox);